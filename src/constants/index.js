import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  ob,
  expo,
  ionic,
  evolutecc,
  victor,
  carlos,
  yasmin,
  luis,
  almacenvictor,
  cartera,
  comercialob,
  resumy,
  fanatik,
  litsight,
  hombit,
  wurth,
  doxa,
  uflou,
  threejs,
  flutter,
  alfred,
  creator,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native and Flutter Developer",
    icon: mobile,
  },
  {
    title: "React & API Integration",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
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
    name: "Ionic",
    icon: ionic,
  },
  {
    name: "Expo",
    icon: expo,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Todo Electrico Victor",
    icon: victor,
    iconBg: "#383E56",
    date: "Dec 2022",
    points: [
      "Collecting resources and ideas for the web design",
      "Designed a fun web using vanilla JavaScript CSS and HTML",
      "Implemented contact links and hosted with free service to appear on google search",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company_name: "Todo Electrico Victor",
    icon: victor,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Rebuilt the original website as a full ecommerce platform for product catalog, cart, and checkout.",
      "Implemented the frontend and architecture using Next.js, Tailwind CSS, Zustand, and PrimeReact.",
      "Integrated Drizzle ORM, Wompi payment gateway, SEO optimization, and Meta Pixel tracking.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Comercializadora OB",
    icon: ob,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Developing and maintaining web application using Next.js and Tailwind.",
      "Implemented MongoDB database for managing the users products and orders keeping the stock updated showing the products available dynamically.",
      "Introduce new process for sending orders through Nodemailer for old and new customers.",
      "Developed logic for optional online payments using local processing platform",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Evolutecc",
    icon: evolutecc,
    iconBg: "#0055a8",
    date: "Jan 2024 - Apr 2025",
    points: [
      "Fanatik: Frontend development of chat, feed, commerce, music platform.",
      "Doxa web: Frontend development ERP system with NextJs.",
      "Litsight: Frontend development of leadership evaluations with NextJs.",
      "Hombit: Frontend development of ecommerce website with React.",
      "Wurth: Frontend development of multi-platform ecommerce using Ionic.",
      "Uflou: Frontend migration from Ionic-Angular to React Native.",
    ],
  },
  {
    title: "Semi-Senior Frontend Developer",
    company_name: "Alfred SAS",
    icon: alfred,
    iconBg: "#1a1a2e",
    date: "Apr 2025 - Present",
    points: [
      "Fleet Management Monorepo: Developed and maintained two B2B platforms (Next.js, Tailwind CSS, HeroUI, Zustand)—fleet management app and internal support tool for Alfred's operations team.",
      "Shop Allies App: Built and maintained web application for Alfred's partner shops (React, CSS, Redux), enabling streamlined workflows for allied merchants.",
      "Drivers App: Contributed to B2B mobile application for drivers (React Native), building key features in the driver-facing experience.",
      "Customers App: Contributed to B2C mobile app for end customers (Flutter), broadening cross-platform development expertise.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Our clients are having a better experience searching and placing new orders with real time count in stock",
    name: "Carlos Robledo",
    designation: "COO",
    company: "Comercializadora OB",
    image: carlos,
  },
  {
    testimonial:
      "Excelent developer who cares about the customer needs, we will work again for future projects",
    name: "Yasmin Peña",
    designation: "CFO",
    company: "Todo Electrico Victor",
    image: yasmin,
  },
  {
    testimonial: "Very proactive developer, always ready to learn new things",
    name: "Luis Reyes",
    designation: "Dev Director",
    company: "Evolutecc",
    image: luis,
  },
];

const projects = [
  {
    name: "Wurth",
    description:
      "Multiplatform app that enables users to search for products, add to cart, place orders and make payments with their credentials. It also includes user dashboard to check order status, statements and modify profile data.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "Capacitor",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wurth,
    source_code_link: "https://github.com/DevEvolutecC/wurth-app",
    source_link: "https://v2.wurth.co/",
  },
  {
    name: "Wholesale Distributor",
    description:
      "Full Stack Ecommerce website that enables customer to search available products, update cart, place orders and make payments with their credentials. It also includes an admin dashboard to manage all the company data.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: comercialob,
    source_code_link: "https://github.com/andres8ab/next-tailwind-ob",
    source_link: "https://next-tailwind-ob.vercel.app/",
  },

  {
    name: "Fanatik",
    description:
      "Full Stack Social Media app that enables users to create accounts, post feed, like, comment and follow their favorite artists. It also includes chat, play music and commerce features.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Context API",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fanatik,
    source_code_link: "https://github.com/FANATIKFANKYDEV/fanatik-fan",
    source_link: "https://fanatik.lat/",
  },
  {
    name: "Uflou",
    description:
      "Mobile app that enables users to create communities to promote sustainable mobility, users can track their trips using google maps, participate in challenges, reach and get rewards. It also renders options to view all the statistics. ",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Reanimated",
        color: "orange-text-gradient",
      },
      {
        name: "Nativewind",
        color: "pink-text-gradient",
      },
    ],
    image: uflou,
    source_code_link: "https://github.com/publibike/uflouReactNativeApp",
    source_link: "https://apps.apple.com/co/app/uflou/id1550087947",
  },
  {
    name: "Hombit",
    description:
      "Ecommerce web app that enables users to create accounts, search for products, add to cart, place orders and make payments with their credentials. It also includes an admin dashboard to manage all the company data.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "orange-text-gradient",
      },
      {
        name: "Ionic",
        color: "pink-text-gradient",
      },
    ],
    image: hombit,
    source_code_link: "https://github.com/hombitdev/hombit-app",
    source_link: "https://www.hombit.co/",
  },
  {
    name: "Doxa",
    description:
      "ERP system that enables users to manage products, orders, thirds, accounts and invoices. It also includes a dashboard to manage user permissions and and can be customized to the company needs.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "prime-react",
        color: "orange-text-gradient",
      },
      {
        name: "Context API",
        color: "pink-text-gradient",
      },
    ],
    image: doxa,
    source_code_link: "https://github.com/doxasistemas/dx-front-web",
    source_link: "http://qa.doxasistemas.com/login",
  },
  {
    name: "Litsight",
    description:
      "Web platform with different types of users to perform leadership evaluations, users can make payments and redeem coupon codes. ideal user type for HR, consulting, and training companies, among others.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "orange-text-gradient",
      },
      {
        name: "React-pdf",
        color: "pink-text-gradient",
      },
    ],
    image: litsight,
    source_code_link: "https://github.com/swebcol/litsight-app",
    source_link: "https://www.litsight.pro/",
  },
  {
    name: "Retail Store",
    description:
      "Full ecommerce platform built with Next.js, Tailwind CSS, Zustand, Drizzle ORM, and PrimeReact, including Wompi payment integration, SEO optimization, and Meta Pixel tracking for marketing analytics.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "Zustand",
        color: "pink-text-gradient",
      },
      {
        name: "Drizzle",
        color: "blue-text-gradient",
      },
      {
        name: "PrimeReact",
        color: "orange-text-gradient",
      },
      {
        name: "Wompi",
        color: "pink-text-gradient",
      },
      {
        name: "Meta Pixel",
        color: "orange-text-gradient",
      },
    ],
    image: almacenvictor,
    source_code_link: "https://github.com/andres8ab/victor-store",
    source_link: "https://todoelectricovictor.com/",
  },
  {
    name: "Collection App",
    description:
      "Billing organization tool built with TanStack Start, Prisma, Tailwind, and Lucide React. Includes Cartera with searchable invoice creation and filters, Liquidaciones by seller with monthly commissions and invoice removal, and Reportes for account statements by client and date range.",
    tags: [
      {
        name: "TanStack Start",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "orange-text-gradient",
      },
      {
        name: "Lucide React",
        color: "pink-text-gradient",
      },
    ],
    image: cartera,
    source_code_link: "https://github.com/andres8ab/collection-app",
    source_link: "https://collection-app-bice.vercel.app/",
  },
  {
    name: "AI Summarizer",
    description:
      "Artificial Intelligence based web app connected through OpenAI API that summarize any article from a Url and outputs a concise summary that can save the last 5 searchs and copy back the links to clipboard when user needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: resumy,
    source_code_link: "https://github.com/andres8ab/ai-resumy",
    source_link: "https://ai-resumy.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
