import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ParticleField, GridFloor } from './ParticleField';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

interface SceneProps {
  className?: string;
  interactive?: boolean;
  particleCount?: number;
}

export function Scene({ className = '', interactive = false, particleCount = 300 }: SceneProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={60} />
          
          {interactive && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          )}

          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />

          <ParticleField count={particleCount} />
          <GridFloor />

          <fog attach="fog" args={['#0a0a0f', 5, 15]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function FloatingOrbs() {
  return (
    <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <ambientLight intensity={0.3} />
        
        {/* Green Orb */}
        <mesh position={[-2, 1, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#00ff88"
            emissive="#00ff88"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Blue Orb */}
        <mesh position={[2, -1, -1]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Amber Orb */}
        <mesh position={[0, 0.5, 1]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial
            color="#ffb800"
            emissive="#ffb800"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>

        <ParticleField count={100} size={0.02} />
      </Suspense>
    </Canvas>
  );
}

