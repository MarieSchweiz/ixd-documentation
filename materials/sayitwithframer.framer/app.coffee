flow = new FlowComponent
flow.showNext(Intro)


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
		scale: 2
		opacity: 0
		backgroundColor:"#fff"
		animationOptions:
			time: 2
			curve: "easeOut"
			
		
mic.animate
	y: mic.y
	opacity: 1
	scale: 1
	animationOptions:
		time: 0.2
		curve: Bezier.easeIn

# Iconography for the circle button

mic.states =
	default:
		opacity: 1
	listening:
		opacity: 0
	valley:
		opacity: 0

isarvalley.states =
	centerlist:
		opacity: 1
		animationOptions:
			time: 0.4
	fabbish:
		opacity: 1
		x: 301
		y: 83
		width: 88
		height: 88
		animationOptions:
			time: 0.4


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
		x: 0
		y: 0
		height: 123
		backgroundColor:"#4386FA"




# Initial Animation, open prototype

circlebutton.onClick (event,state) ->		
	flow.showOverlayCenter(Speechinstruction)
	
circle.onClick (event,state) ->
	flow.showOverlayCenter(Intro)
	