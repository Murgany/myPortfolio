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
    aboutme: "Code whisperer and paperwork wizard: Full-stack developer with over 2 years of experience, building beautiful, user-centric web experiences from front-end design to back-end optimization, and a knack for keeping things organized. My 2+ years of administrative experience add a layer of polish to my development process, communication, and efficient project management, leading to timely delivery. Let’s collaborate to build impactful web solutions!",
};

const certifications = [
      {
        certificate: "Software Engineer",
        where: "HackerRank",
        verify_link: "https://www.hackerrank.com/certificates/7945213b1be2"
    },
    {
        certificate: "Developing Front-End Apps with React",
        where: "IBM | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/certificate/4MWHVHN8VZJ7"
    },
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
        certificate: "Introduction to Cloud Computing",
        where: "IBM | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/RFAF3YCQPGU4"
    },
    {
        certificate: "Introduction to Web Development with HTML, CSS, JavaScript",
        where: "IBM | Coursera",
        verify_link: "https://www.coursera.org/account/accomplishments/certificate/RDJ7LTMXK95Y"
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
        img: "img/mk.png",
        title: "Showcasing the Muna Kalati mobile app",
        description: "A website to showcase the Muna Kalati mobile app, an edtech platform empowering African children through culturally relevant digital learning resources. Our Muna App provides access to storybooks, audiobooks, and animated videos in multiple African languages.",
        link: "https://munakalati.pythonanywhere.com/",
        tech: "Python/Django, JavaScript, Bootstrap, HTML, CSS"
    },
        {
        img: "img/church-website.png",
        title: "Church Media Distribution Platform",
        description: "A user-friendly online platform for accessing and sharing multimedia content. Provides easy access to a vast collection of audio, video, and PDF files, functioning as a comprehensive digital library. Features a responsive and user-friendly interface with clear categories, making it effortless to navigate for users of all technical backgrounds. Allows admin to upload or embed multimedia files through a custom-built admin dashboard, streamlining the publishing process.",
        link: "https://frpakhomius.com/",
        tech: "Django, JavaScript, Ajax, JQuery, Bootstrap, HTML, CSS"
    },
      {
        img: "img/Pioneer Educational Center.png",
        title: "A Two-In-One Website and School Management System",
        description: "This innovative offering combines two essential tools: A School website and a School Management System. This user-friendly website caters to promoting the school's mission and programs to a wider audience. The website features an easy-to-use admin dashboard, allowing school administrators to manage content efficiently. A separate, comprehensive School Management System: This system streamlines critical tasks like student registration, attendance tracking, grade management, financial records, and staff information. It includes a dedicated admin dashboard for managing student data effectively.",
        link: "https://pioneereducationalcenter.pythonanywhere.com/",
        tech: "Python, Django, HTML, CSS, JavaScript, Ajax, JQuery, Bootstrap"
    },
       {
        img: "img/chatbot.png",
        title: "mAI: An AI Chat Bot. (Project in Progress)",
        description: "A user-friendly website featuring an AI chatbot to answer questions. Powered by Gemini, the chatbot leverages natural language processing (NLP) for engaging and informative user interactions. This project showcases my skills in artificial intelligence integration in web applications.",
        link: "https://rawychatbot.pythonanywhere.com/",
        tech: "Django, Google Gemini, JavaScript, Ajax, JQuery, Bootstrap, HTML, CSS"
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
    github: "https://github.com/Murgany?tab=repositories",
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


