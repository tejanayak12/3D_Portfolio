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
            dpr={[1, 2]} // limit pixel ratio for performance
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
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

                <Particles count={isMobile ? 200 : 500} />

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