import { useState, useEffect } from "react";

const skills = [
  { name: "HTML", level: 90, color: "#E34F26" },
  { name: "CSS", level: 85, color: "#264DE4" },
  { name: "JavaScript", level: 82, color: "#F7DF1E" },
  { name: "React.js", level: 78, color: "#61DAFB" },
  { name: "Next.js", level: 72, color: "#ffffff" },
  { name: "Node.js", level: 75, color: "#68A063" },
  { name: "MongoDB", level: 70, color: "#47A248" },
  { name: "Git & GitHub", level: 85, color: "#F05032" },
];

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with Next.js and Tailwind CSS showcasing projects and skills.",
    tags: ["Next.js", "CSS", "React"],
    color: "#6366f1",
  },
  {
    title: "Task Manager App",
    desc: "Full-stack task management app with user auth, CRUD operations, and real-time updates.",
    tags: ["Node.js", "MongoDB", "React"],
    color: "#06b6d4",
  },
  {
    title: "E-Commerce UI",
    desc: "Responsive e-commerce frontend with cart, product listing, and checkout flow.",
    tags: ["React", "JavaScript", "CSS"],
    color: "#10b981",
  },
];

function AnimatedBar({ level, color, delay }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(level), delay);
    return () => clearTimeout(t);
  }, [level, delay]);
  return (
    <div style={{
      height: "6px", background: "rgba(255,255,255,0.08)",
      borderRadius: "99px", overflow: "hidden"
    }}>
      <div style={{
        height: "100%", width: `${width}%`,
        background: color, borderRadius: "99px",
        transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: `0 0 8px ${color}88`
      }} />
    </div>
  );
}

export default function Resume() {
  const [activeSection, setActiveSection] = useState("about");
  const profileImageUrl = process.env.PUBLIC_URL + "/zaib%20pic.jpg";

  const navItems = ["about", "skills", "projects", "education", "contact"];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e2e8f0",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      position: "relative",
      overflowX: "hidden"
    }}>

      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow blobs */}
      <div style={{
        position: "fixed", top: "-10%", left: "-5%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "fixed", bottom: "10%", right: "-5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Nav */}
        <nav style={{
          display: "flex", justifyContent: "center", paddingTop: "2rem",
          gap: "4px", flexWrap: "wrap"
        }}>
          {navItems.map(item => (
            <button key={item} onClick={() => setActiveSection(item)} style={{
              padding: "8px 18px", borderRadius: "99px",
              border: activeSection === item ? "1px solid rgba(99,102,241,0.6)" : "1px solid rgba(255,255,255,0.08)",
              background: activeSection === item ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.03)",
              color: activeSection === item ? "#a5b4fc" : "#94a3b8",
              fontSize: "13px", cursor: "pointer",
              fontFamily: "inherit", letterSpacing: "0.02em",
              transition: "all 0.2s ease"
            }}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        {/* Hero */}
        <header style={{ textAlign: "center", padding: "3rem 1.5rem 2rem" }}>
          <div style={{
            width: "110px", height: "110px", borderRadius: "50%",
            overflow: "hidden",
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 1.2rem",
            fontSize: "28px", fontWeight: "700", color: "#fff",
            boxShadow: "0 0 0 4px rgba(99,102,241,0.2), 0 0 30px rgba(99,102,241,0.3)"
          }}>
            <img
              src={profileImageUrl}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "700",
            margin: "0 0 8px",
            background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #06b6d4 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            Zohaib Babar
          </h1>
          <p style={{ fontSize: "16px", color: "#6366f1", fontWeight: "500", margin: "0 0 6px", letterSpacing: "0.05em" }}>
            Full Stack Developer · BSCS Student
          </p>
          <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 1.5rem" }}>
            Pakistan · zohaibbabar3388@gmail.com
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"].map(t => (
              <span key={t} style={{
                fontSize: "12px", padding: "4px 12px",
                borderRadius: "99px", border: "1px solid rgba(99,102,241,0.3)",
                background: "rgba(99,102,241,0.08)", color: "#a5b4fc"
              }}>{t}</span>
            ))}
          </div>
        </header>

        {/* Content */}
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>

          {/* ABOUT */}
          {activeSection === "about" && (
            <section>
              <Card>
                <SectionTitle>About me</SectionTitle>
                <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#94a3b8" }}>
                  I'm <strong style={{ color: "#e2e8f0" }}>Zohaib Babar</strong>, a passionate Full Stack Developer and BSCS student with a strong foundation in modern web technologies. I love building clean, performant, and user-friendly web applications. Currently focused on mastering the MERN stack and exploring Next.js for production-grade apps.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "1.5rem" }}>
                  {[
                    ["Status", "BSCS Student"],
                    ["Focus", "Full Stack Dev"],
                    ["Education", "FSc Pre-Engineering"],
                    ["College", "Punjab College"],
                  ].map(([k, v]) => (
                    <div key={k} style={{
                      padding: "12px 16px", borderRadius: "10px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)"
                    }}>
                      <div style={{ fontSize: "11px", color: "#6366f1", marginBottom: "4px", letterSpacing: "0.06em" }}>{k.toUpperCase()}</div>
                      <div style={{ fontSize: "14px", color: "#e2e8f0", fontWeight: "500" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>
          )}

          {/* SKILLS */}
          {activeSection === "skills" && (
            <section>
              <Card>
                <SectionTitle>Technical skills</SectionTitle>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {skills.map((s, i) => (
                    <div key={s.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ fontSize: "13px", color: "#cbd5e1", fontWeight: "500" }}>{s.name}</span>
                        <span style={{ fontSize: "12px", color: "#64748b" }}>{s.level}%</span>
                      </div>
                      <AnimatedBar level={s.level} color={s.color} delay={i * 80} />
                    </div>
                  ))}
                </div>
              </Card>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "12px" }}>
                {["Git", "GitHub", "REST APIs", "Responsive Design", "MongoDB", "Next.js"].map(s => (
                  <div key={s} style={{
                    textAlign: "center", padding: "12px 8px",
                    borderRadius: "10px", border: "1px solid rgba(99,102,241,0.2)",
                    background: "rgba(99,102,241,0.06)", fontSize: "12px", color: "#a5b4fc"
                  }}>{s}</div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {activeSection === "projects" && (
            <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <SectionTitle style={{ marginBottom: "4px" }}>Projects</SectionTitle>
              {projects.map(p => (
                <div key={p.title} style={{
                  padding: "1.2rem 1.4rem", borderRadius: "14px",
                  border: `1px solid ${p.color}33`,
                  background: `linear-gradient(135deg, ${p.color}0a 0%, rgba(255,255,255,0.02) 100%)`,
                  borderLeft: `3px solid ${p.color}`
                }}>
                  <div style={{ fontSize: "15px", fontWeight: "600", color: "#e2e8f0", marginBottom: "6px" }}>{p.title}</div>
                  <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "10px" }}>{p.desc}</div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: "11px", padding: "3px 10px",
                        borderRadius: "99px", background: `${p.color}22`,
                        color: p.color, border: `1px solid ${p.color}44`
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* EDUCATION */}
          {activeSection === "education" && (
            <section>
              <Card>
                <SectionTitle>Education</SectionTitle>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <EduItem
                    degree="BS Computer Science (BSCS)"
                    institute="Currently Enrolled"
                    year="2024 — Present"
                    color="#6366f1"
                    note="Studying core CS concepts, data structures, algorithms, and software engineering."
                  />
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
                  <EduItem
                    degree="FSc Pre-Engineering"
                    institute="Punjab College, Pakistan"
                    year="Completed"
                    color="#06b6d4"
                    note="Strong foundation in mathematics, physics, and analytical thinking."
                  />
                </div>
              </Card>
            </section>
          )}

          {/* CONTACT */}
          {activeSection === "contact" && (
            <section>
              <Card>
                <SectionTitle>Get in touch</SectionTitle>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <ContactRow icon="✉" label="Email" value="zohaibbabar3388@gmail.com" href="mailto:zohaibbabar3388@gmail.com" />
                  <ContactRow icon="💼" label="LinkedIn" value="zohaib-babar-3530a0366" href="https://www.linkedin.com/in/zohaib-babar-3530a0366/" />
                  <ContactRow icon="🐙" label="GitHub" value="Zohaib Babar" href="https://github.com/ZohaibBabar" />
                </div>
              </Card>
            </section>
          )}

        </main>

      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px", padding: "1.6rem", marginBottom: "12px"
    }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: "13px", fontWeight: "600", color: "#6366f1",
      letterSpacing: "0.1em", textTransform: "uppercase",
      marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "8px"
    }}>
      <span style={{ width: "20px", height: "2px", background: "#6366f1", borderRadius: "2px", display: "inline-block" }} />
      {children}
    </h2>
  );
}

function EduItem({ degree, institute, year, color, note }) {
  return (
    <div style={{ display: "flex", gap: "14px" }}>
      <div style={{
        width: "10px", height: "10px", borderRadius: "50%",
        background: color, marginTop: "4px", flexShrink: 0,
        boxShadow: `0 0 8px ${color}88`
      }} />
      <div>
        <div style={{ fontSize: "15px", fontWeight: "600", color: "#e2e8f0" }}>{degree}</div>
        <div style={{ fontSize: "13px", color, marginBottom: "4px" }}>{institute} · {year}</div>
        <div style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6" }}>{note}</div>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{
      display: "flex", alignItems: "center", gap: "12px",
      padding: "12px 16px", borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(255,255,255,0.02)",
      textDecoration: "none", transition: "all 0.2s"
    }}>
      <span style={{ fontSize: "16px" }}>{icon}</span>
      <div>
        <div style={{ fontSize: "11px", color: "#6366f1", letterSpacing: "0.06em" }}>{label.toUpperCase()}</div>
        <div style={{ fontSize: "13px", color: "#a5b4fc" }}>{value}</div>
      </div>
    </a>
  );
}

