import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

function HeroScene() {
    return (
        <group>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[2, 0, 0]} scale={2}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <MeshDistortMaterial
                        color="#6d28d9"
                        attach="material"
                        distort={0.5}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.5}>
                <mesh position={[-3, -2, -2]} scale={1.5}>
                    <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />
                    <meshStandardMaterial color="#06b6d4" roughness={0.1} metalness={0.6} />
                </mesh>
            </Float>

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#d946ef" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
}

export default HeroScene;
