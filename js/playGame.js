// jump peter
window.addEventListener("keydown", function(event) {
	var position = { y: peter.position.y };
	var jump = new TWEEN.Tween(position).to({y: position.y+1.5}, 300);
	jump.easing(TWEEN.Easing.Quadratic.Out);
	jump.onUpdate(function(){
		gravity.stop();
		peter.position.y = position.y;
	});
	jump.onComplete(function(){
		gravity.start();
	});
	if(event.which == 32) {
		jump.start();
	}
});

var gameOver = function() {
	loopWorld.stop();
	loopBuildings.stop();
	loopClouds.stop();
	loopGrass.stop();
	loopDonut.stop();
	loopCheckDonut.stop();
	gravity.stop();
	$('.menu').show();
};

var play = function() {
	resetGame();
	loopWorld.start();
	loopBuildings.start();
	loopClouds.start();
	loopGrass.start();
	loopDonut.start();
	loopCheckDonut.start();
	gravity.start();
	$('.data').show();
};

var resetGame = function() {
	for (var i = 0; i < donuts.children.length; i++) {
		donuts.remove(donuts.children[i]);
	}
	donutCounter = 0;
	$('.data__donut-counter').text(donutCounter);
	peter.position.y = 10;
};

var donutCounter = 0;
var checkDonut = function() {
	var peterObj = peter;
	var donutObj = donuts.children[0];
	firstBB = new THREE.Box3().setFromObject(peterObj);
	secondBB = new THREE.Box3().setFromObject(donutObj);
	var collision = firstBB.intersectsBox(secondBB);
	if(collision) {
		donuts.remove(donuts.children[0]);
		donutCounter++;
		$('.data__donut-counter').text(donutCounter);
	}
	var vector = new THREE.Vector3();
	vector.setFromMatrixPosition(donuts.children[0].matrixWorld);
	if(peter.position.x-3 > vector.x) {
		gameOver();
	}
};

var loopCheckDonut = new THREEx.PhysicsLoop(30);
loopCheckDonut.add(checkDonut);
loopCheckDonut.start();

$(".play").click(function(){
	$('.menu').fadeOut();
	play();
});
