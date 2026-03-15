export const DEV = {
  name: "Hung Thich Codee",
  title: "Full Stack Developer",
  tagline:
    "I build scalable backend systems and modern full‑stack apps with clean architecture, real-time features, and AI-powered experiences.",
  email: "danhcaolamhung9122004@gmail.com",
  github: "https://github.com/HungThichCodee",
  linkedin: "https://linkedin.com/in/your-profile",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  {
    group: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Vite", level: 85 },
      { name: "TailwindCSS", level: 90 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Spring Boot", level: 85 },
      { name: "ASP.NET Core", level: 90 },
      { name: ".NET", level: 90 },
      { name: "Java", level: 85 },
      { name: "C#", level: 92 },
    ],
  },
  {
    group: "Database",
    items: [
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 90 },
      { name: "Entity Framework", level: 88 },
      { name: "JPA / Hibernate", level: 82 },
    ],
  },
  {
    group: "Other",
    items: [
      { name: "JWT Authentication", level: 92 },
      { name: "REST API", level: 92 },
      { name: "Machine Learning (ML.NET)", level: 75 },
      { name: "Hangfire", level: 80 },
      { name: "Cloudinary", level: 80 },
      { name: "Twilio", level: 78 },
      { name: "SendGrid", level: 78 },
      { name: "Docker (optional)", level: 70 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "CodeSphere – Social Platform with AI Recommendations",
    description:
      "A modern social network and blogging platform built with ASP.NET Core (.NET 9), featuring real-time chat, AI recommendations via ML.NET, OAuth, and background processing.",
    tech: [
      "ASP.NET Core",
      ".NET 9",
      "ML.NET (LightGBM)",
      "SignalR",
      "Hangfire",
      "Cloudinary",
      "OAuth",
    ],
    features: [
      "Social network system (follow, groups, ratings)",
      "AI-powered post recommendations using LightGBM",
      "Real-time chat with emojis and stickers",
      "OAuth login (Google / Facebook)",
      "Hangfire background jobs",
      "Cloudinary media storage",
    ],
    github: "https://github.com/HungThichCodee/CodeSphere",
  },
  {
    title: "Bus Ticket Booking System",
    description:
      "A full-stack transportation booking platform built with Spring Boot and React, designed for concurrency-safe seat booking, cargo shipment flows, rewards, and notifications.",
    tech: ["Spring Boot", "React", "JWT", "RBAC", "Twilio", "SQL"],
    features: [
      "Concurrency-safe seat booking using pessimistic locking",
      "Cargo shipment management",
      "Loyalty points system",
      "Email and SMS notifications (Twilio)",
      "JWT authentication and RBAC",
      "Reporting dashboard",
    ],
    github: "https://github.com/HungThichCodee/BusTicketBooking",
  },
  {
    title: "Bookstore Management System",
    description:
      "A bookstore e-commerce + POS system built with ASP.NET Core Web API and SQL Server, supporting online shopping and in-store sales with promotions and loyalty.",
    tech: ["ASP.NET Core Web API", "SQL Server", "EF Core", "RBAC"],
    features: [
      "Online store and shopping cart",
      "POS system for in-store sales",
      "Voucher and promotion system",
      "Customer loyalty program",
      "Admin dashboard analytics",
      "Role-based access control",
    ],
    github: "https://github.com/HungThichCodee/QuanLy_Nha_Sach",
  },
];

export const JOURNEY = [
  {
    title: "Backend architecture",
    body: "Design APIs, services, and data models with clean boundaries, performance in mind, and strong security defaults.",
  },
  {
    title: "System design",
    body: "Build maintainable systems with clear domain logic, observability-ready patterns, and scalable data access strategies.",
  },
  {
    title: "AI integration",
    body: "Ship recommendation and ranking experiences using ML.NET (LightGBM), integrating models into real product workflows.",
  },
  {
    title: "Real-time systems",
    body: "Implement real-time communication features (chat, notifications) and background processing with reliable job pipelines.",
  },
];

