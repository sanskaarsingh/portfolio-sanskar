// Corrected Imports (SiMemcached has been removed)
import {
  FaPython, FaJava, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaLinux
} from 'react-icons/fa';
import {
  SiJavascript, SiPostgresql, SiMongodb, SiRedis, SiExpress, SiDjango, SiFlask, SiCplusplus,
  SiGooglecloud, SiVisualstudiocode, SiJupyter, SiPostman
} from 'react-icons/si';

// --- STEP 1: Import your new project images here ---
import sosGameImg from '../assets/images/sos-game.jpg'; // Example image name
import schedulrImg from '../assets/images/schedulr-app.jpg'; // Example image name
import stockPredictorImg from '../assets/images/stock-predictor.jpg'; // Example image name
import logisticsImg from '../assets/images/logistics-dashboard.jpg'; // Example image name
import currencyTrackerImg from '../assets/images/currency-tracker.jpg'; // Example image name
import ballStatsImg from '../assets/images/ball-stats.jpg'; // Example image name


// Corrected skills array (the line for Memcached has been deleted)
export const skills = [
  // ... your skills array ...
  { name: 'Python', icon: FaPython, color: '#f4ac45' },
  { name: 'Java', icon: FaJava, color: '#f24333' },
  { name: 'C++', icon: SiCplusplus, color: '#07beb8' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f4ac45' },
  { name: 'Node.js', icon: FaNodeJs, color: '#07beb8' },
  { name: 'Express.js', icon: SiExpress, color: '#fefffe' },
  { name: 'Django', icon: SiDjango, color: '#07beb8' },
  { name: 'Flask', icon: SiFlask, color: '#fefffe' },
  { name: 'React', icon: FaReact, color: '#07beb8' },
  { name: 'HTML5', icon: FaHtml5, color: '#f24333' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#07beb8' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#07beb8' },
  { name: 'MongoDB', icon: SiMongodb, color: '#07beb8' },
  { name: 'Redis', icon: SiRedis, color: '#f24333' },
  { name: 'AWS', icon: FaAws, color: '#f4ac45' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#07beb8' },
  { name: 'Docker', icon: FaDocker, color: '#07beb8' },
  { name: 'Git', icon: FaGitAlt, color: '#f24333' },
  { name: 'Linux', icon: FaLinux, color: '#fefffe' },
  { name: 'VS Code', icon: SiVisualstudiocode, color: '#07beb8' },
  { name: 'Jupyter', icon: SiJupyter, color: '#f4ac45' },
  { name: 'Postman', icon: SiPostman, color: '#f24333' },
];


export const projects = [
  {
    title: 'SOS Multiplayer Game',
    description: 'A real-time multiplayer SOS game with a sleek UI.',
    tech: ['Java', 'Socket.IO'],
    github: 'https://github.com/sanskaarsingh/sos-game',
    link: 'https://sos-game-43w5.onrender.com/',
    image: sosGameImg, // Use the imported variable
  },
  {
    title: 'Schedulr App',
    description: 'An intuitive task scheduling and management application.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/sanskaarsingh/schedulr',
    link: 'https://shedulr-ec642.web.app/',
    image: schedulrImg, // Use the imported variable
  },
  {
    title: 'Stock Price Predictor',
    description: 'AI model to predict stock prices using historical data.',
    tech: ['Python', 'TensorFlow', 'Scikit-learn'],
    github: 'https://github.com/sanskaarsingh/stock-price-prediction',
    link: 'https://nextdayclosing.streamlit.app/?embed=true',
    image: stockPredictorImg, // Use the imported variable
  },
  {
    title: 'Logistics Dashboard',
    description: 'A data-driven dashboard for visualizing logistics operations.',
    tech: ['Python', 'SQL', 'AWS'],
    github: 'https://github.com/sanskaarsingh/logistics_dashboard',
    image: logisticsImg, // Use the imported variable
  },
  {
    title: 'Currency Tracker',
    description: 'A full-stack website for tracking real-time currency exchange rates.',
    tech: ['Node.js', 'React', 'API'],
    github: 'https://github.com/sanskaarsingh/currency-tracker',
    link: 'https://sanskaarsingh.github.io/currency-frontend/',
    image: currencyTrackerImg, // Use the imported variable
  },
    {
    title: 'Ball Stats',
    description: 'A dynamic football dashboard delivering live match updates, league standings, and latest news.',
    tech: ['Python', 'Flask', 'API'],
    github: 'https://github.com/sanskaarsingh/ball-stats',
    link: 'https://ballstats.onrender.com/',
    image: ballStatsImg, // Use the imported variable
  },
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Bhawani Transport',
    date: 'May 2024 - August 2025',
    description: 'Developing and maintaining backend systems and data pipelines.',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Lakhdataar Udyog',
    date: 'Dec 2023 - Apr 2024',
    description: 'Built responsive user interfaces and contributed to a large-scale web application.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Ready Wheels',
    date: 'Mar 2023 - May 2023',
    description: 'Built Python scripts to process IoT sensor data and created fleet performance monitoring modules.',
  },
    {
    role: 'Data Associate Intern',
    company: 'Black Diamond Motors',
    date: 'Mar 2022 - May 2022',
    description: 'Automated dispatch & fuel tracking dashboards with SQL + Power BI, reducing manual work by 80%.',
  },
];

export const education = [
    {
        degree: 'Bachelor of Science in Statistics',
        institution: 'St. Xavier\'s College',
        date: '2021 - 2024',
        description: 'Focused on statistical modeling and full-stack development for data-driven systems.'
    }
]