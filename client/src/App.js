import React, { useEffect, useRef } from 'react';
import { NeatGradient } from '@firecms/neat';
import ReactTypingEffect from 'react-typing-effect';
import NavBar from './NavBar';
import AboutSection from './AboutSection'; // Import About Section
import ProjectsSection from './ProjectsSection'; // Import new Projects Section
import './App.css'; // Ensure your global styles are in the App.css
import JourneySection from './JourneySection'; // Import Journey Section
import LetsConnect from './LetsConnect'; // Import the LetsConnect component

const App = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);
  const letsConnectRef = useRef(null); // Create a reference for the LetsConnect section

  const config = {
    colors: [
      { color: "#fca311", enabled: true },
      { color: "#FFE246", enabled: true },
      { color: "#FDC43F", enabled: true },
      { color: "#bde0fe", enabled: true },
      { color: "#a2d2ff", enabled: false }
    ],
    speed: 4,
    horizontalPressure: 3,
    verticalPressure: 3,
    waveFrequencyX: 2,
    waveFrequencyY: 4,
    waveAmplitude: 5,
    shadows: 0,
    highlights: 2,
    colorBrightness: 1,
    colorSaturation: 3,
    wireframe: false,
    colorBlending: 5,
    backgroundColor: "#003FFF",
    backgroundAlpha: 1,
    resolution: 1
  };

  useEffect(() => {
    if (canvasRef.current) {
      gradientRef.current = new NeatGradient({
        ref: canvasRef.current,
        ...config
      });

      return () => {
        gradientRef.current.destroy();
      };
    }
  }, [config]);

  // Function to scroll to LetsConnect section
  const handleScrollToConnect = () => {
    if (letsConnectRef.current) {
      letsConnectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <NavBar />
      <canvas
        ref={canvasRef}
        style={{
          isolation: 'isolate',
          height: '100vh',
          width: '100%',
          position: 'absolute',
          zIndex: '-1',
          top: 0,
          left: 0,
        }}
      />

      <div className="hero-text">
        <ReactTypingEffect
          text={["👋 Hi, my name is Sarthak."]}
          speed={100}
          eraseDelay={999999999}
          typingDelay={500}
          cursor={"|"}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split('').map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </h1>
            );
          }}
        />
        <h2>I’m a Software Developer based in Indiana, US.</h2>
        <h3>Currently MS CS @ Indiana University Bloomington</h3>
        <div className="button-container">
          <button className="get-in-touch" onClick={handleScrollToConnect}>Get in touch</button>
          <button className="resume-button">Resume</button>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />
      <JourneySection /> 

      {/* Include Journey Section */}
      {/* Assign the reference to LetsConnect section */}
      <section ref={letsConnectRef}>
        <LetsConnect /> 
      </section>
    </div>
  );
};

export default App;
