/**
	A-Frame Component: airplane
	
	Author: Paul Armstrong

	Description:
		This component will turn the entity into a player controller airplane
	
	Schema:
		speed - the speed of the airplane in units per second

**/


AFRAME.registerComponent("airplane", {
	schema: {
		speed: {type: "number", default: 1}
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
		
		// Get the world direction of the airplane
		var direction = this.el.object3D.getWorldDirection();
		
		// Move in that direction multiplied with speed and deltaTime
		// (deltaTime is time passed between calls to the tick function)
		this.el.object3D.position.add(direction.multiplyScalar(-this.data.speed * timeDelta / 1000));
	
	},
	onKeyDown: function (evt) {
		if (evt.keyCode == 84) { // T
			this.data.speed *= 1.5;
		} else if (evt.keyCode == 71) { // G
			this.data.speed /= 1.5;
		}
	},
	onKeyUp: function (evt) {
		
	}
});