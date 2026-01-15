export default function Home() {
  return (
    <div>
      <h1 className="h1">Fanpan Zeng</h1>
      <p className="sub">
        Software Engineer focused on AI/ML infrastructure and product-driven systems.
        I build reliable services and practical LLM experiences.
      </p>

      <div className="hr" />

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div className="sectionTitle">Expertise</div>
        <div className="chips">
          {["AI/ML", "LLM", "RAG/Search", "AWS", "Product Thinking", "Creative Tech", "Career Development", "Sociology & Psychology"].map(
            (t) => (
              <span key={t} className="chip">{t}</span>
            )
          )}
        </div>
      </div>

      <div className="hr" />

      <div id="projects">
        <div className="sectionTitle">Projects</div>
        <div className="grid">
          <div className="card">
            <div className="cardTitle">Model Launch & Inference Integration</div>
            <p className="cardDesc">
              Integrated model endpoints into a production API surface; improved reliability and launch velocity.
            </p>
          </div>
          <div className="card">
            <div className="cardTitle">Search Quality Improvements</div>
            <p className="cardDesc">
              Improved retrieval and ranking quality with evaluation loops, guardrails, and pragmatic LLM tooling.
            </p>
          </div>
          <div className="card">
            <div className="cardTitle">Creative Tech Experiments</div>
            <p className="cardDesc">
              Exploring low-friction outfit data capture and tech × aesthetics ideas (jewelry, outfits, home decor).
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div>© {new Date().getFullYear()} Fanpan Zeng</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="https://github.com/fanpanzeng">GitHub</a>
          <a href="https://www.linkedin.com/in/fanpanzeng">LinkedIn</a>
          <a href="mailto:fanpanzeng@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
}
