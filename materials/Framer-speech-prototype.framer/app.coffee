Roboto = Utils.loadWebFont("Roboto", 300)

# Variable used to determin is the prototype listening or not.

prototislistening = false
result = false

# create a scroll view

scroll = new ScrollComponent
	height: Screen.height
	width: Screen.width
	y: 731
	backgroundColor: "#fff"

# configure the scroll view

scroll.scrollHorizontal = false
scroll.content.draggable.overdrag = false
scroll.contentInset =
	top: 170
	bottom: 20

# Set states for the scrollview
# default: its hidden and moved out of sight

scroll.states =
	default:
		y: 731
	slidein:
		height: 730
		width: Screen.width
		y: 0
		backgroundColor: "none"
		animationOptions:
			time: 0.2
			curve: "ease"

List.parent = scroll.content

List.y = 0
List.x = 0


#  positioning a header for shrinking

Headingparent = new Layer
	width: 411
	backgroundColor:"none"
	height: 730

# define its children

Heading.parent = Headingparent
circle.parent = Headingparent
circlepulse.parent = Headingparent
circlepulse.placeBehind(circle)

# Different states for the prototypes interaction

Heading.states =
	default:
		y: 0
		x: 0
		height: 125
		backgroundColor:"#000"
	listening:
		backgroundColor:"#4386FA"
		
	shrink:
		y: 0
		x: 0
		height: 170
		backgroundColor:"#4386FA"
		animationOptions:
			time: 0.2
			curve: "ease"
	scrolled:
		x: 0
		y: 0
		height: 125
		backgroundColor:"#4386FA"
		animationOptions:
			time: 0.2
			curve: "ease"

# circle button basic

circle.states =
	default: 
		x: Align.center
		y: 450
		width: 130
		height: 130
		backgroundColor: "#4386FA"
	listening:
		x: Align.center
		backgroundColor: "#fff"
		animationOptions:
			time: 0.2
			curve: "ease"
	centerlist:
		opacity: 1
		y: 112
		x: Align.center
		width: 130
		height: 130
		animationOptions:
			time: 0.2
		shadowBlur: 14
		shadowSpread: 3
		backgroundColor: "#4386FA"
		shadowColor: "rgba(104,104,104,0.28)"
		shadowY: 5
	fabbish:
		opacity: 1
		x: 301
		y: 83
		width: 90
		height: 90
		shadowBlur: 5
		shadowSpread: 3
		shadowColor: "rgba(104,104,104,0.18)"
		shadowY: 2
		animationOptions:
			time: 0.2


# Illustration im valley button

isarvalley.states =
	default:
		opacity: 0
		animationOptions:
			time: 0.2
	visible:
		opacity: 1
		width: 130
		height: 130
		animationOptions:
			time: 0.2
		
	scrolled:
		width: 90
		height: 90
		animationOptions:
			time: 0.2
		
	

# Pulsing circle button

circlepulse.states =
	default:
		x: Align.center
		y: 450
		width: 130
		height: 130
		opacity: 1
		backgroundColor: "#4386FA"
		animationOptions:
			time: 0.20
			curve: "spring"
		scale: 1
	scaleIt:
		x: Align.center
		scale: 2
		opacity: 0
		backgroundColor:"#fff"
		animationOptions:
			time: 2
			curve: "easeOut"
	listening:
		scale: 2
		opacity: 0
		backgroundColor:"#fff"
		animationOptions:
			time: 2
			curve: "easeOut"
			
circlepulse.stateSwitch("default")
circle.stateSwitch("default")		

# Iconography for the circle button

mic.states =
	default:
		opacity: 1
		animationOptions:
			time: 0.20
			curve: "spring"
	listening:
		opacity: 0
		animationOptions:
			time: 0.20
			curve: "spring"
	valley:
		opacity: 0
		animationOptions:
			time: 0.20
			curve: "spring"

close_1.states =
	default: 
		opacity: 0
		animationOptions:
			time: 0.20
			curve: "spring"	
	listening:
		opacity: 1
		animationOptions:
			time: 0.20
			curve: "spring"

check.states = 
	default: 
		opacity: 0
		scale: 1
		animationOptions:
			time: 0.20
			curve: "spring"	
	visible:
		opacity: 1
		scale: 1.2
		animationOptions:
			time: 0.20
			curve: "spring"

Intro.states =
	listening:
		backgroundColor:"#4386FA"

	
title = new TextLayer
	font: Roboto
	text: "{text}"
	fontWeight: "400"
	width: 359
	height: 95
	fontSize: 26
	color: "#fff"	
	x: 22
	y: 26
 
title.parent = Headingparent

title.template =
	text: "Framer Meetup Munich June 26th @Google"

title.states =
	default:
		opacity: 1
	listening:
		opacity: 0
	shrink:
		opacity: 1
		scale: 0.8
  

# Initial Animation, open prototype

circle.onClick (event,state) ->
	
	circlepulse.animate "default"
	# if the prototype isn't listening
	
	
	if prototislistening is false and result is false
		
		# Set the variable to true
		prototislistening = true
		
		sound = new Audio("sounds/Complete3.m4a")
		sound.play()
		
		# Set states to listening
		
		circlepulse.animate "scaleIt"
		
		circlepulse.onStateSwitchEnd (event, state) ->
			if prototislistening is true
				if state is "scaleIt"
					circlepulse.stateSwitch "default"
					circlepulse.animate "scaleIt"
					
		Intro.animate "listening"
		circle.animate "listening"
		Heading.animate "listening"
		close_1.animate "listening"
		
		# eqip a textbox for speech input
		title.template =
			text: "Speak now"
	
		title.style.fontFamily = "Roboto, sans-serif"
		title.style.lineHeight = 1.2
		
		
		## Get the recognizer working thx Silvia for the Help <3
		
		# speech part
		SpeechRecognition = window.SpeechRecognition or window.webkitSpeechRecognition
		
		#create a new recognizer
		recognizer = new SpeechRecognition
		
		#start producing results before the person has finished speaking
		recognizer.interimResults = true
		recognizer.lang = 'en-US'
		
		recognizer.onresult = (event) ->
			
			result = event.results[event.resultIndex]
			
			# A result is final
			
			if result.isFinal
			
				#destroy pulse animation	
				circlepulse.destroy()
				sound.play()
				
				#Animate close Button
				close_1.animate "default"
				check.animate "visible"
				# if result[0].transcript == "hello"
				# can be used to select specific words

				# What happens when a speech result arrived
				Utils.delay 1, ->
					
					check.animate "default"
					
					scroll.animate "slidein"
						
					Heading.animate "shrink"
					
					mic.animate "valley"
					
					circle.animate "centerlist"
					
					isarvalley.animate "visible"
					
					title.template =
						text: "Framer Meetup Munich June 26th @Google"
					
				prototislistening = false

				
				


			else
				
				#print result[0].transcript
			
				title.template =
					text: result[0].transcript
		
		# Start it
		recognizer.start()
		
		# Event listener when which state should trigger
			
	
	# if the prototype is currently listening we can deactivate it.
	
	else if prototislistening is true
		
		#print "i'm death"
		#SpeechRecognition.stop()
		#I'm still looking for a way to stop it
		
		# Set the variable to true
		prototislistening = false
		
		#SpeechRecognition.destroy()
		
		sound = new Audio("sounds/Cancel1.m4a")
		sound.play()
		
		
		# Set states back to default
		circlepulse.animate "default"
		Intro.animate "default"
		circle.animate "default"
		Heading.animate "default"
		close_1.animate "default"
		
		# eqip the header with its original text
		title.template =
			text: "Framer Meetup Munich June 26th @Google"
		
		
scroll.on Events.Scroll,(event, layer) ->
	
	if scroll.direction is "down"
		circle.animate ("fabbish")
		Heading.animate ("scrolled")
		isarvalley.animate ("scrolled")
		
	if scroll.direction is "up"
		circle.animate ("centerlist")
		Heading.animate ("shrink")
		isarvalley.animate ("visible")

Button.onClick (event) ->
	window.open('https://www.meetup.com/de-DE/meetup-group-framerjs-munich/events/240183588/', '_new')
	Button.backgroundColor = "#058ACC"
	
isarvalley.onTouchEnd (event) ->
	if isarvalley.opacity is 1
		window.open('https://sites.google.com/view/isarvalley/startseite', '_new')
	
listitemprojectdoc.onTap (event, layer) ->
	window.open('https://marieschweiz.github.io/ixd-documentation/', '_new')