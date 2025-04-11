document.addEventListener("DOMContentLoaded", function () {
    fetch("../backend/fetch_workorders.php")
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById("workorderTable");
            data.forEach(workorder => {
                const row = table.insertRow();
                row.innerHTML = `<td>${workorder.workorder_id}</td>
                                 <td>${workorder.asset_id}</td>
                                 <td>${workorder.status}</td>
                                 <td>${workorder.assigned_to || "Unassigned"}</td>`;
            });
        })
        .catch(error => console.error("Error fetching work orders:", error));
});
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 300);

    // Append Three.js scene
    const sceneContainer = document.getElementById("threejs-scene");
    sceneContainer.innerHTML = ""; // Clear previous content
    sceneContainer.appendChild(renderer.domElement);

    // Create a rotating cube (Placeholder for a car model)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 300);
    
    // Append Three.js scene
    const sceneContainer = document.getElementById("threejs-scene");
    sceneContainer.innerHTML = ""; // Clear previous content
    sceneContainer.appendChild(renderer.domElement);

    // Add a Ground Plane
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Add a 3D Cube (Placeholder for a Car Model)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = 0.5;
    scene.add(cube);

    // Add Light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Position Camera
    camera.position.set(3, 3, 5);
    camera.lookAt(0, 0, 0);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});



document.getElementById('workorderForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const workOrder = {
        equipmentId: document.getElementById('equipmentId').value,
        area: document.getElementById('area').value,
        woNumber: document.getElementById('woNumber').value,
        maintenanceType: document.getElementById('maintenanceType').value,
        priority: document.getElementById('priority').value,
        startTime: document.getElementById('startTime').value,
        endTime: document.getElementById('endTime').value
    };

    await fetch('http://localhost:5502/api/WorkOrders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(workOrder)
    });

    this.reset();
    loadWorkOrders();
});

document.getElementById('toggleViewBtn').addEventListener('click', function() {
    const formSection = document.querySelector('.workorder-form');
    const historySection = document.querySelector('.workorder-history');
    const threejsSection = document.querySelector('.threejs-container');
    if (formSection.style.display === 'none') {
        formSection.style.display = 'block';
        historySection.style.display = 'none';
        threejsSection.style.display = 'none';
        this.textContent = 'View Work Order History';
    } else {
        formSection.style.display = 'none';
        historySection.style.display = 'block';
        threejsSection.style.display = 'block';
        this.textContent = 'Create Work Order';
        loadWorkOrders();
    }
});

async function loadWorkOrders() {
    const response = await fetch('http://localhost:3000/api/workorders');
    const workOrders = await response.json();
    const historyTableBody = document.getElementById('historyTableBody');
    historyTableBody.innerHTML = '';
    workOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.equipmentId}</td>
            <td>${order.area}</td>
            <td>${order.woNumber}</td>
            <td>${order.maintenanceType}</td>
            <td>${order.priority}</td>
            <td>${new Date(order.startTime).toLocaleString()}</td>
            <td>${new Date(order.endTime).toLocaleString()}</td>
        `;
        historyTableBody.appendChild(row);
    });
}

