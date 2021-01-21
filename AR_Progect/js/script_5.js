AFRAME.registerComponent('jump', {
	 init: function () {
		 var obj = this.el;
		 obj.addEventListener('click', function () {
		 this.setAttribute('position', (Math.random()-0.5)+ " 0.5 0");
	 	});
 	}
});

AFRAME.registerComponent('registerevents', {
 	init: function () {
 		var marker = this.el;
 		marker.addEventListener('markerFound', function() {console.log('markerFound', marker.id); });
 		marker.addEventListener('markerLost', function() {console.log('markerLost', marker.id); });
 	}
});