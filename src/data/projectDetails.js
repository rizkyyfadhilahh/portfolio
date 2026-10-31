export const projectDetails = {
  7: {
    tagline: "A job-search copilot that handles the repetitive work and never invents anything on your CV.",
    problem:
      "Job seekers in Indonesia spend hours every week checking career pages one by one, rewriting the same CV for each role, screening out fake postings and preparing for interviews from scattered notes. Existing AI resume tools tend to invent achievements or burden users with API costs.",
    solution:
      "Upload your CV once. JobPilot monitors official employer job boards, scores each opening against your real experience, prepares a tailored CV and interview cheat-sheet for the openings worth pursuing, and tracks every application through to the offer.",
    features: [
      "Truthful by design: tailoring only selects and reorders facts from your confirmed CV, and a validator blocks any number, entity or skill that cannot be traced back to your data.",
      "Explainable match score: a 0-100 score broken down into skills, level and location, with matched keywords and the gaps to close.",
      "You stay in control: every application needs your approval. Auto-apply is opt-in, capped, rate-limited and guarded by a kill switch checked before each browser action.",
      "Built for Indonesia: CVs and job ads in Bahasa Indonesia or English, salaries in Rupiah, take-home pay estimates with PPh 21 and BPJS, and detection of local scam patterns such as registration fees and WhatsApp-only recruiters.",
      "No inference cost: parsing, scoring, tailoring and interview prep run on deterministic rules. The LLM gateway is optional and off by default.",
    ],
    techStack: [
      { group: "Backend", items: ["Python", "FastAPI", "Pytest (220+ tests)"] },
      { group: "Automation", items: ["Playwright", "Mock ATS for dry runs"] },
      { group: "Frontend", items: ["Installable PWA", "Vanilla JS"] },
      { group: "Infra", items: ["Docker", "Vercel", "Local-first data"] },
    ],
    status: "Under active development. Scope is Indonesia only for now; other countries are not planned yet.",
  },
  8: {
    tagline: "Anti-ticket assistant for Jakarta's ganjil-genap (odd-even plate) rule.",
    problem:
      "Drivers in Jakarta are fined when they enter restricted roads on the wrong plate day, yet Waze and Google Maps do not account for the rule. Checking dates, hours, holidays and official suspensions by hand before every trip is error-prone.",
    solution:
      "OddEvenNav works alongside existing navigation apps. It tells you whether your car may use a road, when it is safe to leave, which of your cars to take and what changed today, and it needs no login.",
    features: [
      "Rule checked at the moment the car enters and leaves each corridor, not only at departure, using OpenStreetMap geometry (within 20 m, at least 80 m parallel).",
      "Smart Departure Planner for the earliest safe departure, plus odd-even-free alternative routes.",
      "Paste or share a Google Maps link to see whether the route breaks the rule, then hand off to Google Maps or Waze.",
      "Versioned rule feed covering holidays, cuti bersama, official suspensions and temporary hour changes, cached for offline use.",
      "ETLE camera layer with 214 cameras, community reports, multi-vehicle support and 20:00 WIB push reminders.",
      "Turn-by-turn navigation with Indonesian voice, driver mode for ride-hailing, and an Android widget.",
    ],
    techStack: [
      { group: "Frontend", items: ["JavaScript", "Mobile-first PWA", "Service Worker"] },
      { group: "Backend", items: ["Vercel serverless functions"] },
      { group: "Maps and routing", items: ["OpenStreetMap", "TomTom", "OSRM / Valhalla"] },
      { group: "Mobile", items: ["Capacitor (Android)"] },
      { group: "AI", items: ["Natural-language route search", "Bring-your-own OpenAI / Gemini key"] },
    ],
    status: "Live demo available. Source code is private while the product is in development.",
  },
  9: {
    tagline: "Adaptive AI speaking practice that fits your target date, built for Indonesians.",
    problem:
      "Many Indonesian learners know English grammar but freeze when speaking, and generic apps never explain why their mistakes happen or how to fit practice around a real deadline such as an IELTS exam or job interview.",
    solution:
      "FluentID schedules practice backwards from your target date, corrects speech with explanations rooted in Bahasa Indonesia structure, and simulates the real IELTS and TOEFL speaking tests.",
    features: [
      "Indonesian-ism engine with 41 patterns (for example 'I am agree'), validated on a 280+ sentence internal test set with 90%+ recall.",
      "Adaptive scheduler with reality check, sprints, auto-reschedule, rest days and streaks.",
      "AI conversation with three personas and code-switching between Bahasa and English.",
      "IELTS Speaking Part 1-3 and TOEFL simulators with band predictor and heatmap (estimates, not yet calibrated with human raters).",
      "SM-2 spaced repetition generated from your own detected mistakes.",
      "Privacy by design: audio consent, 90-day retention, data export and deletion in line with UU PDP.",
      "Accessibility audit with 0 axe-core violations across 21 screens, and a load test of 50 concurrent users with 0 errors.",
    ],
    techStack: [
      { group: "Backend", items: ["Python", "FastAPI", "SQLite", "JWT refresh rotation"] },
      { group: "Frontend", items: ["PWA without a build step", "Web Speech API"] },
      { group: "Speech (optional)", items: ["faster-whisper (STT)", "Piper (TTS)"] },
      { group: "Quality", items: ["Pytest", "node:test", "axe-core"] },
      { group: "Infra", items: ["Docker", "Render"] },
    ],
    status: "Currently in progress as a zero-budget MVP that is being refined and expanded.",
  },
  10: {
    tagline: "Your commute is a game. Play it green.",
    problem:
      "Millions of commuters walk to the station, take the train or cycle to campus every day, and nobody notices. Fitness apps reward workouts, not the short walk to the MRT or the train ride that kept a car off the road.",
    solution:
      "EcoRank turns everyday walking, running, cycling and public transit trips into a competitive social game with weekly leagues, squad wars and shareable stats. Hit Start, live your commute, hit Stop.",
    features: [
      "Points engine with per-mode rates, daily caps and speed ceilings, so a road trip never beats a month of daily walks.",
      "Server-side validation of GPS and motion data; anomalies stay in your profile but off the leaderboard.",
      "Duolingo-style weekly leagues of 30 players, Bronze to Diamond, with promotion and relegation.",
      "Eco-Guilds and Squad War for offices, faculties and run clubs.",
      "FlexCard Studio: one-tap 9:16 story cards with CO2 saved, distance and league.",
      "A separate Eco Impact currency for clean-up actions so they never dominate mobility rankings.",
    ],
    techStack: [
      { group: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"] },
      { group: "Backend", items: ["Supabase (Postgres, Auth, RLS)", "Edge Functions"] },
      { group: "Quality", items: ["Vitest", "ESLint", "Commitlint"] },
      { group: "Planning", items: ["PRD v2.0", "Sprint and engineering plans"] },
    ],
    status: "Currently in progress, in the Phase 0 pilot build.",
  },
  11: {
    tagline: "A reference, not a decision-maker: how similar cases were sentenced, with the evidence and the limits in plain view.",
    problem:
      "Indonesian courts publish hundreds of thousands of decisions every quarter. At that volume, finding out how similar cases were sentenced by hand is close to impossible, so sentencing disparity (similar cases, very different sentences) stays hard to see and hard to correct. The people who need that visibility, judges, prosecutors, defense counsel and oversight bodies, are also the people who cannot afford a black box.",
    solution:
      "Aequa started from research I did with two teammates: a model that predicts sentence length from 23,238 noisy Indonesian court decisions and took 1st place out of 109 teams. A competition model is not a product, so I asked what a legal professional would actually need to trust it. The answer shaped everything: Aequa reads a document, anonymizes it, and returns an 80% sentence range placed among the verdicts of the closest comparable cases, with the phrases that pushed the estimate up or down highlighted in the text itself. A Knowledge Center with a cited assistant covers the articles and procedure behind each case.",
    features: [
      "Sentence range with evidence: upload an indictment, demand or verdict (PDF, DOCX, TXT or pasted text) and get an 80% range, a distribution plot of comparable verdicts, and the prosecutor's demand placed at its percentile.",
      "Explanation inside the document: influential phrases are highlighted in the decision text using line pattern as well as color, so they stay readable for color-blind users and in print.",
      "Knowledge Center assistant (RAG): answers questions about articles, elements, penalties and procedure in English or Bahasa Indonesia, only from curated sources, citing every claim with a numbered source.",
      "Case-to-article matcher: describe the facts in plain words and see the relevant articles, which terms and elements matched, the penalty, and the equivalent article in the new Criminal Code (Law 1/2023).",
      "Disparity analytics for oversight: regional deviation from the national median, trends with IQR bands, and the cases that differ significantly from their peers, with a table view for every chart.",
      "Verifiable PDF reports with range, warnings, factors, comparable cases, model version, SHA-256 hash and a verification QR, plus a case workspace and audit log.",
    ],
    decisions: [
      {
        title: "A range, never a point estimate",
        body: "A single number invites over-trust. Every estimate is an 80% interval shown next to real comparable cases and an explanation, so the judgment stays with the legal professional.",
      },
      {
        title: "A classical model beat the transformer, so I shipped the classical model",
        body: "A hybrid of word and character n-gram features with XGBoost reached a validation RMSE of 13.53 months, against 22.15 for IndoBERT embeddings. Character n-grams survive typos and merged words in noisy court text, and the model runs on CPU only, which suits public-sector infrastructure and keeps every prediction auditable.",
      },
      {
        title: "Product first, behind a swappable model contract",
        body: "The whole workflow runs end to end on a predictor interface. Today it is backed by a mock model that is labelled as a mock in the UI and in every report, so the trained pipeline can plug in without touching anything else, and nobody mistakes a demo number for a real one.",
      },
      {
        title: "A grounded assistant instead of free chat",
        body: "Retrieval is BM25 over curated articles, regulations, glossary and guides. The assistant must cite numbered sources, article numbers and penalties must come from them, and it never recommends a verdict. Without an API key it falls back to an extractive mode with no external call, and questions pass through the anonymizer first.",
      },
      {
        title: "Fairness and privacy by construction",
        body: "Names, ethnicity, religion and gender are never model inputs, identities are masked before anything is stored, and logins, uploads, analyses, exports and assistant use are audit-logged. The design follows Indonesia's Personal Data Protection Law (UU 27/2022) and is benchmarked against the EU AI Act and NIST AI RMF.",
      },
      {
        title: "Honest guardrails",
        body: "Too-short documents, out-of-distribution text, heavy-sentence tail risk, death or life sentences, juvenile cases and new-Criminal-Code documents each trigger a warning or disable the estimate, rather than producing a confident-looking number the model cannot support.",
      },
      {
        title: "Built for the reader's eyes",
        body: "A warm dark theme with no pure black or white, an optional dimmed-parchment light mode, WCAG 2.2 AA, reduced-motion support, and a one-click switch between English and Bahasa Indonesia, because this tool is used for hours at a time by people reading long documents.",
      },
    ],
    techStack: [
      { group: "Frontend", items: ["Next.js 15", "TypeScript (strict)", "Tailwind CSS v4", "Custom SVG charts"] },
      { group: "Backend", items: ["FastAPI", "Pydantic v2", "SQLAlchemy 2", "JWT + RBAC", "PostgreSQL / SQLite"] },
      { group: "AI and research", items: ["scikit-learn", "XGBoost", "Hybrid TF-IDF n-grams", "BM25 retrieval", "RAG with the Anthropic SDK"] },
      { group: "Documents", items: ["pypdf", "python-docx", "ReportLab", "Anonymizer"] },
      { group: "Quality", items: ["pytest", "ESLint", "Playwright visual QA", "WCAG 2.2 AA"] },
    ],
    status:
      "Under active development. The product works end to end today with a mock sentence model and a synthetic comparable-case corpus, both labelled as such in the UI. Next: a production-grade trained pipeline with uncertainty and explainability, an official retrieval index, then a closed pilot with one or two courts or prosecutor offices.",
  },
};
