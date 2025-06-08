import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = {
    Languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'Bash', 'C++'],
    Backend: ['Django', 'Django REST Framework', 'Flask', 'FastAPI', 'Celery', 'XSLT', 'PySpark', 'GraphQL', 'Node.js'],
    Frontend: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'JSX', 'HTML5', 'CSS3', 'Bootstrap'],
    'AI/ML': ['OpenAI APIs', 'AI Virtual Agents', 'Generative AI', 'scikit-learn', 'NLP'],
    DevOps: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Nginx'],
    Cloud: ['AWS (EC2, S3, Lambda)', 'Azure', 'Google Cloud Platform', 'cloud watch'],
    Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    Authentication: ['Django Allauth (MFA, Persona)', 'OAuth2', 'JWT'],
    Testing: ['Selenium', 'Postman', 'Apache JMeter', 'PyTest', 'SonarQube', 'Sentry'],
    'System Administration': ['Linux (Ubuntu, CentOS)', 'Active Directory', 'VMware', 'Shell scripting', 'Network Security'],
    Other: ['Jira', 'confluence', 'wiki', 'linear'],
  };

  return (
    <section className="py-8 px-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-4 text-center">TECHNICAL SKILLS</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{category}:</h3>
          <p className="text-gray-700">{items.join(', ')}</p>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection; 