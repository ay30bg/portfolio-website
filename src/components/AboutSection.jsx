import React from 'react';

function AboutSection() {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <p>
        I am a creative and detail-oriented Full-stack Developer with a strong passion for crafting
        seamless user interfaces and robust, scalable backend systems. My expertise lies in modern
        web development technologies, with a specialization in React, Node.js, and UI/UX design. I
        have a proven track record of delivering production-ready applications, including
        high-performance betting platforms and ticketing systems, recognized for their responsive,
        intuitive, and visually appealing interfaces supported by clean, maintainable, and efficient
        backend architectures.
      </p>
      <p>
        I hold a Bachelor of Science in Statistics from the University of Ilorin (2023), where I
        focused on statistical modeling, data analysis, probability theory, database systems, and
        applied programming. My capstone project involved designing and deploying a full-stack event
        ticketing platform with real-time payment processing and user authentication, built using
        React and Node.js, leveraging statistical techniques to optimize user engagement and system
        performance.
      </p>
      <p>
        Technically, I am proficient in React, Redux, TypeScript, HTML5, CSS3, Tailwind CSS,
        Material-UI, and Figma for frontend development and UI/UX prototyping. On the backend, I
        leverage Node.js, Express.js, MongoDB, and RESTful APIs to build scalable and secure systems.
        My professional experience includes developing a sports betting platform with real-time odds
        updates and secure payment systems, achieving a 20% increase in user retention, and
        engineering a ticketing system handling 5000+ concurrent users with features like seat
        selection and dynamic pricing.
      </p>
      <p>
        Connect with me on {' '}
        <a href="https://x.com/retrodevelop" target="_blank" rel="noreferrer">
          Twitter
        </a>{' '}
        or{' '}
        <a href="https://github.com/ay30bg" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}

export default AboutSection;
