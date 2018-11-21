		var scene, camera, renderer, mesh, controls;
		var meshThree;

		const sceneDown = -50;
		const sceneUp = 0;
		const sceneStart = -10;

		const keyboard = {};
		const player = { height: 0.8125, speed: 0.01, turnSpeed: Math.PI * 0.002 };
		const playerSpeedTwo = 0.0001;

		const cameraInCar = { x: -6.35, y: player.height, z: .5 };
		const cameraInCarLook = { x: 36.4, y: player.height, z: .5 };

		const cameraInCarOne = { x: -0.9, y: player.height, z: 49.25 };
		const cameraInCarLookOne = { x: -0.5, y: player.height, z: 69.25 };

		const cameraInit = { x: -70, y: -8.5, z: 71 };
		const theCarPosOne = {	x: -0.2, y: 0, z: 27.825 };			

		let highway, heyLady, theCar, theCarTwo;

		function init() {

			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			
			scene.background = new THREE.Color( 0x4893AA );

			scene.scale.x = 2;
			scene.scale.y = 2;
			scene.scale.z = 2;
			scene.position.y = sceneStart;



			// const loadingManager = new THREE.LoadingManager( () => {
			
			// 	const loadingScreen = document.getElementById( 'overlay' );
			// 	loadingScreen.classList.add( 'fade-out' );
				
				// optional: remove loader from DOM via event listener
			// 	loadingScreen.addEventListener( 'transitionend', onTransitionEnd );
				
			// } );


			// function onTransitionEnd( event ) {

			// 	event.target.remove();
				
			// }
						


			// Polygons

			// var ngeometry = new THREE.BoxGeometry( 1, 1, 1 );
			// var nmaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
			// var ncube = new THREE.Mesh( ngeometry, nmaterial );
			// scene.add( ncube );





			// SVG Loader 










			// End SVG Loader
	
			

			// var loader = new THREE.GLTFLoader();
			// loader.load("scenes/bp_scene_6.gltf", function ( gltf ) {

			// 	city = gltf.scene;
			//     scene.add( city );

			//     city.position.y = sceneDown;
			    
			// });


			
			var loader = new THREE.GLTFLoader();
			loader.load("scenes/bp_scene_full.gltf", function ( hwy ) {

				highway = hwy.scene;
			    scene.add( hwy.scene );


			});






			var womanLoader = new THREE.GLTFLoader();
			womanLoader.load("scenes/bp_scene_6_woman.gltf", function( girl ) {

				heyLady = girl.scene;
				scene.add( heyLady );


				// heyLady.rotation.y = -90 * ( Math.PI / 180 );
				// heyLady.position.z = 0;
				// heyLady.position.x = 1;


			});



			var carLoader = new THREE.GLTFLoader();
			carLoader.load("scenes/bp_scene_6_car.gltf", function ( car ) {

				theCar = car.scene;
				scene.add( theCar );

				theCar.rotation.y = -90 * ( Math.PI / 180 );
				theCar.position.x = theCarPosOne.x;
				theCar.position.z = theCarPosOne.z;

			});




			var carLoaderTwo = new THREE.GLTFLoader();
			carLoaderTwo.load("scenes/bp_scene_6_car.gltf", function ( carTwo ) {

				theCarTwo = carTwo.scene;
			    scene.add( theCarTwo );

				theCarTwo.rotation.y = -180 * ( Math.PI / 180 );
				theCarTwo.position.x = 0.2;
				theCarTwo.position.z = 29.8;

				
			});
			    


			// Lighting

			var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
			directionalLight.position.set( -12, 10, -8 );
			scene.add( directionalLight );

			var light = new THREE.PointLight( 0xffffff, 1.5, 0, 2 );
			light.position.set( 0, 8, 0.5 );
			scene.add( light );



			// Render 

			renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.getElementById("grid").appendChild(renderer.domElement);
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.BasicShadowMap;

			// Resize to the size of the screen
			window.addEventListener('resize', function() {

				var width = window.innerWidth;
				var height = window.innerHeight;
				renderer.setSize( width, height );
				camera.aspect = width / height;
				camera.updateProjectionMatrix();

			});




			// Camera

			camera.position.set( cameraInit.x, cameraInit.y, cameraInit.z );

			controls = new THREE.OrbitControls( camera, renderer.domElement );
			controls.target.set( 0, 0, 0 );



			animate();


		}


		function animate() {


			requestAnimationFrame(animate);
			renderer.render(scene, camera);


			document.getElementById('up').addEventListener('touchstart', function() {

				camera.position.x -= Math.sin(camera.rotation.y) * (playerSpeedTwo + 0.0002);
				theCar.position.x -= Math.sin(camera.rotation.y) * ((playerSpeedTwo + 0.0002) / 2);
				heyLady.position.z -= Math.sin(camera.rotation.y) * ((playerSpeedTwo + 0.0002) / 4);


			});

			document.getElementById('down').addEventListener('touchstart', function() {

				camera.position.x += Math.sin(camera.rotation.y) * (playerSpeedTwo + 0.0002);
				theCar.position.x += Math.sin(camera.rotation.y) * ((playerSpeedTwo + 0.0002) / 2);
				heyLady.position.z += Math.sin(camera.rotation.y) * ((playerSpeedTwo + 0.0002) / 4);

			});


			document.getElementById('left').addEventListener('touchstart', function() {

				camera.rotation.y -= playerSpeedTwo;

			});


			document.getElementById('right').addEventListener('touchstart', function() {

				camera.rotation.y += playerSpeedTwo;

			});

			// console.log(camera.position.x, camera.position.y, camera.position.z);
			// console.log(controls.target.x, controls.target.y, controls.target.z);


			if ( controls.enabled ) {

				controls.update();

			}	



			// if (keyboard[38])   { // Up arrow key

			// 	camera.position.x -= Math.sin(camera.rotation.y) * (player.speed + 0.02);
			// 	theCar.position.x -= Math.sin(camera.rotation.y) * ((player.speed + 0.02) / 2);
			// 	heyLady.position.z -= Math.sin(camera.rotation.y) * ((player.speed + 0.02) / 4);

			// } 

			

			// if (keyboard[40]) { // Down arrow key

			// 	camera.position.x += Math.sin(camera.rotation.y) * (player.speed + 0.02);
			// 	theCar.position.x += Math.sin(camera.rotation.y) * ((player.speed + 0.02) / 2);
			// 	heyLady.position.z += Math.sin(camera.rotation.y) * ((player.speed + 0.02) / 4);

			// }

			// if (keyboard[37]) { // left arrow key

			// 	camera.rotation.y -= player.turnSpeed;

			// }

			// if (keyboard[39]) { // right arrow key

			// 	camera.rotation.y += player.turnSpeed;

			// }

		}

		// function keyDown(e) {

		// 	keyboard[e.keyCode] = true;

		// }

		// function keyUp(e) {

		// 	keyboard[e.keyCode] = false;

		// }


		// window.addEventListener('keydown', keyDown);
		// window.addEventListener('keyup', keyUp);

		

		init();