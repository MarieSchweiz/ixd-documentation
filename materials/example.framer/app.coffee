icon.onClick (event, layer) ->

	icon.animate
		rotation: -255
	
		options:
			time: 1
			curve: Bezier.ease

	icon.onAnimationEnd ->
		icon.rotation = 0
	