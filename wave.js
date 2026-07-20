// Pehli line wala import hata diya hai

// Selecting container and canvas based on your exact CSS ID selector
const container = document.getElementById('wave-container');
const canvas = container.querySelector('canvas');

// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 3, 7); 
camera.lookAt(0, -1, 0);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Creating a dense grid plane
const geometry = new THREE.PlaneGeometry(55, 24, 55, 25);
geometry.rotateX(-Math.PI / 2); // Lay it down flat

// Cache initial vertex positions
const count = geometry.attributes.position.count;
const positionAttribute = geometry.attributes.position;
const initialY = new Float32Array(count);

for (let i = 0; i < count; i++) {
    initialY[i] = positionAttribute.getY(i);
}

// Material matched with your CSS color variable --accent-purple
const material = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6, 
    wireframe: true, 
    transparent: true,
    opacity: 0.35
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Clock for smooth runtime calculations
const clock = new THREE.Clock();

// Animation Loop
function animate() {
    const elapsedTime = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
        const x = positionAttribute.getX(i);
        const z = positionAttribute.getZ(i);

        const primaryWave = Math.sin(x * 0.25 + elapsedTime * 1.4) * 1.1;
        const crossWave = Math.cos(z * 0.2 + elapsedTime * 1.0) * 0.7;
        const noiseWave = Math.sin((x + z) * 0.15 + elapsedTime * 0.8) * 0.4;

        positionAttribute.setY(i, initialY[i] + primaryWave + crossWave + noiseWave);
    }

    geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// Responsiveness
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});

// Run
animate();


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('threeJsSkillsWave');
    if (!container) return;

    // 1. Scene, Camera, and Renderer Setup
    const scene = new THREE.Scene();
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Perspective Camera for 3D depth perception
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 900;
    camera.position.y = 350; // Angles the wave perspective down slightly

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // 2. Wave Particle Grid Parameters
    const SEPARATION = 40; // Distance between dots
    const AMOUNTX = 100;   // Number of dots along X axis
    const AMOUNTY = 60;    // Number of dots along Y axis

    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    // Set initial X and Y mesh distribution
    let i = 0, j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
            positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // X position
            positions[i + 1] = 0;                                          // Y position (height handled in loop)
            positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // Z position

            scales[j] = 1;
            i += 3;
            j++;
        }
    }

    // 3. Geometry and Core Styling
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Material with custom Neon Purple tone inspired by image hierarchy
    const material = new THREE.PointsMaterial({
        color: 0x8a3bf2, 
        size: 3,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 4. Animation Frame Controllers
    let count = 0;

    function animate() {
        requestAnimationFrame(animate);

        const positions = particles.geometry.attributes.position.array;
        const scales = particles.geometry.attributes.scale.array;

        let i = 0, j = 0;

        // Apply Sine Wave Calculations to simulate real flowing movement
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                // Generates interlocking sine wave heights
                positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) + 
                                   (Math.sin((iy + count) * 0.5) * 50);

                // Dynamically changes point sizes as they ride the crests
                scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 4 + 
                            (Math.sin((iy + count) * 0.5) + 1) * 4;

                i += 3;
                j++;
            }
        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.scale.needsUpdate = true;

        renderer.render(scene, camera);
        count += 0.04; // Controls fluid speed
    }

    // 5. Smart Resize Handling
    window.addEventListener('resize', () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        
        renderer.setSize(w, h);
    });

    animate();
});