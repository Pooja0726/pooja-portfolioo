import { useState, useEffect } from "react";

/* ── CONSTANTS ── */
const NAV = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const PROJECTS = [
  {
    id: 1, emoji: "🧠",
    title: "Facial Expression Recognition",
    subtitle: "CNN + SVM · Published Research",
    desc: "Hybrid deep learning model combining VGG16 feature extraction with SVM classification. Achieved 84.40% accuracy and 0.85 F1-score on 35,000+ images across CK+ and FER-2013 datasets.",
    tags: ["VGG16", "SVM", "TensorFlow", "Streamlit", "OpenCV"],
    stat: "84.4% Accuracy", stat2: "WCSC 2025",
    color: "#0ea5e9", published: true,
  },
  {
    id: 2, emoji: "⚗️",
    title: "Chemical Equipment Visualizer",
    subtitle: "Django · React · PyQt5",
    desc: "Full-stack industrial data visualization platform with real-time sensor charts, automated PDF report generation, and a standalone Windows desktop client packaged via PyInstaller.",
    tags: ["Django REST", "React", "PyQt5", "Railway", "PyInstaller"],
    stat: "Cross-Platform", stat2: "Desktop + Web",
    color: "#3b82f6", published: false,
  },
  {
    id: 3, emoji: "📊",
    title: "OLA Business Analytics Dashboard",
    subtitle: "Power BI · SQL · Excel",
    desc: "Comprehensive ride-sharing analytics dashboard analyzing 50,000+ trip records. Delivered executive-level insights on revenue, cancellations, and satisfaction metrics.",
    tags: ["Power BI", "SQL", "Excel", "Data Analytics"],
    stat: "+25% Efficiency", stat2: "50K+ Records",
    color: "#06b6d4", published: false,
  },
];

const SKILLS = {
  "Languages": { icon: "💻", color: "#0ea5e9", items: ["Python", "Java", "C++", "SQL", "JavaScript", "HTML", "CSS"] },
  "Frameworks & Tools": { icon: "🛠️", color: "#3b82f6", items: ["Django", "React", "Flutter", "TensorFlow", "Keras", "Streamlit", "Power BI", "Hugging Face"] },
  "Libraries & APIs": { icon: "📦", color: "#06b6d4", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Gemini API"] },
  "AI / ML Expertise": { icon: "🤖", color: "#0284c7", items: ["Deep Learning", "Machine Learning", "Generative AI", "RAG", "Ollama", "GCP", "Computer Vision"] },
};

/* ── STYLES ── */
const C = {
  bg: "#f0f9ff",
  bg2: "#e0f2fe",
  white: "#ffffff",
  navy: "#0c1a3a",
  ink: "#1e3a5f",
  ink2: "#334d6e",
  muted: "#64748b",
  blue: "#0ea5e9",
  blue2: "#3b82f6",
  blueDark: "#0284c7",
  accent: "#06b6d4",
  border: "#bae6fd",
  border2: "#e0f2fe",
  cardBg: "rgba(255,255,255,0.85)",
};

/* ── NAV ── */
function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      height: 68, display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 64px",
      background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(240,249,255,0.9)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      boxShadow: scrolled ? "0 4px 24px rgba(14,165,233,0.08)" : "none",
      transition: "all 0.3s ease",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: `linear-gradient(135deg, ${C.blue}, ${C.blue2})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontWeight: 800, fontSize: 16,
          fontFamily: "Georgia, serif",
          boxShadow: `0 4px 12px rgba(14,165,233,0.35)`,
        }}>PS</div>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, color: C.navy }}>Pooja Sahu</span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 4 }}>
        {NAV.map(l => (
          <button key={l} onClick={() => setPage(l)} style={{
            background: page === l ? `linear-gradient(135deg, ${C.blue}, ${C.blue2})` : "transparent",
            border: "none", borderRadius: 8,
            color: page === l ? "white" : C.ink2,
            padding: "7px 16px",
            fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 500,
            cursor: "pointer", transition: "all 0.2s",
            boxShadow: page === l ? `0 4px 12px rgba(14,165,233,0.3)` : "none",
          }}
            onMouseEnter={e => { if (page !== l) { e.target.style.background = C.bg2; e.target.style.color = C.blue; } }}
            onMouseLeave={e => { if (page !== l) { e.target.style.background = "transparent"; e.target.style.color = C.ink2; } }}
          >{l}</button>
        ))}
      </div>
    </nav>
  );
}

/* ── HOME PAGE ── */
function HomePage({ setPage }) {
  const roles = ["AI/ML Engineer", "Published Researcher", "Deep Learning Specialist", "Full-Stack Developer"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => { setRoleIdx(i => (i + 1) % roles.length); setShow(true); }, 350);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "88px 64px 60px", position: "relative", overflow: "hidden" }}>

      {/* Background decoration */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -50, left: -80, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", right: "8%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr auto", gap: 80, alignItems: "center" }}>

        {/* LEFT */}
        <div>
          {/* Status badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(14,165,233,0.08)", border: `1px solid rgba(14,165,233,0.25)`,
            borderRadius: 100, padding: "7px 16px", marginBottom: 28,
            animation: "fadeUp 0.5s ease both",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: C.blueDark, letterSpacing: "0.05em" }}>Available for Internships & Opportunities</span>
          </div>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: C.muted, marginBottom: 6, animation: "fadeUp 0.5s 0.08s ease both", opacity: 0, animationFillMode: "forwards" }}>Hello, I'm</p>

          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 700,
            color: C.navy, lineHeight: 1.05, letterSpacing: "-0.02em",
            marginBottom: 12,
            animation: "fadeUp 0.5s 0.12s ease both", opacity: 0, animationFillMode: "forwards",
          }}>
            Pooja Sahu
          </h1>

          {/* Animated role */}
          <div style={{ marginBottom: 20, height: 38, animation: "fadeUp 0.5s 0.18s ease both", opacity: 0, animationFillMode: "forwards" }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 22, fontWeight: 600,
              color: C.blue, display: "inline-block",
              transition: "opacity 0.35s, transform 0.35s",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(-8px)",
            }}>{roles[roleIdx]}</span>
          </div>

          {/* University */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 24,
            background: C.white, border: `1px solid ${C.border}`,
            borderRadius: 12, padding: "10px 18px",
            boxShadow: "0 2px 12px rgba(14,165,233,0.1)",
            animation: "fadeUp 0.5s 0.22s ease both", opacity: 0, animationFillMode: "forwards",
          }}>
            <span style={{ fontSize: 22 }}>🎓</span>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 700, color: C.navy }}>Vellore Institute of Technology, Bhopal</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted }}>B.Tech CSE (AI-ML) · CGPA: 8.87/10 · 2023 – 2027</div>
            </div>
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 15.5, color: C.ink2,
            lineHeight: 1.85, maxWidth: 560, marginBottom: 36,
            animation: "fadeUp 0.5s 0.26s ease both", opacity: 0, animationFillMode: "forwards",
          }}>
            AI/ML engineer with <strong style={{ color: C.navy }}>1+ years</strong> of Python development experience. <strong style={{ color: C.navy }}>Published researcher</strong> at WCSC 2025 specializing in deep learning, computer vision, and full-stack development. 100+ LeetCode problems solved.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36, animation: "fadeUp 0.5s 0.3s ease both", opacity: 0, animationFillMode: "forwards" }}>
            <button onClick={() => setPage("Projects")} style={{
              background: `linear-gradient(135deg, ${C.blue}, ${C.blue2})`,
              border: "none", color: "white",
              padding: "13px 30px", borderRadius: 10,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700,
              cursor: "pointer", boxShadow: `0 6px 20px rgba(14,165,233,0.35)`,
              transition: "all 0.25s", display: "flex", alignItems: "center", gap: 8,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 28px rgba(14,165,233,0.45)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 6px 20px rgba(14,165,233,0.35)`; }}
            >View Projects →</button>
            <button onClick={() => setPage("Contact")} style={{
              background: C.white, border: `1.5px solid ${C.border}`,
              color: C.ink, padding: "13px 30px", borderRadius: 10,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
              cursor: "pointer", transition: "all 0.25s",
              boxShadow: "0 2px 8px rgba(14,165,233,0.08)",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.color = C.blue; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.ink; e.currentTarget.style.transform = "translateY(0)"; }}
            >Get in Touch</button>
            <a href="mailto:sahupooja43890@gmail.com" style={{
              background: "transparent", border: `1.5px solid ${C.border}`,
              color: C.muted, padding: "13px 24px", borderRadius: 10,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              textDecoration: "none", transition: "all 0.25s", display: "inline-flex", alignItems: "center", gap: 6,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.color = C.blue; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted; }}
            >✉ Email Me</a>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", animation: "fadeUp 0.5s 0.34s ease both", opacity: 0, animationFillMode: "forwards" }}>
            {[
              ["💼", "LinkedIn", "https://www.linkedin.com/in/pooja-sahu-54b5a7281/"],
              ["⌥", "GitHub", "https://github.com/Pooja0726"],
              ["◈", "LeetCode", "https://leetcode.com/u/phius12345/"],
            ].map(([icon, label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "8px 16px", borderRadius: 8,
                background: C.white, border: `1px solid ${C.border}`,
                fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, fontWeight: 600,
                color: C.ink2, textDecoration: "none",
                boxShadow: "0 2px 8px rgba(14,165,233,0.07)",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.color = C.blue; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 6px 16px rgba(14,165,233,0.15)`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.ink2; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(14,165,233,0.07)"; }}
              ><span style={{ color: C.blue }}>{icon}</span> {label}</a>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo + Stats */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, animation: "fadeUp 0.5s 0.38s ease both", opacity: 0, animationFillMode: "forwards" }}>

          {/* Photo frame */}
          <div style={{ position: "relative" }}>
            {/* Decorative ring */}
            <div style={{
              position: "absolute", inset: -8, borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.blue}, ${C.accent}, ${C.blue2})`,
              padding: 3,
              animation: "spin 8s linear infinite",
            }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: C.bg }} />
            </div>
            {/* Photo circle */}
            <div style={{
              width: 220, height: 220, borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.bg2}, ${C.border2})`,
              border: `4px solid ${C.white}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", zIndex: 1,
              boxShadow: `0 20px 60px rgba(14,165,233,0.2)`,
              overflow: "hidden",
              fontSize: 90,
            }}>
              {/* Replace the emoji below with your actual photo:
                  <img src="/photo.jpg" style={{width:"100%",height:"100%",objectFit:"cover"}} />
              */}
              👩‍💻
            </div>
            {/* Published badge */}
            <div style={{
              position: "absolute", bottom: 10, right: -10, zIndex: 2,
              background: `linear-gradient(135deg, ${C.blue}, ${C.blue2})`,
              color: "white", borderRadius: 100,
              padding: "5px 12px", fontSize: 11, fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: `0 4px 12px rgba(14,165,233,0.4)`,
              border: `2px solid white`,
            }}>★ Published</div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: 280 }}>
            {[
              { val: "8.87", label: "CGPA", sub: "VIT Bhopal", color: C.blue },
              { val: "84.4%", label: "Accuracy", sub: "WCSC 2025", color: C.blue2 },
              { val: "100+", label: "LeetCode", sub: "Problems", color: C.accent },
              { val: "30%", label: "Impact", sub: "At Amasqis.ai", color: C.blueDark },
            ].map(s => (
              <div key={s.label} style={{
                background: C.white, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: "16px 14px", textAlign: "center",
                boxShadow: `0 4px 16px rgba(14,165,233,0.08)`,
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(14,165,233,0.15)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 16px rgba(14,165,233,0.08)`; }}
              >
                <div style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: C.navy, marginTop: 4 }}>{s.label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10.5, color: C.muted, marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ABOUT PAGE ── */
function AboutPage() {
  return (
    <PageLayout>
      <SectionHeader num="01" title="About Me" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card>
            <div style={{ fontSize: 44, marginBottom: 16 }}>👩‍💻</div>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Pooja Sahu</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: C.ink2, lineHeight: 1.85, marginBottom: 14 }}>
              A passionate AI/ML engineer currently pursuing B.Tech in Computer Science (AI-ML) at VIT Bhopal. I bridge the gap between research and real-world applications — from a published computer vision paper to production-grade full-stack systems.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: C.ink2, lineHeight: 1.85 }}>
              My expertise spans deep learning, generative AI, end-to-end ML pipelines, and RESTful API development. I thrive in collaborative environments and bring strong problem-solving skills backed by 100+ LeetCode solutions.
            </p>
          </Card>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { icon: "🏆", val: "WCSC 2025", label: "Publication" },
              { icon: "⭐", val: "8.87/10", label: "CGPA" },
              { icon: "💡", val: "100+", label: "LeetCode" },
              { icon: "🚀", val: "1+ Year", label: "Experience" },
            ].map(s => (
              <div key={s.label} style={{
                background: `linear-gradient(135deg, rgba(14,165,233,0.06), rgba(59,130,246,0.04))`,
                border: `1px solid ${C.border}`,
                borderRadius: 12, padding: "16px",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, color: C.blue }}>{s.val}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Card padding="24px 28px">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `linear-gradient(135deg, ${C.blue}, ${C.blue2})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🎓</div>
              <div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, color: C.navy }}>Vellore Institute of Technology</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.blue, fontWeight: 600 }}>B.Tech CSE (AI-ML) · 2023 – 2027</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted }}>Bhopal, Madhya Pradesh · CGPA: 8.87/10</div>
              </div>
            </div>
            <div style={{ marginTop: 16, background: C.bg2, borderRadius: 6, height: 6, overflow: "hidden" }}>
              <div style={{ height: "100%", width: "88.7%", background: `linear-gradient(to right, ${C.blue}, ${C.blue2})`, borderRadius: 6 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: C.muted }}>Progress</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: C.blue }}>8.87 / 10</span>
            </div>
          </Card>

          {[
            { icon: "🔬", label: "Research Publication", val: "Facial Expression Recognition — WCSC 2025", color: C.blue },
            { icon: "💼", label: "Industry Experience", val: "AI/ML Intern at Amasqis.ai · Mar–Sep 2025", color: C.blue2 },
            { icon: "⚡", label: "Core Expertise", val: "Deep Learning · Generative AI · Computer Vision", color: C.accent },
            { icon: "📍", label: "Location", val: "Bhopal, Madhya Pradesh, India", color: C.blueDark },
            { icon: "🎯", label: "Career Goal", val: "AI/ML Engineer at world-class tech companies", color: "#7c3aed" },
          ].map(item => (
            <div key={item.label} style={{
              background: C.white, border: `1px solid ${C.border}`,
              borderRadius: 12, padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 14,
              boxShadow: "0 2px 8px rgba(14,165,233,0.06)",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.boxShadow = `0 4px 16px rgba(14,165,233,0.12)`; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "0 2px 8px rgba(14,165,233,0.06)"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <div style={{ width: 38, height: 38, borderRadius: 10, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: C.navy }}>{item.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

/* ── EXPERIENCE PAGE ── */
function ExperiencePage() {
  return (
    <PageLayout>
      <SectionHeader num="02" title="Work Experience" />
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 8 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: `linear-gradient(135deg, ${C.blue}, ${C.blue2})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 22, boxShadow: `0 6px 18px rgba(14,165,233,0.3)` }}>🏢</div>
          <div style={{ width: 2, flex: 1, background: `linear-gradient(to bottom, ${C.blue}, transparent)`, marginTop: 12, borderRadius: 2 }} />
        </div>

        <div>
          <Card padding="0">
            {/* Header */}
            <div style={{ padding: "28px 36px", borderBottom: `1px solid ${C.border2}`, background: `linear-gradient(135deg, rgba(14,165,233,0.04), rgba(59,130,246,0.02))` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: `rgba(14,165,233,0.1)`, border: `1px solid rgba(14,165,233,0.25)`, borderRadius: 100, padding: "4px 12px", marginBottom: 10 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)" }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: C.blue, textTransform: "uppercase", letterSpacing: "0.08em" }}>AI/ML Intern</span>
                  </div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: C.navy }}>Amasqis.ai</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.blue, fontWeight: 600, marginTop: 3 }}>Financial AI Platform · Fintech</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.blue2})`, color: "white", fontSize: 11, fontWeight: 700, padding: "5px 14px", borderRadius: 100, marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>🌐 Remote</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.muted }}>Mar 2025 – Sep 2025</div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "28px 36px" }}>
              {[
                { point: "Designed user-friendly interfaces for a financial AI platform serving", hi: "500+ enterprise customers", rest: ", creating 15+ dashboard components presenting customer insights and performance metrics.", icon: "📊" },
                { point: "Improved client decision-making efficiency by", hi: "30%", rest: " through actionable analytics dashboards and streamlined data visualization layers.", icon: "📈" },
                { point: "Collaborated in", hi: "Agile sprints", rest: " with cross-functional engineering teams to implement AI-driven features and continuously enhance UI/UX based on user feedback.", icon: "🤝" },
              ].map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `rgba(14,165,233,0.08)`, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, marginTop: 2 }}>{p.icon}</div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: C.ink2, lineHeight: 1.75 }}>
                    {p.point} <strong style={{ color: C.navy }}>{p.hi}</strong>{p.rest}
                  </p>
                </div>
              ))}

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24, paddingTop: 20, borderTop: `1px solid ${C.border2}` }}>
                {["AI Dashboard Design", "Agile / Scrum", "UI/UX Design", "Data Visualization", "Python", "React"].map(tag => (
                  <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, padding: "5px 13px", borderRadius: 100, background: `rgba(14,165,233,0.08)`, border: `1px solid rgba(14,165,233,0.2)`, color: C.blue }}>{tag}</span>
                ))}
              </div>
            </div>
          </Card>

          <div style={{ marginTop: 28, padding: "20px 28px", background: `linear-gradient(135deg, rgba(14,165,233,0.04), rgba(6,182,212,0.04))`, border: `1px dashed ${C.border}`, borderRadius: 14, textAlign: "center" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted, fontStyle: "italic" }}>
              ✦ Actively seeking full-time roles & internships at top-tier technology companies ✦
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

/* ── PROJECTS PAGE ── */
function ProjectsPage() {
  return (
    <PageLayout>
      <SectionHeader num="03" title="Featured Projects" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {PROJECTS.map((p, i) => (
          <div key={p.id} style={{
            background: C.white, border: `1px solid ${C.border}`,
            borderRadius: 20, overflow: "hidden",
            boxShadow: "0 4px 20px rgba(14,165,233,0.07)",
            transition: "all 0.3s cubic-bezier(0.34,1.3,0.64,1)",
            animation: `fadeUp 0.5s ${i * 0.1}s ease both`,
            opacity: 0, animationFillMode: "forwards",
            display: "flex", flexDirection: "column",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 16px 48px rgba(14,165,233,0.16)`; e.currentTarget.style.borderColor = p.color; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(14,165,233,0.07)"; e.currentTarget.style.borderColor = C.border; }}
          >
            {/* Top color bar */}
            <div style={{ height: 4, background: `linear-gradient(to right, ${p.color}, ${C.blue2})` }} />

            <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${p.color}12`, border: `1px solid ${p.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{p.emoji}</div>
                {p.published && <div style={{ background: `linear-gradient(135deg, #f59e0b, #d97706)`, color: "white", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 100, letterSpacing: "0.06em", fontFamily: "'DM Sans', sans-serif" }}>★ PUBLISHED</div>}
              </div>

              <div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: C.navy, lineHeight: 1.3, marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: p.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.subtitle}</div>
              </div>

              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: C.ink2, lineHeight: 1.8, flex: 1 }}>{p.desc}</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[p.stat, p.stat2].map((s, i) => (
                  <div key={i} style={{ padding: "8px 12px", background: `${p.color}08`, border: `1px solid ${p.color}20`, borderRadius: 8, textAlign: "center" }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: p.color }}>{s}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6, background: C.bg2, border: `1px solid ${C.border}`, color: C.ink2 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

/* ── SKILLS PAGE ── */
function SkillsPage() {
  return (
    <PageLayout>
      <SectionHeader num="04" title="Technical Skills" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        {Object.entries(SKILLS).map(([cat, { icon, color, items }], i) => (
          <Card key={cat} style={{ animation: `fadeUp 0.5s ${i * 0.08}s ease both`, opacity: 0, animationFillMode: "forwards" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: `${color}15`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{icon}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: color }}>{cat}</div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {items.map(skill => (
                <span key={skill} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
                  padding: "6px 14px", borderRadius: 8,
                  background: C.bg, border: `1px solid ${C.border}`,
                  color: C.ink2, cursor: "default", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.target.style.background = `${color}10`; e.target.style.borderColor = `${color}40`; e.target.style.color = color; e.target.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.target.style.background = C.bg; e.target.style.borderColor = C.border; e.target.style.color = C.ink2; e.target.style.transform = "translateY(0)"; }}
                >{skill}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Soft skills */}
      <Card>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted, marginBottom: 16 }}>Professional Skills</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {["Problem Solving", "Team Collaboration", "Communication", "Leadership", "Critical Thinking", "Agile / Scrum", "Research & Analysis", "Presentation Skills"].map(s => (
            <span key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, padding: "8px 18px", borderRadius: 100, background: `linear-gradient(135deg, rgba(14,165,233,0.06), rgba(59,130,246,0.04))`, border: `1px solid ${C.border}`, color: C.ink2 }}>{s}</span>
          ))}
        </div>
      </Card>
    </PageLayout>
  );
}

/* ── CONTACT PAGE ── */
function ContactPage() {
  return (
    <PageLayout>
      <SectionHeader num="05" title="Get In Touch" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {/* Left */}
        <Card padding="40px">
          <div style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: C.navy, lineHeight: 1.25, marginBottom: 14 }}>
            Let's build something <span style={{ color: C.blue }}>great</span> together
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: C.ink2, lineHeight: 1.85, marginBottom: 28 }}>
            I'm actively looking for internships, full-time roles, and research collaborations at top technology companies. Whether you have an exciting opportunity or just want to connect — I'd love to hear from you!
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "✉️", label: "Email", val: "sahupooja43890@gmail.com", href: "mailto:sahupooja43890@gmail.com", color: C.blue },
              { icon: "📞", label: "Phone", val: "+91 9302445014", href: "tel:9302445014", color: C.blue2 },
              { icon: "📍", label: "Location", val: "Bhopal, Madhya Pradesh, India", href: null, color: C.accent },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 18px", background: `${item.color}07`, border: `1px solid ${item.color}20`, borderRadius: 12, transition: "all 0.2s", cursor: item.href ? "pointer" : "default" }}
                onClick={() => item.href && window.open(item.href)}
                onMouseEnter={e => { if (item.href) { e.currentTarget.style.borderColor = `${item.color}50`; e.currentTarget.style.background = `${item.color}12`; } }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${item.color}20`; e.currentTarget.style.background = `${item.color}07`; }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: C.navy }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { icon: "💼", platform: "LinkedIn", desc: "Let's connect professionally", color: "#0077b5", url: "https://www.linkedin.com/in/pooja-sahu-54b5a7281/" },
            { icon: "⌥", platform: "GitHub", desc: "Browse my code & repositories", color: C.blue2, url: "https://github.com/Pooja0726" },
            { icon: "◈", platform: "LeetCode", desc: "View my problem-solving profile", color: "#f59e0b", url: "https://leetcode.com/u/phius12345/" },
          ].map(link => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 18,
                padding: "22px 26px", background: C.white,
                border: `1px solid ${C.border}`, borderRadius: 16,
                boxShadow: "0 2px 10px rgba(14,165,233,0.06)",
                transition: "all 0.25s", cursor: "pointer",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateX(6px)"; e.currentTarget.style.borderColor = link.color; e.currentTarget.style.boxShadow = `0 8px 28px rgba(14,165,233,0.12)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "0 2px 10px rgba(14,165,233,0.06)"; }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${link.color}12`, border: `1px solid ${link.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: link.color, flexShrink: 0 }}>{link.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, color: C.navy }}>{link.platform}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: C.muted }}>{link.desc}</div>
                </div>
                <span style={{ color: C.blue, fontSize: 18, fontWeight: 700 }}>→</span>
              </div>
            </a>
          ))}

          {/* Available card */}
          <div style={{ padding: "24px 28px", background: `linear-gradient(135deg, ${C.blue}, ${C.blue2})`, borderRadius: 16, textAlign: "center", boxShadow: `0 8px 28px rgba(14,165,233,0.3)` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 0 3px rgba(74,222,128,0.3)" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.9)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Currently Available</span>
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>Open to New Opportunities</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: "rgba(255,255,255,0.75)" }}>Internships · Research · Full-time roles</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

/* ── HELPERS ── */
function PageLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", padding: "100px 64px 80px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>{children}</div>
    </div>
  );
}

function SectionHeader({ num, title }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 800, color: C.blue, letterSpacing: "0.2em" }}>{num}</span>
        <div style={{ height: 2, width: 40, background: `linear-gradient(to right, ${C.blue}, transparent)`, borderRadius: 2 }} />
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.15em" }}>Section</span>
      </div>
      <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, color: C.navy, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{title}</h2>
    </div>
  );
}

function Card({ children, padding = "28px 32px", style = {} }) {
  return (
    <div style={{
      background: C.white, border: `1px solid ${C.border}`,
      borderRadius: 18, padding,
      boxShadow: "0 4px 20px rgba(14,165,233,0.07)",
      ...style,
    }}>{children}</div>
  );
}

/* ── ROOT APP ── */
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f0f9ff; color: #1e3a5f; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f0f9ff; }
        ::-webkit-scrollbar-thumb { background: #bae6fd; border-radius: 3px; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>

      {/* Subtle background pattern */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.4,
        backgroundImage: "radial-gradient(circle, #bae6fd 1px, transparent 1px)",
        backgroundSize: "40px 40px" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav page={page} setPage={setPage} />

        <div key={page} style={{ animation: "fadeUp 0.4s ease both" }}>
          {pages[page]}
        </div>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${C.border}`, padding: "24px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", background: C.white }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>© 2025 Pooja Sahu · AI/ML Engineer</span>
          <div style={{ display: "flex", gap: 8 }}>
            {NAV.map(l => (
              <button key={l} onClick={() => setPage(l)} style={{
                width: page === l ? 24 : 7, height: 7, borderRadius: 100,
                background: page === l ? `linear-gradient(to right, ${C.blue}, ${C.blue2})` : C.border,
                border: "none", cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                boxShadow: page === l ? `0 2px 8px rgba(14,165,233,0.4)` : "none",
              }} title={l} />
            ))}
          </div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.muted }}>Bhopal, India 🇮🇳</span>
        </footer>
      </div>
    </>
  );
}