

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

const courses = [
  {
    title: "Web Development",
    description: "HTML, CSS, JavaScript aur React seekhein.",
    icon: "💻",
  },
  {
    title: "Graphic Design",
    description: "Creative designs aur professional graphics banayein.",
    icon: "🎨",
  },
  {
    title: "MS Office",
    description: "Word, Excel aur PowerPoint ki skills seekhein.",
    icon: "📊",
  },
  {
    title: "Digital Marketing",
    description: "SEO aur social media marketing seekhein.",
    icon: "📱",
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span>SA</span> Smart Academy
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/contact" className="nav-btn">
        Join Now
      </Link>
    </nav>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            YOUR FUTURE STARTS HERE
          </span>

          <h1>
            Learn Skills.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            Smart Academy mein modern computer skills seekhein
            aur apne career ko next level par le jayein.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="primary-btn">
              Explore Courses →
            </Link>

            <Link to="/about" className="secondary-btn">
              About Academy
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Practical</strong>
              <small>Learning</small>
            </div>
            <div>
              <strong>Modern</strong>
              <small>Skills</small>
            </div>
            <div>
              <strong>Career</strong>
              <small>Focused</small>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-top">
              <span>● ● ●</span>
              <span>learning.jsx</span>
            </div>
            <div className="code-body">
              <p><span>const</span> future = {"{"}</p>
              <p>&nbsp;&nbsp;skills: <b>"Modern"</b>,</p>
              <p>&nbsp;&nbsp;mindset: <b>"Growth"</b>,</p>
              <p>&nbsp;&nbsp;success: <b>true</b></p>
              <p>{"}"}</p>
              <p className="code-success">
                ✓ Ready to build!
              </p>
            </div>
          </div>
          <div className="floating-badge">
            ✨ Learn something new
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">OUR PROGRAMS</span>
          <h2>Explore Our Courses</h2>
          <p>Apni pasand ka course select karein aur seekhna shuru karein.</p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to="/courses">Learn More →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to start your learning journey?</h2>
        <p>Aaj hi Smart Academy ke courses explore karein.</p>
        <Link to="/contact" className="primary-btn">
          Contact Us →
        </Link>
      </section>
    </>
  );
}

function About() {
  return (
    <section className="inner-page">
      <span className="eyebrow">ABOUT SMART ACADEMY</span>
      <h1>Skills for a Smarter Future.</h1>
      <p>
        Smart Academy ek computer education institute ka website
        project hai jahan students computer aur digital skills
        seekhne ke liye courses explore kar sakte hain.
      </p>
      <Link to="/courses" className="primary-btn">
        View Courses →
      </Link>
    </section>
  );
}

function Courses() {
  return (
    <section className="section inner-courses">
      <div className="section-heading">
        <span className="eyebrow">LEARN WITH US</span>
        <h1>Our Courses</h1>
        <p>Apni skills aur career goals ke mutabiq course choose karein.</p>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.title}>
            <div className="course-icon">{course.icon}</div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to="/contact">Ask About This Course →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Demo form submit hua. Database connection aglay step mein add hoga.");
  }

  return (
    <section className="contact-section">
      <div className="section-heading">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>Contact Smart Academy</h1>
        <p>Course ke bare mein maloomat lene ke liye form fill karein.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your Name
          <input name="name" placeholder="Apna naam likhein" required />
        </label>

        <label>
          Email Address
          <input
            name="email"
            type="email"
            placeholder="example@email.com"
            required
          />
        </label>

        <label>
          Select Course
          <select name="course" required defaultValue="">
            <option value="" disabled>Course select karein</option>
            {courses.map((course) => (
              <option key={course.title}>{course.title}</option>
            ))}
          </select>
        </label>

        <label>
          Message
          <textarea name="message" placeholder="Apna message likhein" required />
        </label>

        <button type="submit" className="primary-btn">
          Send Inquiry →
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        <span>SA</span> Smart Academy
      </Link>
      <p>Learn today. Build tomorrow.</p>
      <small>© {new Date().getFullYear()} Smart Academy</small>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
