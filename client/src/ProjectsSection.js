import React, { useState } from 'react';
import './ProjectsSection.css'; // Assuming the styles are defined in a CSS file

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Rock classification',
      brief: 'I designed advanced visualizations using dimensionality reduction techniques like PCA, t-SNE, LLE, and MDS to reduce high-dimensional rock image data to 2D scatter plots, grouping images by categories.',
      approach: 'In this project, I applied PCA, t-SNE, LLE, and MDS to transform high-dimensional rock image data into 2D scatter plots, categorizing images by rock types and incorporating actual visuals for enhanced interpretability. I also compared automated feature extraction with human annotations using Procrustes analysis to evaluate alignment of embeddings reduced to 8 dimensions, preserving over 90% variance.For clustering, I utilized K-Means and Expectation-Maximization algorithms to identify distinct groups within the data, aiding in structured analysis. Additionally, I developed a neural network using TensorFlow and Keras, incorporating multiple hidden layers with ReLU activation and a softmax output layer, optimized with the Adam optimizer. This setup was fine-tuned using a validation dataset, improving accuracy and performance in classifying different rock types, making the model highly effective for practical geological applications.',
      imageUrl: 'https://raw.githubusercontent.com/Sarthak1904/personal-website/main/pexels-slover-940271.jpg'
    },
    {
      title: ' Amazon Reviews Topic Modeling',
      brief: 'I applied PCA, t-SNE, LLE, and MDS to reduce high-dimensional rock image data to 2D scatter plots, grouping images by categories for clearer visualization and analysis of geological patterns.',
      approach: 'For this project, I utilized Python and several libraries including NLTK for natural language processing, Pandas for data manipulation, and scikit-learn for implementing machine learning algorithms. The core of the analysis involved applying Latent Dirichlet Allocation (LDA) after extensive data preprocessing which included cleaning, normalizing, and vectorizing the text data using CountVectorizer and TF-IDF to optimize the input for the model.The LDA model helped in extracting significant topics from the Amazon customer reviews, which were then visually represented through Python’s Matplotlib and Seaborn libraries to provide actionable insights. These insights are crucial for understanding customer preferences and improving service delivery.Additionally, I integrated continuous delivery with TravisCI to automate the deployment process whenever the model is updated or refined. This ensured efficiency and consistency in performance. To further enhance user engagement, I incorporated RoBERTa in an interactive chatbot, significantly improving its response relevance and sentiment analysis accuracy.',
      imageUrl: 'https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png'
    },
    {
      title: 'Financial Performance Dashboard',
      brief: 'Developed a Financial Performance Dashboard using Power BI, DAX, and SQL to enhance financial visibility and decision-making. This dashboard includes advanced visualizations for profit and loss, cash flow, and budget versus actual comparisons. Real-time data integration and scenario analyses improve forecasting accuracy and budget compliance.',
      approach: 'In this project, I leveraged Power BI, DAX, and SQL to construct a dynamic Financial Performance Dashboard that provides comprehensive visualizations for key financial metrics such as profit and loss, cash flow, and budget vs. actual comparisons. These visualizations were designed to streamline complex financial data into understandable and actionable insights, reducing financial analysis time by 30%. I integrated real-time data sources to ensure that the dashboard reflects the most current financial conditions, enabling timely trend analysis and scenario planning. This feature improved forecasting accuracy by 25% and facilitated more responsive financial strategies.Furthermore, I implemented scenario analysis tools within the dashboard, allowing for the simulation of various financial outcomes based on different assumptions. This capability enhanced strategic financial planning and decision-making, leading to a 20% increase in budget compliance. Custom visualizations were also developed to highlight critical financial issues and opportunities, making it easier for stakeholders to make informed decisions quickly.Overall, this dashboard has become an indispensable tool for the organization, enhancing financial transparency and empowering leadership with the data needed to optimize financial performance and strategic planning.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Flickflix Movie Booking Website ',
      brief: 'Developed a Movie Booking Website using the MERN stack, featuring user authentication with JWT, an intuitive booking system with seat selection, and a comprehensive admin panel for managing movies, theaters, and showtimes.',
      approach: 'For this project, I utilized the MERN (MongoDB, Express.js, React.js, Node.js) stack to develop a robust and user-friendly movie booking website. This platform supports secure user access via JWT authentication and offers a seamless booking experience that includes seat selection and various showtime options.The backend, built with Node.js and Express.js, interacts with MongoDB to manage dynamic data storage for movies, theaters, showtimes, and bookings. For frontend functionality, I used React.js to create an interactive and responsive interface, enhancing the user experience with real-time updates as selections are made.I integrated Postman API during development to test and debug the API endpoints effectively, ensuring reliable application performance. Additionally, I designed an admin panel that allows for easy management of website content and user activity, facilitating efficient oversight and maintenance.This comprehensive approach not only streamlined the booking process but also ensured that the website could handle multiple users simultaneously, maintaining performance and security. This system effectively meets the needs of both customers and administrators, supporting a smooth cinema-going experience.',
      imageUrl: 'https://images.pexels.com/photos/3866658/pexels-photo-3866658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    // Add the id attribute here to link with the navbar
    <section id="work" className="projects-section-container"> 
      <h1 id="my-projects"><span className="my-color">My</span> Projects</h1>

      <div className="project-card">
        <h2>{projects[currentIndex].title}</h2>
        <div className="tags">
          <button>Clustering</button>
          <button>Image Processing</button>
          <button>Neural Networks</button>
        </div>
        <div className="content">
          <div className="brief">
            <h3>Project brief</h3>
            <p>{projects[currentIndex].brief}</p>
            <div className="project-image">
              <img 
                src={projects[currentIndex].imageUrl}
                alt={`${projects[currentIndex].title} Project`}
              />
            </div>
          </div>
          <div className="approach">
            <h3>My approach</h3>
            <p>{projects[currentIndex].approach}</p>
          </div>
        </div>
      </div>

      <div className="nav-buttons">
        <button className="left-arrow" onClick={handlePrev}>
          ←
        </button>
        <button className="right-arrow" onClick={handleNext}>
          →
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
