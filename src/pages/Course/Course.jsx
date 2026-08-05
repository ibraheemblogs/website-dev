import React, { useState } from "react";
import { Link } from "react-router";
import PageLayout from "../../components/layouts/PageLayout";

const ENROLL_HREF = "#enroll";

const metaStrip = [
  { value: "3 Months", label: "Duration" },
  { value: "6", label: "Modules" },
  { value: "2 / week", label: "Live Sessions" },
  { value: "Virtual", label: "Format" },
];

const objectives = [
  "Understand the worldview and principles underpinning Islamic finance and its ethical framework.",
  "Apply Sharia-compliant contracts and financing structures in real business and banking scenarios.",
  "Evaluate practical cases in Islamic banking, investment, and fintech solutions.",
  "Identify common pitfalls and ethical considerations when designing Islamic financial products.",
  "Develop the skills to advise startups and businesses on Sharia-compliant financial solutions.",
];

const rawModules = [
  {
    id: "m1",
    numeral: "I",
    title: "Foundations of Islamic Finance",
    instructor: "Qasim Adebumiiti",
    avatarColor: "#7A1F1F",
    initials: "QA",
    parts: [
      {
        heading: "",
        items: [
          "Objectives of Shariah in financial dealings (Maqasid al-Shariah)",
          "Overview of Islamic economics and finance",
          "Differences from conventional finance and global trends",
        ],
      },
      {
        heading: "Understanding Riba",
        items: [
          "Qur'anic and Sunnah foundations of Riba",
          "Types of Riba and their applications",
          "Common misconceptions and real-world implications",
        ],
      },
    ],
  },
  {
    id: "m2",
    numeral: "II",
    title: "Practical Islamic Contracts",
    instructor: "Ibraheem Ahmad",
    avatarColor: "#1B9A4C",
    initials: "IA",
    parts: [
      {
        heading: "",
        items: [
          "Core contracts: Murabaha, Mudaraba, Musharaka, Ijarah, Salam, Istisna'",
          "How contracts are structured for trade, financing, and investment",
          "Risk-sharing, asset-backing, and compliance considerations",
        ],
      },
    ],
  },
  {
    id: "m3",
    numeral: "III",
    title: "Islamic Capital Market & Takaful",
    instructor: "Adam Alfanla",
    avatarColor: "#E5A421",
    initials: "AA",
    parts: [
      {
        heading: "",
        items: [
          "Foundations of Islamic Capital Markets and Shariah-Compliant Investments",
          "Sukuk: Structures, Applications, and Market Developments",
          "Islamic Equity Markets, Investment Funds, and REITs",
          "Takaful Models and Risk Management Mechanisms",
          "Contemporary Trends in Islamic Capital Markets and Sustainable Finance",
        ],
      },
    ],
  },
  {
    id: "m4",
    numeral: "IV",
    title: "Islamic Banking and Investment",
    instructor: "Ibrahim Tijani",
    avatarColor: "#2E6F8E",
    initials: "IT",
    parts: [
      {
        heading: "",
        items: [
          "Models of Islamic banking in practice",
          "Project financing, working capital, and trade finance",
          "Islamic investment funds",
          "Case studies: Nigeria and global markets",
        ],
      },
    ],
  },
  {
    id: "m5",
    numeral: "V",
    title: "Shariah Governance Framework",
    instructor: "Ibraheem Ahmad",
    avatarColor: "#1B9A4C",
    initials: "IA",
    parts: [
      {
        heading: "",
        items: [
          "Foundations and Objectives of Shariah Governance",
          "Roles of Shariah Boards, Advisors, and Governance Structures",
          "Shariah Compliance, Review, and Audit Functions",
          "Shariah Non-Compliance Risk and Regulatory Frameworks",
          "Governance Challenges and Emerging Trends in Islamic Finance",
        ],
      },
    ],
  },
  {
    id: "m6",
    numeral: "VI",
    title: "Advanced Practical Applications & Innovation",
    instructor: "Ibrahim El Sayid",
    avatarColor: "#7A1F1F",
    initials: "IE",
    parts: [
      {
        heading: "",
        items: [
          "Structuring Sharia-compliant products for startups and SMEs",
          "Fintech, crowdfunding, and digital Islamic finance solutions",
          "Governance, ethical boundaries, and Shariah compliance challenges",
        ],
      },
    ],
  },
];

const instructors = [
  {
    name: "Qasim Adebumiiti",
    initials: "QA",
    color: "#7A1F1F",
    modulesTaught: "Module I",
  },
  {
    name: "Ibraheem Ahmad",
    initials: "IA",
    color: "#1B9A4C",
    modulesTaught: "Modules II & V",
  },
  {
    name: "Adam Alfanla",
    initials: "AA",
    color: "#E5A421",
    modulesTaught: "Module III",
  },
  {
    name: "Ibrahim Tijani",
    initials: "IT",
    color: "#2E6F8E",
    modulesTaught: "Module IV",
  },
  {
    name: "Ibrahim El Sayid",
    initials: "IE",
    color: "#7A1F1F",
    modulesTaught: "Module VI",
  },
];

const approach = [
  {
    title: "Interactive Live Lectures",
    desc: "Short, practical micro-learning sessions, 40–60 minutes each.",
    tint: "#E7F5EC",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1B9A4C"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12h3M19 12h3M12 2v3M12 19v3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </svg>
    ),
  },
  {
    title: "Case Studies",
    desc: "Local and global examples for applied understanding.",
    tint: "#FBF0DA",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E5A421"
        strokeWidth="2"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  // {
  //   title: "Supplementary Readings",
  //   desc: "AAOIFI standards, Usmani texts, and contemporary research.",
  //   tint: "#F3E7E7",
  //   icon: (
  //     <svg
  //       width="20"
  //       height="20"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="#7A1F1F"
  //       strokeWidth="2"
  //     >
  //       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
  //     </svg>
  //   ),
  // },
  {
    title: "Live Q&A Sessions",
    desc: "Encourage participant engagement and clarification.",
    tint: "#E5EEF3",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2E6F8E"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Practical Exercises",
    desc: "Product structuring, risk assessment, and advisory scenarios.",
    tint: "#E7F5EC",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1B9A4C"
        strokeWidth="2.5"
      >
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

const outcomes = [
  "Gain applied knowledge of Sharia-compliant finance, contracts, and structures.",
  "Develop the skills to structure Islamic financial products for real businesses.",
  "Be equipped to operate startups, SMEs, and ethical businesses.",
  "Understand how innovation and fintech are shaping contemporary Islamic finance.",
  "Receive a certificate of completion from Sharia Labs.",
];

const CheckIcon = ({ color = "#1B9A4C" }) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="3"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#57606B"
    strokeWidth="2.5"
    style={{
      flexShrink: 0,
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.2s",
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Course = () => {
  const [openModules, setOpenModules] = useState({ m1: true });

  const toggleModule = (id) => {
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <PageLayout>
      <div style={{ color: "#1a1a1a" }}>
        {/* ===== HERO ===== */}
        <section
          style={{ background: "#FBF3E7" }}
          className="px-6 md:px-12 py-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div
              style={{ background: "#E5A421", color: "#1a1a1a" }}
              className="inline-block font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            >
              COURSE OFFERED BY SHARIA LABS
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-3"
              style={{ color: "#111" }}
            >
              Islamic Finance: Principles, Contracts, and Contemporary Practice
            </h1>
            <p
              className="text-lg md:text-xl font-medium mb-5"
              style={{ color: "#57606B" }}
            >
              The Essentials of Islamic Finance: Foundations and Applications
            </p>
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
              style={{ color: "#57606B" }}
            >
              A three-month intensive course designed to equip participants with
              practical knowledge and applied skills in Islamic finance —
              covering core principles, contracts, financing structures, and
              real-world applications in banking, fintech, investment, and
              entrepreneurship.
            </p>
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <a
                href={ENROLL_HREF}
                style={{ background: "#E5A421", color: "#1a1a1a" }}
                className="font-bold text-base px-8 py-4 rounded-xl inline-block hover:opacity-90 transition-opacity"
              >
                Enroll Now →
              </a>
              <div className="text-2xl font-bold" style={{ color: "#111" }}>
                ₦100,000{" "}
                <span
                  className="font-normal text-base"
                  style={{ color: "#9aa1a8" }}
                >
                  / $70.00
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROGRAM META STRIP ===== */}
        <section className="px-6 md:px-12 py-9 border-b border-gray-100">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {metaStrip.map((m) => (
              <div key={m.label}>
                <div
                  className="text-xl font-bold mb-1"
                  style={{ color: "#1B9A4C" }}
                >
                  {m.value}
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: "#8a919a" }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROGRAM SUMMARY ===== */}
        <section className="px-6 md:px-12 py-16 bg-white">
          <div className="max-w-3xl mx-auto">
            <div
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "#1B9A4C" }}
            >
              The Program
            </div>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#111" }}>
              Program Summary
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#57606B" }}>
              A three-month intensive course designed to equip participants with
              practical knowledge and applied skills in Islamic finance. The
              program focuses on the core principles of Sharia-compliant
              finance, Islamic contracts, financing structures, and real-world
              applications in banking, fintech, investment, and
              entrepreneurship. Participants will gain hands-on insights into
              structuring products, understanding Sharia governance, and
              navigating contemporary challenges in the industry.
            </p>
          </div>
        </section>

        {/* ===== LEARNING OBJECTIVES ===== */}
        <section
          className="px-6 md:px-12 py-16"
          style={{ background: "#F8FAF9" }}
        >
          <div className="max-w-4xl mx-auto">
            <div
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "#1B9A4C" }}
            >
              Outcomes You'll Gain
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: "#111" }}>
              Learning Objectives
            </h2>
            <p className="text-base mb-7" style={{ color: "#8a919a" }}>
              By the end of this program, participants will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {objectives.map((obj, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start bg-white rounded-2xl p-5"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#E7F5EC" }}
                  >
                    <CheckIcon />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#3a4149" }}
                  >
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROGRAM STRUCTURE ===== */}
        <section className="px-6 md:px-12 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "#1B9A4C" }}
            >
              Curriculum
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: "#111" }}>
              Program Structure &amp; Modules
            </h2>
            <div
              className="flex flex-wrap gap-6 mt-4 mb-9 text-sm"
              style={{ color: "#57606B" }}
            >
              <div>
                <strong style={{ color: "#111" }}>Format:</strong> Virtual live
                sessions with Q&amp;A (micro-learning, 40–60 min each)
              </div>
              <div>
                <strong style={{ color: "#111" }}>Duration:</strong> 3 months ·
                2 sessions / week
              </div>
              <div>
                <strong style={{ color: "#111" }}>Audience:</strong>{" "}
                Early-career professionals, entrepreneurs, fintech founders,
                practitioners &amp; business managers
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {rawModules.map((mod) => {
                const isOpen = !!openModules[mod.id];
                return (
                  <div
                    key={mod.id}
                    className="rounded-2xl overflow-hidden"
                    style={{ border: "1px solid #ececec" }}
                  >
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer"
                      style={{ background: "#FDF9F1" }}
                    >
                      <div
                        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base font-serif"
                        style={{ background: "#E5A421", color: "#1a1a1a" }}
                      >
                        {mod.numeral}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-bold text-base"
                          style={{ color: "#111" }}
                        >
                          {mod.title}
                        </div>
                        <div
                          className="text-sm mt-0.5"
                          style={{ color: "#8a919a" }}
                        >
                          Instructor: {mod.instructor}
                        </div>
                      </div>
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                        style={{ background: mod.avatarColor }}
                      >
                        {mod.initials}
                      </div>
                      <ChevronIcon open={isOpen} />
                    </button>

                    {isOpen && (
                      <div
                        className="px-6 py-6"
                        style={{ borderTop: "1px solid #ececec" }}
                      >
                        {mod.parts.map((part, pi) => (
                          <div key={pi} className="mb-4 last:mb-0">
                            {part.heading && (
                              <div
                                className="font-bold text-sm mb-2 uppercase tracking-wide"
                                style={{ color: "#1B9A4C" }}
                              >
                                {part.heading}
                              </div>
                            )}
                            <ul className="list-disc pl-5 flex flex-col gap-1.5">
                              {part.items.map((item, ii) => (
                                <li
                                  key={ii}
                                  className="text-sm leading-relaxed"
                                  style={{ color: "#3a4149" }}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== INSTRUCTORS ===== */}
        {/* <section className="px-6 md:px-12 py-16" style={{ background: "#F8FAF9" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#1B9A4C" }}>
              Who's Teaching
            </div>
            <h2 className="text-3xl font-bold mb-7" style={{ color: "#111" }}>
              Meet Your Instructors
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {instructors.map((ins) => (
                <div
                  key={ins.name}
                  className="bg-white rounded-2xl px-5 py-6 text-center"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white mx-auto mb-3.5"
                    style={{ background: ins.color }}
                  >
                    {ins.initials}
                  </div>
                  <div className="font-bold text-sm mb-1" style={{ color: "#111" }}>
                    {ins.name}
                  </div>
                  <div className="text-xs leading-snug" style={{ color: "#8a919a" }}>
                    {ins.modulesTaught}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ===== TEACHING & LEARNING APPROACH ===== */}
        <section
          className="px-6 md:px-12 py-16"
          style={{ background: "#F8FAF9" }}
        >
          <div className="max-w-5xl mx-auto">
            <div
              className="text-xs font-bold tracking-widest uppercase mb-2 text-center"
              style={{ color: "#1B9A4C" }}
            >
              How It Works
            </div>
            <h2
              className="text-3xl font-bold mb-7 text-center"
              style={{ color: "#111" }}
            >
              Teaching &amp; Learning Approach
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {approach.map((a) => (
                <div
                  key={a.title}
                  className="bg-white rounded-2xl p-6"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-content mb-3.5"
                    style={{
                      background: a.tint,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {a.icon}
                  </div>
                  <div
                    className="font-bold text-base mb-1.5"
                    style={{ color: "#111" }}
                  >
                    {a.title}
                  </div>
                  <div
                    className="text-sm leading-snug"
                    style={{ color: "#57606B" }}
                  >
                    {a.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EXPECTED OUTCOMES ===== */}
        <section className="px-6 md:px-12 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "#1B9A4C" }}
            >
              What You'll Walk Away With
            </div>
            <h2 className="text-3xl font-bold mb-7" style={{ color: "#111" }}>
              Expected Outcomes
            </h2>
            <div className="flex flex-col gap-4">
              {outcomes.map((o, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#FBF0DA" }}
                  >
                    <CheckIcon color="#E5A421" />
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#3a4149" }}
                  >
                    {o}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ENROLL CTA ===== */}
        <section
          id="enroll"
          className="px-6 md:px-12 py-14"
          style={{ background: "#E5A421" }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2
                className="text-3xl font-bold leading-snug mb-3"
                style={{ color: "#1a1a1a" }}
              >
                Ready to build your Islamic finance expertise?
              </h2>
              <p className="text-base mb-7" style={{ color: "#4a3c12" }}>
                Secure your seat and receive a certificate of completion from
                Sharia Labs.
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#1a1a1a" }}
                >
                  ₦100,000{" "}
                  <span
                    className="font-normal text-base"
                    style={{ color: "#5a4a17" }}
                  >
                    / $70.00
                  </span>
                </div>
                <a
                  href={ENROLL_HREF}
                  style={{ background: "#1a1a1a", color: "#fff" }}
                  className="font-bold text-base px-8 py-4 rounded-xl inline-block hover:opacity-90 transition-opacity"
                >
                  Enroll Now →
                </a>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                height: "220px",
                background:
                  "repeating-linear-gradient(135deg, #d68b0e 0px, #d68b0e 18px, #c97e08 18px, #c97e08 36px)",
                position: "relative",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-mono text-xs tracking-wide text-white px-4 py-2 rounded-lg"
                  style={{ background: "rgba(0,0,0,0.28)" }}
                >
                  photo: certificate / graduate
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Course;
