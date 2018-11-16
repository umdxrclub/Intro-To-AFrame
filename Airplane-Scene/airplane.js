/**
	A-Frame Component: airplane

	Description:
		This component will turn the entity into a player controller airplane
	
	Schema:
		speed - the speed of the airplane in units per second
	
	T key: 84
	G key: 71
	Space bar: 32
	
	window.addEventListener("event", function);

**/


AFRAME.registerComponent("airplane", {
	schema: {

	},
	init: function () {
		
		// Bind functions
		this.onKeyDown = this.onKeyDown.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);

	    window.addEventListener('keydown', this.onKeyDown);
	    window.addEventListener('keyup', this.onKeyUp);
	},
	update: function () {

	},
	tick: function (time, timeDelta) {
		
	},
	onKeyDown: function (evt) {

	},
	onKeyUp: function (evt) {
		
	}
});