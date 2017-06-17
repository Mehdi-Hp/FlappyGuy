var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(80, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.setClearColor(0x2ab6e8, 1);

var textureLoader = new THREE.TextureLoader();

var light = new THREE.AmbientLight(0xFFFFFF);
light.position.set(1, 1, 1);
scene.add(light);

var listener = new THREE.AudioListener();
var eatDonutSounds = [];
camera.add(listener);
var audioLoader = new THREE.AudioLoader();
var hehehe = new THREE.Audio(listener);
audioLoader.load( 'sounds/hehehe.mp3', function(buffer)  {
	hehehe.setBuffer(buffer);
	hehehe.setVolume(0.5);
	eatDonutSounds.push(hehehe);
});
var hmmm = new THREE.Audio(listener);
audioLoader.load( 'sounds/hmmm.mp3', function(buffer)  {
	hmmm.setBuffer(buffer);
	hmmm.setVolume(0.7);
	eatDonutSounds.push(hmmm);
});
var hurt = new THREE.Audio(listener);
audioLoader.load('sounds/hurt.mp3', function(buffer)  {
	hurt.setBuffer(buffer);
	hurt.setVolume(0.5);
});

// create clouds
var clouds = new THREE.Object3D();
for (var i = 0; i < 10; i++) {
	var cloudSize = (Math.random()*6)+3;
  var cloud = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(cloudSize, cloudSize),
    new THREE.MeshPhongMaterial({
      transparent: true
    })
  );
  cloud.position.y = Math.random() * 4 + 4;
	if(!clouds.children.length) {
		cloud.position.x = -10;
	}
	else {
		cloud.position.x = clouds.children[clouds.children.length-1].position.x + 4 + (Math.random()*6+3);
	}
  cloud.position.z = -2;
	clouds.add(cloud);
}
var cloudImages = [];
textureLoader.load(
  'img/cloud-1.png',
  function(cloud1) {
		cloudImages.push(cloud1);
		textureLoader.load(
		  'img/cloud-2.png',
		  function(cloud2) {
				cloudImages.push(cloud2);
				textureLoader.load(
				  'img/cloud-3.png',
				  function(cloud3) {
						cloudImages.push(cloud3);
						textureLoader.load(
						  'img/cloud-4.png',
						  function(cloud4) {
								cloudImages.push(cloud4);
								textureLoader.load(
								  'img/cloud-5.png',
								  function(cloud5) {
										cloudImages.push(cloud5);
										textureLoader.load(
										  'img/cloud-6.png',
										  function(cloud6) {
												cloudImages.push(cloud6);
												for (var i = 0; i < clouds.children.length; i++) {
													clouds.children[i].material.map = cloudImages[Math.floor(Math.random() * cloudImages.length)];
													scene.add(clouds);
												}
										  }
										);
								  }
								);
						  }
						);
				  }
				);
		  }
		);
  }
);

// create buildings
var buildings = new THREE.Object3D();
for (var i = 0; i < 10; i++) {
	var buildingSize = (Math.random()*2.5)+2.5;
	var building = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(buildingSize, buildingSize),
		new THREE.MeshPhongMaterial({
			transparent: true
		})
	);
	if(!buildings.children.length) {
		building.position.x = -20;
	}
	else {
		building.position.x = buildings.children[buildings.children.length-1].position.x + 3 + (Math.random()*6+3);
	}
	building.position.y = 2 + building.geometry.parameters.height/3;
	building.position.z = Math.random()*-2;
	buildings.add(building);
}
var buildingImages = [];
textureLoader.load(
  'img/building-1.png',
  function(building1) {
		buildingImages.push(building1);
		textureLoader.load(
		  'img/building-2.png',
		  function(building2) {
				buildingImages.push(building2);
				textureLoader.load(
				  'img/building-3.png',
				  function(building3) {
						buildingImages.push(building3);
						textureLoader.load(
						  'img/building-4.png',
						  function(building4) {
								buildingImages.push(building4);
									for (var i = 0; i < buildings.children.length; i++) {
									buildings.children[i].material.map = buildingImages[Math.floor(Math.random() * buildingImages.length)];
									scene.add(buildings);
								}
							}
						);
					}
				);
		  }
		);
  }
);

// create floor and sand
var floor = new THREE.Mesh(
	new THREE.PlaneGeometry(100, 5, 2),
	new THREE.MeshBasicMaterial({
		color: 0xDED793,
	})
);
scene.add(floor);
var sand = new THREE.Mesh(
	new THREE.PlaneGeometry(100, 5, 2),
	new THREE.MeshPhongMaterial({
		transparent: true,
		opacity: 0.1
	})
);
textureLoader.load(
  'img/sand.jpg',
  function(texture) {
    sand.material.map = texture;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(50, 3);
    scene.add(sand);
  }
);


// create soil
var soil = new THREE.Mesh(
	new THREE.PlaneGeometry(100, 0.5, 2),
	new THREE.MeshPhongMaterial({
		color: 0x715c42
	})
);
soil.position.y = 2.3;
scene.add(soil);

// create grasses
var grasses = new THREE.Object3D();
var grassSize = (Math.random()*4)+2;
for (var i = 0; i < 10; i++) {
	var grass = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(grassSize, grassSize*2/3),
		new THREE.MeshPhongMaterial({
			transparent: true
		})
	);
	if(!grasses.children.length) {
		grass.position.x = -20;
	}
	else {
		grass.position.x = grasses.children[grasses.children.length-1].position.x + 3 + (Math.random()*6+3);
	}
	grass.position.y = 2.8 + grass.geometry.parameters.height/3;
	grass.position.z = Math.random()+3;
	grasses.add(grass);
}
var grassImages = [];
textureLoader.load(
  'img/grass-1.png',
  function(grass1) {
		grassImages.push(grass1);
		textureLoader.load(
		  'img/grass-2.png',
		  function(grass2) {
				grassImages.push(grass2);
				textureLoader.load(
				  'img/grass-3.png',
				  function(grass3) {
						grassImages.push(grass3);
						textureLoader.load(
						  'img/grass-4.png',
						  function(grass4) {
								grassImages.push(grass4);
								textureLoader.load(
								  'img/grass-5.png',
								  function(grass5) {
										grassImages.push(grass5);
											for (var i = 0; i < grasses.children.length; i++) {
											grasses.children[i].material.map = grassImages[Math.floor(Math.random() * grassImages.length)];
											scene.add(grasses);
										}
								  }
								);
						  }
						);
				  }
				);
		  }
		);
  }
);

// create peter
var peter = new THREE.Mesh(
	new THREE.CircleBufferGeometry(0.6, 32),
	new THREE.MeshPhongMaterial({
		transparent: true
	})
);
peter.position.x = -6;
peter.position.y = 9;
peter.position.z = 3;
textureLoader.load(
  'img/peter.png',
  function(texture) {
    peter.material.map = texture;
    scene.add(peter);
  }
);

// create donuts
var donuts = new THREE.Object3D();
for (var i = 0; i < 10; i++) {
	var donut = new THREE.Mesh(
		new THREE.CircleBufferGeometry(0.5, 30),
		new THREE.MeshPhongMaterial({
			transparent: true
		})
	);
	if(!donuts.children.length) {
		donut.position.x = 0;
	}
	else {
		donut.position.x = donuts.children[donuts.children.length-1].position.x + (Math.random()*7);
	}
	donut.position.y = Math.random()*6+5;
	donut.position.z = 3;
	donuts.add(donut);
}
var donutImages = [];
textureLoader.load(
  'img/donut-1.png',
  function(donut1) {
		donutImages.push(donut1);
		textureLoader.load(
		  'img/donut-2.png',
		  function(donut2) {
				donutImages.push(donut2);
					for (var i = 0; i < donuts.children.length; i++) {
					donuts.children[i].material.map = donutImages[Math.floor(Math.random() * donutImages.length)];
					scene.add(donuts);
				}
			}
		);
	}
);

camera.position.x = 0;
camera.position.y = 8;
camera.position.z = 10;
camera.lookAt(new THREE.Vector3(1,8,0));
