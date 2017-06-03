/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

Detector = {

	canvas : !! window.CanvasRenderingContext2D,
	webgl : ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	workers : !! window.Worker,
	fileapi : window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage : function () {

		var domElement = document.createElement( 'section' );

		domElement.style.fontFamily = 'monospace';
		domElement.style.fontSize = '13px';
		domElement.style.textAlign = 'center';
		domElement.style.background = '#eee';
		domElement.style.color = '#000';
		domElement.style.padding = '1em';
		domElement.style.width = '475px';
		domElement.style.margin = '5em auto 0';



		return domElement;

	},

	addGetWebGLMessage : function ( parameters ) {

		var parent, id, domElement;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		domElement = Detector.getWebGLErrorMessage();
		domElement.id = id;

		parent.appendChild( domElement );

	}

};

function init() {

	container = document.createElement( 'section' );
	document.body.appendChild( container );

	// Bg gradient

	var canvas = document.createElement( 'canvas' );
	canvas.width = 32;
	canvas.height = window.innerHeight;

	var context = canvas.getContext( '2d' );

	var gradient = context.createLinearGradient( 0, 0, 0, canvas.height );
	gradient.addColorStop(0, "#1e4877");
	gradient.addColorStop(0.5, "#4584b4");

	context.fillStyle = gradient;
	context.fillRect(0, 0, canvas.width, canvas.height);
	//背景
	// container.style.background = 'url(' + canvas.toDataURL('image/png') + ')';
	// container.style.backgroundSize = '32px 100%';

	//

	camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 8000 );
	camera.position.z = 6000;

	scene = new THREE.Scene();

	geometry = new THREE.Geometry();

	//雲的圖片
	var texture = THREE.ImageUtils.loadTexture( 'images/cloud11.png', null, animate );
	texture.magFilter = THREE.LinearMipMapLinearFilter;
	texture.minFilter = THREE.LinearMipMapLinearFilter;

	var fog = new THREE.Fog( 0x4584b4, - 100, 5000 );

	material = new THREE.ShaderMaterial( {

		uniforms: {

			"map": { type: "t", value: texture },
			"fogColor" : { type: "c", value: fog.color },
			"fogNear" : { type: "f", value: fog.near },
			"fogFar" : { type: "f", value: fog.far },

		},
		vertexShader: document.getElementById( 'vs' ).textContent,
		fragmentShader: document.getElementById( 'fs' ).textContent,
		depthWrite: false,
		depthTest: false,
		transparent: true

	} );

	var plane = new THREE.Mesh( new THREE.PlaneGeometry( 64, 64 ) );

	for ( var i = 0; i < 8000; i++ ) {

		plane.position.x = Math.random() * 1000 - 500;
		plane.position.y = - Math.random() * Math.random() * 800 - 15;
		plane.position.z = i;
		plane.rotation.z = Math.random() * Math.PI;
		plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;

		THREE.GeometryUtils.merge( geometry, plane );

	}

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	mesh = new THREE.Mesh( geometry, material );
	mesh.position.z = - 8000;
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: false } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function onDocumentMouseMove( event ) {

	mouseX = ( event.clientX - windowHalfX ) * 0.25;
	mouseY = ( event.clientY - windowHalfY ) * 0.15;

}

function onWindowResize( event ) {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}


//控制滑鼠與雲的互動
function animate() {

	requestAnimationFrame( animate );

	position = ( ( Date.now() - start_time ) * 0.03 ) % 8000;

	camera.position.x += ( mouseX - camera.position.x ) * 0.015;
	camera.position.y += ( - mouseY - camera.position.y ) * 0.015;
	camera.position.z = - position + 8000;

	renderer.render( scene, camera );

}