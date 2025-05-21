import React from 'react';

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "DSA"];

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {skills.map((skill, index) => (
            <span key={index} style={{ padding: '10px 20px', background: '#333', color: '#fff', borderRadius: '20px' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
