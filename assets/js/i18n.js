/* ============================================================
   Adem Hmercha — Portfolio 2026
   i18n.js — EN/FR translation dictionary + language switcher
   ============================================================ */

(function () {
  const translations = {
    en: {
      meta: {
        description: "Adem Hmercha — Software Engineer from Tunisia. MERN stack, real-time systems, DevOps pipelines, and AI-powered tools.",
        ogTitle: "Adem Hmercha — Software Engineer",
        ogDescription: "Software Engineer passionate about building real-world web applications.",
        title: "Adem Hmercha — Software Engineer",
      },
      nav: { about: "About", projects: "Projects", skills: "Skills", certs: "Certifications", contact: "Contact", status: "Available" },
      hero: {
        label: "Software Engineer",
        desc: 'I build <strong>scalable web applications</strong> and <strong>real-time systems</strong> from Tunisia. Specialized in MERN stack, DevOps, and AI-powered tools.',
        viewWork: "View my work",
        scroll: "Scroll",
        roles: ["Software Engineer", "MERN Stack Engineer", "Real-Time Systems Builder", "DevOps Enthusiast"],
      },
      about: {
        tag: "01 — About",
        title: "A bit about <span>me.</span>",
        bio1: "I'm a Software Engineer from Tunisia with hands-on experience building products that solve real problems. I care about every layer of the stack — from a pixel-perfect UI to a well-architected backend.",
        bio2: "My core is the MERN stack, extended with real-time systems, AI-powered tooling, and DevOps pipelines. Whether it's an e-commerce platform, an enterprise dashboard, or a cloud-deployed microservice, I ship work that is fast, scalable, and polished.",
        education: "Education",
        "edu1.title": "Engineering Degree — Software Engineering",
        "edu1.date": "2023 – 2026 · Graduated",
        "edu2.title": "Preparatory Classes — Math · Physics",
        experience: "Experience",
        "exp1.title": "PFE Internship — Software and DevOps Engineering",
        "exp1.date": "6 months · 2026",
        "exp2.title": "Engineering Internship — Software Development",
        "exp2.date": "2 months · 2025",
      },
      filter: { all: "All", software: "Software", ai: "AI" },
      projects: { tag: "02 — Projects", title: "Selected <span>work.</span>" },
      pcard: { live: "Live ↗", code: "Code ↗" },
      preview: { noLiveDemo: "No live demo" },
      pagination: { prev: "Previous page", next: "Next page" },
      skills: { tag: "03 — Skills", title: "Built <span>with.</span>", frontend: "Frontend", backend: "Backend", devops: "DevOps & Tools" },
      certs: { tag: "04 — Certifications", title: "Verified <span>credentials.</span>", issuer: "Anthropic Education", verified: "Verified" },
      contact: {
        tag: "05 — Contact",
        heading: "Let's build<br><em>something great.</em>",
        desc: "Open to full-time roles, freelance projects, and collaborations. I reply fast — let's talk.",
        sendEmail: "Send Email",
      },
      footer: { backToTop: "Back to top" },
      mobile: { home: "Home", work: "Work", skills: "Skills", certs: "Certs", contact: "Contact", theme: "Theme" },

      proj1: {
        subtitle: "Luxury fashion e-commerce with JWT auth, Cloudinary image management, and automated WhatsApp order notifications.",
        about: "Full-stack MERN fashion e-commerce for a Tunisian luxury brand — product catalog, cart system, and complete order management.",
        li1: "JWT auth · Cloudinary image management across 4 product categories",
        li2: "Automated WhatsApp order notifications via Whapi.Cloud — zero client setup",
        li3: "Frontend on Vercel · backend on Railway · seeded demo data ready",
      },
      proj2: {
        subtitle: "Enterprise DevOps platform for network equipment testing. WebSocket live updates, RBAC, and full CI/CD pipeline.",
        about: "Enterprise DevOps platform built during PFE internship at Sagemcom — manages and monitors network equipment test pipelines end-to-end.",
        li1: "WebSocket real-time test execution updates with RBAC access control",
        li2: "Full CI/CD pipeline · Docker + Kubernetes · Prometheus monitoring",
        li3: "Multi-team architecture with granular permission management",
      },
      proj3: {
        subtitle: "AI-powered code auditor powered by Llama 3.3 70B. Five specialized agents analyze any public GitHub repo.",
        about: "Browser-based AI code auditor using 5 sequential specialized agents — no backend, zero infrastructure cost, runs entirely client-side.",
        li1: "5 agents: code quality, security, architecture, documentation, performance",
        li2: "Powered by Groq API (Llama 3.3 70B) · completely free to run",
        li3: "Outputs quality scores, bug reports by severity, and exportable PDF audits",
      },
      proj4: {
        subtitle: "Real-time dating app with swipe matching, live chat, voice messages, and peer-to-peer WebRTC video calls.",
        about: "Real-time dating app with swipe-based matching, live chat, voice messages, and peer-to-peer video calls — no relay server needed.",
        li1: "Socket.io live chat · WebRTC P2P video calls",
        li2: "Admin dashboard with analytics, user management, and audit logging",
        li3: "EN/FR multilingual · glassmorphism UI · Vercel + Render + MongoDB Atlas",
      },
      proj5: {
        subtitle: "Full-stack real estate platform with real-time notifications, role-based auth, admin dashboard, and multilingual UI.",
        about: "MERN real estate platform for listing and browsing furnished and rental properties with real-time updates and multilingual support.",
        li1: "Socket.IO live notifications on new listings with navbar badge updates",
        li2: "JWT auth · math-challenge spam protection — no external API keys needed",
        li3: "Multilingual UI in Arabic, French, and English",
      },
      proj6: {
        subtitle: "Production Node.js API on Kubernetes with HPA scaling from 2 to 10 pods. Multi-stage Dockerfile, graceful shutdown.",
        about: "Production-grade Node.js API on Kubernetes demonstrating real-world horizontal auto-scaling from 2 to 10 pods under CPU load.",
        li1: "HPA scales pods 2→10 based on live CPU utilization via Metrics Server",
        li2: "Multi-stage Dockerfile · non-root execution · graceful shutdown handling",
        li3: "PowerShell load-test scripts and automated setup/teardown included",
      },
      proj7: {
        subtitle: "Full-stack parental monitoring platform. Device lock/unlock, website blocking, screen time tracking, and real-time alerts.",
        about: "Full-stack parental monitoring platform with a React web dashboard and React Native mobile app for real-time child device oversight.",
        li1: "Remote device lock/unlock · website blocking · screen time scheduling",
        li2: "Real-time alerts via Supabase Realtime + Firebase FCM push notifications",
        li3: "Mobile APK via EAS · backend on Railway · database on Supabase",
      },
      proj8: {
        subtitle: "Real-time weather and news dashboard. Live forecasts by location with integrated news feed for a unified daily briefing.",
        about: "React app combining live weather forecasts and Tunisian news aggregation with smart tri-layer location detection — no API key required.",
        li1: "7-day forecast + AQI via Open-Meteo · server-side caching",
        li2: "Smart location: browser geolocation → IP fallback → Tunis default",
        li3: "Aggregates 8 Tunisian RSS feeds (Mosaique FM, Kapitalis…) with city filtering",
      },
      proj9: {
        subtitle: "Bilingual FR/AR website for a Tunisian tutoring center — teacher directory, subjects, and Bac exam prep with WhatsApp booking.",
        about: "Bilingual French/Arabic marketing site for a Tunisian private tutoring center, built with Next.js 14 App Router and animated with Framer Motion.",
        li1: "Showcases 10 teachers across primary, middle, and Bac-prep levels",
        li2: "WhatsApp-integrated registration and real-time parent communication",
        li3: "Google Maps location embed · fully responsive Tailwind layout",
      },
      proj10: {
        subtitle: "Luxury beauty salon landing page for a Paris spa — services, pricing, before/after gallery, and subscription packages.",
        about: "Production-ready landing page for a Parisian beauty & aesthetics center, built with Next.js 14, Tailwind CSS, and Framer Motion animations.",
        li1: "Six service categories with transparent pricing and three subscription tiers",
        li2: "Before/after gallery and client testimonials build trust",
        li3: "WhatsApp booking · bilingual French/Arabic · mobile-first design",
      },
      proj11: {
        subtitle: "Authentic Tunisian restaurant site with menu, gallery, and WhatsApp reservations celebrating family recipes since 2004.",
        about: "Restaurant marketing site for a traditional Tunisian eatery, presenting its menu and heritage story with a warm, food-forward design.",
        li1: "Full menu with pricing in Dinars across appetizers, mains, desserts, drinks",
        li2: "Photo gallery and customer testimonials spotlighting signature dishes",
        li3: "WhatsApp table reservations · trilingual FR/EN/AR navigation",
      },
      proj12: {
        subtitle: "Privacy-first PWA security camera with on-device AI object detection, night-vision filters, and local alert history.",
        about: "Installable Progressive Web App that turns any phone or laptop into an intelligent motion-detecting security camera — detection and AI run entirely on-device, nothing leaves the browser.",
        li1: "Real-time motion detection (~15fps) with on-device TensorFlow.js + COCO-SSD object classification",
        li2: "Five night-vision filter modes — Auto, Twilight, Night, Military, Thermal — with brightness-based switching",
        li3: "Instant snapshots and ~4s video clips, browsable IndexedDB alert history, optional Web3Forms email alerts",
        li4: "Installable offline-first PWA · React 19 + Vite + Tailwind CSS v4",
      },
      proj13: {
        subtitle: "All-in-one Discord bot with moderation, economy, leveling, and music — built on discord.js v14 with persistent queues.",
        about: "Full-featured Discord server bot built with discord.js v14 — moderation, economy, leveling, games, and music in one package, with zero external database.",
        li1: "Moderation suite — ban, kick, timeout, mute, warn, bulk-delete — with numbered case logging",
        li2: "XP & leveling with level-up announcements, coin economy, daily rewards, and unlockable badges",
        li3: "YouTube music playback via yt-dlp + ffmpeg with queues that persist across restarts",
        li4: "Trivia, rock-paper-scissors, slot machines, memes & roasts · JSON-based persistence",
      },
      proj14: {
        subtitle: "AI Telegram bot that summarizes YouTube videos, PDFs, Word docs, articles, and voice messages with Google Gemini.",
        about: "Telegram bot built with Telegraf and Google Gemini that auto-detects content type and replies with structured summaries in the source language.",
        li1: "Summarizes YouTube transcripts, PDFs, Word docs, web articles, voice messages, and plain text",
        li2: "Interactive buttons to regenerate, condense, translate, ask follow-up questions, and export",
        li3: "Translates into 8 languages · group chat support via /resume · personal Gemini key via /setkey",
        li4: "Disk-cached results for instant repeats · automatic retry with model fallback on quota limits",
      },
      proj15: {
        subtitle: "Secure inter-city carpooling platform with real-time chat, RBAC, encrypted data, and bilingual FR/AR interface.",
        about: "Full-stack inter-city carpooling platform for Tunisia — JWT RS256 auth, role-based access control, real-time notifications, and zero tolerance for security flaws with full OWASP coverage.",
        li1: "JWT RS256 + refresh token rotation · account lockout after 5 failed attempts · httpOnly cookies",
        li2: "Real-time Socket.IO chat with per-user rate limiting · Bull queue for booking & departure notifications",
        li3: "Phone numbers encrypted AES-256-GCM · geolocation proxied server-side · 58 Jest + Supertest tests",
        li4: "Docker Compose · GitHub Actions CI · target deployment on Azure · bilingual FR/AR with RTL",
      },
      proj16: {
        subtitle: "Full GitOps delivery pipeline on Kubernetes with ArgoCD auto-sync, Kustomize overlays, and GitHub Actions CI/CD.",
        about: "End-to-end GitOps delivery pipeline for a full-stack app on Kubernetes — ArgoCD watches Git, auto-syncs, prunes, and self-heals the cluster with zero manual intervention.",
        li1: "ArgoCD automated sync, prune, and self-heal · GitHub Actions build, push, manifest update",
        li2: "Kustomize base + dev/prod overlays · Nginx reverse proxy for SPA + API",
        li3: "Docker Compose for local dev · multi-stage Dockerfiles for frontend & backend",
        li4: "Express API with JWT auth, email verification, and MongoDB persistence",
      },
      proj17: {
        subtitle: "n8n workflow that forwards GitHub webhook events as rich Discord embed notifications — push and PR events in real time.",
        about: "Production-ready n8n workflow connecting GitHub and Discord through automated webhook processing — push and pull request events are parsed and posted as color-coded embed notifications.",
        li1: "Event filter discards non-push/PR noise — only high-signal events hit Discord",
        li2: "Dynamic embed colors: green (opened), red (closed), purple (merged), yellow (synchronize)",
        li3: "Environment variable config for Discord webhook — no hardcoded secrets",
        li4: "Import the workflow JSON, configure two webhooks, activate — done in 5 minutes",
      },
      proj18: {
        subtitle: "AI-powered chatbot with n8n + Google Gemini 2.5 Flash — glassmorphism UI, typewriter effect, message history, and rate-limit handling.",
        about: "AI-powered chatbot interface built with vanilla HTML/CSS/JS, connected to a Dockerized n8n backend orchestrating Google Gemini 2.5 Flash API calls via ngrok tunnel — no framework, no build step, just clean frontend code.",
        li1: "Glassmorphism UI with animated gradient orbs and frosted glass design",
        li2: "Typewriter effect for bot replies · message history persisted in localStorage (last 5)",
        li3: "Rate-limit handling with auto-retry up to 3 times and exponential backoff",
        li4: "n8n workflow with 4 nodes: Webhook → HTTP Request (Gemini) → Code (extract) → Respond",
      },
      proj19: {
        subtitle: "Fully local Retrieval-Augmented Generation chat app with ChatGPT-style UI. Uses Ollama — no API key needed, runs entirely via Docker Compose.",
        about: "Fully local, free Retrieval-Augmented Generation (RAG) chat application with a ChatGPT-style UI, running on Ollama and Docker Compose — no OpenAI key needed, everything runs on your machine.",
        li1: "Upload documents (PDF, DOCX, TXT, CSV, HTML, MD) — chunk, embed, store, retrieve, answer pipeline",
        li2: "Conversation history with auto-titling, search, and deletion — async upload with background ingestion",
        li3: "6 Docker services: Node.js API, React SPA (Nginx), MongoDB, ChromaDB, Redis, Ollama",
      },
      proj20: {
        subtitle: "Order processing automation with n8n, Express.js, and Supabase PostgreSQL. Thin API layer routes orders to n8n where all business logic lives.",
        about: "Full-stack order processing pipeline where Express handles auth and routing while n8n manages all business logic — stock validation, inventory, invoicing, warehouse tasks, and notifications via a linear workflow with conditional branching.",
        li1: "Thin Express API layer — authenticates users and routes orders to the n8n webhook",
        li2: "n8n workflow: validates input, checks stock, reserves inventory, generates invoices, creates warehouse tasks, and sends notifications",
        li3: "Docker Compose for local dev — Supabase PostgreSQL for persistence across all services",
      },
      proj21: {
        subtitle: "Multi-tenant SaaS inventory & invoicing platform for Tunisian SMEs, with a GitHub Actions → n8n → Kubernetes pipeline that auto-deploys on every push to main.",
        about: "Full-stack SaaS inventory and invoicing platform replacing Excel for Tunisian retail, distribution, and light-manufacturing SMEs — native multi-tier VAT handling, backed by a fully automated GitOps-style CI/CD pipeline to Kubernetes.",
        li1: "Multi-tenant architecture — every backend request scoped by enterpriseId, with dedicated tests proving data isolation between companies",
        li2: "Native Tunisian VAT (19%/13%/7%) and fiscal stamp handling · Puppeteer-generated PDF invoices · draft → sent → paid workflow",
        li3: "GitHub Actions builds & pushes Docker images to GHCR on push to main, then calls an n8n webhook that runs kubectl set image + rollout status against a 2-replica Kubernetes deployment",
        li4: "52 Jest/Supertest backend tests + Vitest frontend tests · rate-limited auth · Kustomize overlays for staging/production",
      },
    },

    fr: {
      meta: {
        description: "Adem Hmercha — Ingénieur Logiciel basé en Tunisie. Stack MERN, systèmes temps réel, pipelines DevOps et outils propulsés par l'IA.",
        ogTitle: "Adem Hmercha — Ingénieur Logiciel",
        ogDescription: "Ingénieur Logiciel passionné par la création d'applications web concrètes.",
        title: "Adem Hmercha — Ingénieur Logiciel",
      },
      nav: { about: "À propos", projects: "Projets", skills: "Compétences", certs: "Certifications", contact: "Contact", status: "Disponible" },
      hero: {
        label: "Ingénieur Logiciel",
        desc: "Je conçois des <strong>applications web scalables</strong> et des <strong>systèmes temps réel</strong> depuis la Tunisie. Spécialisé en stack MERN, DevOps et outils propulsés par l'IA.",
        viewWork: "Voir mon travail",
        scroll: "Défiler",
        roles: ["Ingénieur Logiciel", "Ingénieur Stack MERN", "Bâtisseur de Systèmes Temps Réel", "Passionné de DevOps"],
      },
      about: {
        tag: "01 — À propos",
        title: "Un peu à propos de <span>moi.</span>",
        bio1: "Je suis Ingénieur Logiciel basé en Tunisie, avec une expérience concrète dans la création de produits qui résolvent de vrais problèmes. Je m'investis à chaque niveau de la stack — d'une interface pixel-perfect à un backend bien architecturé.",
        bio2: "Ma base est la stack MERN, complétée par des systèmes temps réel, des outils propulsés par l'IA et des pipelines DevOps. Qu'il s'agisse d'une plateforme e-commerce, d'un tableau de bord d'entreprise ou d'un microservice déployé dans le cloud, je livre un travail rapide, scalable et soigné.",
        education: "Formation",
        "edu1.title": "Diplôme d'Ingénieur — Génie Logiciel",
        "edu1.date": "2023 – 2026 · Diplômé",
        "edu2.title": "Classes Préparatoires — Math · Physique",
        experience: "Expérience",
        "exp1.title": "Stage PFE — Ingénierie Logicielle et DevOps",
        "exp1.date": "6 mois · 2026",
        "exp2.title": "Stage d'Ingénieur — Développement Logiciel",
        "exp2.date": "2 mois · 2025",
      },
      filter: { all: "Tout", software: "Logiciel", ai: "IA" },
      projects: { tag: "02 — Projets", title: "Travaux <span>sélectionnés.</span>" },
      pcard: { live: "Démo ↗", code: "Code ↗" },
      preview: { noLiveDemo: "Pas de démo en ligne" },
      pagination: { prev: "Page précédente", next: "Page suivante" },
      skills: { tag: "03 — Compétences", title: "Construit <span>avec.</span>", frontend: "Frontend", backend: "Backend", devops: "DevOps & Outils" },
      certs: { tag: "04 — Certifications", title: "Identifiants <span>vérifiés.</span>", issuer: "Anthropic Education", verified: "Vérifié" },
      contact: {
        tag: "05 — Contact",
        heading: "Construisons<br><em>quelque chose de grand.</em>",
        desc: "Ouvert aux postes à temps plein, projets freelance et collaborations. Je réponds vite — discutons.",
        sendEmail: "Envoyer un Email",
      },
      footer: { backToTop: "Retour en haut" },
      mobile: { home: "Accueil", work: "Travaux", skills: "Compétences", certs: "Certs", contact: "Contact", theme: "Thème" },

      proj1: {
        subtitle: "E-commerce de mode de luxe avec authentification JWT, gestion d'images Cloudinary et notifications de commande WhatsApp automatisées.",
        about: "E-commerce de mode full-stack MERN pour une marque de luxe tunisienne — catalogue produits, système de panier et gestion complète des commandes.",
        li1: "Authentification JWT · gestion d'images Cloudinary sur 4 catégories de produits",
        li2: "Notifications de commande WhatsApp automatisées via Whapi.Cloud — aucune configuration côté client",
        li3: "Frontend sur Vercel · backend sur Railway · données de démonstration prêtes",
      },
      proj2: {
        subtitle: "Plateforme DevOps d'entreprise pour le test d'équipements réseau. Mises à jour en direct par WebSocket, RBAC et pipeline CI/CD complet.",
        about: "Plateforme DevOps d'entreprise développée lors du stage PFE chez Sagemcom — gère et supervise de bout en bout les pipelines de test d'équipements réseau.",
        li1: "Mises à jour en temps réel de l'exécution des tests via WebSocket avec contrôle d'accès RBAC",
        li2: "Pipeline CI/CD complet · Docker + Kubernetes · supervision Prometheus",
        li3: "Architecture multi-équipes avec gestion granulaire des permissions",
      },
      proj3: {
        subtitle: "Auditeur de code propulsé par l'IA, basé sur Llama 3.3 70B. Cinq agents spécialisés analysent n'importe quel dépôt GitHub public.",
        about: "Auditeur de code IA fonctionnant dans le navigateur, utilisant 5 agents spécialisés séquentiels — sans backend, coût d'infrastructure nul, s'exécute entièrement côté client.",
        li1: "5 agents : qualité du code, sécurité, architecture, documentation, performance",
        li2: "Propulsé par l'API Groq (Llama 3.3 70B) · entièrement gratuit à utiliser",
        li3: "Génère des scores de qualité, des rapports de bugs par gravité et des audits PDF exportables",
      },
      proj4: {
        subtitle: "Application de rencontre en temps réel avec matching par swipe, chat en direct, messages vocaux et appels vidéo WebRTC pair-à-pair.",
        about: "Application de rencontre en temps réel avec matching par swipe, chat en direct, messages vocaux et appels vidéo pair-à-pair — sans serveur relais nécessaire.",
        li1: "Chat en direct Socket.io · appels vidéo WebRTC P2P",
        li2: "Tableau de bord admin avec analytique, gestion des utilisateurs et journal d'audit",
        li3: "Multilingue EN/FR · interface glassmorphism · Vercel + Render + MongoDB Atlas",
      },
      proj5: {
        subtitle: "Plateforme immobilière full-stack avec notifications en temps réel, authentification par rôles, tableau de bord admin et interface multilingue.",
        about: "Plateforme immobilière MERN pour publier et parcourir des biens meublés et locatifs, avec mises à jour en temps réel et support multilingue.",
        li1: "Notifications en direct via Socket.IO sur les nouvelles annonces avec mise à jour du badge dans la barre de navigation",
        li2: "Authentification JWT · protection anti-spam par défi mathématique — aucune clé API externe nécessaire",
        li3: "Interface multilingue en arabe, français et anglais",
      },
      proj6: {
        subtitle: "API Node.js en production sur Kubernetes avec scaling HPA de 2 à 10 pods. Dockerfile multi-étapes, arrêt propre (graceful shutdown).",
        about: "API Node.js de qualité production sur Kubernetes démontrant un auto-scaling horizontal réel de 2 à 10 pods sous charge CPU.",
        li1: "Le HPA fait varier les pods de 2 à 10 selon l'utilisation CPU en direct via Metrics Server",
        li2: "Dockerfile multi-étapes · exécution non-root · gestion de l'arrêt propre",
        li3: "Scripts PowerShell de test de charge et mise en place/démontage automatisés inclus",
      },
      proj7: {
        subtitle: "Plateforme full-stack de contrôle parental. Verrouillage/déverrouillage d'appareils, blocage de sites, suivi du temps d'écran et alertes en temps réel.",
        about: "Plateforme full-stack de contrôle parental avec un tableau de bord web React et une application mobile React Native pour la supervision en temps réel des appareils des enfants.",
        li1: "Verrouillage/déverrouillage d'appareil à distance · blocage de sites · planification du temps d'écran",
        li2: "Alertes en temps réel via Supabase Realtime + notifications push Firebase FCM",
        li3: "APK mobile via EAS · backend sur Railway · base de données sur Supabase",
      },
      proj8: {
        subtitle: "Tableau de bord météo et actualités en temps réel. Prévisions en direct par localisation avec fil d'actualités intégré pour un point quotidien unifié.",
        about: "Application React combinant prévisions météo en direct et agrégation d'actualités tunisiennes, avec détection de localisation intelligente à trois niveaux — aucune clé API requise.",
        li1: "Prévisions sur 7 jours + indice de qualité de l'air via Open-Meteo · mise en cache côté serveur",
        li2: "Localisation intelligente : géolocalisation navigateur → repli par IP → Tunis par défaut",
        li3: "Agrège 8 flux RSS tunisiens (Mosaïque FM, Kapitalis…) avec filtrage par ville",
      },
      proj9: {
        subtitle: "Site bilingue FR/AR pour un centre de soutien scolaire tunisien — annuaire des enseignants, matières et préparation au Bac avec réservation WhatsApp.",
        about: "Site vitrine bilingue français/arabe pour un centre de soutien scolaire privé tunisien, construit avec Next.js 14 App Router et animé avec Framer Motion.",
        li1: "Présente 10 enseignants couvrant le primaire, le collège et la préparation au Bac",
        li2: "Inscription intégrée à WhatsApp et communication en temps réel avec les parents",
        li3: "Localisation intégrée via Google Maps · mise en page Tailwind entièrement responsive",
      },
      proj10: {
        subtitle: "Landing page de salon de beauté de luxe pour un spa parisien — services, tarifs, galerie avant/après et forfaits d'abonnement.",
        about: "Landing page prête pour la production pour un centre de beauté et d'esthétique parisien, construite avec Next.js 14, Tailwind CSS et des animations Framer Motion.",
        li1: "Six catégories de services avec tarification transparente et trois formules d'abonnement",
        li2: "Galerie avant/après et témoignages clients pour renforcer la confiance",
        li3: "Réservation via WhatsApp · bilingue français/arabe · conception mobile-first",
      },
      proj11: {
        subtitle: "Site d'un restaurant tunisien authentique avec menu, galerie et réservations WhatsApp, célébrant des recettes familiales depuis 2004.",
        about: "Site vitrine pour un restaurant tunisien traditionnel, présentant son menu et son histoire familiale avec un design chaleureux centré sur la gastronomie.",
        li1: "Menu complet avec tarifs en dinars pour les entrées, plats, desserts et boissons",
        li2: "Galerie photo et témoignages clients mettant en avant les plats signature",
        li3: "Réservations de table via WhatsApp · navigation trilingue FR/EN/AR",
      },
      proj12: {
        subtitle: "Caméra de sécurité PWA axée sur la confidentialité, avec détection d'objets par IA embarquée, filtres vision nocturne et historique d'alertes local.",
        about: "Progressive Web App installable qui transforme n'importe quel téléphone ou ordinateur portable en caméra de sécurité intelligente détectant les mouvements — la détection et l'IA s'exécutent entièrement sur l'appareil, rien ne quitte le navigateur.",
        li1: "Détection de mouvement en temps réel (~15 im/s) avec classification d'objets embarquée via TensorFlow.js + COCO-SSD",
        li2: "Cinq modes de filtre vision nocturne — Auto, Crépuscule, Nuit, Militaire, Thermique — avec commutation selon la luminosité",
        li3: "Captures instantanées et clips vidéo de ~4s, historique d'alertes consultable via IndexedDB, alertes email optionnelles via Web3Forms",
        li4: "PWA installable et offline-first · React 19 + Vite + Tailwind CSS v4",
      },
      proj13: {
        subtitle: "Bot Discord tout-en-un avec modération, économie, niveaux et musique — construit sur discord.js v14 avec des files d'attente persistantes.",
        about: "Bot Discord complet construit avec discord.js v14 — modération, économie, niveaux, jeux et musique réunis en un seul package, sans base de données externe.",
        li1: "Suite de modération — bannir, expulser, timeout, muet, avertir, suppression en masse — avec journal des dossiers numérotés",
        li2: "XP et niveaux avec annonces de montée de niveau, économie de pièces, récompenses quotidiennes et badges à débloquer",
        li3: "Lecture de musique YouTube via yt-dlp + ffmpeg avec des files d'attente persistantes entre les redémarrages",
        li4: "Quiz, pierre-papier-ciseaux, machines à sous, memes et vannes · persistance basée sur JSON",
      },
      proj14: {
        subtitle: "Bot Telegram IA qui résume des vidéos YouTube, PDF, documents Word, articles et messages vocaux grâce à Google Gemini.",
        about: "Bot Telegram construit avec Telegraf et Google Gemini, qui détecte automatiquement le type de contenu et répond avec des résumés structurés dans la langue source.",
        li1: "Résume les transcriptions YouTube, PDF, documents Word, articles web, messages vocaux et texte brut",
        li2: "Boutons interactifs pour régénérer, condenser, traduire, poser des questions de suivi et exporter",
        li3: "Traduit en 8 langues · support des groupes via /resume · clé Gemini personnelle via /setkey",
        li4: "Résultats mis en cache sur disque pour des répétitions instantanées · nouvelle tentative automatique avec repli de modèle en cas de quota atteint",
      },
      proj15: {
        subtitle: "Plateforme de covoiturage inter-villes sécurisée avec chat en temps réel, RBAC, données chiffrées et interface bilingue FR/AR.",
        about: "Plateforme de covoiturage inter-villes full-stack pour la Tunisie — authentification JWT RS256, contrôle d'accès par rôles, notifications en temps réel et tolérance zéro pour les failles de sécurité avec couverture OWASP complète.",
        li1: "JWT RS256 + rotation des refresh tokens · verrouillage du compte après 5 tentatives échouées · cookies httpOnly",
        li2: "Chat en temps réel Socket.IO avec limitation de débit par utilisateur · file Bull pour les notifications de réservation et de départ",
        li3: "Numéros de téléphone chiffrés en AES-256-GCM · géolocalisation relayée côté serveur · 58 tests Jest + Supertest",
        li4: "Docker Compose · CI GitHub Actions · déploiement cible sur Azure · bilingue FR/AR avec RTL",
      },
      proj16: {
        subtitle: "Pipeline de livraison GitOps complet sur Kubernetes avec auto-synchronisation ArgoCD, overlays Kustomize et CI/CD GitHub Actions.",
        about: "Pipeline de livraison GitOps de bout en bout pour une application full-stack sur Kubernetes — ArgoCD surveille Git, synchronise automatiquement, nettoie et auto-répare le cluster sans intervention manuelle.",
        li1: "Synchronisation, nettoyage et auto-réparation automatisés par ArgoCD · build, push et mise à jour des manifestes via GitHub Actions",
        li2: "Base Kustomize + overlays dev/prod · proxy inverse Nginx pour le SPA + l'API",
        li3: "Docker Compose pour le développement local · Dockerfiles multi-étapes pour le frontend et le backend",
        li4: "API Express avec authentification JWT, vérification d'email et persistance MongoDB",
      },
      proj17: {
        subtitle: "Workflow n8n qui transmet les événements webhook GitHub sous forme de notifications Discord enrichies — événements push et PR en temps réel.",
        about: "Workflow n8n prêt pour la production reliant GitHub et Discord via un traitement automatisé des webhooks — les événements push et pull request sont analysés puis publiés sous forme de notifications enrichies et codées par couleur.",
        li1: "Un filtre d'événements élimine le bruit non-push/PR — seuls les événements pertinents atteignent Discord",
        li2: "Couleurs dynamiques des notifications : vert (ouvert), rouge (fermé), violet (fusionné), jaune (synchronisé)",
        li3: "Configuration du webhook Discord via variables d'environnement — aucun secret codé en dur",
        li4: "Importez le JSON du workflow, configurez deux webhooks, activez — terminé en 5 minutes",
      },
      proj18: {
        subtitle: "Chatbot propulsé par l'IA avec n8n + Google Gemini 2.5 Flash — interface glassmorphism, effet machine à écrire, historique des messages et gestion des limites de débit.",
        about: "Interface de chatbot IA construite en HTML/CSS/JS pur, connectée à un backend n8n dockerisé orchestrant les appels à l'API Google Gemini 2.5 Flash via un tunnel ngrok — sans framework, sans étape de build, juste du code frontend propre.",
        li1: "Interface glassmorphism avec orbes de dégradé animés et design en verre dépoli",
        li2: "Effet machine à écrire pour les réponses du bot · historique des messages persisté dans localStorage (5 derniers)",
        li3: "Gestion des limites de débit avec nouvelle tentative automatique jusqu'à 3 fois et backoff exponentiel",
        li4: "Workflow n8n à 4 nœuds : Webhook → Requête HTTP (Gemini) → Code (extraction) → Réponse",
      },
      proj19: {
        subtitle: "Application de chat RAG (Retrieval-Augmented Generation) entièrement locale avec une interface façon ChatGPT. Utilise Ollama — aucune clé API nécessaire, s'exécute entièrement via Docker Compose.",
        about: "Application de chat RAG (Retrieval-Augmented Generation) entièrement locale et gratuite, avec une interface façon ChatGPT, fonctionnant sur Ollama et Docker Compose — aucune clé OpenAI nécessaire, tout tourne sur votre machine.",
        li1: "Téléversement de documents (PDF, DOCX, TXT, CSV, HTML, MD) — pipeline de découpage, embedding, stockage, recherche et réponse",
        li2: "Historique des conversations avec titrage automatique, recherche et suppression — téléversement asynchrone avec ingestion en arrière-plan",
        li3: "6 services Docker : API Node.js, SPA React (Nginx), MongoDB, ChromaDB, Redis, Ollama",
      },
      proj20: {
        subtitle: "Automatisation du traitement des commandes avec n8n, Express.js et Supabase PostgreSQL. Une fine couche API route les commandes vers n8n où réside toute la logique métier.",
        about: "Pipeline de traitement des commandes full-stack où Express gère l'authentification et le routage tandis que n8n prend en charge toute la logique métier — validation des stocks, inventaire, facturation, tâches d'entrepôt et notifications via un workflow linéaire avec embranchements conditionnels.",
        li1: "Fine couche API Express — authentifie les utilisateurs et route les commandes vers le webhook n8n",
        li2: "Workflow n8n : valide les données, vérifie le stock, réserve l'inventaire, génère les factures, crée les tâches d'entrepôt et envoie les notifications",
        li3: "Docker Compose pour le développement local — Supabase PostgreSQL pour la persistance à travers tous les services",
      },
      proj21: {
        subtitle: "Plateforme SaaS multi-tenant de gestion de stock et facturation pour PME tunisiennes, avec un pipeline GitHub Actions → n8n → Kubernetes qui déploie automatiquement à chaque push sur main.",
        about: "Plateforme SaaS full-stack de gestion de stock et facturation remplaçant Excel pour les PME tunisiennes de la distribution, du commerce de détail et de la petite industrie — gestion native de la TVA à plusieurs taux, portée par un pipeline CI/CD automatisé façon GitOps vers Kubernetes.",
        li1: "Architecture multi-tenant — chaque requête backend filtrée par enterpriseId, avec des tests dédiés prouvant l'isolation des données entre entreprises",
        li2: "Gestion native de la TVA tunisienne (19 %/13 %/7 %) et du timbre fiscal · factures PDF générées via Puppeteer · workflow brouillon → envoyée → payée",
        li3: "GitHub Actions build et pousse les images Docker vers GHCR à chaque push sur main, puis appelle un webhook n8n qui exécute kubectl set image + rollout status sur un déploiement Kubernetes à 2 réplicas",
        li4: "52 tests Jest/Supertest côté backend + tests Vitest côté frontend · authentification à débit limité · overlays Kustomize pour staging/production",
      },
    },
  };

  function lookup(lang, key) {
    const parts = key.split('.');
    let node = translations[lang];
    for (let i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      // try the remaining path as a single flat key first (handles keys like "edu1.title")
      const rest = parts.slice(i).join('.');
      if (Object.prototype.hasOwnProperty.call(node, rest)) return node[rest];
      node = node[parts[i]];
    }
    return node;
  }

  function t(key, lang) {
    const value = lookup(lang, key);
    if (value !== undefined) return value;
    const fallback = lookup('en', key);
    return fallback !== undefined ? fallback : null;
  }

  let currentLang = 'en';

  function applyLanguage(lang) {
    if (lang !== 'en' && lang !== 'fr') lang = 'en';
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = t(key, lang);
      if (value == null) return;

      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value);
      } else if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    document.querySelectorAll('[data-lang-label-mobile]').forEach((el) => {
      el.textContent = lang === 'en' ? 'FR' : 'EN';
    });

    try { localStorage.setItem('lang', lang); } catch (e) { /* ignore (private browsing) */ }

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function detectInitialLang() {
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'en' || stored === 'fr') return stored;
    } catch (e) { /* ignore */ }
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.indexOf('fr') === 0 ? 'fr' : 'en';
  }

  applyLanguage(detectInitialLang());

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang-btn')));
  });

  document.querySelectorAll('[data-lang-btn-mobile]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(currentLang === 'en' ? 'fr' : 'en'));
  });

  window.i18n = {
    t: (key) => t(key, currentLang),
    getLang: () => currentLang,
    setLang: applyLanguage,
    roles: () => (translations[currentLang] && translations[currentLang].hero.roles) || translations.en.hero.roles,
  };
})();
