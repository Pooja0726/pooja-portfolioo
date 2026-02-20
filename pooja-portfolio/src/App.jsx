import { useState, useEffect } from "react";

const NAV = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const PROJECTS = [
  {
    id: 1,
    title: "Facial Expression Recognition System",
    subtitle: "Deep Learning Research · WCSC 2025 Published",
    desc: "Designed and implemented a hybrid deep learning model combining VGG16 feature extraction with SVM classification. Achieved 84.40% accuracy and 0.85 F1-score trained on 35,000+ images across CK+ and FER-2013 benchmark datasets. Deployed as a real-time Streamlit application.",
    tags: ["VGG16", "SVM", "TensorFlow", "Streamlit", "OpenCV", "Python"],
    metrics: [{ label: "Accuracy", val: "84.4%" }, { label: "F1-Score", val: "0.85" }, { label: "Dataset", val: "35K+" }],
    published: true,
  },
  {
    id: 2,
    title: "Industrial Chemical Equipment Visualizer",
    subtitle: "Full-Stack Engineering Platform",
    desc: "Built a full-stack industrial data visualization platform with real-time sensor monitoring, automated PDF report generation, and REST API backend. Packaged as a standalone Windows desktop application using PyInstaller for field deployment.",
    tags: ["Django REST", "React", "PyQt5", "Railway", "PyInstaller", "Python"],
    metrics: [{ label: "Platform", val: "Desktop + Web" }, { label: "Reports", val: "Automated" }, { label: "Deploy", val: "Cross-Platform" }],
    published: false,
  },
  {
    id: 3,
    title: "OLA Business Intelligence Dashboard",
    subtitle: "Data Analytics & Visualization",
    desc: "Developed a comprehensive business intelligence dashboard analyzing 50,000+ ride-sharing records. Delivered executive-level insights on revenue trends, cancellation patterns, and customer satisfaction metrics, improving operational decision-making efficiency by 25%.",
    tags: ["Power BI", "SQL", "Excel", "Data Analytics", "Business Intelligence"],
    metrics: [{ label: "Records", val: "50K+" }, { label: "Efficiency", val: "+25%" }, { label: "Type", val: "BI Dashboard" }],
    published: false,
  },
];

const SKILLS_DATA = {
  "Programming Languages": { items: ["Python", "Java", "C++", "SQL", "JavaScript", "HTML", "CSS"] },
  "Frameworks & Platforms": { items: ["Django", "React", "Flutter", "TensorFlow", "Keras", "Streamlit", "Power BI", "Hugging Face"] },
  "Libraries & APIs": { items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Gemini API"] },
  "AI / ML Domains": { items: ["Deep Learning", "Machine Learning", "Generative AI", "RAG", "Computer Vision", "GCP", "Ollama"] },
};

/* ── DESIGN TOKENS ── */
const T = {
  bg: "#f8fafc",
  white: "#ffffff",
  navy: "#0f172a",
  ink: "#1e293b",
  ink2: "#334155",
  muted: "#64748b",
  light: "#94a3b8",
  blue: "#0369a1",
  blueHover: "#0284c7",
  bluePale: "#e0f2fe",
  border: "#e2e8f0",
  border2: "#f1f5f9",
  accent: "#0ea5e9",
};

/* ── NAV ── */
function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      height: 64, display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 80px",
      background: "rgba(255,255,255,0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
      boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.25s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 8,
          background: T.navy,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontWeight: 700, fontSize: 13,
          fontFamily: "Georgia, serif", letterSpacing: "0.02em",
        }}>PS</div>
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 15, color: T.navy, lineHeight: 1.1 }}>Pooja Sahu</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, color: T.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>AI/ML Engineer</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
        {NAV.map(l => (
          <button key={l} onClick={() => setPage(l)} style={{
            background: "transparent",
            border: "none",
            borderBottom: page === l ? `2px solid ${T.blue}` : "2px solid transparent",
            color: page === l ? T.blue : T.ink2,
            padding: "6px 16px",
            fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: page === l ? 600 : 400,
            cursor: "pointer", transition: "all 0.18s",
            borderRadius: "4px 4px 0 0",
          }}
            onMouseEnter={e => { if (page !== l) { e.target.style.color = T.navy; e.target.style.background = T.border2; } }}
            onMouseLeave={e => { if (page !== l) { e.target.style.color = T.ink2; e.target.style.background = "transparent"; } }}
          >{l}</button>
        ))}
        <a href="mailto:sahupooja43890@gmail.com" style={{
          marginLeft: 8,
          background: T.navy, color: "white",
          padding: "7px 18px", borderRadius: 6,
          fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
          textDecoration: "none", transition: "all 0.18s",
          border: "none",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = T.blue; }}
          onMouseLeave={e => { e.currentTarget.style.background = T.navy; }}
        >Hire Me</a>
      </div>
    </nav>
  );
}

/* ── HOME ── */
function HomePage({ setPage }) {
  const roles = ["AI / ML Engineer", "Published Researcher", "Deep Learning Specialist", "Full-Stack Developer"];
  const [idx, setIdx] = useState(0);
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => { setIdx(i => (i + 1) % roles.length); setVis(true); }, 320);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 80px 60px", background: T.white }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 380px", gap: 80, alignItems: "center" }}>

        {/* LEFT */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32,
            background: T.bluePale, border: `1px solid #bae6fd`,
            borderRadius: 4, padding: "6px 14px",
            animation: "fadeUp 0.5s ease both",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: T.blue, letterSpacing: "0.04em" }}>Available for Internships & Full-time Roles</span>
          </div>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: T.muted, marginBottom: 8, fontWeight: 400, animation: "fadeUp 0.5s 0.07s ease both", opacity: 0, animationFillMode: "forwards" }}>Hello, I'm</p>

          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(44px, 5.5vw, 72px)",
            fontWeight: 700, color: T.navy,
            lineHeight: 1.05, letterSpacing: "-0.025em",
            marginBottom: 16,
            animation: "fadeUp 0.5s 0.1s ease both", opacity: 0, animationFillMode: "forwards",
          }}>Pooja Sahu</h1>

          <div style={{ height: 36, marginBottom: 20, animation: "fadeUp 0.5s 0.15s ease both", opacity: 0, animationFillMode: "forwards" }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 20, fontWeight: 500,
              color: T.blue, display: "inline-block",
              transition: "opacity 0.32s, transform 0.32s",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(-6px)",
            }}>{roles[idx]}</span>
          </div>

          {/* University card */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 28,
            background: T.bg, border: `1px solid ${T.border}`,
            borderRadius: 8, padding: "12px 20px",
            animation: "fadeUp 0.5s 0.2s ease both", opacity: 0, animationFillMode: "forwards",
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 6, background: T.navy, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>VIT</div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 700, color: T.navy }}>Vellore Institute of Technology, Bhopal</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: T.muted }}>B.Tech Computer Science (AI-ML) &nbsp;·&nbsp; CGPA: 8.87 / 10 &nbsp;·&nbsp; 2023 – 2027</div>
            </div>
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15.5, color: T.ink2,
            lineHeight: 1.9, maxWidth: 540, marginBottom: 36,
            animation: "fadeUp 0.5s 0.23s ease both", opacity: 0, animationFillMode: "forwards",
          }}>
            AI/ML engineer with <strong style={{ color: T.navy, fontWeight: 600 }}>1+ years of industry experience</strong>, a published paper at WCSC 2025, and deep expertise in computer vision, deep learning, and production-grade software systems.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40, animation: "fadeUp 0.5s 0.27s ease both", opacity: 0, animationFillMode: "forwards" }}>
            <button onClick={() => setPage("Projects")} style={{
              background: T.navy, border: "none", color: "white",
              padding: "12px 28px", borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = T.blue; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = T.navy; e.currentTarget.style.transform = "translateY(0)"; }}
            >View Projects</button>
            <button onClick={() => setPage("Experience")} style={{
              background: "transparent", border: `1.5px solid ${T.border}`,
              color: T.ink, padding: "12px 28px", borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.blue; e.currentTarget.style.color = T.blue; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.ink; }}
            >Work Experience</button>
            <button onClick={() => setPage("Contact")} style={{
              background: "transparent", border: `1.5px solid ${T.border}`,
              color: T.ink, padding: "12px 28px", borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.blue; e.currentTarget.style.color = T.blue; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.ink; }}
            >Contact Me</button>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", animation: "fadeUp 0.5s 0.3s ease both", opacity: 0, animationFillMode: "forwards" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: T.light, textTransform: "uppercase", letterSpacing: "0.08em" }}>Connect</span>
            <div style={{ height: 1, width: 24, background: T.border }} />
            {[
              ["LinkedIn", "https://www.linkedin.com/in/pooja-sahu-54b5a7281/"],
              ["GitHub", "https://github.com/Pooja0726"],
              ["LeetCode", "https://leetcode.com/u/phius12345/"],
            ].map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
                color: T.muted, textDecoration: "none",
                padding: "6px 14px", borderRadius: 5,
                border: `1px solid ${T.border}`,
                background: T.white,
                transition: "all 0.18s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = T.blue; e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.background = T.bluePale; }}
                onMouseLeave={e => { e.currentTarget.style.color = T.muted; e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = T.white; }}
              >{label}</a>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo + Metrics */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, animation: "fadeUp 0.5s 0.35s ease both", opacity: 0, animationFillMode: "forwards" }}>

          {/* Photo */}
          <div style={{ position: "relative", alignSelf: "center" }}>
            <div style={{
              width: 240, height: 240, borderRadius: 16,
              background: `linear-gradient(145deg, ${T.bluePale}, #dbeafe)`,
              border: `1px solid ${T.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(3,105,161,0.12)",
            }}>
              {/*
                TO ADD YOUR PHOTO:
                Replace the div below with:
                <img src="/photo.jpg" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                and place your photo.jpg in the public/ folder
              */}
              <img src="/photo.jpeg" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            {/* Published tag */}
          </div>

          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { val: "8.87", label: "CGPA", sub: "VIT Bhopal" },
              { val: "84.4%", label: "Model Accuracy", sub: "WCSC 2025" },
              { val: "100+", label: "LeetCode", sub: "Problems Solved" },
              { val: "30%", label: "Impact Delivered", sub: "At Amasqis.ai" },
            ].map(s => (
              <div key={s.label} style={{
                background: T.white, border: `1px solid ${T.border}`,
                borderRadius: 10, padding: "16px 14px",
                textAlign: "center",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.boxShadow = "0 4px 16px rgba(3,105,161,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, color: T.blue, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11.5, fontWeight: 700, color: T.navy, marginTop: 5 }}>{s.label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, color: T.light, marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ABOUT ── */
function AboutPage() {
  return (
    <Section>
      <SectionTitle num="01" title="About Me" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: T.navy, marginBottom: 14 }}>Pooja Sahu</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: T.ink2, lineHeight: 1.9, marginBottom: 14 }}>
              I am an AI/ML engineer pursuing B.Tech in Computer Science with an AI-ML specialization at VIT Bhopal. With a strong academic record of 8.87 CGPA and hands-on industry experience, I build intelligent systems that bridge research and production.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: T.ink2, lineHeight: 1.9 }}>
              My core strengths lie in deep learning, computer vision, generative AI, and full-stack development. I thrive in fast-paced engineering environments and bring strong analytical and collaborative skills to every project.
            </p>
          </Card>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { label: "CGPA", val: "8.87 / 10" },
              { label: "Research Paper", val: "WCSC 2025" },
              { label: "Industry Exp.", val: "1+ Year" },
              { label: "LeetCode", val: "100+ Solved" },
            ].map(s => (
              <div key={s.label} style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, padding: "14px 16px" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: T.blue }}>{s.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Card padding="22px 26px">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: T.navy, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 12, flexShrink: 0 }}>VIT</div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: T.navy }}>Vellore Institute of Technology, Bhopal</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: T.blue, fontWeight: 500 }}>B.Tech CSE (AI-ML) &nbsp;·&nbsp; 2023 – 2027</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: T.muted }}>Bhopal, Madhya Pradesh &nbsp;·&nbsp; CGPA: 8.87 / 10</div>
              </div>
            </div>
            <div style={{ marginTop: 14, background: T.border2, borderRadius: 4, height: 5, overflow: "hidden" }}>
              <div style={{ height: "100%", width: "88.7%", background: `linear-gradient(to right, ${T.blue}, ${T.accent})`, borderRadius: 4 }} />
            </div>
          </Card>

          {[
            { label: "Research Publication", val: "Facial Expression Recognition — WCSC 2025", color: T.blue },
            { label: "Industry Experience", val: "AI/ML Intern — Amasqis.ai (Mar–Sep 2025)", color: T.blue },
            { label: "Specialization", val: "Deep Learning · Generative AI · Computer Vision", color: T.blue },
            { label: "Location", val: "Bhopal, Madhya Pradesh, India", color: T.muted },
            { label: "Career Objective", val: "AI/ML Engineer at top-tier technology companies", color: T.blue },
          ].map(item => (
            <div key={item.label} style={{
              background: T.white, border: `1px solid ${T.border}`,
              borderRadius: 8, padding: "13px 18px",
              display: "flex", alignItems: "center", gap: 16,
              transition: "all 0.18s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <div style={{ width: 3, height: 36, borderRadius: 2, background: item.color, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>{item.label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: T.navy }}>{item.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── EXPERIENCE ── */
function ExperiencePage() {
  return (
    <Section>
      <SectionTitle num="02" title="Work Experience" />
      <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 48 }}>
        <div>
          <div style={{ width: 44, height: 44, borderRadius: 8, background: T.navy, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 11 }}>2025</div>
          <div style={{ width: 1, height: "100%", background: `linear-gradient(to bottom, ${T.border}, transparent)`, margin: "12px auto 0", marginLeft: 22 }} />
        </div>

        <Card padding="0">
          <div style={{ padding: "28px 36px 24px", borderBottom: `1px solid ${T.border2}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ display: "inline-block", background: T.bluePale, border: `1px solid #bae6fd`, borderRadius: 4, padding: "3px 10px", marginBottom: 10 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: T.blue, textTransform: "uppercase", letterSpacing: "0.06em" }}>AI / ML Intern</span>
                </div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, color: T.navy }}>Amasqis.ai</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: T.muted, marginTop: 3 }}>Financial AI Platform &nbsp;·&nbsp; Fintech Industry</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: T.navy }}>Mar 2025 – Sep 2025</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: T.muted, marginTop: 3 }}>Remote</div>
              </div>
            </div>
          </div>

          <div style={{ padding: "28px 36px" }}>
            {[
              { text: " Designed user-friendly interfaces for financial AI platform serving 500+ customers, created 15+ dashboard components presenting customer insights and performance metrics, improving decision-making efficiency by 30%" },
              { text: "Collaborated in Agile sprints with cross-functional teams to implement AI-driven features and integrate user feedback for enhanced UI/UX" },
    
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 18, alignItems: "flex-start" }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: T.bluePale, border: `1px solid #bae6fd`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 3 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.blue }} />
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: T.ink2, lineHeight: 1.8 }}>
                  {p.text} <strong style={{ color: T.navy, fontWeight: 600 }}>{p.hi}</strong>{p.rest}
                </p>
              </div>
            ))}

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20, paddingTop: 18, borderTop: `1px solid ${T.border2}` }}>
              {["Dashboard Design", "Data Visualization", "UI/UX", "Python", "React"].map(tag => (
                <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, padding: "4px 12px", borderRadius: 4, background: T.bg, border: `1px solid ${T.border}`, color: T.ink2 }}>{tag}</span>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div style={{ marginTop: 32, padding: "16px 24px", background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: T.muted }}>
          Actively seeking internship and full-time opportunities at technology companies — open to AI/ML, software engineering, and research roles.
        </p>
      </div>
    </Section>
  );
}

/* ── PROJECTS ── */
function ProjectsPage() {
  return (
    <Section>
      <SectionTitle num="03" title="Projects" />
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {PROJECTS.map((p, i) => (
          <Card key={p.id} padding="0" style={{ animation: `fadeUp 0.45s ${i * 0.1}s ease both`, opacity: 0, animationFillMode: "forwards" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24 }}>
              <div style={{ padding: "32px 36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  {p.published && (
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, fontWeight: 700, padding: "3px 10px", borderRadius: 4, background: "#fef3c7", border: "1px solid #fde68a", color: "#92400e", letterSpacing: "0.04em", textTransform: "uppercase" }}>Published — WCSC 2025</span>
                  )}
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: T.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.subtitle}</span>
                </div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: T.navy, marginBottom: 12, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: T.ink2, lineHeight: 1.85, marginBottom: 18 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, padding: "4px 12px", borderRadius: 4, background: T.bg, border: `1px solid ${T.border}`, color: T.ink2 }}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ padding: "32px 32px 32px 0", display: "flex", flexDirection: "column", gap: 10, justifyContent: "center", minWidth: 160 }}>
                {p.metrics.map(m => (
                  <div key={m.label} style={{ textAlign: "center", padding: "14px 16px", background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8 }}>
                    <div style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: T.blue }}>{m.val}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: T.muted, marginTop: 3 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ── SKILLS ── */
function SkillsPage() {
  return (
    <Section>
      <SectionTitle num="04" title="Technical Skills" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        {Object.entries(SKILLS_DATA).map(([cat, { items }], i) => (
          <Card key={cat} style={{ animation: `fadeUp 0.45s ${i * 0.08}s ease both`, opacity: 0, animationFillMode: "forwards" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: T.blue, marginBottom: 16 }}>{cat}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {items.map(skill => (
                <span key={skill} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 400,
                  padding: "5px 13px", borderRadius: 4,
                  background: T.bg, border: `1px solid ${T.border}`,
                  color: T.ink2, cursor: "default", transition: "all 0.15s",
                }}
                  onMouseEnter={e => { e.target.style.background = T.bluePale; e.target.style.borderColor = "#bae6fd"; e.target.style.color = T.blue; }}
                  onMouseLeave={e => { e.target.style.background = T.bg; e.target.style.borderColor = T.border; e.target.style.color = T.ink2; }}
                >{skill}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: T.muted, marginBottom: 16 }}>Professional & Interpersonal Skills</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Problem Solving", "Team Collaboration", "Technical Communication", "Leadership", "Critical Thinking", "Agile / Scrum", "Research & Analysis", "Presentation Skills"].map(s => (
            <span key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 400, padding: "6px 16px", borderRadius: 4, background: T.bg, border: `1px solid ${T.border}`, color: T.ink2 }}>{s}</span>
          ))}
        </div>
      </Card>
    </Section>
  );
}

/* ── CONTACT ── */
function ContactPage() {
  return (
    <Section>
      <SectionTitle num="05" title="Contact" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <Card padding="40px">
          <h3 style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, color: T.navy, lineHeight: 1.3, marginBottom: 14 }}>Let's connect and build something great together.</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: T.ink2, lineHeight: 1.9, marginBottom: 30 }}>
            I am actively seeking internships and full-time roles in AI/ML and software engineering at top technology companies. Whether you have an opportunity, a project idea, or just want to talk — I would love to hear from you.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Email", val: "sahupooja43890@gmail.com", href: "mailto:sahupooja43890@gmail.com" },
              { label: "Phone", val: "+91 9302445014", href: "tel:+919302445014" },
              { label: "Location", val: "Bhopal, Madhya Pradesh, India", href: null },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "center", padding: "13px 16px", background: T.bg, border: `1px solid ${T.border}`, borderRadius: 7, transition: "all 0.18s", cursor: item.href ? "pointer" : "default" }}
                onClick={() => item.href && window.open(item.href)}
                onMouseEnter={e => { if (item.href) { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.background = T.bluePale; } }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = T.bg; }}
              >
                <div style={{ width: 3, height: 28, borderRadius: 2, background: T.blue, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: T.navy }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { platform: "LinkedIn", desc: "Professional profile & endorsements", url: "https://www.linkedin.com/in/pooja-sahu-54b5a7281/" },
            { platform: "GitHub", desc: "Open source projects & code repositories", url: "https://github.com/Pooja0726" },
            { platform: "LeetCode", desc: "Algorithm & data structure solutions", url: "https://leetcode.com/u/phius12345/" },
          ].map(link => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 24px", background: T.white,
                border: `1px solid ${T.border}`, borderRadius: 8,
                transition: "all 0.2s", cursor: "pointer",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.blue; e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(3,105,161,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: T.navy }}>{link.platform}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: T.muted, marginTop: 2 }}>{link.desc}</div>
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: T.blue, fontWeight: 400 }}>&#8594;</div>
              </div>
            </a>
          ))}

          <div style={{ padding: "24px", background: T.navy, borderRadius: 8, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, marginBottom: 8 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Status</span>
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: "white", marginBottom: 5 }}>Currently Available</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: "rgba(255,255,255,0.6)" }}>Open to internships, research, and full-time roles</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── HELPERS ── */
function Section({ children }) {
  return (
    <div style={{ minHeight: "100vh", padding: "88px 80px 72px", background: T.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </div>
  );
}

function SectionTitle({ num, title }) {
  return (
    <div style={{ marginBottom: 48, paddingBottom: 20, borderBottom: `1px solid ${T.border}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: T.blue, letterSpacing: "0.15em" }}>{num}</span>
        <div style={{ height: 1, width: 32, background: T.border }} />
      </div>
      <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, color: T.navy, letterSpacing: "-0.02em" }}>{title}</h2>
    </div>
  );
}

function Card({ children, padding = "28px 32px", style = {} }) {
  return (
    <div style={{ background: T.white, border: `1px solid ${T.border}`, borderRadius: 10, padding, boxShadow: "0 1px 8px rgba(0,0,0,0.04)", ...style }}>
      {children}
    </div>
  );
}

/* ── ROOT ── */
export default function App() {
  const [page, setPage] = useState("Home");

  const pages = {
    Home: <HomePage setPage={setPage} />,
    About: <AboutPage />,
    Experience: <ExperiencePage />,
    Projects: <ProjectsPage />,
    Skills: <SkillsPage />,
    Contact: <ContactPage />,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f8fafc; color: #1e293b; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <Nav page={page} setPage={setPage} />

      <div key={page} style={{ animation: "fadeUp 0.35s ease both" }}>
        {pages[page]}
      </div>

      <footer style={{ background: T.white, borderTop: `1px solid ${T.border}`, padding: "20px 80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: T.muted }}>Pooja Sahu &nbsp;·&nbsp; AI/ML Engineer &nbsp;·&nbsp; VIT Bhopal 2027</span>
        <div style={{ display: "flex", gap: 6 }}>
          {NAV.map(l => (
            <button key={l} onClick={() => setPage(l)} title={l} style={{
              width: page === l ? 22 : 6, height: 6, borderRadius: 3,
              background: page === l ? T.navy : T.border,
              border: "none", cursor: "pointer",
              transition: "all 0.25s ease",
            }} />
          ))}
        </div>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: T.muted }}>sahupooja43890@gmail.com</span>
      </footer>
    </>
  );
}