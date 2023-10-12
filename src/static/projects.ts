const projects: PortfolioProject[] = [
  {
    id: 'getlinked',
    title: 'UI design / development',
    description:
      'I recently partook in a frontend challenge on Twitter sponsored by getlinked.ai. The challenge involved replicating a Figma design to be pixel perfect and adding a touch of creativity. I also integrated a REST API for user registration.',
    github: 'https://github.com/Quodline/get_linked',
    link: 'https://get-lnked-contest.vercel.app/',
    techStack: {
      frameworks: [
        ['React', '18'],
        ['Tailwind', '3'],
      ],
      languages: ['HTML', 'CSS', 'TypeScript'],
      others: ['React Router'],
    },
  },
  {
    id: 'finwallet',
    title: 'Payment and finances',
    description:
      'Finance app with key features like send money, view transaction history, generate statements, and two factor authentication. It is designed with important fintech conventions in mind. Security and accessibility was prioritized in the development of this project.',
    github: 'https://github.com/Quodline/finwallet',
    link: 'https://drive.google.com/file/d/1rXQZnSn5oAIXlSi1BoESUv1vezRYTaOz/view?usp=sharing',
    techStack: {
      frameworks: [
        ['Laravel', '10'],
        ['React', '18'],
        ['Tailwind', '3'],
      ],
      languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      others: [
        'Docker',
        'MySQL',
        'Paystack API',
        'DomPDF',
        'Breeze',
        'Inertia',
        'Sail',
      ],
    },
  },
  {
    id: 'trivox',
    title: 'Sales - eCommerce',
    description:
      'An online marketplace for used vehicles with features like payment integration, two factor authentication, automated chat system, advanced tracking system and more.',
    github: '#',
    link: 'https://trivox.se',
    techStack: {
      frameworks: [
        ['Laravel', '10'],
        ['React', '18'],
        ['jQuery', '3.7'],
        ['Bootstrap', '4'],
        ['React Native(Expo)', '47'],
      ],
      languages: ['HTML', 'CSS', 'JavaScript', 'PHP', 'TypeScript', 'SQL'],
      others: ['Docker', 'MySQL', 'AWS', 'Expo', 'Sail'],
    },
  },
  {
    id: 'quod-gist',
    title: 'Chat',
    description:
      'Chat platform with key features like group chats, real time messaging, markdown support, code highlight, avatars and so on. Users can turn on two-factor authentication to protect their accounts.',
    github: 'https://github.com/Quodline/quod-gist',
    link: 'https://drive.google.com/file/d/1HrmEA1jyrObe1m8Kv2JmMEm-TiMlQrHi/view?usp=sharing',
    techStack: {
      frameworks: [
        ['Laravel', '8'],
        ['Vue', '2'],
        ['Tailwind', '3'],
      ],
      languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      others: [
        'Docker',
        'MySQL',
        'Tailwind UI',
        'Pusher',
        'Livewire',
        'Sail',
        'Vuex',
        'Echo',
        'Marked',
      ],
    },
  },
  {
    id: 'wave-music',
    title: 'Music streaming',
    description:
      'Music streaming website with key features like music upload, playlist creation and organization, persistence of music across different pages in the site and many amazing features. Uploaded music is safely stored in a cloud provider.',
    github: 'https://github.com/Quodline/wave-music',
    link: 'https://drive.google.com/file/d/1hfq0Ic0pTXHdi7V4bJX_TlKGYGrT51Tx/view?usp=sharing',
    techStack: {
      frameworks: [
        ['Laravel', '9'],
        ['Vue', '3'],
        ['Tailwind', '3'],
      ],
      languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      others: ['MySQL', 'Pinia', 'Cloudinary SDK', 'Inertia'],
    },
  },
  {
    id: 'scribe',
    title: 'Blogging REST API',
    description:
      'REST API secured with session based authentication. It follows standard conventions for designing RESTful web services. It is fast, reliable and secure and it is properly documented for Postman.',
    github: 'https://github.com/Quodline/scribe-server',
    link: '#',
    techStack: {
      frameworks: [['Laravel', '10']],
      languages: ['PHP'],
      others: ['Docker', 'MySQL', 'Sanctum', 'Faker', 'OpenAPI'],
    },
  },
];

export default projects;
