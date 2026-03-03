import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useProgress } from '@react-three/drei';

import CanvasLoader from '../Loader';

// Stable path: public folder is served at root in Vite
const MODEL_URL = '/sci-fi/scene.gltf';

// Kick off load as soon as Canvas mounts (no module-level preload to avoid early crash)
function PreloadModel() {
  useGLTF.preload(MODEL_URL);
  return null;
}

const Computers = ({ isMobile }) => {
  const computer = useGLTF(MODEL_URL);
  const { active } = useProgress();

  // Wait for all resources (including blob textures) so layout doesn’t race
  if (active) {
    return <CanvasLoader />;
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.015 : 0.02}
        position={isMobile ? [0, -2.5, 0] : [0, -2.2, 0]}
        rotation-y={1}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener fon changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <PreloadModel />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
