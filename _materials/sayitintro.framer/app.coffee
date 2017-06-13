# Different states for the prototypes interaction

circle.states =
	default: 
		backgroundColor: "#fff"
	listening:
		backgroundColor: "#fff"


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

Intro.states =
	listening:
		backgroundColor:"#4386FA"
		

mic.opacity = 1
mic.scale = 0.9
mic.y = mic.y - 10
mic.animate
	y: mic.y + 10
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.2
		curve: Bezier.easeIn

mic.states =
	listening:
		fill:"#4386FA"

# Initial Animation, open prototype

circle.onTap (event,state) ->
	
	Intro.animate "listening"
	circle.animate "listening"
	mic.animate "listening"
	circlepulse.animate "scaleIt"
	circle.opacity = 0
	circle.animate
		scale: 1
		opacity: 1
		animationOptions:
			time: 0.2
	
	# Event listener when which state should trigger

	circlepulse.onStateSwitchEnd (event, state) ->
		if state is "scaleIt"
			circlepulse.stateSwitch "default"
			circlepulse.animate "scaleIt"
		
		if state is "default"
			circlepulse.animate "scaleIt"

# Register an android ripple for the circle button

