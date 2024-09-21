import React, { useState } from 'react';
import './ProjectsList.css';

const ProjectsList = () => {
  const [activeProject, setActiveProject] = useState(0); // Initial active project

  const projects = [
    {
      title: "Rock classification",
      description: (
        <>
          <p>
          I designed and implemented advanced visualizations using dimensionality reduction techniques like PCA, t-SNE, LLE, and MDS to reduce high-dimensional image data to 2D, enabling intuitive scatter plots that grouped images by rock categories. These visualizations incorporated actual rock images, allowing for a more interpretable and meaningful representation of the data. In parallel, I conducted a detailed comparison between automated and human feature extraction methods by applying Procrustes analysis on the embeddings, which were reduced to 8 dimensions, highlighting the alignment between the different extraction methods. For clustering, I applied algorithms such as K-Means and Expectation-Maximization (EM), ensuring that at least 90% of the variance was preserved during dimensionality reduction to maintain the data's integrity.<br/>
          Furthermore, I developed a neural network model for rock image classification using TensorFlow and Keras, building a deep architecture with multiple hidden layers. I incorporated ReLU activation functions in the hidden layers and softmax activation in the output layer to ensure accurate multi-class classification. The model was optimized using the Adam optimizer, and its performance was fine-tuned through careful validation with a separate dataset. This comprehensive approach ensured the network's robustness and improved classification accuracy across different rock categories.
          </p>
          
        </>
      ),
      stack: [
        "Python",
        "t-SNE",
        "PCA",
        "K-Means Clustering",
        "Procrustes Analysis"
      ]
    },
    {
      title: " Amazon Reviews Topic Modeling",
      description: (
        <>
          <p>
          Amazon Reviews Topic Modeling | Python, scikit-learn, NLTK, Pandas, CountVectorizer, LDA
          Applied Latent Dirichlet Allocation (LDA) to extract and visualize key topics from Amazon review data, providing actionable insights. Key steps included preprocessing and vectorizing text data, continuous integration with TravisCI, and enhancing a chatbot with RoBERTa for improved sentiment analysis.
          </p>
          <p>Key Features:</p>
          <ul>
            <li>Feature 1: Responsive design using CSS Flexbox and Grid.</li>
            <li>Feature 2: Dynamic user interactions with React hooks and state management.</li>
            <li>Feature 3: Integration with third-party APIs for data fetching.</li>
          </ul>
        </>
      ),
      stack: ["React", "JavaScript", "CSS"]
    },
    {
      title: "Sample text 3",
      description: (
        <>
          <p>
            This is the description for Sample text 3. It contains more information about the project and its details.
            It involved building a REST API back-end using Node.js and Express, with MongoDB as the database.
          </p>
          <p>Key Features:</p>
          <ul>
            <li>Feature 1: RESTful API design using Express.</li>
            <li>Feature 2: CRUD operations with MongoDB and Mongoose.</li>
            <li>Feature 3: User authentication using JWT.</li>
          </ul>
        </>
      ),
      stack: ["Node.js", "Express", "MongoDB"]
    },
    {
      title: "Sample text 4",
      description: (
        <>
          <p>
            This is the description for Sample text 4. It contains more information about the project and its details. 
            The project involves various complex data processing techniques and web scraping. Additionally, 
            it integrates the use of machine learning algorithms for data analysis, making it one of the most 
            advanced projects in the portfolio.
          </p>
          <p>Key Features:</p>
          <ul>
            <li>Feature 1: Detailed data scraping using Python and BeautifulSoup.</li>
            <li>Feature 2: Data analysis and machine learning integration.</li>
            <li>Feature 3: Automated reporting and visualization.</li>
          </ul>
        </>
      ),
      stack: ["Docker", "Kubernetes", "AWS"]
    },
    {
      title: "Sample text 5",
      description: (
        <>
          <p>
            This is the description for Sample text 5. It contains more information about the project and its details. 
            The project focuses on developing responsive websites using vanilla HTML, CSS, and JavaScript.
          </p>
          <p>Key Features:</p>
          <ul>
            <li>Feature 1: Semantic HTML5 structure for better accessibility.</li>
            <li>Feature 2: Mobile-first responsive design using CSS media queries.</li>
            <li>Feature 3: JavaScript event handling for interactive UI elements.</li>
          </ul>
        </>
      ),
      stack: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const handleClick = (index) => {
    setActiveProject(index); // Update the active project on click
  };

  return (
    <div className="projects-section">
      <div className="projects-list">
        <h2>My Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <button
                className={index === activeProject ? 'active' : ''}
                onClick={() => handleClick(index)} // Set the active project on click
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="project-description">
        <div className="center-content">
          <h3>{projects[activeProject].title}</h3>
          <div className="stack-container">
            {projects[activeProject].stack.map((tech, idx) => (
              <div key={idx} className="stack-item">{tech}</div>
            ))}
          </div>
          {projects[activeProject].description}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
