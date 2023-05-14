// Note: The code is self explanatory

// Meta data for SEO 
const meta = {
    title: "Rawy Murgany",
    description: "Full stack web developer portfolio website. Django developer. React developer. Python. HTML. CSS. React. Django",
};

// Home page content
const introdata = {
    logotext: "img/logo3.png",
    title: "Hi, I’m Rawy Murgany",
    animated: {
        first: "Full-stack Web Developer...",
        second: "Back-End Developer...",
        third: "Front-End Developer...",
    },
    description: "Crafting tomorrow's solutions!."
    // your_img_url: "animation/tsc.gif",
};

const dataabout = {
    title: "About myself",
    aboutme: "I am a full-stack Django developer with a strong background in Python, HTML, CSS, various frontend and backend libraries, and databases. I was born in Sudan, grew up a refugee in Uganda and living as a refugee in Egypt. As a refugee, I bring resilience, adaptability, and a strong work ethic to all my projects. I am passionate about creating exceptional user experiences and collaborating effectively with colleagues and stakeholders. Let's build something great together.",
};

const certifications = [
    {
        certificate: "Web Application Technologies and Django",
        where: "Univerity of Michigan | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/6XAU6YYHL6LQ"
    },
    {
        certificate: "Building Web Applications in Django",
        where: "Univerity of Michigan | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/ZEHA64MJ7UE9"
    },
    {
        certificate: "Python for Data Science, AI & Development",
        where: "IBM | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/CR6ZZ8AHDX2B"
    },
    {
        certificate: "Data Collection and Processing with Python",
        where: "Univerity of Michigan | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/QNX7XVQQLAZY"
    },
    {
        certificate: "Python Classes and Inheritance",
        where: "Univerity of Michigan | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/LNPKV5UU692H"
    },
    {
        certificate: "Python Functions, Files and Dictionaries",
        where: "Univerity of Michigan | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/FN4R9PR5YEJN"
    },
    {
        certificate: "Introduction to Cloud Computing",
        where: "IBM | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/RFAF3YCQPGU4"
    },
];

const skills = [{
        name: "Python",
        value: 65,
    },
    {
        name: "Django & DRF",
        value: 80,
    },
    {
        name: "Javascript",
        value: 50,
    },
    {
        name: "React",
        value: 50,
    },
    {
        name: "Jquery & Ajax",
        value: 50,
    },
    {
        name: "HTML, CSS & Bootstrap",
        value: 90,
    },
    {
        name: "Carefull use of AI technologies like ChatGPT and others for speed",
        value: 95,
    },
    {
        name: "Ability and readiness to learn new languages, frameworks or libraries",
        value: 100,
    },
];

const services = [{
        title: "Backend Development",
        description: "I specialize in developing and maintaining scalable, reliable, and secure backend systems for web applications. With extensive experience in technologies such as Django, Flask, and Django REST Framework, I can create robust and efficient backends that meet your business needs. Whether you need to build a custom backend from scratch or maintain an existing system, I can help you achieve your goals."},
    {
        title: "Frontend Development",
        description: "I offer frontend development services to create user-friendly and responsive user interfaces for web applications. I specialize in technologies such as React, HTML, CSS and JavaScript, and can help you build a modern and visually appealing frontend. Whether you need to create a new frontend from scratch or enhance an existing one, I can help you deliver a seamless user experience."
    },
    {
        title: "Full Stack Development",
        description: "As a full stack developer, I can provide end-to-end development services for your web application. I can develop and maintain both the backend and frontend of your application using technologies such as Django, React, PostgreSQL and others. With my experience and expertise, I can help you build a web application that is scalable, secure, and user-friendly, from the backend to the frontend."    }
];

const dataportfolio = [
    {
        img: "img/Sudan-help.png",
        title: "Missing Persons and Humanitarian Aid Platform",
        desctiption: "The Missing Persons and Humanitarian Aid Platform is a web app aimed at helping those affected by the Sudan 2023 war. It includes missing persons reporting, hospital/pharmacy information, volunteer registration, and request for help submission. The platform aids in reuniting families, providing medical assistance, recruiting volunteers, and distributing aid effectively.",
        link: "https://sudanhelp.pythonanywhere.com",
        tech: "Django, HTML, CSS, JavaScript, Bootstrap",
    },
    {
        img: "img/clinic-management-system.png",
        title: "Clininc Management System",
        desctiption: "A web-based platform that efficiently manages patient and doctor information, appointments, and diagnoses. It securely stores patient diagnosis information and manages doctor details, including their areas of specialization. The appointment feature allows patients to request appointments, and doctors can view and manage their schedules. The system is user-friendly, customizable, and scalable, making it a valuable tool for healthcare providers.",
        link: "https://doctormina.pythonanywhere.com",
        tech: "Django, HTML, CSS, Ajax, JQuery, bootstrap based Black-Dashboard"
    },
    {
        img: "img/medecgulf.png",
        title: "Medical Digital Engagement Center",
        desctiption: "Built for Merck Group (google it), the Digital Engagement Center is a web-based platform for healthcare professionals. It provides the latest medical updates, case studies, and surveys related to diseases and treatments. Users can register and login for personalized content and access to additional features (This feature can be disabled by admin). The admin can download data in excel-compatible CSV format for analysis and reporting. The platform aims to improve patient outcomes by providing valuable insights and feedback to healthcare professionals and quality heathcare for patients.",
        link: "https://medecgulf.com",
        tech: "Django, HTML, CSS, JavaScript, Ajax, JQuery, Bootstrap"
    },
    {
        img: "img/church-website.png",
        title: "Church Media Distribution Platform",
        desctiption: "An online platform designed to provide access to audio sermons and PDF books to the congregation in Egypt. The website serves as a digital library where members can access a wide range of religious resources that help them deepen their faith and understanding of the Bible. The website is user-friendly and easy to navigate, with clear categories for sermons and books. Members can stream or download audio sermons and read or download PDF.",
        link: "https://fatherpakhomius.pythonanywhere.com/",
        tech: "Django, HTML, CSS, JavaScript, Ajax, JQuery, Bootstrap"
    },
        {
        img: "img/school-management-system.png",
        title: "Students Management System",
        desctiption: "A web application designed to manage student data and records for educational institutions. It includes modules for managing student information, attendance, grades, and course schedules. The system helps institutions streamline administrative tasks, and provide better insights into student performance.",
        link: "https://simple-school-system.netlify.app/",
        tech: "Django, Django Rest Framework, React, CSS, Bootstrap"
    },
        {
        img: "img/portfolio-img.png",
        title: "An earlier portfolio website",
        desctiption: "An earlier portfolio website.",
        link: "https://rawymo.netlify.app/",
        tech: "React, CSS, Bootstrap"

    },
];

const contactConfig = {
    YOUR_EMAIL: "rawymo@outlook.com",
    YOUR_FONE: "(+20)1014268239",
    description: "696 B-Tech building,Loran, Alexandria, Egypt.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_14s6smi",
    YOUR_TEMPLATE_ID: "template_lel414f",
    YOUR_USER_ID: "-y8NNnzHVT-E5C8ou",
};

const socialprofils = {
    github: "https://github.com/Murgany",
    linkedin: "https://linkedin.com/in/rawy-mo",
};
export {
    meta,
    dataabout,
    dataportfolio,
    certifications,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    // logotext,
};


