/**
 * Portfolio Data Model: Aastha Pancholi
 * Strictly factual data — no invented companies, credentials, or unlisted skills.
 */

export const personalInfo = {
  name: "Aastha Pancholi",
  title: "Data Science & Machine Learning Enthusiast",
  university: "VIT Bhopal University",
  degree: "B.Tech. – Computer Science and Engineering (Health Informatics)",
  period: "2022 – 2026 (October)",
  location: "Bhopal, Madhya Pradesh",
  email: "aasthapancholi28@gmail.com",
  github: "https://github.com/aasthapancholi",
  linkedin: "https://www.linkedin.com/in/aastha-pancholi-989a532a4/",
  resumePath: "public/Aastha_Pancholi_Resume.pdf",
  bio: "Computer Science undergraduate specializing in Health Informatics at VIT Bhopal University (2022–2026). Hands-on experience developing Python-based data science projects involving predictive analytics, scoring algorithms, data visualization, and forecasting.",
  interests: [
    {
      title: "Data Science",
      desc: "Developing empirical models and data pipelines to extract reliable insights from structured data.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
    },
    {
      title: "Data Analytics",
      desc: "Transforming quantitative metrics into clear, actionable conclusions through statistical exploration.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
    },
    {
      title: "Machine Learning",
      desc: "Designing predictive algorithms and mathematical estimations to address complex forecasting problems.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
    },
    {
      title: "Healthcare Technology",
      desc: "Applying computational methods and informatics to health assessment and biomedical metric analysis.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`
    }
  ]
};

export const skillsData = [
  {
    category: "Programming",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    skills: ["Python"]
  },
  {
    category: "Data Science & Analytics",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>`,
    skills: [
      "Predictive Analytics",
      "Data Analysis",
      "Forecasting",
      "Scoring Algorithms",
      "Data Visualization",
      "Matplotlib"
    ]
  },
  {
    category: "Productivity & Documentation",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    skills: [
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Word",
      "Google Sheets",
      "Google Docs"
    ]
  }
];

export const projectsData = [
  {
    id: "01",
    title: "Mood Medic",
    subtitle: "Emotional Wellness & Productivity Assessment",
    description: "A Python-based analytical self-assessment tool designed to evaluate daily mood dynamics and personal productivity efficiency through structured user-reported responses and intensity metrics.",
    image: "assets/images/moodmedic-visual.svg",
    imageAlt: "Mood Medic analytical scoring chart and emotional stability graph",
    highlights: [
      "Custom weighted scoring algorithm calculating Emotional Stability and Productivity Efficiency scores on a 0–100 scale.",
      "Rule-based recommendation engine delivering structured lifestyle and focus guidance.",
      "Multi-day assessment trend visualization using Matplotlib to monitor score evolution."
    ],
    tags: ["Python", "Matplotlib", "Scoring Algorithms"],
    githubUrl: "https://github.com/aasthapancholi/my_projects/blob/main/moodmedic.py"
  },
  {
    id: "02",
    title: "Road Lane Requirement Prediction & Forecasting",
    subtitle: "Urban Capacity & Traffic Demand Modeling",
    description: "A Python-based predictive model engineered to forecast future road lane requirements by correlating population growth rates, population density, Average Vehicle Run Rate (AVRR), and Peak Hour Factor (PHF).",
    image: "assets/images/roadlane-visual.svg",
    imageAlt: "Road Lane Requirement predictive demand curves and capacity threshold chart",
    highlights: [
      "Growth-rate-based mathematical forecasting for multi-year vehicle volume projection.",
      "Peak hour traffic demand estimation with threshold-triggered lane capacity recommendations.",
      "Data-driven infrastructure planning support with comparative Matplotlib projection curves."
    ],
    tags: ["Python", "Predictive Analytics", "Forecasting", "Matplotlib"],
    githubUrl: "https://github.com/aasthapancholi/my_projects/blob/main/road%20lane%20requirement.py"
  }
];

export const educationData = [
  {
    period: "2022 – 2026 (October)",
    degree: "B.Tech. – Computer Science and Engineering (Health Informatics)",
    institution: "VIT Bhopal University, Bhopal, Madhya Pradesh",
    status: "Current Undergraduate"
  },
  {
    period: "2022",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "P & B School, Rajkot, Gujarat",
    status: "Completed"
  },
  {
    period: "2019",
    degree: "Secondary School Certificate (SSC)",
    institution: "Saint Mary's School, Rajkot, Gujarat",
    status: "Completed"
  }
];

export const leadershipData = [
  {
    role: "Head of Sales, PR & Outreach",
    organization: "Team Garvit, VIT Bhopal",
    badge: "AIR 2 in Sales Competition",
    bullets: [
      "Secured All India Rank (AIR) 2 in the prestigious Sales Presentation Competition.",
      "Spearheaded sponsorship outreach and managed external-organisation communications.",
      "Represented the team across competitive inter-university events and industry liaisons."
    ]
  },
  {
    role: "General Manager",
    organization: "Team Garvit, VIT Bhopal",
    badge: "Operations Management",
    bullets: [
      "Coordinated cross-departmental operations and aligned multi-functional project workflows.",
      "Delegated operational tasks, monitored milestones, and tracked project deliverables.",
      "Supported team execution strategies and streamlined internal operational pipelines."
    ]
  },
  {
    role: "Co-Coordinator",
    organization: "Gujarati Club, VIT Bhopal",
    badge: "Event Leadership",
    bullets: [
      "Coordinated university cultural events, logistics management, and scheduling timelines.",
      "Handled clear communication with student participants, faculty advisors, and stakeholders.",
      "Led on-ground logistics to ensure seamless execution of high-attendance cultural initiatives."
    ]
  }
];
