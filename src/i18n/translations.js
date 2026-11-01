export const translations = {
  en: {
    hero_role: "Backend developer · Full-stack projects",
    hero_area_1: "Backend",
    hero_area_2: "Product delivery",
    hero_area_3: "Integrations",
    hero_project_count: "selected projects",
    hero_evidence: "Source code, technical details and a live FoodMatch demo",
    projects_featured: "Featured project · Live demo",
    projects_live_demo: "Try FoodMatch",
    projects_architecture: "Application architecture",
    projects_implementation: "Implementation highlights",
    foodmatch_title: "FoodMatch / Random Food",
    foodmatch_summary:
      "What should we eat, and who is joining? A full-stack app that combines food discovery, nearby dining buddies and real-time conversations.",
    foodmatch_highlight_1:
      "Spin for a dish or filter by budget, meal and taste.",
    foodmatch_highlight_2: "Match with nearby diners and chat through SignalR.",
    foodmatch_highlight_3:
      "Share location by consent and agree on a meeting place.",
    foodmatch_caption:
      "A view of the live FoodMatch app. Explore it directly with the demo link.",
    foodmatch_image_alt:
      "FoodMatch homepage with Random Food, Find Places, Suggestions and Find Buddies",
    foodmatch_desc:
      "FoodMatch helps people choose a meal and find someone nearby to eat with. Temporary profiles support matching and private chat, while Google Maps helps users find places and directions. The React frontend runs on Vercel, the ASP.NET Core API on Render, and PostgreSQL on Supabase.",
    foodmatch_resp_1:
      "Separate Domain, Application, Infrastructure and API layers; persist food, profile, match and chat data with EF Core and PostgreSQL.",
    foodmatch_resp_2:
      "Use JWT-protected SignalR hubs for private conversations and matching notifications, with membership checks before accessing chats.",
    foodmatch_resp_3:
      "Keep exact coordinates out of nearby discovery; allow matched users to grant or revoke location sharing, with a 60-minute expiry.",
    foodmatch_resp_4:
      "Filter food suggestions by category, budget, meal and taste; combine Google Maps meeting flows with .NET tests and frontend checks in GitHub Actions.",
    project1_summary:
      "An online storefront and in-store POS workflow with VNPay checkout, loyalty points and reporting. Separate API and MVC layers support customer and admin operations.",
    project2_summary:
      "A social blogging platform combining private chat, live notifications and ML.NET content moderation, with Groq-assisted writing and scheduled background jobs.",
    project3_summary:
      "A bus booking platform with separate customer and admin React apps, Spring Boot APIs, seat selection, role-based access and real-time booking updates.",
    skills_evidence_1:
      "In practice: React + TypeScript interfaces in FoodMatch; customer and admin apps in Bus Ticket Booking.",
    skills_evidence_2:
      "In practice: .NET services in FoodMatch and CodeSphere; Spring Boot APIs in Bus Ticket Booking.",
    skills_evidence_3:
      "In practice: PostgreSQL + EF Core in FoodMatch; SQL Server and MySQL in the other projects.",
    skills_evidence_4:
      "In practice: SignalR chat in FoodMatch; ML.NET moderation and Hangfire jobs in CodeSphere.",
    tech_frontend: "Frontend",
    tech_backend: "Backend",
    tech_database: "Data & persistence",
    tech_others: "Integrations & tooling",
    skip_content: "Skip to content",

    // Navbar
    nav_brand: "Portfolio",
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Journey",
    nav_contact: "Contact",
    nav_menu: "Menu",

    // Hero
    hero_view_projects: "View Projects",
    hero_contact: "Contact",
    hero_focus: "Engineering focus",
    hero_available: "Available for collaboration",
    hero_focus_1: "REST APIs, authentication and relational data models",
    hero_focus_2: "React interfaces backed by .NET and Spring Boot services",
    hero_focus_3: "Real-time messaging, maps and background jobs",
    hero_now_building: "Now building:",
    hero_now_building_desc:
      "scalable services, real-time apps, and AI-enhanced products.",
    hero_tagline:
      "I build APIs, real-time features and the interfaces that bring them to life. Explore my work with .NET, Spring Boot and React.",

    // About
    about_kicker: "About",
    about_title: "From API design to the user interface",
    about_subtitle:
      "My projects connect backend services, databases and frontend experiences. I focus on clear responsibilities, secure access and practical product workflows.",
    about_card1_title: "Backend-first mindset",
    about_card1_body:
      "Clean architecture, performance, concurrency, and maintainability\u2014especially for real product workflows.",
    about_card2_title: "Full-stack delivery",
    about_card2_body:
      "From REST APIs and JWT/OAuth to responsive UIs with smooth animations and clean component architecture.",
    about_card3_title: "Modern integrations",
    about_card3_body:
      "AI recommendations (ML.NET), background jobs (Hangfire), media (Cloudinary), and notifications (Twilio/SendGrid).",

    // Skills
    skills_kicker: "Tech Stack",
    skills_title: "Technology, backed by project work",
    skills_subtitle:
      "The tools used across the projects above, grouped by their role in the application.",

    // Projects
    projects_kicker: "Projects",
    projects_title: "Selected work",
    projects_subtitle:
      "Explore the live product, scan the stack, or open the technical details behind each project.",
    projects_technologies: "Technologies",
    projects_responsibilities: "Responsibilities",
    projects_view_details: "Technical details",
    projects_show_less: "Close details",
    projects_read_more: "Read more",
    projects_view_github: "View on GitHub",
    projects_team_size: "Team size",
    projects_type_personal: "Personal Project",

    // Project data
    project1_title: "Bookstore Management & E-Commerce System",
    project1_desc:
      "Developed a full-featured Bookstore Management and E-Commerce System supporting both online ordering and in-store POS selling. The platform enables customers to browse a product catalog, manage shopping carts, place orders with VNPay online payment or COD, accumulate loyalty points, and redeem vouchers/discounts \u2014 while providing administrators with comprehensive tools for catalog management, order processing, revenue analytics, and staff operations. The system implements a separated API\u2013MVC architecture with secure authentication (BCrypt password hashing), role-based access control, SMTP email notifications for order confirmations, and rich reporting dashboards powered by Chart.js.",
    project1_resp_1:
      "Designed and implemented a layered architecture with separated Web API and MVC projects communicating via HttpClient over REST endpoints",
    project1_resp_2:
      "Developed e-commerce flow including product catalog, shopping cart, checkout with VNPay payment integration and COD support, and order lifecycle management",
    project1_resp_3:
      "Implemented a customer loyalty system with configurable point accrual/redemption ratios, voucher management, and promotion engine",
    project1_resp_4:
      "Developed comprehensive admin dashboards with revenue, customer activity, and product performance analytics rendered via Chart.js",
    project1_resp_5:
      "Implemented secure authentication with BCrypt password hashing, role-based access control, and SMTP email notifications for order confirmations",
    project1_resp_6:
      "Built Excel export, PDF invoice generation (Rotativa), and QR code features for enhanced store operations",

    project2_title: "CodeSphere \u2013 Social Blogging Platform",
    project2_desc:
      "Built a feature-rich Social Blogging Platform enabling users to create and share blog posts, interact through real-time private messaging, and receive live notifications. The platform integrates ML.NET machine learning models for automated content moderation (post and comment classification), AI-powered content generation via Groq, and Hangfire background jobs for system maintenance tasks. It features a modular architecture organized by ASP.NET Core Areas (Administration, Editor, PrivateChat, UserNotifications, Identity), with real-time communication powered by SignalR for private chat, notification push, and online presence tracking, along with social login (Facebook, Google), Cloudinary media storage, SendGrid email delivery, and Twilio SMS verification.",
    project2_resp_1:
      "Architected a modular MVC application using ASP.NET Core Areas to cleanly separate Administration, Editor, PrivateChat, UserNotifications, and Identity modules",
    project2_resp_2:
      "Integrated ML.NET prediction engine pools for automated blog post and comment classification to assist admin content moderation workflows",
    project2_resp_3:
      "Built an AI content generation layer using Groq API with Markdown-to-HTML rendering via Markdig for AI-assisted blog content creation",
    project2_resp_4:
      "Developed a real-time notification system with SignalR hubs for unread notification counts and user online/offline presence tracking",
    project2_resp_5:
      "Configured Hangfire background jobs for scheduled system maintenance including friend recommendation generation, activity log cleanup, and old message purging",
    project2_resp_6:
      "Implemented secure authentication with ASP.NET Core Identity, social login (Facebook, Google), Google reCAPTCHA anti-bot protection, and role-based authorization",

    project3_title: "Bus Ticket Booking System",
    project3_desc:
      "Developed a comprehensive Bus Ticket Booking System with a Spring Boot REST API backend and two separate React SPA frontends (Customer and Admin). The platform covers the complete booking lifecycle \u2014 from trip search and seat selection to online payment, loyalty points accumulation, cargo shipping, and real-time notifications via WebSocket (STOMP). It features JWT-based authentication with fine-grained screen-level permission control (RBAC), scheduled background jobs for automatic trip completion and point allocation, multi-language support (i18n), and an admin dashboard with revenue analytics, route popularity reports, and coach utilization statistics.",
    project3_resp_1:
      "Built a dual-frontend architecture with separate React/Vite SPAs for customers (trip search, booking, payment, reviews) and administrators (fleet management, user management, analytics dashboards)",
    project3_resp_2:
      "Implemented JWT authentication with Spring Security including stateless session management, CORS configuration, and fine-grained screen-level user permissions (UserPermission RBAC)",
    project3_resp_3:
      "Built real-time notification infrastructure using WebSocket (STOMP over SockJS) for instant booking updates, trip completion alerts, and admin-to-user notifications",
    project3_resp_4:
      "Developed comprehensive reporting APIs for revenue analytics, coach utilization statistics, popular route analysis, and loyalty point trends with weekly/monthly/yearly breakdowns",

    // Journey / Experience
    journey_kicker: "Journey",
    journey_title: "How I think about building products",
    journey_subtitle:
      "A few themes that show up across my work\u2014especially in backend-heavy systems.",
    journey1_title: "Backend architecture",
    journey1_body:
      "Design APIs, services, and data models with clean boundaries, performance in mind, and strong security defaults.",
    journey2_title: "System design",
    journey2_body:
      "Build maintainable systems with clear domain logic, observability-ready patterns, and scalable data access strategies.",
    journey3_title: "AI integration",
    journey3_body:
      "Ship recommendation and ranking experiences using ML.NET (LightGBM), integrating models into real product workflows.",
    journey4_title: "Real-time systems",
    journey4_body:
      "Implement real-time communication features (chat, notifications) and background processing with reliable job pipelines.",

    // Contact
    contact_kicker: "Contact",
    contact_title: "Let’s talk about your team",
    contact_subtitle:
      "For development opportunities or collaboration, send a message or reach me directly by email or LinkedIn.",
    contact_links: "Links",
    contact_prefer_email: "Prefer email?",
    contact_name: "Name",
    contact_name_placeholder: "Your name",
    contact_email: "Email",
    contact_email_placeholder: "you@example.com",
    contact_message: "Message",
    contact_message_placeholder: "Tell me about your project...",
    contact_send: "Send message",
    contact_sending: "Sending...",
    contact_sent: "Message sent successfully!",
    contact_error: "Failed to send. Please try again.",

    // Footer
    footer_built_with: "Built with React + Vite + Tailwind + Framer Motion.",
  },

  vi: {
    hero_role: "Lập trình viên Backend · Dự án Full-stack",
    hero_area_1: "Backend",
    hero_area_2: "Phát triển sản phẩm",
    hero_area_3: "Tích hợp",
    hero_project_count: "dự án tiêu biểu",
    hero_evidence: "Mã nguồn, chi tiết kỹ thuật và bản dùng thử FoodMatch",
    projects_featured: "Dự án nổi bật · Có bản dùng thử",
    projects_live_demo: "Trải nghiệm FoodMatch",
    projects_architecture: "Kiến trúc ứng dụng",
    projects_implementation: "Điểm nổi bật trong triển khai",
    foodmatch_title: "FoodMatch / Random Food",
    foodmatch_summary:
      "Hôm nay ăn gì, ăn cùng ai? Ứng dụng full-stack kết hợp chọn món, tìm bạn ăn gần mình và trò chuyện thời gian thực.",
    foodmatch_highlight_1:
      "Quay chọn món hoặc lọc theo ngân sách, buổi ăn và khẩu vị.",
    foodmatch_highlight_2:
      "Ghép cặp với bạn ăn gần mình, trò chuyện qua SignalR.",
    foodmatch_highlight_3:
      "Chủ động chia sẻ vị trí và cùng thống nhất điểm hẹn.",
    foodmatch_caption:
      "Giao diện FoodMatch đang triển khai. Mở bản dùng thử để trực tiếp khám phá ứng dụng.",
    foodmatch_image_alt:
      "Trang chủ FoodMatch với chọn món ngẫu nhiên, tìm quán, gợi ý món và tìm bạn ăn",
    foodmatch_desc:
      "FoodMatch giúp người dùng chọn món và tìm người gần mình để ăn cùng. Hồ sơ tạm hỗ trợ ghép cặp, chat riêng; Google Maps giúp tìm quán và xem đường đi. Frontend React chạy trên Vercel, API ASP.NET Core trên Render và PostgreSQL trên Supabase.",
    foodmatch_resp_1:
      "Tách các lớp Domain, Application, Infrastructure và API; lưu dữ liệu món ăn, hồ sơ, ghép cặp và chat bằng EF Core cùng PostgreSQL.",
    foodmatch_resp_2:
      "Sử dụng SignalR Hub được bảo vệ bằng JWT cho chat riêng và thông báo ghép cặp; kiểm tra thành viên trước khi truy cập cuộc trò chuyện.",
    foodmatch_resp_3:
      "Không trả tọa độ chính xác khi tìm người gần mình; cho phép người đã ghép cặp tự cấp hoặc thu hồi quyền chia sẻ vị trí, hết hạn sau 60 phút.",
    foodmatch_resp_4:
      "Lọc gợi ý theo loại món, ngân sách, buổi ăn và khẩu vị; tích hợp luồng hẹn gặp với Google Maps, test .NET và kiểm tra frontend qua GitHub Actions.",
    project1_summary:
      "Kết hợp cửa hàng trực tuyến và bán tại quầy POS với thanh toán VNPay, điểm thưởng và báo cáo. Các lớp API và MVC riêng hỗ trợ nghiệp vụ khách hàng và quản trị.",
    project2_summary:
      "Nền tảng blog xã hội kết hợp chat riêng, thông báo trực tiếp và kiểm duyệt bằng ML.NET, cùng hỗ trợ viết bài qua Groq và tác vụ nền định kỳ.",
    project3_summary:
      "Nền tảng đặt vé xe với hai ứng dụng React cho khách hàng và quản trị, API Spring Boot, chọn ghế, phân quyền và cập nhật đặt vé thời gian thực.",
    skills_evidence_1:
      "Ứng dụng: giao diện React + TypeScript trong FoodMatch; ứng dụng khách hàng và quản trị trong hệ thống đặt vé xe.",
    skills_evidence_2:
      "Ứng dụng: dịch vụ .NET trong FoodMatch và CodeSphere; API Spring Boot trong hệ thống đặt vé xe.",
    skills_evidence_3:
      "Ứng dụng: PostgreSQL + EF Core trong FoodMatch; SQL Server và MySQL trong các dự án khác.",
    skills_evidence_4:
      "Ứng dụng: chat SignalR trong FoodMatch; kiểm duyệt ML.NET và tác vụ Hangfire trong CodeSphere.",
    tech_frontend: "Giao diện",
    tech_backend: "Backend",
    tech_database: "Dữ liệu & lưu trữ",
    tech_others: "Tích hợp & công cụ",
    skip_content: "Đi đến nội dung",

    // Navbar
    nav_brand: "Portfolio",
    nav_home: "Trang ch\u1ee7",
    nav_about: "Gi\u1edbi thi\u1ec7u",
    nav_skills: "K\u1ef9 n\u0103ng",
    nav_projects: "D\u1ef1 \u00e1n",
    nav_experience: "H\u00e0nh tr\u00ecnh",
    nav_contact: "Li\u00ean h\u1ec7",
    nav_menu: "Menu",

    // Hero
    hero_view_projects: "Xem d\u1ef1 \u00e1n",
    hero_contact: "Li\u00ean h\u1ec7",
    hero_focus: "Trọng tâm kỹ thuật",
    hero_available: "S\u1eb5n s\u00e0ng h\u1ee3p t\u00e1c",
    hero_focus_1: "REST API, xác thực và mô hình dữ liệu quan hệ",
    hero_focus_2: "Giao diện React kết nối dịch vụ .NET và Spring Boot",
    hero_focus_3: "Nhắn tin thời gian thực, bản đồ và tác vụ nền",
    hero_now_building: "\u0110ang x\u00e2y d\u1ef1ng:",
    hero_now_building_desc:
      "d\u1ecbch v\u1ee5 m\u1edf r\u1ed9ng, \u1ee9ng d\u1ee5ng th\u1eddi gian th\u1ef1c v\u00e0 s\u1ea3n ph\u1ea9m t\u00edch h\u1ee3p AI.",
    hero_tagline:
      "Tôi xây dựng API, tính năng thời gian thực và giao diện kết nối chúng với người dùng. Khám phá các dự án của tôi với .NET, Spring Boot và React.",

    // About
    about_kicker: "Gi\u1edbi thi\u1ec7u",
    about_title: "Từ thiết kế API đến giao diện người dùng",
    about_subtitle:
      "Các dự án của tôi kết nối dịch vụ backend, cơ sở dữ liệu và trải nghiệm frontend. Tôi tập trung vào phân chia trách nhiệm rõ ràng, bảo mật truy cập và giải quyết nghiệp vụ thực tế.",
    about_card1_title: "T\u01b0 duy Backend-first",
    about_card1_body:
      "Ki\u1ebfn tr\u00fac s\u1ea1ch, hi\u1ec7u su\u1ea5t, x\u1eed l\u00fd \u0111\u1ed3ng th\u1eddi v\u00e0 kh\u1ea3 n\u0103ng b\u1ea3o tr\u00ec \u2014 \u0111\u1eb7c bi\u1ec7t cho c\u00e1c quy tr\u00ecnh s\u1ea3n ph\u1ea9m th\u1ef1c t\u1ebf.",
    about_card2_title: "Tri\u1ec3n khai Full-stack",
    about_card2_body:
      "T\u1eeb REST API v\u00e0 JWT/OAuth \u0111\u1ebfn giao di\u1ec7n responsive v\u1edbi hi\u1ec7u \u1ee9ng m\u01b0\u1ee3t m\u00e0 v\u00e0 ki\u1ebfn tr\u00fac component s\u1ea1ch.",
    about_card3_title: "T\u00edch h\u1ee3p hi\u1ec7n \u0111\u1ea1i",
    about_card3_body:
      "G\u1ee3i \u00fd AI (ML.NET), t\u00e1c v\u1ee5 n\u1ec1n (Hangfire), media (Cloudinary) v\u00e0 th\u00f4ng b\u00e1o (Twilio/SendGrid).",

    // Skills
    skills_kicker: "C\u00f4ng ngh\u1ec7",
    skills_title: "Công nghệ gắn với dự án thực tế",
    skills_subtitle:
      "Các công cụ được sử dụng trong những dự án phía trên, phân nhóm theo vai trò trong ứng dụng.",

    // Projects
    projects_kicker: "D\u1ef1 \u00e1n",
    projects_title: "C\u00e1c d\u1ef1 \u00e1n ti\u00eau bi\u1ec3u",
    projects_subtitle:
      "Trải nghiệm sản phẩm, xem nhanh công nghệ hoặc mở phần chi tiết kỹ thuật của từng dự án.",
    projects_technologies: "C\u00f4ng ngh\u1ec7",
    projects_responsibilities: "Tr\u00e1ch nhi\u1ec7m",
    projects_view_details: "Chi tiết kỹ thuật",
    projects_show_less: "Đóng chi tiết",
    projects_read_more: "\u0110\u1ecdc th\u00eam",
    projects_view_github: "Xem tr\u00ean GitHub",
    projects_team_size: "Nh\u00f3m",
    projects_type_personal: "D\u1ef1 \u00e1n c\u00e1 nh\u00e2n",

    // Project data
    project1_title:
      "H\u1ec7 th\u1ed1ng Qu\u1ea3n l\u00fd Nh\u00e0 s\u00e1ch & Th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed",
    project1_desc:
      "Ph\u00e1t tri\u1ec3n h\u1ec7 th\u1ed1ng Qu\u1ea3n l\u00fd Nh\u00e0 s\u00e1ch v\u00e0 Th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed \u0111\u1ea7y \u0111\u1ee7 t\u00ednh n\u0103ng, h\u1ed7 tr\u1ee3 \u0111\u1eb7t h\u00e0ng online v\u00e0 b\u00e1n t\u1ea1i qu\u1ea7y POS. N\u1ec1n t\u1ea3ng cho ph\u00e9p kh\u00e1ch h\u00e0ng duy\u1ec7t danh m\u1ee5c s\u1ea3n ph\u1ea9m, qu\u1ea3n l\u00fd gi\u1ecf h\u00e0ng, \u0111\u1eb7t h\u00e0ng v\u1edbi thanh to\u00e1n VNPay ho\u1eb7c COD, t\u00edch l\u0169y \u0111i\u1ec3m th\u01b0\u1edfng v\u00e0 s\u1eed d\u1ee5ng voucher/gi\u1ea3m gi\u00e1 \u2014 \u0111\u1ed3ng th\u1eddi cung c\u1ea5p cho qu\u1ea3n tr\u1ecb vi\u00ean c\u00e1c c\u00f4ng c\u1ee5 to\u00e0n di\u1ec7n \u0111\u1ec3 qu\u1ea3n l\u00fd danh m\u1ee5c, x\u1eed l\u00fd \u0111\u01a1n h\u00e0ng, ph\u00e2n t\u00edch doanh thu v\u00e0 v\u1eadn h\u00e0nh nh\u00e2n vi\u00ean.",
    project1_resp_1:
      "Thi\u1ebft k\u1ebf v\u00e0 tri\u1ec3n khai ki\u1ebfn tr\u00fac ph\u00e2n l\u1edbp v\u1edbi Web API v\u00e0 MVC ri\u00eang bi\u1ec7t giao ti\u1ebfp qua HttpClient tr\u00ean REST endpoints",
    project1_resp_2:
      "Ph\u00e1t tri\u1ec3n lu\u1ed3ng th\u01b0\u01a1ng m\u1ea1i \u0111i\u1ec7n t\u1eed bao g\u1ed3m danh m\u1ee5c s\u1ea3n ph\u1ea9m, gi\u1ecf h\u00e0ng, thanh to\u00e1n v\u1edbi VNPay v\u00e0 COD, qu\u1ea3n l\u00fd v\u00f2ng \u0111\u1eddi \u0111\u01a1n h\u00e0ng",
    project1_resp_3:
      "Tri\u1ec3n khai h\u1ec7 th\u1ed1ng \u0111i\u1ec3m kh\u00e1ch h\u00e0ng th\u00e2n thi\u1ebft v\u1edbi t\u1ef7 l\u1ec7 t\u00edch/\u0111\u1ed5i \u0111i\u1ec3m c\u1ea5u h\u00ecnh \u0111\u01b0\u1ee3c, qu\u1ea3n l\u00fd voucher v\u00e0 c\u00f4ng c\u1ee5 khuy\u1ebfn m\u00e3i",
    project1_resp_4:
      "Ph\u00e1t tri\u1ec3n dashboard qu\u1ea3n tr\u1ecb to\u00e0n di\u1ec7n v\u1edbi ph\u00e2n t\u00edch doanh thu, ho\u1ea1t \u0111\u1ed9ng kh\u00e1ch h\u00e0ng v\u00e0 hi\u1ec7u su\u1ea5t s\u1ea3n ph\u1ea9m qua Chart.js",
    project1_resp_5:
      "Tri\u1ec3n khai x\u00e1c th\u1ef1c b\u1ea3o m\u1eadt v\u1edbi BCrypt, ph\u00e2n quy\u1ec1n theo vai tr\u00f2 v\u00e0 th\u00f4ng b\u00e1o email SMTP cho x\u00e1c nh\u1eadn \u0111\u01a1n h\u00e0ng",
    project1_resp_6:
      "X\u00e2y d\u1ef1ng xu\u1ea5t Excel, t\u1ea1o h\u00f3a \u0111\u01a1n PDF (Rotativa) v\u00e0 t\u00ednh n\u0103ng m\u00e3 QR",

    project2_title:
      "CodeSphere \u2013 N\u1ec1n t\u1ea3ng Blog X\u00e3 h\u1ed9i",
    project2_desc:
      "X\u00e2y d\u1ef1ng N\u1ec1n t\u1ea3ng Blog X\u00e3 h\u1ed9i \u0111a t\u00ednh n\u0103ng, cho ph\u00e9p ng\u01b0\u1eddi d\u00f9ng t\u1ea1o v\u00e0 chia s\u1ebb b\u00e0i vi\u1ebft, nh\u1eafn tin ri\u00eang th\u1eddi gian th\u1ef1c v\u00e0 nh\u1eadn th\u00f4ng b\u00e1o tr\u1ef1c ti\u1ebfp. N\u1ec1n t\u1ea3ng t\u00edch h\u1ee3p m\u00f4 h\u00ecnh ML.NET \u0111\u1ec3 ki\u1ec3m duy\u1ec7t n\u1ed9i dung t\u1ef1 \u0111\u1ed9ng, t\u1ea1o n\u1ed9i dung AI qua Groq v\u00e0 t\u00e1c v\u1ee5 n\u1ec1n Hangfire. Ki\u1ebfn tr\u00fac module h\u00f3a theo ASP.NET Core Areas, giao ti\u1ebfp th\u1eddi gian th\u1ef1c qua SignalR, \u0111\u0103ng nh\u1eadp x\u00e3 h\u1ed9i (Facebook, Google), l\u01b0u tr\u1eef Cloudinary, email SendGrid v\u00e0 x\u00e1c minh SMS Twilio.",
    project2_resp_1:
      "Ki\u1ebfn tr\u00fac \u1ee9ng d\u1ee5ng MVC module h\u00f3a s\u1eed d\u1ee5ng ASP.NET Core Areas \u0111\u1ec3 t\u00e1ch bi\u1ec7t c\u00e1c module Administration, Editor, PrivateChat, UserNotifications v\u00e0 Identity",
    project2_resp_2:
      "T\u00edch h\u1ee3p ML.NET prediction engine \u0111\u1ec3 ph\u00e2n lo\u1ea1i b\u00e0i vi\u1ebft v\u00e0 b\u00ecnh lu\u1eadn t\u1ef1 \u0111\u1ed9ng h\u1ed7 tr\u1ee3 ki\u1ec3m duy\u1ec7t n\u1ed9i dung",
    project2_resp_3:
      "X\u00e2y d\u1ef1ng l\u1edbp t\u1ea1o n\u1ed9i dung AI s\u1eed d\u1ee5ng Groq API v\u1edbi render Markdown-to-HTML qua Markdig",
    project2_resp_4:
      "Ph\u00e1t tri\u1ec3n h\u1ec7 th\u1ed1ng th\u00f4ng b\u00e1o th\u1eddi gian th\u1ef1c v\u1edbi SignalR cho \u0111\u1ebfm th\u00f4ng b\u00e1o ch\u01b0a \u0111\u1ecdc v\u00e0 theo d\u00f5i tr\u1ea1ng th\u00e1i online/offline",
    project2_resp_5:
      "C\u1ea5u h\u00ecnh Hangfire cho c\u00e1c t\u00e1c v\u1ee5 b\u1ea3o tr\u00ec h\u1ec7 th\u1ed1ng \u0111\u1ecbnh k\u1ef3: g\u1ee3i \u00fd b\u1ea1n b\u00e8, d\u1ecdn log ho\u1ea1t \u0111\u1ed9ng v\u00e0 x\u00f3a tin nh\u1eafn c\u0169",
    project2_resp_6:
      "Tri\u1ec3n khai x\u00e1c th\u1ef1c v\u1edbi ASP.NET Core Identity, \u0111\u0103ng nh\u1eadp x\u00e3 h\u1ed9i, Google reCAPTCHA v\u00e0 ph\u00e2n quy\u1ec1n theo vai tr\u00f2",

    project3_title: "H\u1ec7 th\u1ed1ng \u0110\u1eb7t v\u00e9 Xe kh\u00e1ch",
    project3_desc:
      "Ph\u00e1t tri\u1ec3n H\u1ec7 th\u1ed1ng \u0110\u1eb7t v\u00e9 Xe kh\u00e1ch to\u00e0n di\u1ec7n v\u1edbi Spring Boot REST API backend v\u00e0 hai frontend React SPA ri\u00eang bi\u1ec7t (Kh\u00e1ch h\u00e0ng v\u00e0 Qu\u1ea3n tr\u1ecb). N\u1ec1n t\u1ea3ng bao qu\u00e1t to\u00e0n b\u1ed9 v\u00f2ng \u0111\u1eddi \u0111\u1eb7t v\u00e9 \u2014 t\u1eeb t\u00ecm chuy\u1ebfn v\u00e0 ch\u1ecdn gh\u1ebf \u0111\u1ebfn thanh to\u00e1n, t\u00edch \u0111i\u1ec3m, g\u1eedi h\u00e0ng v\u00e0 th\u00f4ng b\u00e1o th\u1eddi gian th\u1ef1c qua WebSocket (STOMP). T\u00edch h\u1ee3p x\u00e1c th\u1ef1c JWT v\u1edbi ph\u00e2n quy\u1ec1n c\u1ea5p m\u00e0n h\u00ecnh (RBAC), t\u00e1c v\u1ee5 n\u1ec1n \u0111\u1ecbnh k\u1ef3 v\u00e0 dashboard qu\u1ea3n tr\u1ecb.",
    project3_resp_1:
      "X\u00e2y d\u1ef1ng ki\u1ebfn tr\u00fac dual-frontend v\u1edbi React/Vite SPA ri\u00eang cho kh\u00e1ch h\u00e0ng v\u00e0 qu\u1ea3n tr\u1ecb vi\u00ean",
    project3_resp_2:
      "Tri\u1ec3n khai x\u00e1c th\u1ef1c JWT v\u1edbi Spring Security, qu\u1ea3n l\u00fd session stateless v\u00e0 ph\u00e2n quy\u1ec1n c\u1ea5p m\u00e0n h\u00ecnh",
    project3_resp_3:
      "X\u00e2y d\u1ef1ng h\u1ea1 t\u1ea7ng th\u00f4ng b\u00e1o th\u1eddi gian th\u1ef1c s\u1eed d\u1ee5ng WebSocket (STOMP qua SockJS)",
    project3_resp_4:
      "Ph\u00e1t tri\u1ec3n API b\u00e1o c\u00e1o to\u00e0n di\u1ec7n cho ph\u00e2n t\u00edch doanh thu, th\u1ed1ng k\u00ea s\u1eed d\u1ee5ng xe v\u00e0 tuy\u1ebfn ph\u1ed5 bi\u1ebfn",

    // Journey / Experience
    journey_kicker: "H\u00e0nh tr\u00ecnh",
    journey_title:
      "C\u00e1ch t\u00f4i suy ngh\u0129 v\u1ec1 vi\u1ec7c x\u00e2y d\u1ef1ng s\u1ea3n ph\u1ea9m",
    journey_subtitle:
      "M\u1ed9t s\u1ed1 ch\u1ee7 \u0111\u1ec1 xu\u1ea5t hi\u1ec7n xuy\u00ean su\u1ed1t c\u00f4ng vi\u1ec7c c\u1ee7a t\u00f4i \u2014 \u0111\u1eb7c bi\u1ec7t trong c\u00e1c h\u1ec7 th\u1ed1ng n\u1eb7ng backend.",
    journey1_title: "Ki\u1ebfn tr\u00fac Backend",
    journey1_body:
      "Thi\u1ebft k\u1ebf API, d\u1ecbch v\u1ee5 v\u00e0 m\u00f4 h\u00ecnh d\u1eef li\u1ec7u v\u1edbi ranh gi\u1edbi r\u00f5 r\u00e0ng, hi\u1ec7u su\u1ea5t cao v\u00e0 b\u1ea3o m\u1eadt m\u1eb7c \u0111\u1ecbnh.",
    journey2_title: "Thi\u1ebft k\u1ebf h\u1ec7 th\u1ed1ng",
    journey2_body:
      "X\u00e2y d\u1ef1ng h\u1ec7 th\u1ed1ng d\u1ec5 b\u1ea3o tr\u00ec v\u1edbi logic domain r\u00f5 r\u00e0ng, c\u00e1c pattern s\u1eb5n s\u00e0ng gi\u00e1m s\u00e1t v\u00e0 chi\u1ebfn l\u01b0\u1ee3c truy c\u1eadp d\u1eef li\u1ec7u m\u1edf r\u1ed9ng.",
    journey3_title: "T\u00edch h\u1ee3p AI",
    journey3_body:
      "Tri\u1ec3n khai tr\u1ea3i nghi\u1ec7m g\u1ee3i \u00fd v\u00e0 x\u1ebfp h\u1ea1ng s\u1eed d\u1ee5ng ML.NET (LightGBM), t\u00edch h\u1ee3p m\u00f4 h\u00ecnh v\u00e0o quy tr\u00ecnh s\u1ea3n ph\u1ea9m th\u1ef1c.",
    journey4_title: "H\u1ec7 th\u1ed1ng th\u1eddi gian th\u1ef1c",
    journey4_body:
      "Tri\u1ec3n khai t\u00ednh n\u0103ng giao ti\u1ebfp th\u1eddi gian th\u1ef1c (chat, th\u00f4ng b\u00e1o) v\u00e0 x\u1eed l\u00fd n\u1ec1n v\u1edbi pipeline c\u00f4ng vi\u1ec7c \u0111\u00e1ng tin c\u1eady.",

    // Contact
    contact_kicker: "Li\u00ean h\u1ec7",
    contact_title: "Trao đổi về cơ hội hợp tác",
    contact_subtitle:
      "Về cơ hội việc làm hoặc hợp tác phát triển, hãy gửi tin nhắn hoặc liên hệ trực tiếp qua email hay LinkedIn.",
    contact_links: "Li\u00ean k\u1ebft",
    contact_prefer_email: "Mu\u1ed1n g\u1eedi email?",
    contact_name: "H\u1ecd t\u00ean",
    contact_name_placeholder: "T\u00ean c\u1ee7a b\u1ea1n",
    contact_email: "Email",
    contact_email_placeholder: "you@example.com",
    contact_message: "Tin nh\u1eafn",
    contact_message_placeholder:
      "H\u00e3y k\u1ec3 v\u1ec1 d\u1ef1 \u00e1n c\u1ee7a b\u1ea1n...",
    contact_send: "G\u1eedi tin nh\u1eafn",
    contact_sending: "\u0110ang g\u1eedi...",
    contact_sent: "G\u1eedi th\u00e0nh c\u00f4ng!",
    contact_error:
      "G\u1eedi th\u1ea5t b\u1ea1i. Vui l\u00f2ng th\u1eed l\u1ea1i.",

    // Footer
    footer_built_with:
      "X\u00e2y d\u1ef1ng v\u1edbi React + Vite + Tailwind + Framer Motion.",
  },
};
