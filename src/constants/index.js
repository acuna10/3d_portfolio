import {
    mobile,
    backend,
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
    figma,
    docker,
    bucher_hydraulics,
    portillos,
    bbs_automation,
    Gadget_Galaxy,
    jobit,
    connect_4,
    threejs,
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
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Cashier/Service",
        company_name: "Portillos",
        icon: portillos,
        iconBg: "#E6DEDD",
        date: "March 2016 - December 2016",
        points: [
            "Provided friendly customer service" ,
            "Learned to work under extreme pressure and tight deadlines",
        ],
    },
    {
        title: "Machining Apprentice",
        company_name: "BBS Automation Inc.",
        icon: bbs_automation,
        iconBg: "#E6DEDD",
        date: "December 2016 - June 2021",
        points: [
            "Worked in Quality control to measure incredibly precise components for robotics/ learned the extreme attention to detail required to make precise measurements consistently ",
            "Established good relations with suppliers in order to receive quicker turn arounds for our products",
            "Constant communication with various engineers regarding the product needed to be made",
            "Issues or changes needed to be made to a design were always handled as a collaborative effort between me and the mechanical engineer",
            "Promoted to Supervisor of the manufacturing department and managed 8-10 employees",
            "Purchased better tools for the machine shop and cut down on rejection rate from quality control by 15%",
        ],
    },
    {
        title: "CNC Programmer",
        company_name: "Bucher Hydraulics Inc.",
        icon: bucher_hydraulics,
        iconBg: "#E6DEDD",
        date: "August 2021 - Present",
        points: [
            "Translate a 3D model created by the mechanical engineer into a CAD program to make a finished product",
            "Determine tools and processes to implement to a certain job",
            "Manages 2 employees",
            "Troubleshoot and improve on the different programs I write/wrote to get a finished product quicker",
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
        name: "Gadget Galaxy",
        description:
            "Web-based platform that allows users to buy electronics",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express/node",
                color: "green-text-gradient",
            },
            {
                name: "material-ui",
                color: "pink-text-gradient",
            },
        ],
        image: Gadget_Galaxy,
        source_code_link: "https://github.com/Wubbiez/capstone",
    },
    {
        name: "Juicebox",
        description:
            "This project was built using express (backend) to handle all appropriate handle and store data in the local storage. ",
        tags: [
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "insomnia",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/acuna10/juicebox",
    },
    {
        name: "Connect Four",
        description:
            "Project consisted of re-creating a classic game using HTML/CSS/Javascript. Players could restart a new game once the game was over and can be played just like the classic game. ",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: connect_4,
        source_code_link: "https://github.com/acuna10/Santiago_Acuna_SYNTH_PROJECT",
    },
];

export { services, technologies, experiences, testimonials, projects };