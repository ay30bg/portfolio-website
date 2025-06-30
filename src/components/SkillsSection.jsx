import React from 'react';

function SkillsSection() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'NodeJs',
    'React',
    'HTML5',
    'CSS3',
  ];

  return (
    <section className="skills-section">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;