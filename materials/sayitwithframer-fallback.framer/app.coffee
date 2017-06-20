# Variable used to determin is the prototype listening or not.

prototislistening = false
result = false

#

scroll = new ScrollComponent
	height: Screen.height
	width: Screen.width
	y: 731
	backgroundColor: "#fff"
	

scroll.scrollHorizontal = false
scroll.content.draggable.overdrag = false
scroll.contentInset =
	top: 170
	bottom: 20
	
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
textfield.parent = Headingparent
circlepulse.parent = Headingparent



# Different states for the prototypes interaction


Heading.states =
	default:
		height: 123
		backgroundColor:"#000"
	listening:
		backgroundColor:"#4386FA"
	shrink:
		x: 0
		y: 0
		height: 190
		backgroundColor:"#4386FA"
		animationOptions:
			time: 0.2
			curve: "ease"
	scrolled:
		x: 0
		y: 0
		height: 123
		backgroundColor:"#4386FA"
		animationOptions:
			time: 0.2
			curve: "ease"

# circle button basic
circle.states =
	default: 
		backgroundColor: "#4386FA"
	listening:
		backgroundColor: "#fff"
		animationOptions:
			time: 0.2
			curve: "ease"
	centerlist:
		opacity: 1
		y: 112
		x: 143
		width: 130
		height: 130
		animationOptions:
			time: 0.2
	fabbish:
		opacity: 1
		x: 301
		y: 83
		width: 90
		height: 90
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
		width: 130
		height: 130
		opacity: 1
		scale: 1
	scaleIt:
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
			
		

# Iconography for the circle button

mic.states =
	default:
		opacity: 1
	listening:
		opacity: 0
	valley:
		opacity: 0


Intro.states =
	listening:
		backgroundColor:"#4386FA"

textfield.states =
	default:
		opacity: 1
	listening:
		opacity: 0
	shrink:
		opacity: 1
		scale: 0.8
		
		
		
# Initial Animation, open prototype

circle.onClick (event,state) ->
	
	# if the prototype isn't listening
	
	
	if prototislistening is false and result is false
		
		# Set the variable to true
		prototislistening = true
		# Set states to listening
		
		circlepulse.animate "scaleIt"
		Intro.animate "listening"
		circle.animate "listening"
		Heading.animate "listening"
		#textfield.animate "listening"
		
		# eqip a textbox for speech input
		textfield.html = "Speak now"
		textfield.style.fontFamily = "Roboto, sans-serif"
		textfield.style.lineHeight = 1.2
		
		
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
			if result.isFinal
			
				textfield.html = result[0].transcript
				
				scroll.animate "slidein"
				Heading.animate "shrink"
				mic.animate "valley"
				circle.animate "centerlist"
				isarvalley.animate "visible"
				prototislistening = false
				textfield.html = "Framer Meetup Munich June 26th @Google"
				
				circlepulse.destroy()
				circlepulse.destroy()

			else
				textfield.html = result[0].transcript
		
		# Start it
		recognizer.start()
		
		# Event listener when which state should trigger

		circlepulse.onStateSwitchEnd (event, state) ->
			if prototislistening is true
				if state is "scaleIt"
					circlepulse.stateSwitch "default"
					circlepulse.animate "scaleIt"
			
	
	# if the prototype is currently listening we can deactivate it.
	
	else if result is false
		
		# Set the variable to true
		prototislistening = false
		
		# Set states back to default
		Heading.animate "default"
		circle.animate "default"
		#textfield.animate "default"
		
		# eqip the header with its original text
		textfield.html = "Framer Meetup Munich June 26th @Google"
		
		
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