import {
  FaPython, FaJava, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaLinux
} from 'react-icons/fa';
import {
  SiJavascript, SiPostgresql, SiMongodb, SiRedis, SiExpress, SiDjango, SiFlask, SiCplusplus,
  SiGooglecloud, SiVisualstudiocode, SiJupyter, SiPostman, SiTailwindcss
} from 'react-icons/si';

import { FiZap } from 'react-icons/fi'; 


import sosGameImg from '../assets/images/sos-game.jpg';
import schedulrImg from '../assets/images/schedulr-app.jpg';
import stockPredictorImg from '../assets/images/stock-predictor.jpg';
import logisticsImg from '../assets/images/logistics-dashboard.jpg';
import currencyTrackerImg from '../assets/images/currency-tracker.jpg';
import ballStatsImg from '../assets/images/ball-stats.jpg';

export const categorizedSkills = {
  "Programming Languages": [
    { name: 'Python', icon: FaPython, color: '#f4ac45' },
    { name: 'Java', icon: FaJava, color: '#f24333' },
    { name: 'C++', icon: SiCplusplus, color: '#07beb8' },
    { name: 'JavaScript (ES6)', icon: SiJavascript, color: '#f4ac45' },
  ],
  "Frontend Technologies": [
    { name: 'React.js', icon: FaReact, color: '#07beb8' },
    { name: 'HTML5', icon: FaHtml5, color: '#f24333' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#07beb8' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#07beb8' },
    { name: 'Framer Motion', icon: FiZap, color: '#d946ef' },
  ],
  "Backend Development": [
    { name: 'Node.js', icon: FaNodeJs, color: '#07beb8' },
    { name: 'Express.js', icon: SiExpress, color: '#fefffe' },
    { name: 'Django', icon: SiDjango, color: '#07beb8' },
    { name: 'Flask', icon: SiFlask, color: '#fefffe' },
  ],
  "Databases & Tools": [
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#07beb8' },
    { name: 'MongoDB', icon: SiMongodb, color: '#07beb8' },
    { name: 'Redis', icon: SiRedis, color: '#f24333' },
    { name: 'Docker', icon: FaDocker, color: '#07beb8' },
    { name: 'Git', icon: FaGitAlt, color: '#f24333' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: '#07beb8' },
  ],
};
export const projects = [
  {
    title: 'SOS Multiplayer Game',
    description: 'A real-time multiplayer SOS game with a sleek UI.',
    longDescription: 'This project is a fully functional, real-time multiplayer implementation of the classic pen-and-paper game SOS. It features a clean user interface and uses socket programming to handle live connections between players, ensuring a seamless and interactive experience.',
    challenges: 'The primary challenge was managing the real-time game state synchronization between two clients without a centralized server for game logic. Ensuring low latency and handling disconnections gracefully were key technical hurdles.',
    solution: 'I implemented a lightweight server using Java Sockets that acts as a message broker, relaying moves between clients. Game state logic is handled on the client-side, reducing server load and minimizing latency. A simple heartbeat mechanism was used to detect and manage player disconnections.',
    tech: ['Java', 'Socket.IO', 'Swing UI'],
    github: 'https://github.com/sanskaarsingh/sos-game',
    link: 'https://sos-game-43w5.onrender.com/',
    image: sosGameImg, 
  },
  {
    title: 'Schedulr App',
    description: 'An intuitive task scheduling and management application.',
    longDescription: 'Schedulr is a full-stack MERN application designed to help users organize their tasks efficiently. It features user authentication, task creation with deadlines, and a clean, responsive interface built with React.',
    challenges: 'Implementing secure user authentication and ensuring that users could only access and modify their own tasks was a critical security challenge. State management on the front-end also needed to be handled efficiently to provide a smooth user experience.',
    solution: 'I used JSON Web Tokens (JWT) for authentication, creating a secure middleware on the Express.js backend to protect routes. For the frontend, I utilized React\'s Context API for global state management, making it easy to share user data and task lists across components.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/sanskaarsingh/schedulr',
    link: 'https://shedulr-ec642.web.app/',
    image: schedulrImg, 
  },
  {
    title: 'Stock Price Predictor',
    description: 'AI model to predict stock prices using historical data.',
    longDescription: 'This project utilizes a machine learning model to forecast the next day\'s closing stock price based on historical data. The application is built with Python and deployed as an interactive web app using Streamlit.',
    challenges: 'The main challenges included feature engineering from time-series data to capture relevant patterns, selecting an appropriate model, and avoiding overfitting. Deploying the model in a user-friendly way was also a key consideration.',
    solution: 'I used Pandas for data preprocessing and feature engineering. After experimenting with several models, an LSTM (Long Short-Term Memory) network provided the best results for this time-series forecasting problem. The model was then wrapped in a Streamlit application for easy interaction.',
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/sanskaarsingh/stock-price-prediction',
    link: 'https://nextdayclosing.streamlit.app/?embed=true',
    image: stockPredictorImg, 
  },
  {
    title: 'Logistics Dashboard',
    description: 'A data-driven dashboard for visualizing logistics operations.',
    longDescription: 'This dashboard provides a comprehensive overview of logistics operations by visualizing key performance indicators (KPIs) from a large dataset. It helps in monitoring fleet performance, delivery times, and operational efficiency.',
    challenges: 'The main challenge was to efficiently query and process a large SQL database to aggregate data for visualization without slowing down the application. Designing visualizations that were both informative and easy to understand was also crucial.',
    solution: 'I wrote optimized SQL queries with appropriate indexing to speed up data retrieval. I used Python with libraries like Plotly and Dash to create a dynamic and interactive web-based dashboard that allows users to filter and explore the data.',
    tech: ['Python', 'SQL', 'AWS', 'Plotly', 'Dash'],
    github: 'https://github.com/sanskaarsingh/logistics_dashboard',
    image: logisticsImg, 
  },
  {
    title: 'Currency Tracker',
    description: 'A full-stack website for tracking real-time currency exchange rates.',
    longDescription: 'A web application that provides up-to-the-minute currency exchange rates. The frontend is built with React, and it fetches data from a custom Node.js backend that communicates with a third-party foreign exchange API.',
    challenges: 'The primary challenge was managing API rate limits from the third-party service and ensuring the data displayed to the user was always fresh. Caching was essential to balance performance and data accuracy.',
    solution: 'I implemented a caching layer in the Node.js backend using Redis. The backend would fetch data from the exchange rate API periodically and store it in the cache. The React frontend then queries my backend, which serves the cached data, resulting in fast load times and reduced reliance on the external API.',
    tech: ['Node.js', 'React', 'API', 'Redis'],
    github: 'https://github.com/sanskaarsingh/currency-tracker',
    link: 'https://sanskaarsingh.github.io/currency-frontend/',
    image: currencyTrackerImg,
  },
  {
    title: 'Ball Stats',
    description: 'A dynamic football dashboard delivering live match updates.',
    longDescription: 'Ball Stats is a web application for football enthusiasts, providing live match scores, league standings, and the latest news. It is built with a Python Flask backend that serves data from a sports API to a simple, clean frontend.',
    challenges: 'Finding a reliable and affordable sports data API with comprehensive coverage was the first major hurdle. The second was structuring the backend to efficiently handle and serve different types of data (live scores vs. historical stats).',
    solution: 'After evaluating several options, I chose a suitable sports API and designed a RESTful backend with Flask. The backend has separate endpoints for different data types, making it easy for the frontend to consume and display the information in an organized manner.',
    tech: ['Python', 'Flask', 'API', 'HTML/CSS'],
    github: 'https://github.com/sanskaarsingh/ball-stats',
    link: 'https://ballstats.onrender.com/',
    image: ballStatsImg,
  },
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Bhawani Transport',
    date: 'May 2024 - August 2025',
    description: 'Developing and maintaining backend systems and data pipelines for logistics and fleet management.',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Lakhdataar Udyog',
    date: 'December 2023 - April 2024',
    description: 'Built responsive user interfaces using React and contributed to a large-scale e-commerce web application, improving user engagement metrics.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Ready Wheels',
    date: 'March 2023 - May 2023',
    description: 'Built Python scripts to process and analyze IoT sensor data from vehicles. Created fleet performance monitoring modules that were integrated into the main dashboard.',
  },
  {
    role: 'Data Associate Intern',
    company: 'Black Diamond Motors',
    date: 'March 2022 - May 2022',
    description: 'Automated dispatch & fuel tracking dashboards using SQL and Power BI, which reduced manual reporting work by over 80%.',
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Statistics',
    institution: 'St. Xavier\'s College',
    date: '2021 - 2024',
    description: 'Focused on statistical modeling, machine learning, and full-stack development for building data-driven systems.'
  }
];
