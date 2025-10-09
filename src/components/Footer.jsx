import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark/10 dark:bg-light/5 py-6">
      <div className="container mx-auto px-6 text-center text-dark/60 dark:text-light/60">
        <p>&copy; {currentYear} Sanskar Singh. All Rights Reserved.</p>
        <p className="text-sm mt-1">Built with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;