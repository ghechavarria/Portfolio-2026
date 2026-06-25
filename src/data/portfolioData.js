export const site = {
  name: 'Grace Hechavarria',
  email: 'gracehechavarria@gmail.com',
  location: 'Miami, FL',
  languages: ['English', 'Spanish'],
  github: 'https://github.com/ghechavarria',
  linkedin: 'https://www.linkedin.com/in/grace-hechavarria-a817b2209',
  website: 'https://gracie.cloud',
  profilePhoto: '/assets/profile.jpg',
  profileInitials: 'GH',
  summary:
    'I build reliable systems, solve technical problems, and bring structure to complex workflows across education, support, and software development.',
  summaryMobile:
    'Reliable systems across education, support, and development.',
  roles: [
    { text: 'analyst', color: 'violet' },
    { text: 'erp programmer', color: 'rose' },
    { text: 'technical developer', color: 'coral' },
  ],
  stats: [
    { value: '8+', label: 'Years in tech' },
    { value: 'SIS', label: 'Systems & Support' },
    { value: 'MS', label: 'FIU · 2027' },
  ],
};

export const currently = {
  label: 'Currently',
  title: 'Supporting college systems, staff, and students',
  highlights: [
    'Programmer & analyst collaboration',
    'Student Information System rollout',
    'Student and staff support',
  ],
  stack: ['Natural 9.1', 'SQL', 'JavaScript', 'Python', 'WordPress'],
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const about = {
  label: 'About me',
  heading: 'Improving systems with energy, efficiency, and care.',
  paragraphs: [
    "Hello — I'm Grace, a developer from the Miami area. At Broward College, I work across programming, systems support, and technical development to improve tools used by staff and students.",
    "My background spans computer lab support, WordPress plugin development, augmented reality engineering, SIS rollout work, and ERP programming — giving me a practical view of both people and technology. I'm currently pursuing an MS in Information Technology at Florida International University.",
  ],
};

export const skills = {
  languages: [
    'HTML5',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'PHP',
    'SQL',
    'Kotlin',
    'C',
    'C#',
    'jQuery',
  ],
  frameworks: [
    'React',
    'Vite',
    'Tailwind CSS',
    'Framer Motion',
    'React Router',
    'Leaflet',
    'Flask',
    'Bootstrap',
    'WordPress',
  ],
  systems: [
    'ERP support',
    'Natural 9.1',
    'Ellucian',
    'MySQL',
    'Google Cloud Vision',
  ],
  tools: [
    'Android Studio',
    'Unity',
    'Netlify',
    'GitHub',
    'Git',
    'Microsoft Office',
  ],
  design: [
    'Figma',
    'Adobe Illustrator',
    'Blender',
  ],
  certifications: [
    'CIW JavaScript Specialist',
    'CIW Data Analyst',
    'CIW Database Design Specialist',
    'CIW Web Foundations Associate',
    'CompTIA IT Fundamentals',
    'ICAgile Certified Professional — Agile Product Ownership',
  ],
};

export const experience = [
  {
    date: 'Jul. 2023 – Present',
    title: 'Analyst, ERP Programmer',
    org: 'Broward College · Davie, FL',
    description:
      'Develops, maintains, troubleshoots, and enhances ERP systems supporting academic and administrative operations, while collaborating with programmers and analysts to resolve issues and improve features.',
  },
  {
    date: 'Oct. 2024 – Present',
    title: 'Technical Developer',
    org: 'Broward College · Davie, FL',
    description:
      'Serves in a temporary secondary role supporting the new Student Information System implementation by translating technical updates, documenting changes, and helping staff and students use new SIS tools effectively.',
  },
  {
    date: '2019 – 2021',
    title: 'Administrative Specialist, Computer Lab Assistant',
    org: 'Broward College · Davie, FL',
    description:
      'Assisted students with computer science assignments, Microsoft Office, and programming coursework across HTML5, CSS, JavaScript, jQuery, SQL, PHP, Java, and Python.',
  },
  {
    date: '2019 – 2020',
    title: 'Volunteer Software Development Intern',
    org: 'Broward College · Davie, FL',
    description:
      'Planned and developed a WordPress plugin for the CSIT Broward College website and enhanced announcing plugin for D2L and CSIT web pages.',
  },
  {
    date: '2016 – 2019',
    title: 'Augmented Reality Software Engineer',
    org: '3D HoloGroup · Miami, FL',
    description:
      'Worked on immersive software in Miami, building hands-on experience with interactive technology and application development.',
  },
];

export const leadership = [
  {
    date: '2020 – 2025',
    title: 'Organizer',
    org: 'PlutoHacks · Broward College',
    description:
      'Helped organize Broward College’s annual 24-hour hackathon, supporting logistics, mentorship, and participant experience without serving as host.',
  },
];

export const education = [
  {
    degree: 'MS in Information Technology',
    meta: 'Software Development',
    school: 'Florida International University · Projected 2027',
  },
  {
    degree: 'BAS in Information Technology',
    meta: 'Web Development',
    school: 'Broward College · 2021',
  },
  {
    degree: 'AS in Information Technology',
    meta: 'Data Support',
    school: 'Broward College · 2018',
  },
];

export const websites = [
  {
    title: 'Mooric ERP',
    url: 'https://mooricerp.com',
    screenshot: '/assets/projects/mooric-erp.png',
    description:
      'Business ERP platform website focused on clear product messaging and a polished client-facing experience.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Power UP Personnel',
    url: 'https://poweruppersonnel.com',
    screenshot: '/assets/projects/powerup-personnel.png',
    description:
      'Staffing and recruiting site built to present services clearly and support lead generation for the business.',
    tech: ['React', 'TypeScript', 'Vite', 'React Router', 'Leaflet'],
  },
];

export const projects = [
  {
    tag: 'ShellHacks 2023',
    title: 'Themis',
    description:
      'Phishing defense tool that detects AI-generated text, logos, and suspicious email language to help users spot deceptive messages.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Google Cloud Vision'],
    tone: 'pink',
    github: 'https://github.com/HandHeart/ThemisAIWatch',
    devpost: 'https://devpost.com/software/best-overall',
    url: 'https://themis-vision.netlify.app',
    winner: true,
  },
  {
    tag: 'ShellHacks 2021',
    title: 'Local Coin',
    description:
      'Mobile app that helps newcomers understand, manage, and track cryptocurrency portfolios in one place.',
    tech: ['Kotlin', 'Android Studio', 'Coin Routes API', 'Figma'],
    tone: 'gray',
    github: 'https://github.com/Ecnavda/localcoin',
    devpost: 'https://devpost.com/software/local-coin',
  },
  // {
  //   tag: 'BrickHack 7',
  //   title: 'Theft Me',
  //   description:
  //     'Identity-theft game where players impersonate someone based on wallet contents, belongings, and workplace conversations.',
  //   tech: ['Unity', 'C#', 'SteamVR', 'Photoshop', 'Blender'],
  //   tone: 'gray',
  //   devpost: 'https://devpost.com/software/theft-me',
  // },
  {
    tag: 'Technica 2020',
    title: 'BeBrave',
    description:
      'Interactive bullying-awareness scenarios designed for younger students to build a more diverse understanding of bullying and how to counteract it.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Illustrator'],
    tone: 'peach',
    github: 'https://github.com/ghechavarria/BeBrave',
    url: 'https://bebrave.space/',
    winner: true,
  },
  {
    tag: 'Silly Hacks 2020',
    title: 'Mathwae',
    description:
      'A Mathway.com lookalike web application that returns intentionally incorrect answers, designed to discourage academic dishonesty.',
    tech: ['Python', 'Flask', 'JavaScript', 'Kintone'],
    tone: 'yellow',
    github: 'https://github.com/ghechavarria/mathwae',
    winner: true,
  },
  // {
  //   tag: 'Silly Hacks 2020',
  //   title: 'Whack-a-Jerge',
  //   description:
  //     'Stress-relief whack-a-mole game built in Unity to release bottled-up frustration.',
  //   tech: ['Unity', 'C#'],
  //   tone: 'yellow',
  //   devpost: 'https://devpost.com/software/whackagerge',
  // },
  // {
  //   tag: 'ShellHacks 2020',
  //   title: 'Art Tunes',
  //   description:
  //     'Web app that converts images into sound so blind users can experience art and paintings through audio.',
  //   tech: ['HTML5', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
  //   tone: 'gray',
  //   github: 'https://github.com/mintyrouge/ArtTunes',
  //   url: 'https://arttunes.online/',
  // },
  // {
  //   tag: 'PlutoHacks 2019',
  //   title: 'PlutoHacks 2019',
  //   description:
  //     'Winning hackathon submission; project not listed on Devpost.',
  //   tech: [],
  //   tone: 'gray',
  //   winner: true,
  // },
];
