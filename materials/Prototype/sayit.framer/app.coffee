
circlepulse.states.add
	scaleIt:
		scale: 2
		opacity: 0
		animationOptions:
			time: 2
			curve: "easeOut"

		
circlepulse.animate "default"

circlepulse.onStateSwitchEnd (event, state) ->
	if state is "scaleIt"
		circlepulse.stateSwitch "default"
		circlepulse.animate "scaleIt"
	if state is "default"
		circlepulse.animate "scaleIt"
		