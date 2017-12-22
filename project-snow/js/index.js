
document.addEventListener("DOMContentLoaded", function(event) {
	var node = document.createElement("div");
	node.setAttribute("id","snow-container");
	document.querySelector('body').appendChild(node);

	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;

	var container;

	var particle;
	var mouseX = 0;
	var mouseY = 0;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	//第一種粒子
	var particles = [];
	var particleNums = 70;
	var particleImage = new Image();
	particleImage.src = 'images/particle_snowflake.png';

	//第一種粒子
	var particles2 = [];
	var particleNums2 = 10;
	var particleImage2 = new Image();
	particleImage2.src = 'images/particle_snowflake2.png';

	window.addEventListener("orientationchange",onOrientationchange ,false);
	function onOrientationchange() {
		if (window.orientation === 180 || window.orientation === 0) {
			reStart();
		}
		if (window.orientation === 90 || window.orientation === -90 ){
			reStart();
		}
	}

	document.querySelector('.test-box').addEventListener("click", function() {
		reStart();
	});

	init();
	var interval = setInterval( loop, 1500 / 60 );
	//anime();

	function init() {
		container = document.getElementById('snow-container');
		document.body.appendChild(container);

		camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
		camera.position.z = 1000;

		scene = new THREE.Scene();
		scene.add(camera);

		renderer = new THREE.CanvasRenderer();
		renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

		//創建物件1
		var material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage) } );
		for (var i = 0; i < particleNums; i++) {

			particle = new Particle3D(material);
			particle.position.x = Math.random() * 2000 - 1000;
			particle.position.y = Math.random() * 2000 - 1000;
			particle.position.z = Math.random() * 2000 - 1000;
			particle.scale.x = particle.scale.y =  1;
			scene.add( particle );

			particles.push(particle);
		}

		//創建物件2
		var material2 = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage2) } );
		for (var i = 0; i < particleNums2; i++) {

			particle2 = new Particle3D(material2);
			particle2.position.x = Math.random() * 2000 - 1000;
			particle2.position.y = Math.random() * 2000 - 1000;
			particle2.position.z = Math.random() * 2000 - 1000;
			setInterval(function() {
				particle2.rotation.x += Math.PI * 0.7;
				particle2.rotation.y += Math.PI * 0.7;
			},1000)

			particle2.scale.x = particle2.scale.y =  1;
			scene.add( particle2 );

			particles2.push(particle2);

		}

		//生成物件
		container.appendChild( renderer.domElement );


		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		// document.addEventListener( 'touchstart', onDocumentTouchStart, false );
		// document.addEventListener( 'touchmove', onDocumentTouchMove, false );
	}

	function anime() {
		//console.log(particle2)
		setInterval(function() {
			particle2.rotation.x += 500;
			particle2.rotation.y += 500;
		},1000)

		renderer.render(scene, camera);
		requestAnimationFrame(function() {
			anime();
		});
	}

	function onDocumentMouseMove( event ) {

		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;
	}

	function onDocumentTouchStart( event ) {

		if ( event.touches.length == 1 ) {

			//event.preventDefault();

			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			mouseY = event.touches[ 0 ].pageY - windowHalfY;
		}
	}

	function onDocumentTouchMove( event ) {

		if ( event.touches.length == 1 ) {

			//event.preventDefault();

			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			mouseY = event.touches[ 0 ].pageY - windowHalfY;
		}
	}

	function loop() {

		for (var i = 0; i < particles.length; i++)	{

			var particle = particles[i];
			particle.updatePhysics();

			with(particle.position) {
				if ( y < -1000) y += 2000;
				if (x > 1000) x -= 2000;
				else if (x < -1000) x += 2000;
				if (z > 1000) z -= 2000;
				else if (z<-1000) z += 2000;
			}
		}

		for (var i = 0; i < particles2.length; i++)	{

			var particle2 = particles2[i];
			particle2.updatePhysics();

			with(particle2.position) {
				if ( y < -1000) y += 2000;
				if (x > 1000) x -= 2000;
				else if (x < -1000) x += 2000;
				if (z > 1000) z -= 2000;
				else if (z<-1000) z += 2000;
			}

		}


		//控制滑鼠攝影機轉角
		camera.position.x += ( mouseX - camera.position.x ) * 0.05;
		camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

		camera.lookAt(scene.position);

		renderer.render( scene, camera );

	}
	function reStart() {

		document.body.removeChild(document.getElementById('snow-container'))

		var node = document.createElement("div");
		node.setAttribute("id","snow-container");
		document.querySelector('body').appendChild(node);

		init();
	}
})
