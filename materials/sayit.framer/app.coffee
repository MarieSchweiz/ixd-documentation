# Modules I need (drop modules in your framer prototype folder)

Android = require 'androidRipple'

# Create a flow

flow = new FlowComponent
flow.showNext(Intro)
flow.scroll.content.draggable.overdrag = false

# Different states for the prototypes interaction

circle.states.add
	default: 
		backgroundColor: "#fff"
	listening:
		backgroundColor: "#fff"

isarvalley.opacity = 0
isarvalley.states.add
	default:
		opacity: 0
	Schedule:
		opacity: 1

circlepulse.states.add
	default:
		opacity: 1
		scale: 1
	scaleIt:
		scale: 2
		opacity: 0
		animationOptions:
			time: 2
			curve: "easeOut"
	listening:
		backgroundColor: "#fff"
		
# Initial Animation, open prototype

circlepulse.animate "scaleIt"

circle.opacity = 0
circle.animate
	scale: 1
	opacity: 1
	animationOptions:
		time: 0.2

mic.opacity = 
mic.scale = 0.9
mic.y = mic.y - 10
mic.animate
	y: mic.y + 10
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.2
		curve: Bezier.easeIn

# Event listener when which state should trigger

circlepulse.onStateSwitchEnd (event, state) ->
	if state is "scaleIt"
		circlepulse.stateSwitch "default"
		circlepulse.animate "scaleIt"
		
	if state is "default"
		circlepulse.animate "scaleIt"

# Register an android ripple for the circle button

circle.on(Events.Click, Android.Ripple)

circle.onTap (event, state) ->
	circle.stateSwitch "listening"
	circlepulse.destroy()#
	isarvalley.stateSwitch "Schedule"
	
	