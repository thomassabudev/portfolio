import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/Navbar';
import HeroSceneProfessional from './components/3d/HeroSceneProfessional';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Skills from './sections/Skills';

import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <div id="canvas-container">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <HeroSceneProfessional />
          </Suspense>
        </Canvas>
      </div>

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
