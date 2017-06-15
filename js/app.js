var render = function() {
  requestAnimationFrame(render);
	TWEEN.update();
  renderer.render(scene, camera);
};

// resize canvas on window resize
window.addEventListener("resize", function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// detect webGL compatibility
if (Detector.webgl) {
  render();
} else {
  var warning = Detector.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}
