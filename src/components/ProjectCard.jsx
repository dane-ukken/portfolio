import React from "react";

/**
 * ProjectCard
 * - Dark-themed, responsive project section
 * - Mimics GitHub repo preview card w/ stats + language bar
 * - Minimal dependencies (pure React + CSS-in-file)
 */
export default function ProjectCard({
                                      heading = "Projects",
                                      title = "Nexus – Decentralized Messaging Service",
                                      href = "#",
                                      description = "A decentralized messaging service that ensures secure, peer-to-peer communication with end-to-end encryption. Built using Go and WebRTC, Nexus offers a scalable infrastructure for seamless and private messaging.",
                                      owner = "dane-ukken",
                                      repo = "nexus-decentralized-messaging",
                                      repoDescription = "A decentralized messaging service built with Go and WebRTC, ensuring secure, peer-to-peer communication with end-to-end encryption.",
                                      repoStats = { contributors: 1, issues: 0, stars: 0, forks: 0 },
                                      repoIcon = "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // fallback square image
                                      languageBar = [
                                        { label: "Go", percent: 64 },
                                        { label: "TypeScript", percent: 14 },
                                        { label: "Dockerfile", percent: 12 },
                                        { label: "Other", percent: 10 },
                                      ],
                                      tags = ["Go", "WebRTC", "Docker", "gRPC", "Kubernetes", "TLS"],
                                    }) {
  return (
    <section className="pc-wrap">

      <a className="pc-title" href={href} target="_blank" rel="noreferrer">
        {title}
        <svg
          className="pc-ext"
          xmlns="http://www.w3.org/2000/svg"
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <path d="M15 3h6v6"/>
          <path d="M10 14L21 3"/>
        </svg>
      </a>

      <p className="pc-desc">{description}</p>

      {/* Repo preview card */}
      <div className="pc-repo">
        <div className="pc-repo-body">
          <div className="pc-repo-meta">
            <div className="pc-repo-owner">{owner}</div>
            <div className="pc-repo-name">{repo}</div>
            <p className="pc-repo-desc">{repoDescription}</p>

            <div className="pc-stats">
              <Stat icon={UserIcon} label="Contributor" value={repoStats.contributors} />
              <Stat icon={IssueIcon} label="Issues" value={repoStats.issues} />
              <Stat icon={StarIcon} label="Stars" value={repoStats.stars} />
              <Stat icon={ForkIcon} label="Forks" value={repoStats.forks} />
              <a className="pc-gh" href={href} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div className="pc-repo-thumb">
            <img src={repoIcon} alt="" />
          </div>
        </div>

        {/* Language bar */}
        <div className="pc-langbar" role="presentation" aria-hidden="true">
          {languageBar.map((s, i) => (
            <div
              key={s.label + i}
              className={`pc-lang pc-lang-${i % 6}`}
              style={{ width: `${Math.max(0, Math.min(100, s.percent))}%` }}
              title={`${s.label} • ${s.percent}%`}
            />
          ))}
        </div>
      </div>

      {/* Tag pills */}
      <div className="pc-tags">
        {tags.map((t) => (
          <span key={t} className="pc-tag">{t}</span>
        ))}
      </div>

      {/* Styles */}
      <style>{css}</style>
    </section>
  );
}

/* ---------- Small stat cell ---------- */
function Stat({ icon: Icon, label, value }) {
  return (
    <div className="pc-stat" title={label}>
      <Icon />
      <span>{value}</span>
    </div>
  );
}

/* ---------- Icons (inline SVGs) ---------- */
function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49
      0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.17-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63
      1 .07 1.52 1.05 1.52 1.05 .9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.09
      0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34
      1.91-1.32 2.75-1.05 2.75-1.05 .55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.96-2.34 4.83-4.57 5.08.36.32.68.93.68 1.88
      0 1.36-.01 2.46-.01 2.79 0 .27.18.58.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5ZM21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1 7 7 0 0 1 14 0Z"/>
    </svg>
  );
}
function IssueIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22a10 10 0 1 0-10-10 10.011 10.011 0 0 0 10 10Zm1-5h-2v2h2Zm0-10h-2v8h2Z"/>
    </svg>
  );
}
function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );
}
function ForkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 4a3 3 0 1 0 2 5.236V11a4 4 0 0 0 4 4h2.764A3 3 0 1 0 17 13h-4a2 2 0 0 1-2-2V9.236A3 3 0 1 0 7 4Z"/>
    </svg>
  );
}

/* ---------- Styles (scoped via unique class prefix) ---------- */
const css = `
:root {
  --pc-bg: #0f1418;
  --pc-fg: #e7ecef;
  --pc-muted: #a6b0b6;
  --pc-border: #25313a;
  --pc-card: #10161b;
  --pc-chip: #152029;
  --pc-chip-fg: #cbd6dc;
  --pc-link: #d7e3ff;
}

.pc-wrap {
  background: var(--pc-bg);
  color: var(--pc-fg);
  padding: 24px;
  border-radius: 16px;
  max-width: 940px;
  margin: 0 auto;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
}

.pc-heading {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 800;
  margin: 0 0 12px 0;
  letter-spacing: -0.02em;
}

.pc-title {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: 600;
  color: var(--pc-link);
  text-decoration: none;
  border-bottom: 1px solid rgba(215,227,255,.2);
  width: fit-content;
  padding-bottom: 4px;
}
.pc-title:hover { opacity: .9; }
.pc-ext { opacity: .9; }

.pc-desc {
  margin: 14px 0 18px;
  color: var(--pc-muted);
  line-height: 1.6;
  max-width: 72ch;
}

/* Repo card */
.pc-repo {
  border: 1px solid var(--pc-border);
  border-radius: 12px;
  background: var(--pc-card);
  overflow: hidden;
}

.pc-repo-body {
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 16px;
  padding: 18px;
}

.pc-repo-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pc-repo-owner {
  color: var(--pc-muted);
  font-size: 14px;
}

.pc-repo-name {
  font-weight: 800;
  font-size: clamp(18px, 2vw, 22px);
  letter-spacing: -0.01em;
}

.pc-repo-desc {
  color: var(--pc-muted);
  font-size: 14px;
  line-height: 1.5;
  margin-top: 2px;
  max-width: 64ch;
}

.pc-repo-thumb {
  display: flex; justify-content: center; align-items: center;
}
.pc-repo-thumb img {
  width: 96px; height: 96px; object-fit: cover; border-radius: 12px; opacity: .95;
  box-shadow: 0 2px 10px rgba(0,0,0,.25);
}

.pc-stats {
  display: grid;
  grid-template-columns: repeat(4, auto) 1fr;
  align-items: center;
  gap: 14px;
  margin-top: 10px;
}
.pc-gh { margin-left: auto; color: var(--pc-muted); }
.pc-gh:hover { color: var(--pc-fg); }

.pc-stat {
  display: inline-flex; align-items: center; gap: 6px;
  color: var(--pc-muted); font-size: 13px;
}

.pc-langbar { display: flex; height: 10px; width: 100%; }
.pc-lang { height: 100%; }
.pc-lang-0 { background: #00ADD8; }     /* Go */
.pc-lang-1 { background: #3178C6; }     /* TS */
.pc-lang-2 { background: #0db7ed; }     /* Docker-ish */
.pc-lang-3 { background: #6e7681; }     /* other */
.pc-lang-4 { background: #f59e0b; }
.pc-lang-5 { background: #ef4444; }

/* Tags */
.pc-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.pc-tag {
  font-size: 13px; padding: 6px 10px; border-radius: 999px;
  background: var(--pc-chip); color: var(--pc-chip-fg);
  border: 1px solid var(--pc-border);
}

/* Responsive */
@media (max-width: 640px) {
  .pc-repo-body { grid-template-columns: 1fr; }
  .pc-repo-thumb { justify-content: flex-start; }
}
`;

/* ---------- Example usage ----------
import ProjectCard from "./ProjectCard";

export default function Example() {
  return (
    <div style={{ padding: 24, background: "#0b1116", minHeight: "100vh" }}>
      <ProjectCard href="https://github.com/justine-george/nexus-decentralized-messaging" />
    </div>
  );
}
------------------------------------- */
