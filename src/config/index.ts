import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Gospel Chinyereugo - Senior Software Engineer",
  author: "Gospel Chinyereugo",
  description:
    "Senior Software Engineer specializing in building exceptional digital experiences. Expert in React, TypeScript, and Mobile Development.",
  lang: "en",
  siteLogo: "/gospel.png",
  navLinks: [
    { text: "Experience", href: "/#experience" },
    { text: "Projects", href: "/projects" },
    { text: "Blog", href: "/blog" },
    { text: "About", href: "/#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/gospel-chinyereugo/" },
    { text: "Github", href: "https://github.com/Ebugo" },
    { text: "Twitter", href: "https://twitter.com/Codebug_" },
    { text: "Blog", href: "https://blog.ebugo.me/" },
    { text: "Email", href: "mailto:gospelokpara@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://ebugo.me",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Gospel Chinyereugo",
    specialty: "Senior Software Engineer",
    summary:
      "I build accessible, pixel-perfect, performant, and innovative web and mobile experiences.",
    email: "gospelokpara@gmail.com",
  },
  experience: [
    {
      company: "ALAT by Wema",
      position: "Web Engineering Team Lead",
      startDate: "Nov 2023",
      endDate: "Present",
      summary: [
        "Provide strategic direction and technical expertise to the web team in implementing modern frontend technologies, including React/Next.js/Vite and TypeScript.",
        "Foster seamless collaboration between cross-functional teams, including UI/UX designers and backend developers, to ensure a unified approach to project delivery.",
        "Successfully lead and deliver multiple projects, ensuring adherence to timelines, quality standards, and business requirements.",
        "Conduct thorough code reviews to maintain code quality and mentor team members, fostering a culture of continuous learning and skill development.",
      ],
    },
    {
      company: "Nkọwa okwu",
      position: "Open Source Developer",
      startDate: "Jan 2021",
      endDate: "Present",
      summary: [
        "Contributing to open source projects focused on Igbo language learning and preservation.",
        "Collaborating with a global team of developers to build and maintain the platform.",
      ],
    },
    {
      company: "Stanbic IBTC",
      position: "Software Engineer",
      startDate: "Aug 2022",
      endDate: "Nov 2023",
      summary: [
        "Spearheaded the revamp of an internally used bank teller and approval application, improving the user experience and increasing performance by 10x.",
        "Developed and maintained the bank's online banking platform and internal applications in collaboration with a team of engineers.",
        "Wrote and reviewed code to ensure high-quality standards and tested software to meet performance, reliability, and security requirements.",
      ],
    },
    {
      company: "Manifest and Company Inc",
      position: "Junior Developer",
      startDate: "Jan 2020",
      endDate: "Jan 2021",
      summary: [
        "Resolved architectural inaccuracies in existing web applications, achieving a 150% decrease in app load time.",
        "Organised and led internal workshops to teach 5 interns and a co-worker how to use the company’s multi-tenant services API.",
      ],
    },
    {
      company: "Oluaka Institute",
      position: "Software Developer",
      startDate: "Jul 2019",
      endDate: "Jan 2020",
      summary: [
        "Worked with a team of software developers to build projects, ensuring best practices in code and architecture.",
      ],
    },
    {
      company: "Self employed",
      position: "Independent Entrepreneur",
      startDate: "Aug 2015",
      endDate: "Jan 2017",
      summary: "Worked on various freelance projects and personal ventures.",
    },
  ],
  projects: [
    {
      name: "Blockchain Hub Africa",
      summary: "A hub for blockchain enthusiasts in Africa.",
      linkPreview: "https://blockchainhub.africa/",
      linkSource: "#",
      image: "/projects/blockchain-hub.png",
    },
    {
      name: "Nkowa Okwu",
      summary: "Igbo language learning platform.",
      linkPreview: "https://nkowaokwu.com/",
      linkSource: "#",
      image: "/projects/nkowa-okwu.png",
    },
    {
      name: "Outpost Health",
      summary: "Digital health platform.",
      linkPreview: "https://outpost.health/",
      linkSource: "#",
      image: "/projects/outpost-health.png",
    },
    {
      name: "CareFund",
      summary: "Healthcare funding platform.",
      linkPreview: "https://carefund.neo.health/",
      linkSource: "#",
      image: "/projects/carefund.png",
    },
    {
      name: "CareSpaces",
      summary: "Healthcare spaces management.",
      linkPreview: "https://carespaces.neo.health/",
      linkSource: "#",
      image: "/projects/carespaces.png",
    },
    {
      name: "Sifuse",
      summary: "Sifuse platform.",
      linkPreview: "https://www.sifuse.com/",
      linkSource: "#",
      image: "/projects/sifuse.png",
    },
    {
      name: "Keeway",
      summary: "Keeway platform.",
      linkPreview: "https://keeway.io/",
      linkSource: "#",
      image: "/placeholder-project.jpg",
    },
    {
      name: "Nuthoop",
      summary: "Nuthoop platform.",
      linkPreview: "https://nuthoop.com/",
      linkSource: "#",
      image: "/placeholder-project.jpg",
    },
    {
      name: "Scoutballers",
      summary: "Scouting platform for footballers.",
      linkPreview: "https://www.scoutballers.com/",
      linkSource: "#",
      image: "/placeholder-project.jpg",
    },
    {
      name: "TryRicive",
      summary: "Ricive platform.",
      linkPreview: "https://www.tryricive.com/",
      linkSource: "#",
      image: "/placeholder-project.jpg",
    },
    {
      name: "KoboBid",
      summary: "Bidding platform.",
      linkPreview: "https://kobobid.com/",
      linkSource: "#",
      image: "/placeholder-project.jpg",
    },
    {
      name: "NFT Africa",
      summary: "NFT marketplace for Africa.",
      linkPreview: "https://nftafrica.vercel.app/",
      linkSource: "#",
      image: "/placeholder-project.jpg",
    },
  ],
  blog: [
    {
      title: "Forms that Work for Everyone (Screen Readers, Labels, Errors)",
      summary: "TLDR; If you're building for the web and your forms don't work for everyone, they simply do not work...",
      date: "Nov 2023",
      link: "https://blog.ebugo.me/forms-that-work-for-everyone-screen-readers-labels-errors",
      image: "/placeholder-blog.jpg",
    },
    {
      title: "Enhancing Accessibility: Why Focus Outlines Matter",
      summary: "Focus outlines are essential for keyboard navigation and accessibility. Learn why you shouldn't remove them.",
      date: "Oct 2023",
      link: "https://blog.ebugo.me/enhancing-accessibility-why-focus-outlines-matter",
      image: "/placeholder-blog.jpg",
    },
    {
      title: "How to Run pip with Python 3 on Mac OS",
      summary: "A quick guide on setting up pip with Python 3 on macOS to avoid version conflicts.",
      date: "Sep 2023",
      link: "https://blog.ebugo.me/how-to-run-pip-with-python-3-on-mac-os",
      image: "/placeholder-blog.jpg",
    },
    {
      title: "Blockchain for noobs: part 2",
      summary: "Continuing the journey into blockchain technology, explaining consensus mechanisms and smart contracts.",
      date: "Aug 2023",
      link: "https://blog.ebugo.me/blockchain-for-noobs-part-2",
      image: "/placeholder-blog.jpg",
    },
    {
      title: "Blockchain for noobs: part 1",
      summary: "An introduction to blockchain technology, explaining the basic concepts of blocks, chains, and decentralization.",
      date: "Jul 2023",
      link: "https://blog.ebugo.me/blockchain-for-noobs-part-1",
      image: "/placeholder-blog.jpg",
    },
    {
      title: "Generating HMAC using crypto sha512 hashing",
      summary: "A technical tutorial on generating HMAC signatures using SHA-512 for secure API authentication.",
      date: "Jun 2023",
      link: "https://blog.ebugo.me/generating-hmac-using-crypto-sha512-hashing",
      image: "/placeholder-blog.jpg",
    },
  ],
  about: {
    description: `
      Hi, I am a mission-driven Software Engineer with over half a decade of experience building high-performance, user-centric web applications and APIs across banking/fintech, health-tech, e-commerce, edutech, agrotech, and CRM. 

      Currently, I lead the web engineering team at ALAT by Wema Bank and serve as Lead Organizer for Google Developer Groups Owerri, growing the community from 0 to 2,000+ members. 

      Passionate about leveraging modern technologies, I combine technical expertise with leadership to deliver accessible, impactful solutions while inspiring others. 

      My goal is to continue driving innovation and making a meaningful impact in the global technology ecosystem.
    `,
    image: "/gospel.png",
  },
  community: {
    talks: [
      {
        title: "Accessible by Default at GDG Onitsha",
        event: "DevFest Onitsha 2025",
        date: "Nov 2025",
        type: "Talk",
        link: "https://gdg.community.dev/events/details/google-gdg-onitsha-presents-devfest-onitsha-2025/",
      },
      {
        title: "Create a Generative Chat App with Vertex AI Conversation at GDG Owerri",
        event: "Build with AI Owerri",
        date: "Nov 2025",
        type: "Workshop",
        link: "https://gdg.community.dev/events/details/google-gdg-owerri-presents-build-with-ai-owerri",
      },
      {
        title: "Generative AI with Google Cloud (an overview)",
        event: "",
        date: "",
        type: "Talk",
        link: "#",
      },
      {
        title: "Google crowdsource",
        event: "DevFest Owerri 2023",
        date: "Nov 2023",
        type: "Talk",
        link: "https://gdg.community.dev/events/details/google-gdg-owerri-presents-devfest-owerri-2023",
      },
      {
        title: "Navigating the Mobile Development Space - My Journey",
        event: "Meet and Greet Navigating the Tech Space as a Newbie",
        date: "Nov 2025",
        type: "AMA",
        link: "https://gdg.community.dev/events/details/google-gdg-owerri-presents-meet-and-greet-navigating-the-tech-space-as-a-newbie",
      },
    ],
    engagements: [
      {
        title: "Community Lead",
        organization: "Google Developer Groups Owerri",
        date: "2020 - Present",
        description: "I lead a community of technology enthusiasts, organizing meetups, hackathons, and conferences. Grew the community, together with my team, by over 2000% (and counting) through strategic engagement and follow-up initiatives.",
      },
      {
        title: "Crowdsource Influencer",
        organization: "Google Crowdsource",
        date: "2022 - Present",
        description: "I am a crowdsource influencer for Google Crowdsource, where I help to grow the platform by engaging with users and providing feedback.",
      },
    ],
  },
};
