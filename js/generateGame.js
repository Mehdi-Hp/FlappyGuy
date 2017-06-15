var goThroughWorld = function() {
	grasses.position.x -= 0.08;
	buildings.position.x -= 0.03;
	clouds.position.x -= 0.02;
	donuts.position.x -= 0.06;
}
var loopWorld = new THREEx.PhysicsLoop(60);
loopWorld.add(goThroughWorld);

var generateCloud = function() {
	cloud = clouds.children[Math.floor(Math.random()*clouds.children.length)].clone();
	cloud.position.y = Math.random() * 4 + 4;
	cloud.position.x = clouds.children[clouds.children.length-1].position.x + 4 + (Math.random()*6+3);
	cloud.position.z = -2;
	clouds.add(cloud);

	var vector = new THREE.Vector3();
	vector.setFromMatrixPosition(clouds.children[0].matrixWorld);
	if(peter.position.x-20 > vector.x) {
		clouds.remove(clouds.children[0]);
	}
}
var loopClouds = new THREEx.PhysicsLoop(1);
loopClouds.add(generateCloud);

var generateBuilding = function() {
	building = buildings.children[Math.floor(Math.random()*buildings.children.length)].clone();
	building.position.y = 2 + building.geometry.parameters.height/3;
	building.position.x = buildings.children[buildings.children.length-1].position.x + 3 + (Math.random()*6+3);
	building.position.z = -1;
	buildings.add(building);
	var vector = new THREE.Vector3();
	vector.setFromMatrixPosition(buildings.children[0].matrixWorld);
	if(peter.position.x-15 > vector.x) {
		buildings.remove(buildings.children[0]);
	}
};
var loopBuildings = new THREEx.PhysicsLoop(0.5);
loopBuildings.add(generateBuilding);
//
var generateGrass = function() {
	grass = grasses.children[Math.round(Math.random())].clone();
	grass.position.y = 2.3 + grass.geometry.parameters.height/3;
	grass.position.x = grasses.children[grasses.children.length-1].position.x + 3 + (Math.random()*6+3);
	grasses.add(grass);
	var vector = new THREE.Vector3();
	vector.setFromMatrixPosition(grasses.children[0].matrixWorld);
	if(peter.position.x-20 > vector.x) {
		grasses.remove(grasses.children[0]);
	}
};
var loopGrass = new THREEx.PhysicsLoop(0.5);
loopGrass.add(generateGrass);

var generateDonut = function() {
	donut = donuts.children[Math.round(Math.random())].clone();
	donut.position.x = donuts.children[donuts.children.length-1].position.x + (Math.random()*20);
	donut.position.y = Math.random()*6+5;
	donut.position.z = 3;
	donuts.add(donut);
};
var loopDonut = new THREEx.PhysicsLoop(0.5);
loopDonut.add(generateDonut);

var fallPeter = function() {
	if(peter.position.y > 4.7) {
		peter.position.y -= 0.05;
	}
};
var gravity = new THREEx.PhysicsLoop(125);
gravity.add(fallPeter);
