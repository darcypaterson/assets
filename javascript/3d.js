		var scene, camera, renderer, mesh;
		var meshFloor;
		var meshThree;


		var keyboard = {};
		var player = { height: 1.8, speed: 0.1, turnSpeed: Math.PI * 0.02 };

		function init() {

			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			// camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			
// 			camera = new THREE.CinematicCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );		

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
			    scene.add( gltf.scene );


			});
			
			
			var womanLoader = new THREE.GLTFLoader();
			womanLoader.load("scenes/bp_scene_6_woman.gltf", function ( gltf ) {


			scene.scale.x = 2;
			scene.scale.y = 2;
			scene.scale.z = 2;
			    scene.add( gltf.scene );


			});

			
			var carLoader = new THREE.GLTFLoader();
			carLoader.load("scenes/bp_scene_6_car.gltf", function ( gltf ) {

			scene.scale.x = 2;
			scene.scale.y = 2;
			scene.scale.z = 2;
			    scene.add( gltf.scene );


			});

			

			// Camera

			camera.position.set( -30, 0, -50 );
			// camera2.position.set(0.5, player.height, -5);
			// camera.lookAt(new THREE.Vector3(0, player.height, 0));

// 				camera.setLens( 5 );
// 				camera.position.set( 2, 1, 50 );


			// Lighting


			var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
			directionalLight.position.set( -12, 10, -8 );
			scene.add( directionalLight );

			// var directionalLightTwo = new THREE.DirectionalLight( 0xffffff, 1 );
			// directionalLightTwo.position.set( -12, 5, 3 );
			// scene.add( directionalLightTwo );

			var light = new THREE.PointLight( 0xffffff, 1.5, 0, 2 );
			light.position.set( 0, 8, 0.5 );
			scene.add( light );

			// var light2 = new THREE.PointLight( 0xffffff, 0.85, 50, 2 );
			// light2.position.set( -4.55, 0.2, 0.18 );
			// scene.add( light2 );


			// var ambLight = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
			// ambLight.position.set( 3, 2, 0 );
			// scene.add( ambLight );

			// var hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
			// scene.add( hemiLight );

			// var hemiHelper = new THREE.HemisphereLightHelper( hemiLight, 5 );
			// scene.add( hemiHelper );


			// var spotLight = new THREE.SpotLight( 0xffffff, 0.7 );
			// spotLight.position.set( -10, 12, -5 );
			// spotLight.castShadow = true;
			// spotLight.shadow.mapSize.width = 500;
			// spotLight.shadow.mapSize.height = 500;
			// spotLight.shadow.camera.near = .25;
			// spotLight.shadow.camera.far = 1000;
			// spotLight.shadow.camera.fov = 3;
			// scene.add( spotLight );


			var sphereSize = 1;

			// var spotLightHelper = new THREE.SpotLightHelper( spotLight, sphereSize );
			// scene.add( spotLightHelper );


			// var pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
			// scene.add( pointLightHelper );

			// var pointLightHelper2 = new THREE.PointLightHelper( light2, 0.01 );
			// scene.add( pointLightHelper2 );


			// var dirhelper = new THREE.DirectionalLightHelper( directionalLight, 2 );
			// scene.add( dirhelper );

			// var dirhelperTwo = new THREE.DirectionalLightHelper( directionalLightTwo, 2 );
			// scene.add( dirhelperTwo );


			// var axesHelper = new THREE.AxesHelper( 5 );
			// scene.add( axesHelper );



			// Render 

			renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setSize( window.innerWidth, window.innerHeight );
			// document.body.appendChild(renderer.domElement);
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


			camera.lookAt(new THREE.Vector3( 0, 20, 0 ));
			controls = new THREE.OrbitControls( camera, renderer.domElement );
			controls.update();


			function animate() {

				requestAnimationFrame(animate);
				renderer.render(scene, camera);
				
			}


			animate();


		}





	
		window.onload = init;