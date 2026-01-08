import { Canvas } from '@react-three/fiber'
import { OrbitControls, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Suspense } from 'react'
import { Room } from './Room.jsx'
import HeroLights from './HeroLights.jsx'
import Particles from './Particles.jsx'
import CanvasLoader from '../CanvasLoader.jsx'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            dpr={[1, 1.5]} // slightly reduced max dpr for better performance on high-res screens
            gl={{
                antialias: false, // Disabling antialias can significantly boost performance
                alpha: true,
                powerPreference: "high-performance",
                stencil: false,
                depth: true
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <AdaptiveDpr pixelated />
                <AdaptiveEvents />
                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />

                <HeroLights />

                <Particles count={isMobile ? 100 : 300} />

                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                </group>
            </Suspense>
        </Canvas >
    )
}

export default HeroExperience