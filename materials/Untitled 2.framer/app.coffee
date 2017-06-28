
Button.onClick (event, layer) ->

	drno.animate
		scale: 1.1
		y: -15
		options:
			time: 0.20
			curve: Bezier.ease
			
			
	drno.onAnimationEnd ->
		
		drno.animate
			y: 85
			scale: 1
			x: -15
			options:
				time: 0.20
				curve: Bezier.ease
		
# 		circle.animate
# 			#backgroundColor: "rgba(49,46,45,1)"
# 			options:
# 				time: 0.20
# 				curve: Bezier.ease
		
	
	
