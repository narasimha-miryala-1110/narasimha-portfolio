import React from 'react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'Unmute Music',
      title: 'Lead Full Stack Developer',
      duration: 'Jan 2025 – Present',
      location: 'Full-time | United States',
      duties: [
        'Leading AI-powered platform development using Django, React.js, and OpenAI APIs',
        'Architecting and deploying applications on AWS with Docker and Terraform',
        'Managing DevOps, CI/CD pipelines, and system monitoring using GitHub Actions and Sentry',
      ],
    },
    {
      company: 'Unmute Music',
      title: 'Senior Full Stack Developer',
      duration: 'Jan 2024 – Jan 2025',
      location: 'Hoffman Estates, IL',
      duties: [
        'Developed complex UI using React.js, Next.js for admin panel, and TypeScript',
        'Integrated Stripe and Django Allauth with MFA for secure payment workflows',
        'Implemented reusable components and optimized AJAX-based communication',
      ],
    },
    {
      company: 'Unmute Music',
      title: 'Full Stack Developer',
      duration: 'Mar 2023 – Dec 2023',
      location: 'Hoffman Estates, IL',
      duties: [
        'Built REST APIs with Django and FastAPI, and integrated with MySQL and PostgreSQL',
        'Utilized XSLT and React.js for dynamic frontend rendering',
        'Set up SonarQube for code quality and deployed apps on AWS',
      ],
    },
    {
      company: 'HCL Technologies',
      title: 'Full Stack Developer',
      duration: 'Feb 2021 – Jul 2022',
      location: 'Full-time | India',
      duties: [
        'Automated UI and API testing with Selenium, Postman, and Apache JMeter',
        'Developed secure login with SAML, TACACS, RADIUS protocols, Next.js',
        'Maintained Linux servers, configured Active Directory, and VMware environments',
      ],
    },
    {
      company: 'Ogni Capital Partners',
      title: 'Software Developer',
      duration: 'Mar 2020 – Feb 2021',
      location: 'Remote (United States)',
      duties: [
        'Worked on full-stack development using Java, Python, and React.js',
        'Authored API documentation with Swagger and conducted Selenium-based testing',
      ],
    },
    {
      company: 'Ogni Capital Partners',
      title: 'Software Engineer',
      duration: 'Sep 2019 – Mar 2020',
      duties: [
        'Built backend services and React.js interfaces, integrated Kafka and CI/CD with Jenkins',
        'Managed deployment pipelines and used SonarQube for static code analysis',
        'Used Next.js, MySQL especially for backend APIs using microservices.',
      ],
    },
  ];

  return (
    <section className="py-8 px-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-4 text-center">PROFESSIONAL EXPERIENCE</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.title} at {exp.company}</h3>
          <p className="text-gray-600 text-sm">{exp.duration} | {exp.location}</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {exp.duties.map((duty, idx) => (
              <li key={idx}>{duty}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection; 