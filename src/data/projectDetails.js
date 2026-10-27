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
};
