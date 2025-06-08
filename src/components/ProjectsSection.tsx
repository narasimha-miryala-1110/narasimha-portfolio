import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      name: 'AI Music Generator',
      description: 'Developed a virtual AI agent that creates music and suggests titles using OpenAI APIs',
    },
    {
      name: 'Secure Web Portal',
      description: 'Built end-to-end platform with Django, Allauth (MFA), Stripe, React.js, and AWS deployment',
    },
    {
      name: 'Monitoring Dashboard',
      description: 'Implemented Grafana, Sentry, ELK stack for real-time monitoring and performance insights',
    },
  ];

  return (
    <section className="py-8 px-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-4 text-center">PROJECT HIGHLIGHTS</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection; 