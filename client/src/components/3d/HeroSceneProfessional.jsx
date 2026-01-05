import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

function HeroSceneProfessional() {
    const knotRef = useRef();
    const sphereRef1 = useRef();
    const sphereRef2 = useRef();

    useFrame((state, delta) => {
        // Smooth rotation for the main knot
        if (knotRef.current) {
            knotRef.current.rotation.x += delta * 0.1;
            knotRef.current.rotation.y += delta * 0.15;
        }
        // Orbiting spheres
        const t = state.clock.getElapsedTime();
        if (sphereRef1.current) {
            sphereRef1.current.position.x = Math.sin(t) * 2.5;
            sphereRef1.current.position.z = Math.cos(t) * 2.5;
            sphereRef1.current.position.y = Math.sin(t * 0.5) * 1;
        }
        if (sphereRef2.current) {
            sphereRef2.current.position.x = Math.cos(t * 0.8) * 3;
            sphereRef2.current.position.z = Math.sin(t * 0.8) * 3;
            sphereRef2.current.position.y = Math.cos(t * 0.5) * 1.5;
        }
    });

    return (
        <group>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Main Glass/Crystal Knot - Represents complexity and structure */}
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <TorusKnot args={[1, 0.3, 128, 16]} ref={knotRef} position={[2, 0, 0]}>
                    <meshPhysicalMaterial
                        color="#ffffff"
                        transmission={0.6}  // Glass-like transmission
                        opacity={1}
                        metalness={0.2}
                        roughness={0}
                        ior={1.5}
                        thickness={2}
                        clearcoat={1}
                        attenuationDistance={0.5}
                        attenuationColor="#a78bfa" // Purple tint inside
                    />
                </TorusKnot>
            </Float>

            {/* Orbiting Tech Spheres - Represents data/nodes */}
            <Sphere ref={sphereRef1} args={[0.2, 32, 32]}>
                <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2} />
            </Sphere>

            <Sphere ref={sphereRef2} args={[0.15, 32, 32]}>
                <meshStandardMaterial color="#d946ef" emissive="#d946ef" emissiveIntensity={2} />
            </Sphere>

            {/* Lights to make the glass sparkle */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#a78bfa" />
            <pointLight position={[5, 0, 5]} intensity={2} color="#00e5ff" />
        </group>
    );
}

export default HeroSceneProfessional;
