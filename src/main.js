import "./style.css";

document.querySelector("#app").innerHTML = `
<nav>
  <div class="logo">SA</div>

  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Projects</a>
    <a href="#">Contact</a>
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
      <a href="#">View Projects</a>
      <a href="#">Download CV</a>
    </div>

  </div>

  <div class="hero-right">
    <div class="planet"></div>
  </div>

</section>
`;