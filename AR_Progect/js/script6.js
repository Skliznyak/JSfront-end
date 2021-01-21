let markerVisible = { A: false, B: false, C: false, F: false, D: false };
AFRAME.registerComponent('registerevents', {
 init: function () {
 let marker = this.el;
 marker.addEventListener('markerFound', function() {
 markerVisible[ marker.id ] = true;
 });
 marker.addEventListener('markerLost', function() {
 markerVisible[ marker.id ] = false;
 });
 }
});

AFRAME.registerComponent('run', {
	 init: function() {

		 this.A = document.querySelector("#A");
		 this.B = document.querySelector("#B");
		 this.C = document.querySelector("#C");
		 this.D = document.querySelector("#D");
		 this.F = document.querySelector("#F");

		 this.p0 = new THREE.Vector3();
		 this.p1 = new THREE.Vector3();
		 this.p2 = new THREE.Vector3();
		 this.p3 = new THREE.Vector3();
		 this.p4 = new THREE.Vector3();

		 let material = new THREE.MeshLambertMaterial({color:0x88d9af});
		 let geometry=new THREE.CylinderGeometry( 0.05, 0.05, 1, 12);
		 geometry.applyMatrix( new THREE.Matrix4().makeTranslation(
		 0, 0.5, 0 ) );
		 geometry.applyMatrix( new THREE.Matrix4().makeRotationX(
		 THREE.Math.degToRad( 90 ) ) );

		 this.cylinderAB = new THREE.Mesh( geometry, material );
		 this.lineAB = document.querySelector('#lineAB').object3D;
		 this.lineAB.add( this.cylinderAB );
		 this.cylinderAB.visible = false;

		 this.cylinderAF = new THREE.Mesh( geometry, material );
		 this.lineAF = document.querySelector('#lineAF').object3D;
		 this.lineAF.add( this.cylinderAF );
		 this.cylinderAF.visible = false;

		 this.cylinderBF = new THREE.Mesh( geometry, material );
		 this.lineBF = document.querySelector('#lineBF').object3D;
		 this.lineBF.add( this.cylinderBF );
		 this.cylinderBF.visible = false;

		 this.cylinderCF = new THREE.Mesh( geometry, material );
		 this.lineCF = document.querySelector('#lineCF').object3D;
		 this.lineCF.add( this.cylinderCF );
		 this.cylinderCF.visible = false;

		 this.cylinderDF = new THREE.Mesh( geometry, material );
		 this.lineDF = document.querySelector('#lineDF').object3D;
		 this.lineDF.add( this.cylinderDF );
		 this.cylinderDF.visible = false;

	 },
	 tick: function (time, deltaTime) {
		 if ( markerVisible["A"] && markerVisible["B"] ) {
			 this.A.object3D.getWorldPosition(this.p0);
			 this.B.object3D.getWorldPosition(this.p1);
			 let distance = this.p0.distanceTo(this.p1);
			 this.lineAB.lookAt( this.p1 );
			 this.cylinderAB.scale.set(1,1,distance);
			 this.cylinderAB.visible = true;
		}

		if ( markerVisible["A"] && markerVisible["F"] ) {
			 this.A.object3D.getWorldPosition(this.p0);
			 this.F.object3D.getWorldPosition(this.p2);
			 let distance = this.p0.distanceTo(this.p2);
			 this.lineAF.lookAt(this.p2);
			 this.cylinderAF.scale.set(1,1,distance);
			 this.cylinderAF.visible = true;
		}

		 if ( markerVisible["B"] && markerVisible["F"] ) {
			 this.B.object3D.getWorldPosition(this.p1);
			 this.F.object3D.getWorldPosition(this.p2);
			 let distance = this.p1.distanceTo( this.p2 );
			 this.lineBF.lookAt( this.p2 );
			 this.cylinderBF.scale.set(1,1,distance);
			 this.cylinderBF.visible = true;
		}
		 if ( markerVisible["F"] && markerVisible["C"] ) {
			 this.F.object3D.getWorldPosition(this.p2);
			 this.C.object3D.getWorldPosition(this.p3);
			 let distance = this.p3.distanceTo( this.p2 );
			 this.lineCF.lookAt( this.p2 );
			 this.cylinderCF.scale.set(1,1,distance);
			 this.cylinderCF.visible = true;
		}
		 if ( markerVisible["F"] && markerVisible["D"] ) {
			 this.F.object3D.getWorldPosition(this.p2);
			 this.D.object3D.getWorldPosition(this.p4);
			 let distance = this.p4.distanceTo( this.p2 );
			 this.lineDF.lookAt( this.p2);
			 this.cylinderDF.scale.set(1,1,distance);
			 this.cylinderDF.visible = true;
		}

		 if ( !markerVisible["A"] ){
		 	this.cylinderAB.visible = this.cylinderAB.visible = false;
		 	this.cylinderAF.visible = this.cylinderAF.visible = false;
		}
		 if ( !markerVisible["B"] ){
		 	this.cylinderBF.visible = this.cylinderBF.visible = false;
		 	this.cylinderAB.visible = this.cylinderAB.visible = false;
		}
		 if ( !markerVisible["C"] ){
		 	this.cylinderCF.visible = this.cylinderCF.visible = false;
		}
		if ( !markerVisible["D"] ){
		 	this.cylinderDF.visible = this.cylinderDF.visible = false;
		}
		if ( !markerVisible["F"] ){
			this.cylinderCF.visible = this.cylinderCF.visible = false;
			this.cylinderAF.visible = this.cylinderAF.visible = false;
			this.cylinderBF.visible = this.cylinderBF.visible = false;
			this.cylinderDF.visible = this.cylinderDF.visible = false;
		}
	}
});