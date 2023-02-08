import React from "react";

import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebOutlined from "@material-ui/icons/WebOutlined";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
export default {
  name: "Alimov Jakhongir",
  title: "Frontend Developer",
  job: "Software Engineer",
  birthday: "29th June 2001",
  phone: "(+998) 99 455 16 32",
  email: "alimovjoxa1@gmail.com",
  address: "Olmazor, Tashkent",
  GitHub: {
    link: "https://github.com/alimov-jaxongir",
    username: "@Jakhongir",
    icon: <GitHubIcon />,
  },
  Telegram: {
    link: "https://www.t.me/al1movf1",
    username: "@al1movf1",
    icon: <TelegramIcon />,
  },
  socials: {
    
    Twitter: {
      link: "https://www.twitter.com/@SultonkulN",
      username: "@SultonkulN",
      icon: <TwitterIcon />,
    },
    Facebook: {
      link: "https://www.facebook.com/AlimovJakhongir",
      username: "Jakhongir",
      icon: <FacebookIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/jakhongir_477",
      username: "@jakhongir_477",
      icon: <InstagramIcon />,
    },
  },
  about:
    "An undergraduate IT student, Young software developer, very curious and passionate about learning new IT sciences, technologies and working with them.",

  experiences: [
    {
      title: "Frontend Developer - Start-Up Project",
      date: "April 2022 - May 2022",
      description:
        "I was a Frontend Developer and Software Engineer who is responsible for creating UI of Websites and Web Applications!",
    },
    {
      title: "Frontend  -Self-Study Projects",
      date: "June 2022",
      description:"I am learning new frameworks of JavaScript and others "
    },

   
  ],
  educations: [
    {
      title: "Bachelor Degree - National University of Uzbekistan",
      date: "September 2019 - June 2023",
      description:
        "I am graduated course at National University of Uzbekistan, on the faculty of Information Technology ",
    },
    {
      title: "Middle School Degree - Kitab Second Lyceum",
      date: "August 2012 - June 2019",
      description:
        "I have studied at the Lyceum during 5 years I have graduated the Lyceum with 98% result and I have taken Blue Certificate ",
    },
  ],
 
  skills: [
    {
      title: "Frontend",
      description: [
        "React Js",
        "TypeScript",
        "JavaScript",
        "Material UI",
        "Tailwind CSS",
        "Sass",
        "Bootstrap",
        "CSS",
        "HTML",
      ],
    },
    
     
    {
      title: "Source Control",
      description: ["Git", "GitHub"],
    },
    {
      title: "Other Software Skills",
      description: ["Redux", "API",  "Redux-toolkit"],
    },
  ],

  projects: [
   
    {
      tag: "React",
      images: [
        "https://static-cse.canva.com/blob/136926/portfolio.png",
        "https://blog.corp-site.envato.com/cdn-cgi/image/width=1200,quality=95,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png",
        "https://miro.medium.com/max/3840/1*ZEUZtH8wL9vUDLrn5guwOQ.png",
      ],
      title: "My Portfolio",
      caption: "Own resume portfolio",
      description: "Own resume portfolio",
      links: [
        {
          link: "https://github.com/sultonkul070/myportfolio",
          icon: <GitHubIcon />,
        },
        {
          link: "https://myportfolio-sn.netlify.app/",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "https://pda-pune.com/wp-content/uploads/2021/04/how-ecommerce-companies-can-care-for-their-customers-5eb56dfe6c64e-1520x800-1.png",
        "https://lh3.googleusercontent.com/proxy/zVEsT_T9VeUw4gWCrJexAhlKyKO_wyDBeYojnPseOYDC4Z24JU6ndoBpEcIbzRXyNEszA8adADmKUOyLBwwvrq4VSwpsgRgkMhwTA4Gnxi4hmhB9",
        "https://www.openbusinesscouncil.org/wp-content/uploads/2020/07/e-commerce-definizione-cos-e.jpg",
      ],
      title: "Carter",
      caption: "Online e-commerce platform",
      description: "Online e-commerce platform",
      links: [
        {
          link: "https://github.com/sultonkul070/cartersn",
          icon: <GitHubIcon />,
        },
        {
          link: "https://carter-sn.netlify.app/",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "https://myday.uz/userfiles/14/images/IMG_9296(1).jpg",
        "https://pasta.uz/upload/products/%D0%BA%D0%BB%D0%B0%D0%B1%20%D1%81%D1%8D%D0%BD%D0%B4%D0%B2%D0%B8%20%D1%8F%D0%BD%D0%B3%D0%B8%D0%BB%D0%B8%D0%BA%2025000.jpg",
        "https://avatars.mds.yandex.net/get-altay/1871013/2a0000016ded8939d608bdd065933eefcf2b/XXL",
      ],
      title: "Max Way",
      caption: "Birinchi milliy fastfood",
      description: "Birichi milliy fastfood",
      links: [
        {
          link: "https://github.com/sultonkul070/maxway",
          icon: <GitHubIcon />,
        },
        {
          link: "https://maxway-sn.netlify.app/",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
    {
      tag: "JavaScript",
      images: [
        "https://i.ytimg.com/vi/wmeJMOxyD-w/maxresdefault.jpg",
        "https://wpdatatables.com/wp-content/uploads/2019/09/Bootstrap-CSS-Image-Gallery.jpg",
        "https://freefrontend.com/assets/img/css-gallery/reflective-photo-gallery-wall-experiment.jpg",
      ],
      title: "Image Gallery",
      caption: "Mega image gallery",
      description: "Mega gallery where you can find images you want",
      links: [
        {
          link: "https://github.com/sultonkul070/image-gallery",
          icon: <GitHubIcon />,
        },
        {
          link: "https://imagegallery-sn.netlify.app",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "https://miro.medium.com/max/1100/1*OlgqUIhvl5-9dZISlZ2-yQ.jpeg",
        "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/603823eca4b46344229b30f8_portfolio_course.png",
        "https://elementor.com/cdn-cgi/image/f=auto,w=1024,h=536/marketing/wp-content/uploads/sites/9/2021/03/Portfolio-Website-Templates_1200x628-1024x536.png",
      ],
      title: "First Portfolio",
      caption: "My first portfolio",
      description:
        "My first simple portfolio which is made by HTML, CSS and JavaScript",
      links: [
        {
          link: "https://github.com/sultonkul070/myportfolio2sn",
          icon: <GitHubIcon />,
        },
        {
          link: "https://myportfolio1-sn.netlify.app/",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
  ],
};
