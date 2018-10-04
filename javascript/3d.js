		var scene, camera, renderer, mesh;
		var meshFloor;
		var meshThree;

		var cameraInCar, cameraInCarLook;


		var keyboard = {};
		var player = { height: 0.8125, speed: 0.01, turnSpeed: Math.PI * 0.002 };

		cameraInCar = {x: -6.35, y: 0.8125, z: .5 };
		cameraInCarLook = {x: 36.4, y: 0.8125, z: .5 };

		function init() {

			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			
			scene.background = new THREE.Color( 0x4893AA );
			

			// Polygons

			// var ngeometry = new THREE.BoxGeometry( 1, 1, 1 );
			// var nmaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
			// var ncube = new THREE.Mesh( ngeometry, nmaterial );
			// scene.add( ncube );



			// SVG Loader 



			// instantiate a loader
			var svgLoaderCloudOne = new THREE.SVGLoader();

			// load a SVG resource
			svgLoaderCloudOne.load(
				// resource URL
				'images/cloud-1.svg',
				// called when the resource is loaded
				function ( paths ) {

					var group = new THREE.Group();

					for ( var i = 0; i < paths.length; i ++ ) {

						var path = paths[ i ];

						var material = new THREE.MeshBasicMaterial( {
							// color: path.color,
							color: 0xffffff,
							side: THREE.DoubleSide,
							depthWrite: true,
							opacity: 0.7,
							transparent: true
						} );

						var shapes = path.toShapes( true );

						for ( var j = 0; j < shapes.length; j ++ ) {

							var shape = shapes[ j ];
							var geometry = new THREE.ShapeBufferGeometry( shape );
							var mesh = new THREE.Mesh( geometry, material );
							group.add( mesh );


						}

					}

					scene.add( group );
					group.scale.x = 0.0095;
					group.scale.y = 0.0095;
					group.scale.z = 0.0095;
					group.rotation.x = 180 * ( Math.PI / 180 );
					group.rotation.y = 90 * ( Math.PI / 180 );
					group.position.x = 1; 
					group.position.y = 10;


					function clouds() {


						function makeNewNumber () {



							if ( group.position.z <= 10 ) {

								group.position.z += 0.01;
								

							} else {

								group.position.z = -10;

							}

							
						};


						makeNewNumber();

						function changeOpacityCloud () {

							if ( group.position.z >= -10 && group.position.z <= -9 ) {

								material.opacity += 0.01;

							} else if ( group.position.z >= 9 && group.position.z <= 10) {

								material.opacity -= 0.01;

							} else if ( group.position.z >= -9 && group.position.z <= 9 ) {

								material.opacity = 0.7;
							}

						};

						changeOpacityCloud();						

						requestAnimationFrame(clouds);


					};

					clouds();



				


				},

			);



			// instantiate a loader
			var svgLoaderCloudOneB = new THREE.SVGLoader();

			// load a SVG resource
			svgLoaderCloudOneB.load(
				// resource URL
				'images/cloud-1.svg',
				// called when the resource is loaded
				function ( paths ) {

					var group = new THREE.Group();

					for ( var i = 0; i < paths.length; i ++ ) {

						var path = paths[ i ];

						var material = new THREE.MeshBasicMaterial( {
							// color: path.color,
							color: 0xffffff,
							side: THREE.DoubleSide,
							depthWrite: true,
							opacity: 0.7,
							transparent: true
						} );

						var shapes = path.toShapes( true );

						for ( var j = 0; j < shapes.length; j ++ ) {

							var shape = shapes[ j ];
							var geometry = new THREE.ShapeBufferGeometry( shape );
							var mesh = new THREE.Mesh( geometry, material );
							group.add( mesh );


						}

					}

					scene.add( group );
					group.scale.x = 0.0095;
					group.scale.y = 0.0095;
					group.scale.z = 0.0095;
					group.rotation.x = 180 * ( Math.PI / 180 );
					group.rotation.y = 90 * ( Math.PI / 180 );
					group.position.x = -5; 
					group.position.y = 10;

					function clouds() {



						function makeNewNumber () {



							if ( group.position.z <= 10 ) {

								group.position.z += 0.02;
								

							} else {

								group.position.z = -10;

							}

							
						};


						makeNewNumber();

						function changeOpacityCloud () {

							if ( group.position.z >= -10 && group.position.z <= -9 ) {

								material.opacity += 0.01;

							} else if ( group.position.z >= 9 && group.position.z <= 10) {

								material.opacity -= 0.01;

							} else if ( group.position.z >= -9 && group.position.z <= 9 ) {

								material.opacity = 0.7;
							}

						};

						changeOpacityCloud();						

						requestAnimationFrame(clouds);


					};

					clouds();



				


				},

			);












			// instantiate a loader
			var svgLoaderCloudTwo = new THREE.SVGLoader();

			// load a SVG resource
			svgLoaderCloudTwo.load(
				// resource URL
				'images/cloud-2.svg',
				// called when the resource is loaded
				function ( paths ) {

					var group = new THREE.Group();

					for ( var i = 0; i < paths.length; i ++ ) {

						var path = paths[ i ];

						var material = new THREE.MeshBasicMaterial( {
							// color: path.color,
							color: 0xffffff,
							side: THREE.DoubleSide,
							depthWrite: true,
							opacity: 0.7,
							transparent: true
						} );

						var shapes = path.toShapes( true );

						for ( var j = 0; j < shapes.length; j ++ ) {

							var shape = shapes[ j ];
							var geometry = new THREE.ShapeBufferGeometry( shape );
							var mesh = new THREE.Mesh( geometry, material );
							group.add( mesh );


						}

					}

					scene.add( group );
					group.scale.x = 0.0095;
					group.scale.y = 0.0095;
					group.scale.z = 0.0095;
					group.rotation.x = 180 * ( Math.PI / 180 );
					group.rotation.y = 90 * ( Math.PI / 180 );
					group.position.set( 3, 10, 1);


					function clouds() {


						function makeNewNumber () {



							if ( group.position.z <= 10 ) {

								group.position.z += 0.01;
								

							} else {

								group.position.z = -10;

							}

							
						};


						makeNewNumber();

						function changeOpacityCloud () {

							if ( group.position.z >= -10 && group.position.z <= -9 ) {

								material.opacity += 0.01;

							} else if ( group.position.z >= 9 && group.position.z <= 10) {

								material.opacity -= 0.01;

							} else if ( group.position.z >= -9 && group.position.z <= 9 ) {

								material.opacity = 0.7;
							}

						};

						changeOpacityCloud();						
						requestAnimationFrame(clouds);


					};

					clouds();


				},

			);


			// instantiate a loader
			var svgLoaderCloudThree = new THREE.SVGLoader();

			// load a SVG resource
			svgLoaderCloudThree.load(
				// resource URL
				'images/cloud-3.svg',
				// called when the resource is loaded
				function ( paths ) {

					var group = new THREE.Group();

					for ( var i = 0; i < paths.length; i ++ ) {

						var path = paths[ i ];

						var material = new THREE.MeshBasicMaterial( {
							// color: path.color,
							color: 0xffffff,
							side: THREE.DoubleSide,
							depthWrite: true,
							opacity: 0.7,
							transparent: true
						} );

						var shapes = path.toShapes( true );

						for ( var j = 0; j < shapes.length; j ++ ) {

							var shape = shapes[ j ];
							var geometry = new THREE.ShapeBufferGeometry( shape );
							var meshThree = new THREE.Mesh( geometry, material );
							group.add( meshThree );


						}

					}

					scene.add( group );
					group.scale.x = 0.0095;
					group.scale.y = 0.0095;
					group.scale.z = 0.0095;
					group.rotation.x = 180 * ( Math.PI / 180 );
					group.rotation.y = 90 * ( Math.PI / 180 );
					group.position.set( 5, 10, 3);



						function clouds() {


						function makeNewNumber () {



							if ( group.position.z <= 10 ) {

								group.position.z += 0.01;
								

							} else {

								group.position.z = -10;

							}

							
						};


						makeNewNumber();

						function changeOpacityCloud () {

							if ( group.position.z >= -10 && group.position.z <= -9 ) {

								material.opacity += 0.01;

							} else if ( group.position.z >= 9 && group.position.z <= 10) {

								material.opacity -= 0.01;

							} else if ( group.position.z >= -9 && group.position.z <= 9 ) {

								material.opacity = 0.7;
							}

						};

						changeOpacityCloud();						

						requestAnimationFrame(clouds);


					};

					clouds();


				},

			);







			// End SVG Loader


			
			var loader = new THREE.GLTFLoader();

			loader.load("scenes/bp_scene_6.gltf", function ( gltf ) {

			scene.scale.x = 2;
			scene.scale.y = 2;
			scene.scale.z = 2;
			scene.position.y = -30;
			
			    scene.add( gltf.scene );


			});
			
			
			var womanLoader = new THREE.GLTFLoader();
			womanLoader.load("scenes/bp_scene_6_woman.gltf", function ( gltf ) {

			scene.scale.x = 2;
			scene.scale.y = 2;
			scene.scale.z = 2;
			scene.position.y = -30;
			
			    scene.add( gltf.scene );


			});

			
			var carLoader = new THREE.GLTFLoader();
			carLoader.load("scenes/bp_scene_6_car.gltf", function ( gltf ) {

			scene.scale.x = 2;
			scene.scale.y = 2;
			scene.scale.z = 2;
			scene.position.y = -30;
			
			    scene.add( gltf.scene );


			});

			

			// Camera

			camera.position.set( -50, -30, -40 );
			// camera.lookAt(new THREE.Vector3(0, player.height, 0));


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



			controls = new THREE.OrbitControls( camera, renderer.domElement );
			// controls.target.set( 0, 0, 0 );



			animate();


		}


		function animate() {

			requestAnimationFrame(animate);

			controls.update();			

			renderer.render(scene, camera);


			if (keyboard[38]) { // Up arrow key

				camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
				camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
			}

			if (keyboard[40]) { // Down arrow key

				camera.position.x += Math.sin(camera.rotation.y) * player.speed;
				camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
			}

			// if (keyboard[65]) { // A key
			

			// 	camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
			// 	camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
			// }

			// if (keyboard[68]) { // D key
			

			// 	camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
			// 	camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
			// }

			if (keyboard[37]) { // left arrow key

				camera.rotation.y -= player.turnSpeed;

			}
			if (keyboard[39]) { // right arrow key

				camera.rotation.y += player.turnSpeed;

			}

			// console.log(camera.position.x, camera.position.y, camera.position.z);


		}



		function keyDown(e) {

			keyboard[e.keyCode] = true;

		}

		function keyUp(e) {

			keyboard[e.keyCode] = false;

		}

		window.addEventListener('keydown', keyDown);
		window.addEventListener('keyup', keyUp);

	
		window.onload = init;