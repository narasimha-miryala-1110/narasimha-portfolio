import React from 'react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      university: 'Northern Illinois University',
    },
    {
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      university: 'Vignan University',
    },
  ];

  const certifications = [
    'Python (HackerRank)',
    'JavaScript (HackerRank)',
    'AWS Cloud Practitioner',
  ];

  return (
    <section className="py-8 px-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-4 text-center">EDUCATION</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-gray-700">{edu.university}</p>
        </div>
      ))}

      <h2 className="text-3xl font-bold mt-8 mb-4 text-center">CERTIFICATIONS</h2>
      <ul className="list-disc list-inside text-gray-700">
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default EducationSection; 