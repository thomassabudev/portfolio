import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, Text, ContactShadows } from '@react-three/drei';

function Laptop() {
    const group = useRef();
    const [codeLines, setCodeLines] = useState([
        "import React from 'react';",
        "function App() {",
        "  return (",
        "    <div className='app'>",
        "       <h1>Hello World</h1>",
        "    </div>",
        "  );",
        "}",
        "export default App;",
        "// MERN Stack Initialized",
        "// Server running on port 5000",
        "// DB Connected..."
    ]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Floating animation
        group.current.rotation.x = -0.1 + Math.cos(t / 4) / 8;
        group.current.rotation.y = Math.sin(t / 4) / 4;
        group.current.position.y = Math.sin(t / 1.5) / 5;
    });

    return (
        <group ref={group} rotation-y={-Math.PI / 2}> {/* Initial rotation to face user */}

            {/* --- Laptop Base --- */}
            <group position={[0, -0.75, 0]}>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[4.2, 0.2, 2.8]} />
                    <meshStandardMaterial color="#2d2d2d" roughness={0.3} metalness={0.8} />
                </mesh>
                {/* Trackpad */}
                <mesh position={[0, 0.11, 0.8]}>
                    <planeGeometry args={[1.2, 0.8]} />
                    <meshStandardMaterial color="#3a3a3a" roughness={0.4} />
                </mesh>
                {/* Keyboard Area (Simplified) */}
                <mesh position={[0, 0.11, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[3.8, 1.4]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
                </mesh>
            </group>

            {/* --- Laptop Screen (Hinged) --- */}
            {/* Pivoted at the back of the base (z = -1.4 relative to center, but here relative to hinge) */}
            <group position={[0, -0.65, -1.4]} rotation={[Math.PI / 10, 0, 0]}> {/* Open angle ~100 deg */}
                {/* Lid Back */}
                <mesh position={[0, 1.4, 0]}>
                    <boxGeometry args={[4.2, 2.8, 0.1]} />
                    <meshStandardMaterial color="#222" roughness={0.3} metalness={0.8} />
                </mesh>

                {/* Screen Bezel */}
                <mesh position={[0, 1.4, 0.06]}>
                    <boxGeometry args={[4.0, 2.6, 0.01]} />
                    <meshStandardMaterial color="black" roughness={0.2} metalness={0.8} />
                </mesh>

                {/* The LCD Screen (Emissive) */}
                <mesh position={[0, 1.4, 0.07]}>
                    <planeGeometry args={[3.8, 2.4]} />
                    <meshBasicMaterial color="#0f172a" />
                </mesh>

                {/* --- Code Content on Screen --- */}
                <group position={[-1.7, 2.4, 0.08]} scale={0.15}>
                    <Text
                        color="#00e5ff" // Cyan text
                        anchorX="left"
                        anchorY="top"
                        fontSize={0.8}
                        maxWidth={20}
                        lineHeight={1.5}
                    >
                        {codeLines.join('\n')}
                    </Text>
                    {/* Cursor Blink */}
                    <Text
                        position={[0, -codeLines.length * 1.2, 0]}
                        color="#00e5ff"
                        fontSize={0.8}
                    >
                        _
                    </Text>
                </group>

                {/* Fake Screen Glow using PointLight to avoid RectAreaLight crash */}
                <pointLight
                    distance={3}
                    intensity={2}
                    color="#00e5ff"
                    position={[0, 1.4, 0.5]}
                />
            </group>
        </group>
    );
}

function HeroSceneLaptop() {
    return (
        <group>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <Laptop />
            </Float>

            <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />

            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a78bfa" />
        </group>
    );
}

export default HeroSceneLaptop;
