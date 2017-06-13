

scroll = new ScrollComponent
	height: 730
	width: 411


scroll.scrollHorizontal = false
scroll.contentInset =
	top: 0
	bottom: 30

schedule.parent = scroll.content
scroll.content.draggable.overdrag = false

headtest = new Layer
	width: 411
	height: 178
	opacity: 1.00
	backgroundColor: "rgba(123,123,123,0)"
	
headering.parent = headtest

headering.states =
	animationOptions:
		time: 0.4
	scrolled:
		height: 123
		animationOptions:
			time: 0.4

title.states =
	default:
		scale:0.7
		animationOptions:
			time: 0.4
	scrolled:
		scale:1
	
isarvalley.states =
	animationOptions:
		time: 0.4
	fabbish:
		x: 301
		y: 83
		width: 88
		height: 88
		animationOptions:
			time: 0.4


scroll.on Events.Scroll,(event, layer) ->
	
	if scroll.direction is "down"
		isarvalley.animate ("fabbish")
		headering.animate ("scrolled")
		
	if scroll.direction is "up"
		isarvalley.animate ("default")
		headering.animate ("default")