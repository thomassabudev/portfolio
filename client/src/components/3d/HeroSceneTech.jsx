import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Stars, Float } from '@react-three/drei';

function HeroSceneTech() {
    const meshRef = useRef();

    useFrame((state, delta) => {
        // Continuous rotation
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Icosahedron args={[1.5, 0]} ref={meshRef} position={[2, 0, 0]}>
                    <meshBasicMaterial color="#6d28d9" wireframe />
                </Icosahedron>
            </Float>

            {/* Inner shape to give it volume */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Icosahedron args={[1.4, 0]} position={[2, 0, 0]}>
                    <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} />
                </Icosahedron>
            </Float>

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
        </group>
    );
}

export default HeroSceneTech;
