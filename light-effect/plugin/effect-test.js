(function(){
	var Detect = {
		canvas: !! window.CanvasRenderingContext2D,
		webgl: (function () {
			try {
				var renderer = new THREE.WebGLRenderer();
				return true;
			} catch ( e ) {
				return false;
			}
		})()
	}

	if(!Detect.webgl){
		return;
	}
	var cNoise  = '/* GLSL textureless classic 3D noise "cnoise", with an RSL-style periodic variant "pnoise". Author: Stefan Gustavson (stefan.gustavson@liu.se) Version: 2011-10-11 Many thanks to Ian McEwan of Ashima Arts for the ideas for permutation and gradient selection. Copyright (c) 2011 Stefan Gustavson. All rights reserved. Distributed under the MIT license. See LICENSE file. https://github.com/ashima/webgl-noise */ vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; } vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); } vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; } vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); } float pnoise(vec3 P, vec3 rep) { vec3 Pi0 = mod(floor(P), rep); vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); Pi0 = mod289(Pi0); Pi1 = mod289(Pi1); vec3 Pf0 = fract(P); vec3 Pf1 = Pf0 - vec3(1.0); vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x); vec4 iy = vec4(Pi0.yy, Pi1.yy); vec4 iz0 = Pi0.zzzz; vec4 iz1 = Pi1.zzzz; vec4 ixy = permute(permute(ix) + iy); vec4 ixy0 = permute(ixy + iz0); vec4 ixy1 = permute(ixy + iz1); vec4 gx0 = ixy0 * (1.0 / 7.0); vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5; gx0 = fract(gx0); vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0); vec4 sz0 = step(gz0, vec4(0.0)); gx0 -= sz0 * (step(0.0, gx0) - 0.5); gy0 -= sz0 * (step(0.0, gy0) - 0.5); vec4 gx1 = ixy1 * (1.0 / 7.0); vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5; gx1 = fract(gx1); vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1); vec4 sz1 = step(gz1, vec4(0.0)); gx1 -= sz1 * (step(0.0, gx1) - 0.5); gy1 -= sz1 * (step(0.0, gy1) - 0.5); vec3 g000 = vec3(gx0.x,gy0.x,gz0.x); vec3 g100 = vec3(gx0.y,gy0.y,gz0.y); vec3 g010 = vec3(gx0.z,gy0.z,gz0.z); vec3 g110 = vec3(gx0.w,gy0.w,gz0.w); vec3 g001 = vec3(gx1.x,gy1.x,gz1.x); vec3 g101 = vec3(gx1.y,gy1.y,gz1.y); vec3 g011 = vec3(gx1.z,gy1.z,gz1.z); vec3 g111 = vec3(gx1.w,gy1.w,gz1.w); vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))); g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w; vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))); g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w; float n000 = dot(g000, Pf0); float n100 = dot(g100, vec3(Pf1.x, Pf0.yz)); float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z)); float n110 = dot(g110, vec3(Pf1.xy, Pf0.z)); float n001 = dot(g001, vec3(Pf0.xy, Pf1.z)); float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z)); float n011 = dot(g011, vec3(Pf0.x, Pf1.yz)); float n111 = dot(g111, Pf1); vec3 fade_xyz = fade(Pf0); vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z); vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y); float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); return 2.2 * n_xyz; } ';
	var vShader = 'attribute float particleSizeRate; varying float vTime; varying float vTimeScale; uniform float pixelRatio; uniform float particleScale; uniform vec3 particlesColor; uniform float particleOpacity; uniform float time; uniform float timeScale; uniform vec3 offset; uniform vec3 volumeCorner; uniform vec3 volumeSize; uniform float perlinIntensity; uniform float perlinFrequency; uniform float fadeDistance; varying vec4 vColor; void main() { vTime = time; vTimeScale = timeScale; vec3 newPosition = position; vec3 displacement = vec3(pnoise(perlinFrequency * position + vec3(0, time * timeScale, 0), vec3(101.0)) * perlinIntensity, pnoise(perlinFrequency * position + vec3(0, time * timeScale, 0), vec3(102.0)) * perlinIntensity, pnoise(perlinFrequency * position + vec3(0, time * timeScale, 0), vec3(103.0)) * perlinIntensity ); newPosition += displacement; newPosition += offset; newPosition.x = mod(mod(newPosition.x, volumeSize.x) + volumeSize.x, volumeSize.x) + volumeCorner.x; newPosition.y = mod(mod(newPosition.y, volumeSize.y) + volumeSize.y, volumeSize.y) + volumeCorner.y; newPosition.z = mod(mod(newPosition.z, volumeSize.z) + volumeSize.z, volumeSize.z) + volumeCorner.z; float alphaFade = 1.0; if(fadeDistance != 0.0) { vec3 distanceToLimits; distanceToLimits.y = min(clamp(abs(newPosition.y - volumeCorner.y),0.0,fadeDistance),clamp(abs(newPosition.y - (volumeCorner.y + volumeSize.y)),0.0,fadeDistance)); distanceToLimits.x = min(clamp(abs(newPosition.x - volumeCorner.x),0.0,fadeDistance),clamp(abs(newPosition.x - (volumeCorner.x + volumeSize.x)),0.0,fadeDistance)); distanceToLimits.z = min(clamp(abs(newPosition.z - volumeCorner.z),0.0,fadeDistance),clamp(abs(newPosition.z - (volumeCorner.z + volumeSize.z)),0.0,fadeDistance)); alphaFade = min(min(distanceToLimits.x,distanceToLimits.y),distanceToLimits.z) / fadeDistance; } alphaFade = alphaFade * (abs(newPosition.x) / 500.0); alphaFade = (abs(newPosition.x) < 400.0) ? 0.0 : alphaFade; alphaFade = alphaFade * 1.4; vColor = vec4(particlesColor, particleOpacity * alphaFade); vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0); gl_PointSize = pixelRatio * particleScale * particleSizeRate; gl_PointSize = gl_PointSize * ( 300.0 / length( mvPosition.xyz )); gl_PointSize = gl_PointSize * abs(mvPosition.x / 400.0); gl_Position = projectionMatrix * mvPosition; }';
	var fShader = 'uniform sampler2D texture; uniform float pixelRatio; varying vec4 vColor; varying float vTime; varying float vTimeScale; void main() { vec2 p = gl_PointCoord * 2. - 1.; float c = cos(vTime * vTimeScale * 2.0); float s = sin(vTime * vTimeScale * 2.0); float mid = 0.5; float y = c * p.x - s * p.y + mid; float x = s * p.x + c * p.y + mid; vec2 newUV = vec2(x, y); gl_FragColor = vColor * texture2D(texture, newUV); }';

	var renderer1, scene1, camera1, stats, trackball;
    var isStats = false;
    var isTrack = false;
    var isGround = false;

    //VertexShaderParticle
    var vsp = {
    	options:{
    		//htmlのid
    		CONTAINER       : 'effect',
    		WIDTH           : 0,
    		HEIGHT          : 0,

    		isStart         : false,

			particleSystem  : null,
			uniforms        : null,
			geometry        : null,
			shaderMaterial  : null,
			particleTexture : null,
			//粒子圖像路徑
			texturePath     : 'img/particle.png',
			//粒子數量
			particles       : 200,
			//粒子基本尺寸
			particleScale   : 80,

			time            : 0,
			start_time      : 0,
			delta           : 0,
			elapsed_time    : 0,

			time_scale      : 0.001,
			//降落速度
			gravity         : 50,

			//風的
			wind            : new THREE.Vector3( 1.4, 0.0, 0.0 ),

			//降落範圍
			volume_corner   : { x : -1000.0, y : -180.0, z : - 150.0 },
			volume_size     : { x : 2000, y : 300, z : 300 },
		},
		ready : function(){
			var self = this;
			self.loadTexture(function(){
				self.init();
			});
		},
		init : function(){
			var opt = this.options;
			var self = this;

			var container = document.getElementById( opt.CONTAINER );
			opt.WIDTH     = container.clientWidth;
			opt.HEIGHT    = container.clientHeight;

			opt.start_time = + ( Date.now() );

			camera1 = new THREE.PerspectiveCamera( 60, opt.WIDTH / opt.HEIGHT, 1, 10000 );
			camera1.position.set( 0, 0, 400 );

			if(isTrack){
				trackball = new THREE.TrackballControls( camera1 );
			}

			scene1 = new THREE.Scene();

			//給予陰影要素群
			//要給予所有粒子共用資料時用uniforms
			opt.uniforms = {
				//顏色
				particlesColor  : { type : 'c', value: new THREE.Color( 0xffff94 ) },//E6C205

				particleOpacity : { type : 'f', value : 1 },
				//質地
				texture         : { type : 't', value: opt.particleTexture },
				//
				pixelRatio      : { type : 'f', value : window.devicePixelRatio},
				particleScale   : { type : 'f', value : opt.particleScale},

				//時間
				time            : { type : 'f', value : 0 },
				//時間倍率
				timeScale       : { type : 'f', value : opt.time_scale },
				//淡出間隔
				fadeDistance    : { type : 'f', value : 10 },
				//粒子的位置
				offset          : { type : 'v3', value : new THREE.Vector3( 0, 0, 0 ) },

				//體積底部的偏移
				volumeCorner    : { type : 'v3', value : new THREE.Vector3( opt.volume_corner.x, opt.volume_corner.y, opt.volume_corner.z ) },
				//體積大小
				volumeSize      : { type : 'v3', value : new THREE.Vector3( opt.volume_size.x, opt.volume_size.y, opt.volume_size.z ) },

				//Perlin雜訊的強度
				perlinIntensity : { type : 'f', value : 6.0 },//1.5
				//Perlin雜訊的週期
				perlinFrequency : { type : 'f', value : 2.0 },//0.5
			};

			opt.shaderMaterial = new THREE.ShaderMaterial( {
				uniforms       : opt.uniforms,
				vertexShader   : cNoise+vShader,
				fragmentShader : fShader,
				blending       : THREE.AdditiveBlending,
				transparent    : true,
				depthTest      : false,
			});

			self.createParticle();

			renderer1 = new THREE.WebGLRenderer({alpha: true});
			renderer1.setPixelRatio( window.devicePixelRatio );
			renderer1.setSize( opt.WIDTH, opt.HEIGHT );

			container.appendChild( renderer1.domElement );

			if(isStats){
				//Debug 用的 Status Box
				stats = new Stats();
				stats.domElement.style.position = 'absolute';
				stats.domElement.style.top = '0px';
				container.appendChild( stats.domElement );
			}

			window.addEventListener( 'resize', function(){self.onWindowResize();}, false );
			self.onWindowResize();
		},
		loadTexture : function(callBack){
			var opt = this.options;

			var texLoader = new THREE.TextureLoader();
			opt.particleTexture = texLoader.load(
				opt.texturePath,
				//success
				function(){
					callBack();
				},
				//progresses
				function(){},
				//error
				function(){
					console.warn('無法讀取質地');
					return;
				}
			);
		},
		onWindowResize : function(){
			var opt = this.options;

			var container = document.getElementById( opt.CONTAINER );
			opt.WIDTH     = container.clientWidth;
			opt.HEIGHT    = container.clientHeight;

			camera1.aspect = opt.WIDTH / opt.HEIGHT;
			camera1.updateProjectionMatrix();
			renderer1.setSize( opt.WIDTH, opt.HEIGHT );
		},
		createParticle : function(){
			var opt = this.options;

			opt.geometry = new THREE.BufferGeometry();
			var positions = new Float32Array( opt.particles * 3 );
			var sizes = new Float32Array( opt.particles );

			var count = opt.particles;
			var i = 0;
			var i3 = 0;
			while(count--)
			{
				positions[ i3 + 0 ] = Math.random() * opt.volume_size.x - opt.volume_size.x / 2,
				positions[ i3 + 1 ] = Math.random() * opt.volume_size.y - opt.volume_size.y / 2,
				positions[ i3 + 2 ] = Math.random() * opt.volume_size.z - opt.volume_size.z / 2
				sizes[ i ] = Math.random()*(1.0-0.2)+0.2;
				i++;
				i3 +=3;
			}

			opt.geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
			opt.geometry.addAttribute( 'particleSizeRate', new THREE.BufferAttribute( sizes, 1 ) );
			opt.particleSystem = new THREE.Points( opt.geometry, opt.shaderMaterial );
			scene1.add( opt.particleSystem );

			opt.isStart = true;
		},
		render : function(){
			var opt = this.options;
			//經過時間
			opt.time         = + ( Date.now() );
			opt.delta        = opt.time - opt.start_time - opt.elapsed_time;
			opt.elapsed_time = opt.time - opt.start_time;

			opt.uniforms.time.value = opt.elapsed_time;
			opt.uniforms.offset.value.x += opt.wind.x * opt.delta*opt.time_scale;
			opt.uniforms.offset.value.y += opt.wind.y * opt.delta*opt.time_scale;
			opt.uniforms.offset.value.z += opt.wind.z * opt.delta*opt.time_scale;
			opt.uniforms.offset.value.y += opt.gravity* opt.delta*opt.time_scale;

			renderer1.render( scene1, camera1 );
		},
	};


	$(function(){
		vsp.ready();
		animate();
	});

	function animate() {
		requestAnimationFrame( animate );

		if(vsp.options.isStart){
			vsp.render();
		}

		if(isTrack){
			trackball.update();
		}

		if(isStats){
			stats.update();
		}
	}
}());