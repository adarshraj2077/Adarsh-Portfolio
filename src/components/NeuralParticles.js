import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const PARTICLE_OPTIONS = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'grab',
            },
            resize: { enable: true },
        },
        modes: {
            grab: {
                distance: 140,
                links: { opacity: 0.45 },
            },
        },
    },
    particles: {
        number: {
            value: 40,
            density: { enable: true, width: 600, height: 600 },
        },
        color: { value: ['#00E5CC', '#3b7ff5', '#a78bfa'] },
        links: {
            color: '#00E5CC',
            distance: 130,
            enable: true,
            opacity: 0.15,
            width: 0.8,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: true,
            speed: 0.5,
            straight: false,
        },
        opacity: {
            value: { min: 0.2, max: 0.7 },
            animation: {
                enable: true,
                speed: 0.6,
                sync: false,
            },
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
};

/**
 * NeuralParticles — self-contained lazy component.
 * Includes its own ParticlesProvider so tsparticles stays out of main bundle.
 */
function NeuralParticles() {
    const initSlim = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <ParticlesProvider init={initSlim}>
            <Particles
                id="neural-particles"
                options={PARTICLE_OPTIONS}
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />
        </ParticlesProvider>
    );
}

export default NeuralParticles;
