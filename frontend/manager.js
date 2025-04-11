import React, { useEffect } from "react";
import * as THREE from "three";
import "./styles.css";

const ManagerWorkOrder = () => {
  useEffect(() => {
    // Initialize Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 300);
    document.getElementById("threejs-scene").appendChild(renderer.domElement);

    // Create a rotating cube (Placeholder for a car model)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div className="manager-workorder">
      <header>
        <h1>WO Creation - Manager Panel</h1>
      </header>
      
      <main>
        <section className="work-order">
          <h2>Work Order Details</h2>
          <label>Equipment ID: <input type="text" defaultValue="ES/PCF/1900" /></label>
          <label>Area: <input type="text" defaultValue="Thermal Transfer" /></label>
          <label>WO Number: <input type="text" defaultValue="PMTSPM1900" /></label>
          <label>Maintenance Type: <input type="text" defaultValue="PM Schedule" /></label>
          <label>Priority: <input type="text" defaultValue="Medium" /></label>
          <label>Start Time: <input type="datetime-local" /></label>
          <label>End Time: <input type="datetime-local" /></label>
        </section>
        
        <section className="work-allotment">
          <h2>Work Allotment</h2>
          <p>Assigned To: <strong>Zagriatski Serguei</strong></p>
          <p>Department: <strong>Central Maintenance</strong></p>
          <p>Contact Number: <strong>543041057</strong></p>
        </section>
        
        <section className="task-list">
          <h2>Task List</h2>
          <ul>
            <li>Engine oil change</li>
            <li>Brake pad inspection</li>
            <li>Tire pressure check</li>
            <li>Battery health test</li>
            <li>Coolant level inspection</li>
          </ul>
        </section>
        
        <section className="resources-list">
          <h2>Resources List</h2>
          <p>Mechanical Maintenance Supervisor - 1</p>
          <p>Technicians - 2</p>
          <p>Helpers - 2</p>
          <p>Safety Inspector</p>
        </section>
        
        <section className="threejs-container">
          <h2>3D Work Order Model</h2>
          <div id="threejs-scene"></div>
        </section>
      </main>
    </div>
  );
};

export default ManagerWorkOrder;
