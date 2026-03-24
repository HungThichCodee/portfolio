import avatarImg from "../assets/avatar2.png";

export const DEV = {
  name: "Danh Cao Lam Hung",
  title: "BackEnd Developer",
  image: avatarImg,
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
    title: "Bookstore Management & E-Commerce System",
    type: "Personal Project",
    description:
      "Developed a full-featured Bookstore Management and E-Commerce System supporting both online ordering and in-store POS selling. The platform enables customers to browse a product catalog, manage shopping carts, place orders with VNPay online payment or COD, accumulate loyalty points, and redeem vouchers/discounts — while providing administrators with comprehensive tools for catalog management, order processing, revenue analytics, and staff operations. The system implements a separated API–MVC architecture with secure authentication (BCrypt password hashing), role-based access control, SMTP email notifications for order confirmations, and rich reporting dashboards powered by Chart.js.",
    teamSize: 2,
    techStack: {
      frontend: "ASP.NET Core MVC, Razor Views, Chart.js, X.PagedList, Rotativa (PDF), QRCoder",
      backend: "ASP.NET Core Web API (.NET 9), Entity Framework Core, Repository Pattern",
      database: "Microsoft SQL Server",
      others: "VNPay Payment Gateway, BCrypt.Net, MailKit & System.Net.Mail (SMTP), ClosedXML (Excel), Swagger/OpenAPI",
    },
    responsibilities: [
      "Designed and implemented a layered architecture with separated Web API and MVC projects communicating via HttpClient over REST endpoints",
      "Developed e-commerce flow including product catalog, shopping cart, checkout with VNPay payment integration and COD support, and order lifecycle management",
      "Implemented a customer loyalty system with configurable point accrual/redemption ratios, voucher management, and promotion engine",
      "Developed comprehensive admin dashboards with revenue, customer activity, and product performance analytics rendered via Chart.js",
      "Implemented secure authentication with BCrypt password hashing, role-based access control, and SMTP email notifications for order confirmations",
      "Built Excel export, PDF invoice generation (Rotativa), and QR code features for enhanced store operations",
    ],
    github: "https://github.com/HungThichCodee/QuanLy_Nha_Sach",
  },
  {
    title: "CodeSphere – Social Blogging Platform",
    type: "Personal Project",
    description:
      "Built a feature-rich Social Blogging Platform enabling users to create and share blog posts, interact through real-time private messaging, and receive live notifications. The platform integrates ML.NET machine learning models for automated content moderation (post and comment classification), AI-powered content generation via Groq, and Hangfire background jobs for system maintenance tasks. It features a modular architecture organized by ASP.NET Core Areas (Administration, Editor, PrivateChat, UserNotifications, Identity), with real-time communication powered by SignalR for private chat, notification push, and online presence tracking, along with social login (Facebook, Google), Cloudinary media storage, SendGrid email delivery, and Twilio SMS verification.",
    teamSize: 2,
    techStack: {
      frontend: "ASP.NET Core MVC, Razor Pages, Server-Side Blazor, BlazorStrap, TinyMCE, Bootstrap, FontAwesome",
      backend: "ASP.NET Core (.NET 9), SignalR, Hangfire, ML.NET, Repository Pattern",
      database: "Microsoft SQL Server, Entity Framework Core (Code First)",
      others: "ML.NET (LightGbm, PredictionEnginePool), Groq AI, Cloudinary, SendGrid, Twilio, Google reCAPTCHA, Markdig, HtmlSanitizer, Facebook & Google OAuth",
    },
    responsibilities: [
      "Architected a modular MVC application using ASP.NET Core Areas to cleanly separate Administration, Editor, PrivateChat, UserNotifications, and Identity modules",
      "Integrated ML.NET prediction engine pools for automated blog post and comment classification to assist admin content moderation workflows",
      "Built an AI content generation layer using Groq API with Markdown-to-HTML rendering via Markdig for AI-assisted blog content creation",
      "Developed a real-time notification system with SignalR hubs for unread notification counts and user online/offline presence tracking",
      "Configured Hangfire background jobs for scheduled system maintenance including friend recommendation generation, activity log cleanup, and old message purging",
      "Implemented secure authentication with ASP.NET Core Identity, social login (Facebook, Google), Google reCAPTCHA anti-bot protection, and role-based authorization",
    ],
    github: "https://github.com/HungThichCodee/CodeSphere",
  },
  {
    title: "Bus Ticket Booking System",
    type: "Personal Project",
    description:
      "Developed a comprehensive Bus Ticket Booking System with a Spring Boot REST API backend and two separate React SPA frontends (Customer and Admin). The platform covers the complete booking lifecycle — from trip search and seat selection to online payment, loyalty points accumulation, cargo shipping, and real-time notifications via WebSocket (STOMP). It features JWT-based authentication with fine-grained screen-level permission control (RBAC), scheduled background jobs for automatic trip completion and point allocation, multi-language support (i18n), and an admin dashboard with revenue analytics, route popularity reports, and coach utilization statistics.",
    teamSize: 2,
    techStack: {
      frontend: "React 18, Vite, Material UI (MUI), React Query, React Router, Chart.js, Formik + Yup, i18next, SockJS + STOMP",
      backend: "Java 17, Spring Boot 3.4, Spring Security + JWT, Spring Data JPA, Spring WebSocket (STOMP), Spring Cache, Spring Mail, Swagger/OpenAPI",
      database: "MySQL",
      others: "Twilio (SMS), Lombok, Google Cloud SQL Connector, Axios, react-pro-sidebar, QRCode",
    },
    responsibilities: [
      "Built a dual-frontend architecture with separate React/Vite SPAs for customers (trip search, booking, payment, reviews) and administrators (fleet management, user management, analytics dashboards)",
      "Implemented JWT authentication with Spring Security including stateless session management, CORS configuration, and fine-grained screen-level user permissions (UserPermission RBAC)",
      "Built real-time notification infrastructure using WebSocket (STOMP over SockJS) for instant booking updates, trip completion alerts, and admin-to-user notifications",
      "Developed comprehensive reporting APIs for revenue analytics, coach utilization statistics, popular route analysis, and loyalty point trends with weekly/monthly/yearly breakdowns",
    ],
    github: "https://github.com/HungThichCodee/BusTicketBooking",
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

