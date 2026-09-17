// type controls the icon: "work" | "education" | "achievement" | "leadership"
export const experienceGroups = [
  {
    label: "Professional Experience",
    items: [
      {
        type: "work",
        period: "Feb 2026 — Present",
        title: "IT Digital Intern",
        org: "Sinar Mas Agro Resources and Technology (SMART Tbk) · Digital Transformation Intern, IT Digital Division",
        company: "SMART Tbk",
        logo: "/photo/logo/smart-tbk-logo.png",
        bullets: [],
        rotations: [
          {
            period: "Sep 2026 — Present",
            title: "Generative AI (GenAI) Engineer",
            bullets: [
              "Building a Generative AI solution end-to-end alongside a cross-functional team, translating stakeholder-defined requirements into a working technical solution.",
              "Collaborate closely with teammates and business stakeholders to scope requirements, iterate on solution design, and keep outputs aligned with real operational needs.",
            ],
          },
          {
            period: "Jul 2026 — Aug 2026",
            title: "Business Intelligence (BI) Engineer",
            bullets: [
              "Built a 6-year historical reporting solution that replaced a manual process previously redone in full every year, cutting the annual turnaround from 1–2 months down to a simple data refresh.",
              "Prepared and cleaned multi-year source data and built the ETL pipeline feeding the report, ensuring consistent, audit-ready figures across all six years.",
              "Partnered with business stakeholders to define reporting requirements, turning a recurring manual burden into a reusable, low-maintenance reporting asset.",
            ],
          },
          {
            period: "Feb 2026 — Jun 2026",
            title: "Blockchain Developer",
            bullets: [
              "Designed and built an end-to-end Supply Chain Recommendation System that analyzes historical logistics data to support faster, more informed route-selection decisions.",
              "Owned the full pipeline from raw historical data to a working decision-support output, translating operational route-planning pain points into data-driven recommendation logic.",
              "Validated recommendations with supply chain stakeholders against real operational constraints before rollout.",
            ],
          },
        ],
      },
      {
        type: "work",
        period: "Nov 2024 — Feb 2025",
        title: "Technology Project Member Mentor",
        org: "Bina Nusantara Computer Club (BNCC)",
        company: "BNCC",
        logo: "/photo/logo/bncc-logo.jpg",
        bullets: [
          "Led a 7-member engineering team through the end-to-end delivery of a full-stack web application, achieving a 100% project completion rate.",
          "Implemented the Agile Scrum framework (sprint planning, daily stand-ups, retrospectives) and delivered hands-on technical mentorship in modern front-end and back-end best practices.",
        ],
      },
    ],
  },
  {
    label: "Leadership & Community",
    items: [
      {
        type: "leadership",
        period: "May 2025 — Present",
        title: "Founder & Community Leader",
        org: "Mari Kita Longrun Running Community",
        bullets: [
          "Founded and scaled a running community to 900+ members within 5 months by running weekly member listening sessions and designing activities directly from that feedback.",
          "Executed a data-driven digital marketing strategy across Instagram and TikTok, generating 170,000+ monthly profile views, and implemented a retention strategy and financial tracking system for long-term sustainability.",
        ],
      },
      {
        type: "leadership",
        period: "Sep 2024 — Oct 2025",
        title: "Human Resources Development Staff",
        org: "Bina Nusantara Computer Club (BNCC)",
        bullets: [
          "Managed the end-to-end member development lifecycle for 60+ members, planning and executing 5 technical and soft-skill programs — including AI Training and Figma workshops — with 90%+ satisfaction ratings.",
          "Established a data-driven feedback mechanism to refine program design and pioneered 2 cross-university benchmarking initiatives.",
        ],
      },
      {
        type: "leadership",
        period: "Oct 2023 — Sep 2024",
        title: "Human Resources Development Activist",
        org: "Bina Nusantara Computer Club (BNCC)",
        bullets: [
          "Co-designed technical programs across study tracks, reconciling conflicting priorities through structured listening sessions and rapid prototyping before full rollout.",
        ],
      },
      {
        type: "leadership",
        period: "Aug 2024 — Sep 2025",
        title: "Freshmen Partner & Freshmen Leader",
        org: "Bina Nusantara University",
        bullets: [
          "Mentored 60 new students through orientation within a 6-leader team, delivered year-long academic mentorship to 10 students, and guided a mentee team through a community-based humanitarian project.",
        ],
      },
    ],
  },
  {
    label: "Education & Honors",
    items: [
      {
        type: "education",
        period: "Sep 2023 — Expected 2027",
        title: "Bachelor of Computer Science, Intelligent Systems",
        org: "Bina Nusantara University (BINUS) · Jakarta, Indonesia",
        bullets: [
          "Selected for the BINUS Enrichment Internship Track, a competitive 12-month full-time industry placement at Sinar Mas Agro Resources and Technology.",
          "Currently completing an undergraduate thesis in the Intelligent Systems specialization as part of final-year requirements.",
        ],
      },
      {
        type: "achievement",
        period: "2025 · National Competition",
        title: "1st Place — DATAQUEST AIRNOLOGY 4.0 (NLP Competition)",
        org: "Universitas Airlangga · Out of 109 teams",
        bullets: [
          "Designed a custom hybrid TF-IDF regression architecture to predict incarceration duration from noisy Indonesian court transcripts, self-teaching the approach in two weeks with no prior NLP experience.",
          "Outperformed state-of-the-art models such as IndoBERT on this task while using significantly less compute, and owned team communication and technical presentation across two competition rounds to place 1st nationally.",
        ],
      },
      {
        type: "achievement",
        period: "2025 · National Competition",
        title: "Top 28 of 210+ Teams — DATATHON 2025",
        org: "RISTEK FASILKOM, Universitas Indonesia",
        bullets: [
          "Served as Computer Vision specialist on a multi-modal deep learning model for automated PCB manufacturing defect detection.",
        ],
      },
    ],
  },
];
