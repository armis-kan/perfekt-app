import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const WaterSpray = ({ gunPosition = [5, 5, 5], targetPosition = [0, 0, 0], color = 'white' }) => {
  const particleCount = 10000; // Increased particle count for wider and smoother spray
  const particlesRef = useRef();

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const size = 128;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    return new THREE.CanvasTexture(canvas);
  }, []);
  
  // Memoize particle data
  const { positions, velocities, normalizedDirection } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    
    // Calculate and normalize direction
    const directionVector = new THREE.Vector3(
      targetPosition[0] - gunPosition[0],
      targetPosition[1] - gunPosition[1],
      targetPosition[2] - gunPosition[2]
    );
    const normalizedDirection = directionVector.normalize();
    
    for (let i = 0; i < particleCount; i++) {
      const [x, y, z] = gunPosition;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Set initial velocity with wider distribution
      const spreadFactor = 0.5; // Adjust for wider spray
      velocities.push([
        normalizedDirection.x + (Math.random() - 0.5) * spreadFactor,
        normalizedDirection.y + (Math.random() - 0.5) * spreadFactor,
        normalizedDirection.z + (Math.random() - 0.5) * spreadFactor,
      ]);
    }
    
    return { positions, velocities, normalizedDirection };
  }, [particleCount, gunPosition, targetPosition]);

  useEffect(() => {
    if (particlesRef.current) {
      particlesRef.current.geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );
    }
  }, [positions]);

  useFrame(() => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < particleCount; i++) {
      // Smoothly update particle positions
      positions[i * 3] += velocities[i][0] * 0.1;
      positions[i * 3 + 1] += velocities[i][1] * 0.1;
      positions[i * 3 + 2] += velocities[i][2] * 0.1;

      velocities[i][1] -= 0.001;  // Gravity effect to make particles fall

      // Continuously reset particles to ensure continuous flow
      if (positions[i * 3 + 1] < gunPosition[1] - 5 || Math.abs(positions[i * 3] - targetPosition[0]) > 50) {
        const [x, y, z] = gunPosition;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        
        velocities[i] = [
          normalizedDirection.x + (Math.random() - 0.5) * 0.5, // Wider spread
          normalizedDirection.y + (Math.random() - 0.5) * 0.5, // Wider spread
          normalizedDirection.z + (Math.random() - 0.5) * 0.5, // Wider spread
        ];
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.1} // Size of each particle
        color={color} // Use color prop
        opacity={0.7}
        transparent
        map={texture} // Use circular texture
      />
    </points>
  );
};

export default WaterSpray;
