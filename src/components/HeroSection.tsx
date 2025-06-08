import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-16 px-4">
      <h1 className="text-5xl font-bold mb-2">NARASIMHA RAO</h1>
      <h2 className="text-2xl text-gray-700 mb-4">Full Stack Software Engineer | Python, Django, React, AI Integration</h2>
      <div className="text-lg text-gray-600">
        <p>Email: <a href="mailto:nrdev97@gmail.com" className="text-blue-600 hover:underline">nrdev97@gmail.com</a></p>
        <p>Phone: +1 331-226-3067</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/nrdev97" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/nrdev97</a></p>
        <p>Location: United States</p>
      </div>
    </section>
  );
};

export default HeroSection; 