export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    hasChildRoutes : false,
  },
  {
    title: "Activities",
    url: "#",
    cName: "nav-links",
    hasChildRoutes : true,
    childRoutes : [
      {
        title: "Education Drives",
        url: "/activities/educational-drives",
        cName: "child-links",
      },{
        title: "Eco Projects",
        url: "/activities/eco-projects",
        cName: "child-links",
      },{
        title: "Plantation Drives",
        url: "/activities/plantation-drives",
        cName: "child-links",
      },{
        title: "Cleaning Drives",
        url: "/activities/cleaning-drives",
        cName: "child-links",
      }
    ]
  },
  {
    title: "Announcements",
    url: "/announcements",
    cName: "nav-links",
    hasChildRoutes : false,
  },
  {
    title: "Education",
    url: "#",
    cName: "nav-links",
    hasChildRoutes : true,
    childRoutes: [
      {
        title: "MSProgram",
        url: "/education/ms-program/nelson-institute-for-environmental-studies",
        cName: "child-links",
      },{
        title: "Trainings",
        url: "/education/trainings",
        cName: "child-links",        
      },{
        title: "Internships",
        url: "/education/internships",
        cName: "child-links",        
      }
    ]
  },
  {
    title: "Resources",
    url: "#",
    cName: "nav-links",
    hasChildRoutes : false,
  },
  {
    title: "Contact Us",
    url: "/contact-us",
    cName: "nav-links",
    hasChildRoutes : false,
  },
  {
    title: "Join Us",
    url: "/join-us",
    cName: "nav-links btn",
    hasChildRoutes : false,
  },
  
];
