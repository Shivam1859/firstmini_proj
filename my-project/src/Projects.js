import React from 'react';

const Projects = () => {
  const projectList = [
    { name: "Portfolio Website", desc: "A personal portfolio showcasing my work." },
    { name: "E-commerce Clone", desc: "A mini Amazon UI clone with cart functionality." },
    { name: "Weather App", desc: "Displays real-time weather info using API." }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {projectList.map((proj, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px' }}>
              <h3>{proj.name}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
