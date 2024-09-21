import React from 'react';
import Lottie from 'lottie-react';
import './AboutSection.css'; // Make sure to import the related CSS

// Embed the JSON animation data directly here
const circleAnimation = {
  "v": "5.6.1",
  "fr": 30,
  "ip": 0,
  "op": 30,
  "w": 20,
  "h": 20,
  "nm": "circle-animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Shape Layer 1",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100, "ix": 11 },
        "r": { "a": 0, "k": 0, "ix": 10 },
        "p": { "a": 0, "k": [10, 10, 0], "ix": 2 },
        "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
        "s": { "a": 0, "k": [75, 75, 100], "ix": 6 }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [
                    [2.399, -4.344],
                    [-4.344, -2.399],
                    [-2.399, 4.344],
                    [4.344, 2.399]
                  ],
                  "o": [
                    [-2.399, -4.344],
                    [-4.344, 2.399],
                    [2.399, 4.344],
                    [4.344, -2.399]
                  ],
                  "v": [
                    [0, -4.344],
                    [-4.344, 0],
                    [0, 4.344],
                    [4.344, 0]
                  ],
                  "c": true
                },
                "ix": 2
              },
              "nm": "Path 1",
              "mn": "ADBE Vector Shape - Group",
              "hd": false,
              "_render": true
            },
            {
              "ty": "fl",
              "c": { "a": 0, "k": [1, 0.6471, 0, 1], "ix": 4 },
              "o": { "a": 0, "k": 59, "ix": 5 },
              "r": 1,
              "bm": 0,
              "nm": "Fill 1",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false,
              "_render": true
            },
            {
              "ty": "tr",
              "p": { "a": 0, "k": [0, 0], "ix": 2 },
              "a": { "a": 0, "k": [0, 0], "ix": 1 },
              "s": { "a": 0, "k": [146.977, 146.977], "ix": 3 },
              "r": { "a": 0, "k": 0, "ix": 6 },
              "o": { "a": 0, "k": 100, "ix": 7 },
              "sk": { "a": 0, "k": 0, "ix": 4 },
              "sa": { "a": 0, "k": 0, "ix": 5 },
              "nm": "Transform",
              "_render": true
            }
          ],
          "nm": "Ellipse 1",
          "np": 3,
          "cix": 2,
          "bm": 0,
          "ix": 1,
          "mn": "ADBE Vector Group",
          "hd": false,
          "_render": true
        }
      ],
      "ip": 0,
      "op": 30,
      "st": 0,
      "bm": 0,
      "completed": true
    }
  ],
  "markers": [],
  "__complete": true
};

const AboutSection = () => {
  return (
    // Add the id attribute here to link with the navbar
    <section id="about" className="about-section"> 
      <div className="about-content">
        <img
          src="https://raw.githubusercontent.com/Sarthak1904/personal-website/main/IMG_4941%5B1%5D%20(1)_11zon.jpg"
          alt="Profile"
          className="profile-image"
        />
        <div className="about-text justify-start">
          <h1 className="sarthak"><span className='hello'>Hello,</span> I'm Sarthak</h1>
          <p>/sar-thuck/</p>
          <p>
            I am a Full Stack Developer and Machine Learning Enthusiast based in the US. I build solutions
            that simplify complex processes and create engaging experiences that leave a lasting impact. Above
            all, I develop to make technology more intuitive and human-centric, empowering people through
            innovation.
          </p>
          <p>
            My expertise lies in bridging the gap between humans and technology through thoughtful design, advanced
            algorithms, and data-driven insights, ensuring that every solution I create is both impactful and
            meaningful.
          </p>
          <div className="status">
            <Lottie animationData={circleAnimation} loop={true} className="status-icon" />
            <span>Actively looking for a full-time/internship position</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
