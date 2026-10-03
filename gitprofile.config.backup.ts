// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'D-Samyy', 
  },
  
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
         
        {
          title: 'SIGTI',
          description:
            'C# • WinForms • SQL Server • ADO.NET • Docker • Git',
          imageUrl:
            'https://wallpaperaccess.com/full/6910723.jpg',
          link: '',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },
  social: {
    linkedin: 'Diego Massih',
    x: 'Diegosqla',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'Trollmask',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'Diegosamilmassihramirez@gmail.com',
  },
  resume: {
    fileUrl:
      '/CV_Diego_Massih.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C# ',
    '. NET',
    'SQL Server',
    'Networking',
    'MySQL',
    'HTML',
    'CSS',
    'Docker',
    'Git',
    
  ],
  experiences: [
    {
      company: 'INCOTE',
      position: 'Support Technician',
      from: 'August 2025',
      to: 'February 2026',
      companyLink: 'https://incote.edu.do/',
    },
    {
      company: 'DTS Labs',
      position: 'C# Developer Intern',
      from: 'February 2026',
      to: 'October 2026',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Ethical Hacker',
      body: 'Cisco Network Academy',
      year: 'October 2026',
    },

     {
      name: 'Terminals Security',
      body: 'Cisco Network Academy',
      year: 'August 2026',
    },

     {
      name: 'Basic concepts of Networking',
      body: 'Cisco Network Academy',
      year: 'December 2025',
    },

    {
      name: 'Linux Unhatched',
      body: 'Cisco Network Academy',
      year: 'November 2025',
    },

    {
      name: 'Introduction to Cybersecurity',
      body: 'Cisco Network Academy',
      year: 'October 2025',
    },

    {
      name: 'Linux Unhatched',
      body: 'Cisco Network Academy',
      year: 'November 2025',
    },

  ],
  educations: [
    {
      institution: 'INFOTEP',
      degree: 'Network Technician',
      from: '2026',
      to: '2026',
    },
    {
      institution: 'UCE (Universidad Central del Este)',
      degree: 'Cybersecurity Engineer',
      from: '2025',
      to: 'Current',
    },
  ],
  
  // Display articles from your medium or dev account. (Optional)
  blog: {
   
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
