
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Car 3D Model component
const CarModel = ({ scrollYProgress }) => {
  // Properly type the meshRef to fix the TS error
  const groupRef = useRef<THREE.Group>(null);
  const [direction, setDirection] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [zoomScale, setZoomScale] = useState(1.5);
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);
  const [rotationStarted, setRotationStarted] = useState(false);
  
  // Use a simple car model - we use a box with wheels as a simplified car
  // In a real app, you would import a GLTF model
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxZoom = 1;
      const minZoom = 1.5;
      const scrollThreshold = 300;
      const rotationTriggerPoint = 1000; // Approximately at "Our Process" section
      
      // Initial zoom effect (zoom out while scrolling down initially)
      if (currentScrollY < scrollThreshold) {
        const newZoom = minZoom - ((currentScrollY / scrollThreshold) * (minZoom - maxZoom));
        setZoomScale(newZoom);
        
        if (currentScrollY > 50 && !hasStartedScrolling) {
          setHasStartedScrolling(true);
        }
      }
      
      // Start rotation only after reaching "Our Process" section
      if (currentScrollY >= rotationTriggerPoint && !rotationStarted) {
        setRotationStarted(true);
      }
      
      // Only determine rotation direction if rotation has started
      if (rotationStarted) {
        if (currentScrollY > lastScrollY) {
          setDirection(1); // Scrolling down - clockwise
        } else if (currentScrollY < lastScrollY) {
          setDirection(-1); // Scrolling up - counterclockwise
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, hasStartedScrolling, rotationStarted]);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Apply scale for zoom effect
      groupRef.current.scale.set(zoomScale, zoomScale, zoomScale);
      
      // Rotate based on scroll direction, but only if rotation has started
      // Use a slower rotation speed (reduced from 0.5 to 0.2)
      if (rotationStarted) {
        groupRef.current.rotation.y += direction * delta * 0.2;
      }
      
      // Slow down rotation when not scrolling
      if (direction !== 0) {
        setDirection(prev => prev * 0.95);
      }
    }
  });
  
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Car body - changed color to white */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Car top/cabin - changed color to white */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[2, 0.8, 1.8]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[1.5, -0.6, 1]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.7} />
      </mesh>
      <mesh position={[1.5, -0.6, -1]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.7} />
      </mesh>
      <mesh position={[-1.5, -0.6, 1]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.7} />
      </mesh>
      <mesh position={[-1.5, -0.6, -1]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.7} />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[2.05, 0, 0.8]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffeb3b" emissive="#ffeb3b" emissiveIntensity={1} />
      </mesh>
      <mesh position={[2.05, 0, -0.8]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffeb3b" emissive="#ffeb3b" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

// Background wrapper
const ScrollBackground3D = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-black">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <CarModel scrollYProgress={scrollYProgress} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
      </Canvas>
    </div>
  );
};

export default ScrollBackground3D;
