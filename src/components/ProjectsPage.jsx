import React from 'react';

function ProjectsPage() {
  const projects = [
    {
      title: 'Loudbox',
      description:
        'Loudbox is a user-friendly event ticketing platform designed to streamline ticket purchasing and event management. Featuring intuitive wireframes and high-fidelity prototypes crafted in Figma, the platform offers responsive booking interfaces built with React for seamless user experiences across devices. Integrated with backend APIs, Loudbox ensures secure ticket sales and robust user authentication, making event ticketing efficient and accessible.',
      githubLink: 'https://github.com/ay30bg/loudbox',
      liveLink: 'https://www.loudbox.xyz/',
    },
    {
      title: 'Betflix',
      description:
        'Betflix is an online betting platform built with React and Node.js, delivering a dynamic and engaging betting experience. It features real-time odds updates, lottery betting, and integrated wallet systems for seamless transactions. The platform offers interactive UI components for a smooth user experience, supported by secure user authentication and robust session management, ensuring a safe and exciting betting environment.',
      liveLink: 'https://www.betflixbets.vip/',
    },
    {
      title: 'Betflix Admin Dashboard',
      description: 'The Betflix Admin Dashboard is a powerful management tool built with React and Node.js, designed to oversee operations on the Betflix betting platform. It provides administrators with real-time insights into user activity, betting trends, and lottery betting performance. Featuring intuitive UI components crafted for ease of use, the dashboard enables efficient management of odds, wallet transactions, and user accounts. Secure authentication and role-based access ensure robust control, streamlining administrative tasks for a seamless betting ecosystem.',
      liveLink: 'https://admin-betflix.vercel.app/',
    },
    {
      title: 'Betflix Agents Portal',
      description: 'The Betflix Agents Portal is a specialized platform for agents, built with React and Node.js, integrated with the Betflix betting platform. It focuses on managing referral analytics, enabling agents to track total referrals, total deposits from referrals, and total commissions earned. Featuring a responsive, user-friendly interface with intuitive UI components, the portal ensures seamless navigation across devices. Secure user authentication and session management provide a reliable and efficient environment for agents to monitor and optimize their referral performance within the betting ecosystem.',
      liveLink: 'https://betflix-agent-portal.vercel.app/dashboard',
    },
    {
      title: 'Retro Portfolio Page',
      description: 'A Retro Portfolio Page styled like a CMD terminal is a web-based portfolio designed to mimic the look and feel of a classic command-line interface (CLI) from the 80s or 90s, such as MS-DOS or early Unix terminals. It uses a text-based, monochromatic aesthetic (often green or white text on a black background) with a typewriter-like font to evoke nostalgia. Navigation is driven by typing commands, making it interactive and engaging.',
      liveLink: 'https://retro-dev.vercel.app/',
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">PROJECTS</h2>
      <section className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-links">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub Link
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Live Link
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;