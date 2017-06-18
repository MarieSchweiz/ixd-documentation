# Variable used to determin is the prototype listening or not.

prototislistening = false

# Different states for the prototypes interaction

# circle button basic
circle.states =
	default: 
		backgroundColor: "#4386FA"
	listening:
		backgroundColor: "#fff"
		animationOptions:
			time: 0.2
			curve: "ease"

# Pulsing circle button

circlepulse.states =
	default:
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
		backgroundColor: "#fff"
		animationOptions:
			time: 0
			
		
mic.animate
	y: mic.y
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.2
		curve: Bezier.easeIn

# Iconography for the circle button

mic.states =
	listening:
		opacity: 0

Intro.states =
	listening:
		backgroundColor:"#4386FA"

# Background box, Black in the beginning - will turn blue
Heading.states =
	default:
		backgroundColor:"#000"
	listening:
		backgroundColor:"#4386FA"
	shrink:
		height: 177
		backgroundColor:"#4386FA"



# Initial Animation, open prototype

circle.onTap (event,state) ->
	
	# if the prototype isn't listening
	
	
	if prototislistening is false
		
		# Set the variable to true
		prototislistening = true
		
		
		# Set states
		circlepulse.animate "scaleIt"
		Intro.animate "listening"
		circle.animate "listening"
		
		circle.animate
			scale: 1
			opacity: 1
			animationOptions:
				time: 0.2
				
		Heading.animate "listening"
		
		# Event listener when which state should trigger
		
		circlepulse.onStateSwitchEnd (event, state) ->
			if prototislistening is true
				if state is "scaleIt"
					circlepulse.stateSwitch "default"
					circlepulse.animate "scaleIt"
			
	
	# if the prototype is currently listening
	
	else
		
		# Set the variable to true
		prototislistening = false
		
		Heading.animate "default"
		circle.animate "default"
		
		

# Register an android ripple for the circle button

