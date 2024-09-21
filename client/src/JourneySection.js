import React from 'react';
import './JourneySection.css';

const JourneySection = () => {
    return (
        // Add the id attribute here to link with the navbar
        <section id="journey" className="journey-container"> 
            <div className="intro-section">
                <h1 id="my-journey"><span className="my-color">My</span> Journey</h1>
                <p>Pioneering solutions that balance business goals with real human needs, I bridge tech and people through design, algorithms, and data-driven insights.</p>
                <button className="resume-button-journey-section">Resume</button>
            </div>
            <div className="experience-section">
                <div className="experience">
                    <h3>Full Stack Developer Intern, DataToBiz</h3>
                    <p>Jan 2023–July 2023</p>
                    <ul>
                        <li>Enhanced API interoperability and implemented version control with Git.</li>
                        <li>Developed a JavaScript-based platform for generating educational questions.</li>
                        <li>Integrated AI algorithms for personalized student quiz recommendations.</li>
                    </ul>
                </div>
                <div className="experience">
                    <h3>Full Stack Developer Intern, Highradius</h3>
                    <p>Jan 2022–April 2022</p>
                    <ul>
                        <li>Developed AI models to predict invoice payment dates with 88.69% accuracy.</li>
                        <li>Designed a responsive web application with advanced data visualization.</li>
                        <li>Implemented data analytics and visualization with React.js and Chart.js.</li>
                    </ul>
                </div>
                <div className="experience">
                    <h3>Mobile Application Developer Intern, ARM Tech</h3>
                    <p>Aug 2018–Dec 2018</p>
                    <ul>
                        <li>Developed a hotel booking platform for religious sites using Flutter.</li>
                        <li>Integrated MVC architecture and GetX for performance enhancement.</li>
                        <li>Ensured cross-device compatibility with responsive design.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default JourneySection;
