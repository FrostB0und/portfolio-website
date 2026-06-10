import "./style.css";

document.querySelector("#app").innerHTML = `
<nav>
  <div class="logo">SA</div>

  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#experience">Experience</a>
  </div>
</nav>

<section class="hero">

  <div class="hero-left">

    <div class="badge">
      ● Available for Opportunities
    </div>

    <h1>
      Senodh <br />
      <span>Anavaratne</span>
    </h1>

    <h2>Software Engineering Undergraduate</h2>

    <p>
      Full Stack Developer focused on building modern web applications,
      Django systems and scalable solutions.
    </p>

    <div class="buttons">
      <a href="#projects">View Projects</a>
      <a
  href="/cv/Senodh_Anavaratne_CV.pdf"
  target="_blank"
>
  View CV
</a>

<a
  href="/cv/Senodh_Anavaratne_CV.pdf"
  download
>
  Download CV
</a>
    </div>

  </div>

  <div class="hero-right">
    <div class="planet"></div>
  </div>

</section>

<section id="about" class="about">

  <h2 class="section-title">
    About Me
  </h2>

  <div class="about-content">

    <div class="about-card">

      <p>
        I'm Senodh Anavaratne, a Software Engineering undergraduate at
        the Informatics Institute of Technology (IIT) and a Part-Time
        Software Engineering Intern at Nugenesis AI.
      </p>

      <p>
        My experience includes developing full-stack applications using
        Django, JavaScript, PostgreSQL and modern web technologies.
      </p>

      <p>
        I'm continuously expanding my skills in software engineering,
        cloud technologies and AI while contributing to impactful
        projects and gaining industry experience.
      </p>

    </div>
    

  </div>

</section>

<section id="projects" class="projects">

  <h2 class="section-title">
    Projects
  </h2>

  <div class="project-grid">

    <div class="project-card">

      <h3>StudyMaxx</h3>

      <p>
        AI-powered study companion focused on improving learning
        through modern web technologies and interactive experiences.
      </p>

      <div class="tech-stack">
        HTML • CSS • JavaScript
      </div>

    </div>

    <div class="project-card">

      <h3>CareerGrid</h3>

      <p>
        Social networking platform built using Django featuring
        authentication, profiles and user-generated content.
      </p>

      <div class="tech-stack">
        Django • PostgreSQL
      </div>

      <div class="project-links">
        <a
          href="https://github.com/FrostB0und/CareerGrid"
          target="_blank"
        >
          GitHub
        </a>
      </div>

    </div>

    <div class="project-card">

      <h3>UServe</h3>

      <p>
        Service booking platform currently in early development,
        focused on authentication and booking workflows.
      </p>

      <div class="tech-stack">
        JavaScript • Firebase
      </div>

      <span class="project-status">
        Early Development
      </span>

    </div>

  </div>

</section>

<section id="skills" class="skills">

  <h2 class="section-title">
    Skills
  </h2>

  <div class="skills-grid">

    <div class="skill-card">
      <h3>Languages</h3>

      <div class="skill-tags">
        <span>Python</span>
        <span>Java</span>
        <span>JavaScript</span>
      </div>
    </div>

    <div class="skill-card">
      <h3>Web Development</h3>

      <div class="skill-tags">
        <span>Django</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>

    <div class="skill-card">
      <h3>Databases</h3>

      <div class="skill-tags">
        <span>PostgreSQL</span>
        <span>MySQL</span>
      </div>
    </div>

    <div class="skill-card">
      <h3>Tools & Technologies</h3>

      <div class="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>Docker</span>
        <span>Firebase</span>
      </div>
    </div>

  </div>

</section>

<section id="experience" class="experience">

  <h2 class="section-title">
    Experience
  </h2>

  <div class="experience-card">

    <div class="experience-header">
      <h3>Nugenesis AI</h3>

      <span class="experience-role">
        Part-Time Software Engineering Intern
      </span>
    </div>

   <ul class="experience-list">
  <li>Developed custom Django pages and features based on business requirements and existing platform architecture.</li>

  <li>Designed and implemented new user interfaces from scratch, incorporating original ideas to improve usability and visual consistency.</li>

  <li>Contributed to the platform rebranding initiative through UI modernization and responsive design enhancements.</li>

  <li>Integrated and tested Keycloak Single Sign-On (SSO) authentication workflows.</li>

  <li>Worked with Docker-based development environments and collaborated through Git version control.</li>
</ul>
  </div>

</section>
<section id="featured-work" class="featured-work">

  <h2 class="section-title">
    Featured Work
  </h2>

  <div class="featured-grid">

    <div class="featured-card">
      <img
        src="images/careergrid.png"
        alt="CareerGrid"
      />

      <div class="featured-info">
        <h3>CareerGrid</h3>
        <p>Social Networking Platform</p>
      </div>
    </div>

    <div class="featured-card">
      <img
        src="images/studymaxx.png"
        alt="StudyMaxx"
      />

      <div class="featured-info">
        <h3>StudyMaxx</h3>
        <p>AI Study Companion</p>
      </div>
    </div>

    <div class="featured-card">
      <img
        src="images/nugenesis.png"
        alt="Nugenesis AI"
      />

      <div class="featured-info">
        <h3>Nugenesis AI</h3>
        <p>UI Design & Development Contributions</p>
      </div>
    </div>

  </div>

</section>
<section id="contact" class="contact">

  <h2 class="section-title">
    Get In Touch
  </h2>

  <div class="contact-card">

    <p>
      I'm always interested in new opportunities,
      collaborations, and software engineering projects.
    </p>

    <div class="contact-links">

      <a href="mailto:senodhanavaratne@gmail.com">
        📧 Email
      </a>

      <a href="https://github.com/FrostB0und"
         target="_blank">
        🐙 GitHub
      </a>

      <a href="https://www.linkedin.com/feed/?msgControlName=view_message_button&msgConversationId=2-ZmE3NjkwMzEtNTczMi00ZTNlLTgzOTktZGM5MmRlMGE4NTYyXzEwMA%3D%3D&msgOverlay=true&trk=false"
         target="_blank">
        💼 LinkedIn
      </a>

    </div>

  </div>

</section>
`;

/* Stars */

const stars = [];

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");

  star.classList.add("star");

  const x = Math.random() * 100;
  const y = Math.random() * 100;

  star.style.left = x + "%";
  star.style.top = y + "%";

  document.body.appendChild(star);

  stars.push({
    element: star,
    speed: Math.random() * 0.3 + 0.1,
  });
}

/* Cursor Glow */

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* Planet Scroll Animation */
const planetContainer = document.querySelector(".hero-right");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  const x = Math.sin(scrollY * 0.002) * 250;
  const y = scrollY * 0.05;

  planetContainer.style.transform =
    `translate(${x}px, ${y}px)`;

});
function createShootingStar() {

  const star = document.createElement("div");

  star.classList.add("shooting-star");

  document.body.appendChild(star);

  let x = Math.random() * window.innerWidth;
  let y = Math.random() * (window.innerHeight * 0.4);

  let vx = 12 + Math.random() * 8;
  let vy = 4 + Math.random() * 3;

  let life = 0;

  function animate() {

    life++;

    x += vx;
    y += vy;

    vx *= 0.995;
    vy *= 0.995;

    star.style.left = x + "px";
    star.style.top = y + "px";

    star.style.opacity = 1 - life / 80;

    if (life < 80) {
      requestAnimationFrame(animate);
    } else {
      star.remove();
    }
  }

  animate();
}
setInterval(() => {

  if(Math.random() > 0.5){
    createShootingStar();
  }

}, 100);