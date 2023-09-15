/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Mario Ruiz Diaz",
    title: "Hi all, I'm Mario",
    subTitle: emoji(
        "With over two decades of hands-on experience in technology, I have embraced the roles of a Technologist, Senior Full Stack Developer, and Hands-On Software Architect. My journey reflects a deep passion for innovative design and an extensive skill set that spans 20 years of expertise in JavaScript, Reactjs, Nodejs, React Native, Docker, Kubernetes, Observability, and other cutting-edge tools. Throughout my career, I have thrived as a Tech Lead, Principal Software Engineer, and AWS Engineer, consistently driving projects to success and delivering high-quality solutions. Let's collaborate to shape the future of technology together."
    ),
    resumeLink:
        "https://drive.google.com/file/d/1kwx029C2QbBC6TVaCsd_hw5iWyvBKyzW/view?usp=drive_link", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/mariogruizdiaz",
    linkedin: "https://www.linkedin.com/in/marioruizdiaz/",
    gmail: "mariogrd@gmail.com",
    //   gitlab: "https://gitlab.com/saadpasta",
    //   facebook: "https://www.facebook.com/saad.pasta7",
    //   medium: "https://medium.com/@saadpasta",
    //   stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Designing and implementing microservices architectures for high-scale applications"),
        emoji("⚡ Expertise in cloud-agnostic architectures, Docker, Kubernetes, and Terraform"),
        emoji("⚡ Utilizing AWS, Azure, GCloud, Digital Ocean, and other cloud services"),
        emoji("⚡ Full-stack development encompassing backend, web applications, and mobile apps"),
        emoji("⚡ Leading complex projects with strategic planning and analysis"),
        emoji("⚡ Proficiency in Agile and SCRUM methodologies"),
        emoji("⚡ Continuous integration and automated deployment with CI/CD pipelines"),
        emoji("⚡ Root cause analysis and process optimization"),
        emoji("⚡ Software analytics and data analytics"),
        emoji("⚡ Expertise in cloud technologies and services, including AWS Cloud Computing and more.")
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "mobile",
            fontAwesomeClassname: "fa-solid fa-mobile-screen"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        },
        // {
        //   skillName: "firebase",
        //   fontAwesomeClassname: "fas fa-fire"
        // },
        {
            skillName: "golang",
            fontAwesomeClassname: "fa-brands fa-golang"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        },
        {
            skillName: "graphQL",
            fontAwesomeClassname: "fa-solid fa-chart-simple"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "Universidad Argentina “John F. Kennedy“",
            logo: require("./assets/images/uk.jpeg"),
            subHeader: "Bachelor of Science in Computer Engineering",
            duration: "March 1998 - December 2005",
            desc: "Participated in the research of XXX and published 3 papers.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            schoolName: "EET No1 “Jose de San Martin”. Buenos Aires, Argentina",
            logo: require("./assets/images/sanmartin.jpg"),
            subHeader: "Electronic Technician",
            duration: "March 1992 - December 1997",
            desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
            descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Technologies", //Insert stack or technology you have experience in
            Details: `React, React Native, .Net Core, Node.js, .NET Core, GraphQL, Xamarin.Forms, MongoDB, 
                MS SQL Server, Oracle, Rest API, Redis, Mocha.js, Chai, Redis,
                Jest.js, Selenium, Kafka, NATS.io`,
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Programming Languages", //Insert stack or technology you have experience in
            Details: "Javascript (20 years), TypeScript (10 years), C# (20 years), Golang (2 years)",
            progressPercentage: "98%" //Insert relative proficiency in percentage
        },
        {
            Stack: `Cloud Platform`,
            Details: `Lambdas, Step Functions, EC2, ECS, ECR, EKS, Fargate, 
                Route53, S3, AIM, SNS, AWS-CLI, Code Pipeline, SQS, 
                Azure, AWS Serverless, Google Cloud Services, Digital Ocean, Linode, Mongo Atlas, SignalFx, DataDog, New Relic, Kibana, Grafana, Prometheus, OpenTelemetry, 
                Serveless Framework, Terraform, Docker, Kubernetes,`,
            progressPercentage: "90%"
        },
        {
            Stack: "Design Patterns, Practices & Paradigms",
            Details: `Micro-Services, Micro-Frontends, Redux-Sagas, Object Oriented Programming (OOP), Pub-Sub & Req-Reply,
                Design Patterns (Creational, Structural and Behavioral), Functional programming, MVC, MVVM`,
            progressPercentage: "98%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: false, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Software Engineer",
            company: "Facebook",
            companylogo: require("./assets/images/facebookLogo.png"),
            date: "June 2018 – Present",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            role: "Front-End Developer",
            company: "Quora",
            companylogo: require("./assets/images/quoraLogo.png"),
            date: "May 2017 – May 2018",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Software Engineer Intern",
            company: "Airbnb",
            companylogo: require("./assets/images/airbnbLogo.png"),
            date: "Jan 2015 – Sep 2015",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Latest Big Projects & Initiatives 🚀",
    subtitle: "SOME OF THE LATEST PROJECTS AND INITIATIVES I HAVE WORKED ON. SINCE THE CODE BELONGS TO MY EMPLOYERS, I CAN'T SHARE IT HERE. SO PLEASE CONTACT ME IF YOU WANT ME TO GO THROUGH THE CODE WITH YOU.",
    projects: [
        {
            image: require("./assets/images/paramount.png"),
            projectName: "Scalable and Modular Platform for Hosting Multiple Configuration Integrations: A Microservices and Microfrontends Architecture Design with GraphQL, Kafka, NATS.io, MongoDB, Docker, Kubernetes, TypeScript, and Object-Oriented Programming Principles",
            projectDescriptions: [
                `The Config Hub Architecture Design initiative is a project that utilizes cutting-edge technologies to create a scalable and modular platform to host multiple configuration integrations. The platform is built using a monorepo architecture with nx.dev, which allows for efficient code sharing and reuse across multiple projects. The frontend is built using React and follows a Microfrontend architecture, which allows for the creation of small, independent UI components that can be developed and deployed separately. The backend is built using Node.js and follows a Microservices architecture, which allows for the creation of small, independent services that can be developed and deployed separately.`,
                `The platform uses GraphQL as the primary communication protocol between the frontend and backend services, which allows for efficient and flexible data exchange. The platform also utilizes Kafka and NATS.io as the primary messaging systems for asynchronous communication between services, which allows for high scalability and fault tolerance. MongoDB is used as the primary database for storing configuration data, and Docker and Kubernetes are used for containerization and orchestration of the platform.`,
                `The platform is built using TypeScript and follows Object-Oriented Programming principles, which allows for efficient and maintainable code. The platform is designed to be highly modular and scalable, allowing for the addition of new integrations and services as needed. Overall, the Pluto TV Config Hub Architecture Design initiative is a cutting-edge project that utilizes the latest technologies and design patterns to create a highly scalable and modular platform for hosting multiple configuration integrations.`
            ],
            images: [
                require("./assets/images/config-hub/1.png"),
                require("./assets/images/config-hub/2.png"),
                require("./assets/images/config-hub/3.png"),
                require("./assets/images/config-hub/4.png"),
                require("./assets/images/config-hub/5.png"),
                require("./assets/images/config-hub/6.png"),
                require("./assets/images/config-hub/7.png"),
            ],
            keywords: [
                "Logging",
                "Metrics",
                "Distributing Tracing",
                "OpenTelemetry",
                "DataDog",
                "APM",
                "Observability",
                "AWS Lambda",
                "Rest API",
                "Docker",
                "Kubernetes",
                "Microservices",
                "Microfrontends",
                "GraphQL",
                "Kafka",
                "NATS.io",
                "MongoDB",
                "TypeScript",
                "Object-Oriented Programming Principles",
                "nx.dev",
                "React",
                "Node.js",
            ],
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://www.paramountplus.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/plutotv.png"),
            projectName: "Enhancing Observability in Revenue Services: A Case Study in Logging, Metrics and Distributing Tracing",
            projectDescriptions: [
                `The initiative aimed to address the challenge of troubleshooting issues in revenue services. The existing system lacked proper logging and tracing tools, which made it difficult to identify and fix problems. To solve this problem, I proposed implementing logging and tracing tools that would provide better observability into the system.`,
                `The technical challenges faced during the implementation included integrating the new tools with the existing system, ensuring compatibility with different programming languages, and managing the large volume of data generated by the tools.`,
                `Despite these challenges, I was able to successfully implement the new logging and tracing tools. The tools provided better visibility into the system, enabling the team to quickly identify and fix issues. As a result, the system's uptime and reliability improved significantly, leading to increased customer satisfaction and revenue.`,
                `Overall, the initiative was a success, demonstrating the importance of proper logging and tracing tools in troubleshooting revenue services.`
            ],
            images: [
                require("./assets/images/tracing/Slide1.jpeg"),
                require("./assets/images/tracing/Slide2.jpeg"),
                require("./assets/images/tracing/Slide3.jpeg"),
                require("./assets/images/tracing/Slide4.jpeg"),
                require("./assets/images/tracing/Slide5.jpeg"),
                require("./assets/images/tracing/Slide6.jpeg"),
                require("./assets/images/tracing/Slide7.jpeg"),
                require("./assets/images/tracing/Slide8.jpeg"),
                require("./assets/images/tracing/Slide9.jpeg"),
                require("./assets/images/tracing/Slide10.jpeg"),
                require("./assets/images/tracing/Slide11.jpeg"),
                require("./assets/images/tracing/Slide12.jpeg"),
                require("./assets/images/tracing/Slide13.jpeg"),
                require("./assets/images/tracing/Slide14.jpeg"),
                require("./assets/images/tracing/Slide15.jpeg"),
                require("./assets/images/tracing/Slide16.jpeg"),
                require("./assets/images/tracing/Slide17.jpeg"),
            ],
            keywords: [
                "Logging",
                "Metrics",
                "Distributing Tracing",
                "OpenTelemetry",
                "DataDog",
                "APM",
                "Kibana",
                "Grafana",
                "Prometheus",
                "Observability",
                "AWS SNS",
                "AWS SQS",
                "AWS Lambda",
                "Hybrid Cloud",
                "Rest API",
            ],
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://pluto.tv/"
                }
            ]
        },
        {
            image: require("./assets/images/plutotv.png"),
            projectName: "Design and Development of an Intelligent Ad Selection Engine using Microservices Architecture",
            projectDescriptions: [
                `This project involved the design and development of an ad selection engine for a media company. The goal was to create a system that could intelligently select and display ads to users based on their viewing history and preferences. The engine needed to be scalable, reliable, and easy to maintain.`,
                `To achieve this, we used a combination of machine learning algorithms and rule-based systems to analyze user data and make ad selections in real-time. The system was built using a microservices architecture, with each component designed to be highly available and fault-tolerant.`,
                `The benefits of this solution include improved user engagement, higher ad revenue, and reduced operational costs. By providing users with more relevant ads, we were able to increase their satisfaction and encourage them to spend more time on the platform. At the same time, the media company was able to generate more revenue from advertisers and reduce the amount of manual work required to manage the ad selection process.`,
                `Overall, this project was a success, and we were able to deliver a high-quality solution that met the needs of our client.`
            ],
            images: [
                require("./assets/images/ad-selection/Slide1.png"),
                require("./assets/images/ad-selection/Slide2.png"),
                require("./assets/images/ad-selection/Slide3.png"),
                require("./assets/images/ad-selection/Slide4.png"),
                require("./assets/images/ad-selection/Slide5.png"),
                require("./assets/images/ad-selection/Slide6.png"),
                require("./assets/images/ad-selection/Slide7.png"),
                require("./assets/images/ad-selection/Slide8.png"),
                require("./assets/images/ad-selection/Slide9.png"),
                require("./assets/images/ad-selection/Slide10.png"),
                require("./assets/images/ad-selection/Slide11.png"),
                require("./assets/images/ad-selection/Slide12.png"),
                require("./assets/images/ad-selection/Slide13.png"),
                require("./assets/images/ad-selection/Slide14.png"),
                require("./assets/images/ad-selection/Slide15.png"),
                require("./assets/images/ad-selection/Slide16.png"),
                require("./assets/images/ad-selection/Slide17.png"),
                require("./assets/images/ad-selection/Slide18.png"),
                require("./assets/images/ad-selection/Slide19.png"),
                require("./assets/images/ad-selection/Slide20.png"),
                require("./assets/images/ad-selection/Slide21.png"),
                require("./assets/images/ad-selection/Slide22.png"),
                require("./assets/images/ad-selection/Slide23.png"),
                require("./assets/images/ad-selection/Slide24.png"),
                require("./assets/images/ad-selection/Slide25.png"),
            ],
            keywords: [
                "Logging",
                "Metrics",
                "Distributing Tracing",
                "OpenTelemetry",
                "DataDog",
                "APM",
                "Kibana",
                "Grafana",
                "Prometheus",
                "Observability",
            ],
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://pluto.tv/"
                }
            ]
        },
        {
            image: require("./assets/images/Adme-logo.jpeg"),
            projectName: "Advertising Platform. New Social Network app",
            projectDescriptions: [
                `I co-founded and innovated an advertising platform that helped brands identify and connect with target audiences, thereby accelerating organic growth. I facilitated the scalability of applications, using microservices in Node.js, ecma6, and TypeScript. Utilized MongoDB and Redis for data storage and GraphQL for the layer service. Additionally, I employed NATS messaging services to streamline the connectivity of 400+ microservices in the platforms and executed the development and deployment of two client apps simultaneously, the first, a web app built with React, Redux, and Sagas, and the second a mobile app built with React Native, Redux, and Sagas. Automation was implemented using Mocha.js and Chai.`
            ],
            images: [
                require("./assets/images/adme/1.png"),
                require("./assets/images/adme/2.png"),
                require("./assets/images/adme/3.png"),
                require("./assets/images/adme/4.png"),
                require("./assets/images/adme/5.png"),
                require("./assets/images/adme/6.png"),
                require("./assets/images/adme/7.png"),
            ],
            keywords: [
                "Logging",
                "Metrics",
                "Distributing Tracing",
                "OpenTelemetry",
                "DataDog",
                "APM",
                "Kibana",
                "Grafana",
                "Prometheus",
                "Observability",
                "NATS.io",
                "Publish-Subscribe Pattern",
                "Request-Reply Pattern",
                "Microservices",
                "React",
                "React Native",
                "Redux-Sagas",
                "Node.js",
                "GraphQL",
                "TypeScript",
            ],
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://www.adme.com.ar"
                }
            ]
        },
        {
            image: require("./assets/images/arena/logo.png"),
            projectName: "Cross-Platform Sports Statistics Mobile App with Real-time Updates",
            projectDescriptions: [
                `Overview:`,
                `This project showcases the development of a mobile application and backend infrastructure using microservices architecture. The primary goal is to provide users with access to historical sports statistics as well as real-time updates for ongoing matches. A significant challenge was ensuring that the app received updates seamlessly from the backend without requiring user-initiated refreshes.`,
                `Key Features:`,
                `Cross-platform mobile application built with Xamarin.Forms for Android and iOS.
                Integration with the Sportradar API (https://sportradar.com/) to retrieve historical sports data on user demand and real-time updates for ongoing matches.
                Implementation of microservices for efficient data retrieval and processing.
                Use of GraphQL for flexible and efficient data querying.
                Data storage and synchronization handled through MySQL and Firestore.
                NATS.io employed for inter-microservice communication.
                Backend server implemented using Node.js and TypeScript.`,
                `Technical Challenges:`,
                `One notable technical challenge of this project was the adaptation of the MVVM (Model-View-ViewModel) pattern in Xamarin.Forms to the Redux pattern in combination with Sagas. This required an in-depth study of these patterns, both in theory and practice. It was discovered and justified that Facebook introduced the Redux pattern because they found that the MVVM pattern had limitations and did not cover the entire scope of global application state management.`,
                `Achievements:`,
                `Successful development of a cross-platform mobile application with a responsive user interface.
                Integration of Sportradar API for historical and real-time sports data.
                Implementation of microservices architecture for efficient data handling.
                Effective use of GraphQL for flexible and optimized data querying.
                Seamless real-time updates for ongoing matches without user intervention.
                Integration of NATS.io for efficient microservices communication.
                A deep understanding of both MVVM and Redux patterns, leading to the informed choice of Redux for global state management.`,
                `This project demonstrates not only technical proficiency in cross-platform mobile development and microservices architecture but also a strong understanding of architectural patterns and the ability to choose the most appropriate one to meet specific project requirements.`
            ],
            images: [
                require("./assets/images/arena/1.png"),
                require("./assets/images/arena/2.png"),
                require("./assets/images/arena/3.png"),
                require("./assets/images/arena/4.png"),
                require("./assets/images/arena/5.png"),
                require("./assets/images/arena/6.png"),
                require("./assets/images/arena/7.png"),
                require("./assets/images/arena/8.png"),
                require("./assets/images/arena/9.png"),
            ],
            keywords: [
                "Microservices",
                "Xamarin.Forms",
                "Node.js",
                "GraphQL",
                "TypeScript",
                "NATS.io",
                "Publish-Subscribe Pattern",
                "Request-Reply Pattern",
                "MVVM Patern",
                "Redux-Sagas Patterns",
                "Firestore"
            ],
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://www.adme.com.ar"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

const smallProjects = {
    title: "Proof of Concepts & Code Challenges 🤓",
    subtitle: "PUBLIC GITHUB REPOSITORIES.",
    projects: [
        {
            image: require("./assets/images/appcues/logo.gif"),
            projectName: "Code Challenge",
            projectDescriptions: [
                `Overview`,
                `In response to the Platform Engineer Project challenge, I undertook the task of building a highly scalable web service that allows users to increment a value associated with a specific key. The challenge required synchronization of this service's state with a Postgres database at least every ten seconds. I successfully completed this project within the stipulated time frame of six hours, delivering a functional prototype with essential features and documentation.`,
                
                `Key Requirements and Features`,
                `1. RESTful API: The service is designed as a RESTful API that listens on port 3333 and accepts POST requests at the path /increment.
                
                2. JSON Request Format: Requests to the /increment endpoint require a JSON request body with two parameters: "key" (the key to be incremented) and "value" (the increment value). Both parameters are mandatory.
                
                3. Increment Logic: Incoming requests are responsible for incrementing the specified key by the provided value.
                
                4. Data Synchronization: The service ensures that its state remains synchronized with a Postgres database at most every ten seconds.`,
                
                `Deliverables`,
                `As part of the challenge, I provided the following deliverables:`,
                
                `Functional Prototype: The project was delivered as a GitHub repository, containing a functional implementation of the service. All the basic requirements were covered, and the code is thoroughly documented.`,
                
                `Unit Tests: I included unit tests to validate critical functionality and ensure the code's reliability.`,
                
                `Documentation: I prepared a brief document explaining my design decisions, including how I approached data persistence and the choice of external libraries and tools. This documentation provides insights into the project's architecture and rationale.`,
                
                `Postmortem Summary: The postmortem summary details my experiences during the project, highlighting challenges faced, lessons learned, and areas for potential improvement. It discusses how the project could be adapted for production use with more time and resources.`,
                
                `Evaluation Criteria`,
                `The challenge evaluated my ability to design and implement a scalable, performant architecture while maintaining clean and idiomatic code. Unit test coverage for critical functionality was essential, and I provided a thoughtfully written postmortem that reflected on the project's development process.`,
                
                `Possible Enhancements`,
                `If additional time were available, potential enhancements to the project could include:`,
                
                `Metrics Collection: Implementing metrics collection for the service using various strategies or clients, including open-source projects, custom tools, or cloud services.
                
                Authorization: Adding industry-standard authorization mechanisms to secure the /increment endpoint, allowing only authenticated clients to access it.
                
                Rate Limiting: Implementing rate limiting on the /increment endpoint to prevent abuse and ensure fair usage of the service.
                
                Benchmarking: Providing benchmarks to measure the service's performance using a preferred benchmarking tool.`,
                
                `Tech Stack`,
                `The project was implemented using the following technologies:`,
                
                ` - Node.js: For building the web service.`,
                ` - JavaScript: The primary programming language.`,
                ` - Postgres: As the permanent database for data storage.`,
                ` - Redis: For in-memory caching and key synchronization.`,
                ` - Prometheus: For metrics collection.`,
                ` - Grafana: As a visualization tool for monitoring metrics.`,
                ` - Docker: To containerize the service for easy deployment.`
                 
            ],
            images: [
                require("./assets/images/appcues/1.png"),
                require("./assets/images/appcues/2.png"),
                require("./assets/images/appcues/3.png"),
                require("./assets/images/appcues/4.png"),
                require("./assets/images/appcues/5.png"),
                require("./assets/images/appcues/6.png"),
                require("./assets/images/appcues/7.png"),
                require("./assets/images/appcues/8.png"),
                require("./assets/images/appcues/9.png"),
                require("./assets/images/appcues/10.png"),
                require("./assets/images/appcues/11.png"),
                require("./assets/images/appcues/12.png"),
                require("./assets/images/appcues/13.png"),
                require("./assets/images/appcues/14.png"),
            ],
            keywords: [
                "Logging",
                "Metrics",
                "Distributing Tracing",
                "OpenTelemetry",
                "Kibana",
                "Grafana",
                "Prometheus",
                "Observability",
                "React",
                "Redux-Sagas",
                "Node.js",
                "GraphQL",
                "TypeScript",
            ],
            footerLink: [
                {
                    name: "Requirements",
                    url: "https://www.notion.so/Appcues-4a03e2c9e1e9405288ec65a7be2c576b?pvs=4"
                },
                {
                    name: "Delivery Documentation",
                    url: "https://www.notion.so/Delivery-91645f4bdf374c45b3e9a0e0ce03e5a4?pvs=4"
                },
                {
                    name: "Github Repository",
                    url: "https://github.com/mariogruizdiaz/restApi-metrics-postgres-redis-docker"
                }
            ]
        },
        {
            image: require("./assets/images/ondeck/logo.jpg"),
            projectName: "Code Challenge",
            projectDescriptions: [
                `Requirements`,
                `We want to create a newsfeed for each fellowship that shows new and relevant events. The goal is to keep users up to date and to facilitate collaboration between them.`,
                
                `In general, there are three types of events:`,
                
                `new people (DB table users),`,
                `new projects (table projects),`,
                `team announcements (table announcements).`,
                `However, each newsfeed should consist of different types of content because people from different fellowships are interested in different events:`,
                
                `Founders want to connect to angels and other founders.`,
                `Angels want to connect to founders and other angels.`,
                `Founders and angels are interested in new founders' projects.`,
                `Writers want to connect only to other writers and are not interested in founders' projects.`,
                `Announcements can be addressed to a specific fellowship, or to all users (see table announcements, column fellowship). Founders are not interested in announcements addressed to writers, and so on.`,
                
                `Part 1: coding task`,
                `Implement the newsfeed:`,
                
                ` - It should include users, projects, and announcements.`,
                ` - It should display different results, depending on the selected fellowship, as described in the "Setting" section above.`,
                ` - Entries should be sorted by creation date, newer entries go first.`,
                ` - Implement infinite scrolling, don't download and display all entries at once.`,
                `Tips:`,
                
                `You can change any part of the application — DB connection, GraphQL server/client, styled-components — if you are more comfortable or productive with something else.`,
                `You can change the project structure as you see fit.`,
                `You can add any NPM package you need to implement new features or improve the existing code.`,
                `You can reuse the existing React components, or modify them so they fit better in the newsfeed.`,
                `Don't spend much time creating beautiful UI, just make it look consistent.`
                 
            ],
            images: [
                require("./assets/images/ondeck/1.png"),
                require("./assets/images/ondeck/2.png"),
            ],
            keywords: [
                "React",
                "Express",
                "Node.js",
                "TypeScript",
                "sqlite3",
                "GraphQL"
            ],
            footerLink: [
                {
                    name: "Requirements in the Github Repository delivered",
                    url: "https://github.com/mariogruizdiaz/coding-challenge-newsfeed"
                },
                {
                    name: "Code walk-through video",
                    url: "https://drive.google.com/file/d/1zJbDLSQDwfp9Eq589CYPKbxxwweEAYVx/view"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements and Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "Certificated Scrum Master",
            subtitle:
                "",
            image: require("./assets/images/certificates/scrum-master.webp"),
            imageAlt: "Google Code-In Logo",
            footerLink: [
                // {
                //     name: "Certification",
                //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                // },
                // {
                //     name: "Award Letter",
                //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                // },
                // {
                //     name: "Google Code-in Blog",
                //     url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                // }
            ]
        },
        {
            title: "Certificated Scrum Developer",
            subtitle:
                "",
                image: require("./assets/images/certificates/scrum-developer.png"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [
                // {
                //     name: "View Google Assistant Action",
                //     url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
                // }
            ]
        },

        {
            title: "Project Management Professional",
            subtitle: "",
            image: require("./assets/images/certificates/pmi.png"),
            imageAlt: "PWA Logo",
            footerLink: [
                // { name: "Certification", url: "" },
                // {
                //     name: "Final Project",
                //     url: "https://pakistan-olx-1.firebaseapp.com/"
                // }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+54-91131803134",
    email_address: "mariogrd@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    smallProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable
};
