export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Certification & Licences", link: "#certification" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications & locations",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a SaaS AI Project",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Decentralized Storage System Using Blockchain",
    des: "Decentralized Storage System (DSS) using Blockchain A cutting-edge Decentralized Storage System (DSS) that leverages blockchain technology to provide secure, transparent, and tamper-proof storage solutions. This system allows users to store and manage their data across a decentralized network of nodes, ensuring data integrity, privacy, and control.",
    img: "/Decentralized.jpg",
    iconLists: ["/IPFS1.png", "/IPFS2.png", "/DC.png", "/three.svg", "/fm.svg"],
    link: "https://github.com/shubhraj-singh/BlockMusk",
  },
  {
    id: 2,
    title: "OP-Tron: E-Commerce Web Application",
    des: "OP-Tron is a full-featured, modern e-commerce platform designed to deliver a seamless shopping experience. Built with scalability, performance, and usability in mind, OP-Tron includes everything from user authentication to product management and secure payment integration.",
    img: "/Optron.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/shubhraj-singh/OP-Tron",
  },
  {
    id: 3,
    title: "PODCASTR: AI-POWERED PODCAST SAAS PLATFORM",
    des: "PodcastR is a smart platform that automates the creation of podcasts using cutting-edge AI technologies. It allows users to generate full podcast episodes from custom text prompts or topics by combining natural language generation, voice synthesis, and audio processing.",
    img: "/podcastr.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/shubhraj-singh/PodcastR",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/shubhraj-singh/Iphone-3D-Website",
  },
];

export const achievements = [
  {
    quote:
      "Consistently practiced and solved over 300 algorithm and data structure problems on LeetCode, covering topics such as arrays, strings, linked lists, trees, dynamic programming, backtracking, and graph algorithms. This achievement reflects strong problem-solving skills, algorithmic thinking, and preparation for technical interviews.",
    name: "LeetCode",
    title: "Solved 300+ questions",
    logo: "/leetcode.png",
  },
  {
    quote:
      "500+ problems solved, 50+ contests participated ranked in top 10% in recent Codeforces and CodeChef contests. Specialized in algorithms: Dynamic Programming, Graph Theory, and Segment Trees.",
    name: "Codeforces",
    title: "Expert (Rating: 1650)",
    logo: "/codeforces.png",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const certification = [
  {
    id: 1,
    title: "Issued by HackerRank - Java(Basics)",
    desc: "Certified through a timed, hands-on coding assessment focused on real-world programming scenarios.",
    className: "md:col-span-2",
    thumbnail: "/cert1.svg",
  },
  {
    id: 2,
    title: "Issued by HackerRank - Software Engineer",
    desc: "Achieved certification in Software Engineering through HackerRank, demonstrating strong proficiency in core programming concepts, data structures, algorithms, and problem-solving.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/cert1.svg",
  },
  {
    id: 3,
    title: "Issued by HP LIFE - Data Science & Analytics",
    desc: "Completed HP LIFE's Data Science & Analytics course, gaining foundational knowledge in data science tools, methodologies, and real-world business applications.",
    className: "md:col-span-2",
    thumbnail: "/hp.png",
  },
  {
    id: 4,
    title: "Issued by HackerRank - SQL (Advanced) Certificate",
    desc: "Successfully demonstrated advanced-level proficiency in SQL, including complex query writing, multi-table joins, window functions, aggregation, subqueries, and performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/cert1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/shubhraj-singh",

  },
  {
    id: 2,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/shubhraj-singh/",
  },
  {
    id: 3,
    img: "/codeforces.svg",
    link: "https://codeforces.com/profile/Shubh629",
  },
  {
    id: 4,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shubh-raj-singh-687023255/",
  },
];

export const resumePath = "/SHUBH_RESUME.pdf";

export const logos = [
  { name: "Google", src: "/googleicon.svg" },
  { name: "Microsoft", src: "/microsoft.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "Meta", src: "/meta.png" },
  { name: "Netflix", src: "/netflix.png" },
  { name: "Tesla", src: "/tesla.png" },
];