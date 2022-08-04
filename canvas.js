let canvas = document.getElementById('canvas');
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({
	canvas: canvas
});
/* CAMERA POSITION */
camera.position.z = 1.8
camera.position.x = 0
camera.position.y = 0.3

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
	color: 'white',
	roughness: 0.4,
	metalness: 0.6
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const spotLight = new THREE.SpotLight('lightgrey');
spotLight.position.set(-1.3, 1.1, 1);
scene.add(spotLight);
renderer.setClearColor(0xffffff, 0)
cube.rotation.x = -0.5

const torusGeometry = new THREE.SphereGeometry(0.1, 32, 16);
const redMaterial = new THREE.MeshStandardMaterial({
	color: 'red',
	roughness: 0.5,
	metalness: 0.6
});
const torusMaterial = new THREE.MeshStandardMaterial({
	color: 'white',
	roughness: 0.5,
	metalness: 0.6
});
/* MAKE A DICE */
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
const torus2 = new THREE.Mesh(torusGeometry, redMaterial);
const torus3 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus4 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus5 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus6 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus7 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus8 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus9 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus10 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus11 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus12 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus13 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus14 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus15 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus16 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus17 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus18 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus19 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus20 = new THREE.Mesh(torusGeometry, torusMaterial);
const torus21 = new THREE.Mesh(torusGeometry, torusMaterial);

torus.position.set(0.45, 0, 0) //red middlle +3
torus2.position.set(0, -0.45, 0) //green -1
torus3.position.set(0, 0, 0.45) //
torus4.position.set(0.3, 0.3, -0.45) //blue top -2
torus5.position.set(0.45, 0.3, 0.3) //red top +3
torus6.position.set(0.45, -0.3, -0.3) // red bottom +3
torus7.position.set(0.3, 0.3, 0.45) //blue top right +5
torus8.position.set(-0.3, -0.3, 0.45) //blue bottom left +5
torus9.position.set(0.3, -0.3, 0.45) //blue bottom right +5
torus10.position.set(-0.3, 0.3, 0.45) //blue top left +5
torus11.position.set(0.3, 0.45, 0.3) //green +6
torus12.position.set(0.3, 0.45, -0.3) // green +6
torus13.position.set(0.3, 0.45, 0) // green +6
torus14.position.set(-0.3, 0.45, 0.3) //green +6
torus15.position.set(-0.3, 0.45, -0.3) //green +6
torus16.position.set(-0.3, 0.45, 0) //green +6
torus17.position.set(-0.3, -0.3, -0.45) //blue bottom -2
torus18.position.set(-0.45, 0.3, 0.3) // red -4
torus19.position.set(-0.45, 0.3, -0.3) // red -4
torus20.position.set(-0.45, -0.3, 0.3) // red -4
torus21.position.set(-0.45, -0.3, -0.3) // red -4

const group = new THREE.Group();
group.add(torus);
group.add(torus2);
group.add(torus3);
group.add(torus4);
group.add(torus5);
group.add(torus6);
group.add(torus7);
group.add(torus8);
group.add(torus9);
group.add(torus10);
group.add(torus11);
group.add(torus12);
group.add(torus13);
group.add(torus14);
group.add(torus15);
group.add(torus16);
group.add(torus17);
group.add(torus18);
group.add(torus19);
group.add(torus20);
group.add(torus21);
cube.add(group);

function time() {
	setTimeout(() => {
		cancelAnimationFrame(id)
	}, 880);
}

function animate() {
	id = requestAnimationFrame(animate)
	cube.rotation.x += 6 * Math.PI / 180;
	renderer.render(scene, camera);
	time()
};

function jeux() {
	switch (aleatoire) {
		case 1:
			animate()
			cube.rotation.x = 4.3
			break;
		case 2:
			animate()
			cube.rotation.x = 2.7
			break;
		case 3:
			animate()
			cube.rotation.y = 4.7
			break;
		case 4:
			animate()
			cube.rotation.y = 1.6
			break;
		case 5:
			animate()
			cube.rotation.y = 6.3
			break;
		case 6:
			animate()
			cube.rotation.x = 1
			break;
	}
}
renderer.render(scene, camera);