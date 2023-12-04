import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    php,
    rbootstrap,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    Membership,
     rdesign,
     upwork,
    tripguide,
    threejs,
    github,
    zakati,
    MoyenCalc,
    DigitalAgency,
    weather,

    // todo,
    play5,
    // hotelR,
    // FootBloger,
    // Ecomerce
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },

    {
      title: "ui ux designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name:"rbootstrap",
      icon:rbootstrap,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "meta",
      icon: meta,
      iconBg: "#383E56",
      date: " 2019 - Jan 2021",
      points: [
        "Developing and maintaining web applications using php laravel html css js jquery  and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },  {
      title: "React.js Developer",
      company_name: "Github",
      icon: github,
      iconBg: "#383E56",
      date: "March 2021 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "R-design",
      icon: rdesign,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React native and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  
    {
      title: "Full stack Developer",
      company_name: "upwork",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Developing and maintaining web applications using Mern Stack and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "membership",
      description:
        // "Web-based platform which use for access of members we can used in any big company or university  ...etc",
        "Web-based platform which use for access of members we can used in any big company or university  ...etc",

        tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Membership,
      source_code_link: "https://github.com/",
      weburl:"",
    },
    {
      name: "e-commerce",
      description:
        "Web application that enables users to bue products online with dashboard of admin.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      weburl:"",

    },
    {
      name: "zakati",
      description:
        "for calculate zakat  .",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "jquery",
          color: "pink-text-gradient",
        },
      ],
      image: zakati,
      source_code_link: "https://github.com/raidMl/zakat-site",
      weburl:"https://raidml.github.io/zakat-site/",

    },
    {
      name: "play5 UI",
      description:
        "playstation 5 user interface .",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: play5,
      source_code_link: "https://github.com/raidMl/Playstation5-ui",
      weburl:"",

    },
    {
      name: "Digital Agency",
      description:
        "website for agency services .",
      tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: DigitalAgency,
      source_code_link: "https://github.com/raidMl/raid_dev",
      weburl:"https://raidml.github.io/raid_dev/",

    },
    {
      name: "Ess",
      description:
        "football website  .",
      tags: [
        {
          name: "Php",
          color: "blue-text-gradient",
        },
        {
          name: "jquery",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      weburl:"",

    },
    {
      name: "Weather PWA",
      description:
        "progresive web app   .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/raidMl/weather-pwa-app",
      weburl:"https://weather-app-news.netlify.app/",

    },
    {
      name: "Hotels",
      description:
        "desktop app for hotels  .",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tkinter",
          color: "green-text-gradient",
        },
        {
          name: "sql-lite",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      weburl:"",

    },
    {
      name: "Moyen calculator",
      description:
        "web app for calculate moyen  .",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: MoyenCalc,
      source_code_link: "https://github.com/",
      weburl:"",

    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  