import cfoImage from "./assets/newCfo.svg";
import chroImage from "./assets/newChro.svg";
import ctoImage from "./assets/newCto.svg";
import cmoImage from "./assets/Faith.svg";
import csoImage from "./assets/newCso.svg";
import cooImage from "./assets/newCoo.svg";
import goOrganic from "./assets/goOrganic.svg";
import GoScale from "./assets/GoScale.svg";
import GoPro from "./assets/GoPro.svg";
export const subCardData = [
  {
    image: goOrganic,
    heading: "Go Organic",
    min: "3",
    price: "600",
    perPrice: "300",
    services: [
      "Basic GTM Strategy",
      "Digital Marketing Campaign Plan ",
      "Bespoke Artwork & Content ",
      "Content Strategy",
      "Digital Marketing Kit",
      "Analytics & Reports",
      "Brand Book",
    ],
  },
  {
    image: GoScale,
    heading: "Go Scale",
    min: "6",
    price: "900",
    addOn: "Everything on Go Organic +",
    perPrice: "500",
    services: [
      "Social Media Paid Ads",
      "Acquisition Strategy ",
      "Sales Lifecycle",
      "Marketing Automation Setup",
      "SEO Audit",
      "Spot Hiring",
    ],
  },
  {
    image: GoPro,
    heading: "Go Pro",
    min: "6",
    price: "1500",
    addOn: "Everything on Go Scale +",
    perPrice: "700",
    services: [
      "Engagement Strategy",
      "Google Ads & SEO",
      "Influencer Partnership",
      "Brand Consulting",
      "Lead (MQL) Management",
      "Virtual Assit & Spot Hiring",
    ],
  },
];
export const cmoSubCardData = [
  {
    image: goOrganic,
    heading: "Go Organic",
    min: "3",
    price: "600",
    perPrice: "300",
    services: [
      "Basic GTM Strategy",
      "Digital Marketing Campaign Plan ",
      "Bespoke Artwork & Content ",
      "Content Strategy",
      "Digital Marketing Kit",
      "Analytics & Reports",
      "Brand Book",
    ],
  },
  {
    image: GoScale,
    heading: "Go Scale",
    min: "6",
    price: "900",
    perPrice: "500",
    addOn: "Everything on Go Organic +",
    services: [
      "Social Media Paid Ads",
      "Acquisition Strategy ",
      "Sales Lifecycle",
      "Marketing Automation Setup",
      "SEO Audit",
      "Spot Hiring",
    ],
  },
  {
    image: GoPro,
    heading: "Go Pro",
    min: "6",
    price: "1500",
    perPrice: "700",
    addOn: "Everything on Go Scale +",
    services: [
      "Engagement Strategy",
      "Google Ads & SEO",
      "Influencer Partnership",
      "Brand Consulting",
      "Lead (MQL) Management",
      "Virtual Assit & Spot Hiring",
    ],
  },
];
export const cfoSubCardData = [
  {
    image: goOrganic,
    heading: "Starter Go",
    min: "3",
    price: "950",
    services: [
      "Bookkeeping(Bi-weekly for business having turnover less than USD 500k)",
      "Financial Consultancy (Upto 4 hours per month)",
      "Monthly Reporting (Balance Sheet, P&L  Account & Cash Flow Statements)",
      "Book-keeping Platform Setup and Automation (excluding Integrations)",
      "Live P&L and Business KPI Dashboard",
    ],
  },
  {
    image: GoScale,
    heading: "Go Scale",
    min: "3",
    price: "1800",
    addOn: "+ Starter Go",
    services: [
      "Bookkeeping (Weekly) 1 Shadow Expert Turnover less than 1 Million",
      "Financial Consultancy (Upto 8 hours per month)",
      "Preparation of FInancials on Monthly Basis",
      "Tax Consultancy (US, India, UK and Middle East)",
      "Zoho and Slack Support Annual Budgeting",
    ],
  },
  {
    image: GoPro,
    heading: "Go Pro",
    min: "6",
    price: "2700",
    addOn: "+ Go Scale",
    services: [
      "Bookkeeping (Daily) 1 Freelancer & 1 Shadow Expert Business less than USD 5 Million",
      "Financial Consultancy (Upto 20 hours per month)",
      "Preparation of FInancials (Monthly Basis)",
      "Tax Consultancy (US, India, UK and Middle East)",
      "Zoho and Slack Support",
      "AR, AP, Cash Management, Process Design, Automation workflow etc",
    ],
  },
];

export const CxoCardData = [
  {
    image: cfoImage,
    title: "CFO",
    widget: (
      <iframe
        width="100%"
        height="750px"
        src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourcfo"
        frameborder="0"
        allowfullscreen=""
      >
        {" "}
      </iframe>
    ),
    description:
      "Secure your financial future with our expert fiscal management.",
  },
  {
    image: cooImage,
    title: "COO",
    widget: (
      <iframe
        width="100%"
        height="750px"
        src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourcfo"
        frameborder="0"
        allowfullscreen=""
      >
        {" "}
      </iframe>
    ),
    description: "Let us handle your project management & operations for you!",
  },
  {
    image: cmoImage,
    title: "CMO",
    widget: (
      <iframe
        width="100%"
        height="750px"
        src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourcmo"
        frameborder="0"
        allowfullscreen=""
      >
        {" "}
      </iframe>
    ),
    description: "Let us handle your marketing and finance your ads for you!",
  },
  {
    image: ctoImage,
    title: "CTO",
    widget: (
      <iframe
        width="100%"
        height="750px"
        src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourcto"
        frameborder="0"
        allowfullscreen=""
      >
        {" "}
      </iframe>
    ),
    description:
      "Innovate fearlessly with our cutting-edge technological solutions.",
  },
  {
    image: chroImage,
    title: "CHRO",
    widget: (
      <iframe
        width="100%"
        height="750px"
        src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourchro"
        frameborder="0"
        allowfullscreen=""
      >
        {" "}
      </iframe>
    ),
    description:
      "Nurture your most valuable asset, your team, with our HR expertise.",
  },
  {
    image: csoImage,
    title: "CSO",
    widget: (
      <iframe
        width="100%"
        height="750px"
        src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourcso"
        frameborder="0"
        allowfullscreen=""
      >
        {" "}
      </iframe>
    ),
    description:
      "Navigate your business journey with our insightful strategy guidance.",
  },
];

export const planCardData = [
  {
    title: "Build a Wordpress Website",
    price: "4500",
    features: [
      "Template Library - ThemeForest",
      "Logo & Brand Book",
      "Website Template & Pages",
      "Chatbot Integration",
    ],
  },
  {
    title: "Woocommerce",
    price: "5500",
    features: [
      "Content Writing & SEO Setup",
      "SMS & Email Integration",
      "Support & Maintenance (30 days)",
    ],
  },
  {
    title: "Shopify",
    price: "6500",
    features: [
      "Template Library - Shopify",
      "Logo & Brand Book",
      "Hosting on Shopify",
    ],
  },
  {
    title: "Shopify",
    price: "6500",
    features: [
      "Template Library - Shopify",
      "Logo & Brand Book",
      "Hosting on Shopify",
    ],
  },
  {
    title: "Shopify",
    price: "6500",
    features: [
      "Template Library - Shopify",
      "Logo & Brand Book",
      "Hosting on Shopify",
    ],
  },
  {
    title: "Shopify",
    price: "6500",
    features: [
      "Template Library - Shopify",
      "Logo & Brand Book",
      "Hosting on Shopify",
    ],
  },
];

export const cmoPlanCardData = [
  {
    title: "Build a Wordpress Website",
    price: "4500",
    features: [
      "Template Library - ThemeForest",
      "Logo & Brand Book",
      "Website Template & Pages",
      "Chatbot Integration",
    ],
  },
  {
    title: "Software Development",
    price: "1000",
    features: [
      "Custom UI & UX",
      "Logo & Brand Book",
      "Website Content & Pages",
      "Chatbot Integration",
    ],
  },
  {
    title: "Build a Marketplace",
    price: "5500",
    features: [
      "Amazon/Flipkart/Alibaba/Walmart Setup (Any 1)",
      "Logo & Brand Book",
      "Catalogue Management",
      "Chatbot Integration",
    ],
  },
  {
    title: "Build an E-commerce store",
    price: "5500",
    features: [
      "Template Library - ThemeForest",
      "Logo & Brand Book",
      "Website Template & Pages",
      "Chatbot Integration",
    ],
  },
  {
    title: "Develop a GTM Strategy",
    price: "600- $1900",
    features: [
      "Market Research",
      "Target Market Evaluation",
      "Communication Strategy",
      "Distribution Strategy",
    ],
  },
  {
    title: "Create a Shopify Store",
    price: "6500",
    features: [
      "Template Library - Shopify",
      "Logo & Brand Book",
      "Website Template & Pages",
      "Chatbot Integration",
    ],
  },
];
export const cfoPlanCardData = [
  {
    title: "Software Development",
    price: "1000",
    features: [
      "Custom UI & UX",
      "Logo & Brand Book",
      "Website Template & Pages",
      "SMS & Email Integration",
    ],
  },
  {
    title: "Martket Ready",
    price: "2100",
    features: [
      "Business Plan",
      "Logo & Brand Book",
      "GTM Strategy",
      "Pitch Deck",
    ],
  },
  {
    title: "Woocommerce",
    price: "5500",
    features: [
      "Template Library - ThemeForest",
      "Logo & Brand Book",
      "Website Template & Pages",
      "SMS & Email Integration",
    ],
  },
  {
    title: "Roadmap",
    price: "2100",
    features: [
      "Revenue Model",
      "Market Research",
      "Cash Flow Plan",
      "Multi Year Forecast (3/5)",
    ],
  },
  {
    title: "Shopify Website",
    price: "1000",
    features: [
      "Template Library - ThemeForest",
      "Logo & Brand Book",
      "Website Template & Pages",
      "SMS & Email Integration",
    ],
  },
  {
    title: "Ideation",
    price: "1400",
    features: [
      "Template Library - ThemeForest",
      "Logo & Brand Book",
      "Website Template & Pages",
      "SMS & Email Integration",
    ],
  },
];
