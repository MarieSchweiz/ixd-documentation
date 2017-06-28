YESBUTTON.onTap (event, layer) ->
	#print "yepp"

	Circle.animate
		backgroundColor: "rgba(225,225,225,1)"
		scale: 1.10
		options:
			time: 0.50
			curve: Bezier.ease

	CAT.animate
		scale: 1
		options:
			time: 0.50
			curve: Bezier.ease
	
	CAT.onAnimationEnd ->
	
		CAT.animate
			scale: 1
			options:
				time: 0.50
				curve: Bezier.ease
		

