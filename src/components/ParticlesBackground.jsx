import React from 'react';
import { Particles } from '@tsparticles/react'; // Correct React wrapper import
import { loadFull } from 'tsparticles'; // Load full engine for features

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    // Initializes the tsParticles engine
    console.log("tsParticles engine loaded:", engine); // Debugging purpose
    await loadFull(engine); // Load all features into the engine
  };

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent', // Transparent background
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#ffffff', // Particle color
      },
      links: {
        enable: true,
        color: '#ffffff', // Link color
        distance: 150,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
      },
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle', // Particle shape
      },
      size: {
        value: { min: 1, max: 5 }, // Particle size
      },
    },
    detectRetina: true, // Support retina displays
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;
