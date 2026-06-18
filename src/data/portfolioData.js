export const site = {
  name: 'Grace Hechavarria',
  email: 'gracehechavarria@gmail.com',
  location: 'Miami, FL',
  languages: ['English', 'Spanish'],
  github: 'https://github.com/ghechavarria',
  linkedin: 'https://www.linkedin.com/in/grace-hechavarria-a817b2209',
  summary:
    'I build reliable systems, solve technical problems, and bring structure to complex workflows across education, ERP, and development.',
  roles: [
    { text: 'analyst', color: 'violet' },
    { text: 'erp programmer', color: 'rose' },
    { text: 'technical developer', color: 'coral' },
  ],
  stats: [
    { value: '8+', label: 'Years in tech' },
    { value: 'ERP', label: 'Systems & SIS' },
    { value: 'MS', label: 'FIU · 2027' },
  ],
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
    "Hello — I'm Grace, a developer from the Miami area. I'm part of the team that develops, maintains, and troubleshoots Broward College's ERP systems, with a focus on making institutional tools more reliable, secure, and user-friendly.",
    "My background spans computer lab support, WordPress plugin development, augmented reality engineering, and ERP analysis — giving me a practical view of both people and technology. I'm currently pursuing an MS in Information Technology at Florida International University.",
  ],
};

export const skills = {
  languages: ['HTML5', 'CSS', 'JavaScript', 'jQuery', 'SQL', 'PHP', 'Python', 'Java', 'Git'],
  systems: [
    'ERP support',
    'Natural 9.1',
    'Student Information System',
    'WordPress plugins',
    'Microsoft Office',
    'MySQL',
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
    date: '2021 – Present',
    title: 'Analyst, ERP Programmer',
    org: 'Broward College · Davie, FL',
    description:
      'Develops, maintains, and troubleshoots ERP systems supporting academic and administrative operations, with a focus on reliability, security, and smooth campus workflows.',
  },
  {
    date: '2021 – Present',
    title: 'Technical Developer',
    org: 'Broward College · Davie, FL',
    description:
      'Supports the rollout of the new Student Information System, helping translate technical updates into usable tools for staff and students.',
  },
  {
    date: '2019 – 2021',
    title: 'Administrative Specialist, Computer Lab Assistant',
    org: 'Broward College · Davie, FL',
    description:
      'Helped students with coursework, Microsoft Office tools, and programming homework across HTML5, CSS, JavaScript, jQuery, SQL, PHP, Java, and Python.',
  },
  {
    date: '2019 – 2020',
    title: 'Volunteer Software Development Intern',
    org: 'Broward College · Davie, FL',
    description:
      'Planned and developed a WordPress plugin for the CSIT Broward College website and enhanced the Broward College Announcements Plugin.',
  },
  {
    date: '2016 – 2019',
    title: 'Augmented Reality Software Engineer',
    org: '3D HoloGroup · Miami, FL',
    description:
      'Worked on immersive software in Miami, building technical experience beyond education systems and ERP work.',
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

export const projects = [
  {
    tag: 'Technica 2020',
    title: 'BeBrave',
    description:
      'Interactive bullying-awareness scenarios designed for younger students to build a more diverse understanding of bullying and how to counteract it.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Illustrator'],
    tone: 'peach',
  },
  {
    tag: 'Silly Hacks 2020',
    title: 'Mathwae',
    description:
      'Web app designed to prank cheaters who use Mathway.com to find answers to math problems.',
    tech: ['Python', 'Flask', 'JavaScript', 'Kintone'],
    tone: 'yellow',
  },
  {
    tag: 'BC Hackathon 2019',
    title: 'inRecycle',
    description:
      'Mobile app UI that scans water bottles and instructs users which parts are recyclable. UI designer on the team.',
    tech: ['C#', 'Unity', 'Google Vision API'],
    tone: 'gray',
  },
  {
    tag: 'Silly Hacks 2020',
    title: 'Whack-A-Jerge',
    description:
      'Custom Unity take on Whack-A-Mole featuring a Balding Boss, a Karen, a Mosquito, and a surprise character.',
    tech: ['C#', 'Unity', 'Illustrator'],
    tone: 'pink',
  },
];
