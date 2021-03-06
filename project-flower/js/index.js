document.addEventListener("DOMContentLoaded", function(event) {
	var node = document.createElement("div");
	node.setAttribute("id","snow-container");
	document.querySelector('body').appendChild(node);

	var SCREEN_WIDTH = document.documentElement.clientWidth;
	var SCREEN_HEIGHT = document.documentElement.clientHeight;

	var container;

	var particle;
	var mouseX = 0;
	var mouseY = 0;
	var windowHalfX = document.documentElement.clientWidth / 2;
	var windowHalfY = document.documentElement.clientHeight / 2;

	//var imageSrc = "https://"+location.hostname+"/wp-content/plugins/Project-Flower/images/";
	var imageSrc = "images/";
	var imageName1 = "flower01.png";
	var imageName2 = "flower02.png";
	var imageName3 = "flower03.png";
	var imageName4 = "flower04.png";

	//粒子1
	var particles = [];
	var particleNums = 50;
	var particleImage = new Image();
	particleImage.src = imageSrc+imageName1;
	//粒子2
	var particles2 = [];
	var particleNums2 = 50;
	var particleImage2 = new Image();
	particleImage2.src = imageSrc+imageName2;
	//粒子3
	var particles3 = [];
	var particleNums3 = 5;
	var particleImage3 = new Image();
	particleImage3.src = imageSrc+imageName3;
	//粒子4
	var particles4 = [];
	var particleNums4 = 5;
	var particleImage4 = new Image();
	particleImage4.src = imageSrc+imageName4;

	window.onresize=function() {
		reStart();
	}

	//document.querySelector('.test-box').addEventListener("click", function() {
	//	reStart();
	//});

	init();
	var interval = setInterval( loop, 1500 / 60 );
	//anime();

	function init() {
		SCREEN_WIDTH = document.documentElement.clientWidth;
		SCREEN_HEIGHT = document.documentElement.clientHeight;

		container = document.getElementById('snow-container');
		document.body.appendChild(container);

		camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
		camera.position.z = 1000;

		scene = new THREE.Scene();
		scene.add(camera);

		renderer = new THREE.CanvasRenderer();
		renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

		//粒子1
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

		//粒子2
		var material2 = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage2) } );
		for (var i = 0; i < particleNums2; i++) {
			particle2 = new Particle3D(material2);
			particle2.position.x = Math.random() * 2000 - 1000;
			particle2.position.y = Math.random() * 2000 - 1000;
			particle2.position.z = Math.random() * 2000 - 1000;
			particle2.scale.x = particle2.scale.y =  1;
			scene.add( particle2 );
			particles2.push(particle2);

		}

		//粒子3
		var material3 = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage3)} );
		for (var i = 0; i < particleNums3; i++) {
			particle3 = new Particle3D(material3);
			particle3.position.x = Math.random() * 2000 - 1000;
			particle3.position.y = Math.random() * 2000 - 1000;
			particle3.position.z = Math.random() * 2000 - 1000;
			particle3.scale.x = particle3.scale.y =  1;
			scene.add( particle3 );
			particles3.push(particle3);

		}

		//粒子4
		var material4 = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage4)} );
		for (var i = 0; i < particleNums4; i++) {
			particle4 = new Particle3D(material4);
			particle4.position.x = Math.random() * 2000 - 1000;
			particle4.position.y = Math.random() * 2000 - 1000;
			particle4.position.z = Math.random() * 2000 - 1000;
			particle4.scale.x = particle4.scale.y =  1;
			scene.add( particle4 );
			particles3.push(particle4);

		}

		//����鞟�隞�
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

		for (var i = 0; i < particles3.length; i++)	{

			var particle3 = particles3[i];
			particle3.updatePhysics();

			with(particle3.position) {
				if ( y < -1000) y += 2000;
				if (x > 1000) x -= 2000;
				else if (x < -1000) x += 2000;
				if (z > 1000) z -= 2000;
				else if (z<-1000) z += 2000;
			}

		}

		for (var i = 0; i < particles4.length; i++)	{

			var particle4 = particles4[i];
			particle4.updatePhysics();

			with(particle4.position) {
				if ( y < -1000) y += 2000;
				if (x > 1000) x -= 2000;
				else if (x < -1000) x += 2000;
				if (z > 1000) z -= 2000;
				else if (z<-1000) z += 2000;
			}

		}


		//�綉��皛煾�䭾�嘥蔣璈蠘�㕑��
		camera.position.x += ( mouseX - camera.position.x ) * 0.05;
		camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

		camera.lookAt(scene.position);

		renderer.render( scene, camera );

	}
	function reStart() {
		SCREEN_WIDTH = document.documentElement.clientWidth;
		SCREEN_HEIGHT = document.documentElement.clientHeight;
		document.body.removeChild(document.getElementById('snow-container'))

		var node = document.createElement("div");
		node.setAttribute("id","snow-container");
		document.querySelector('body').appendChild(node);

		init();
	}
})