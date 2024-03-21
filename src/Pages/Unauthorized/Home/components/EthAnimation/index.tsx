import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/Addons.js';
import { HandAnimationContainer } from './styles';

const Scene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    let shouldAnimate = true;

    const handleMouseDonw = () => {
      shouldAnimate = false;
    };
    const handleMouseUp = () => {
      shouldAnimate = true;
    };
    mountRef.current.addEventListener('mousedown', handleMouseDonw);
    mountRef.current.addEventListener('mouseup', handleMouseUp);

    //Camera scene and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 600, 1, 15);
    const controls = new OrbitControls(camera, mountRef.current);
    //remove scroll from orbit controls
    controls.enableZoom = false;
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000, 0);

    camera.position.z = 7;
    camera.position.y = 0;
    camera.position.x = 0.4;

    renderer.setSize(600, 600);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    const FBXloader = new FBXLoader();

    const light = new THREE.AmbientLight(0xf0f0f0, 10);
    light.position.set(0, 1, 8);
    scene.add(light);

    const directionalLightPurple = new THREE.DirectionalLight(0xa64aff, 20);
    directionalLightPurple.position.set(0, 2, 7);
    scene.add(directionalLightPurple);

    const directionalLightBlueRight = new THREE.DirectionalLight(0xffc559, 1);
    directionalLightBlueRight.position.set(50, -2, 7);
    scene.add(directionalLightBlueRight);

    const directionalLightGreen = new THREE.DirectionalLight(0x00ffaa, 10);
    directionalLightGreen.position.set(-50, -2, 7);
    scene.add(directionalLightGreen);

    const directionalLightBlueLeft = new THREE.DirectionalLight(0x00e5ff, 5);
    directionalLightBlueLeft.position.set(-50, -2, 7);
    scene.add(directionalLightBlueLeft);

    let objectRef: THREE.Group<THREE.Object3DEventMap>;

    FBXloader.load('models/etherem.FBX', (object) => {
      object.position.x = 0;
      object.position.y = 0;
      object.position.z = 0;
      objectRef = object;
      scene.add(object);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (objectRef && shouldAnimate) objectRef.rotateZ(0.009);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
    //clean up
    return () => {
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousedown', handleMouseDonw);
        mountRef.current.removeEventListener('mouseup', handleMouseUp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <HandAnimationContainer>
      <div ref={mountRef} />
    </HandAnimationContainer>
  );
};

export default Scene;
