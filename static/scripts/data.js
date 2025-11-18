const resumeData = {
    personal: {
        name: "Yogesh Mevada",
        title: "Senior Engineering Manager",
        bio: "Passionate and creative Full Stack Developer with 5+ years of experience in building responsive and user-friendly web applications. Proficient in modern JavaScript frameworks, backend technologies, and database management. Strong problem-solving skills and a team player with excellent communication abilities.",
        email: "yogesh.mevada@gmail.com",
        phone: "+91 7387378726",
        location: "Mumbai, IN",
        resumeUrl: "./static/mevada_yogesh_resume.pdf",
        social: {
            linkedin: "https://in.linkedin.com/in/mevadayogesh",
            github: "https://github.com/mevadayogesh",
        },
    },
    experience: [
        {
            title: "Senior Engineering Manager",
            company: "NIUM",
            location: "Mumbai, IN",
            startDate: "Dec 2024",
            endDate: "Present",
            description:
                "The Spend/Cards API’s product helps our customer’s to issue personalized cards to their clients and employees in 35 countries. We provide Card customers with the ability to track and control employee travel expenses, and allow them to set limits for expenses. This allows them to stay within their budgets. With Cards, customers can hold multi-currency wallets under a single account and transact instantly in those currencies. The AMAZE product helps our customers track expenses from up to five different bank accounts under a single MasterCard issued by our company. It eliminates the need to manage multiple cards and remember multiple passwords and OTPs.",
            achievements: [
                "Improved the payout transaction processing throughput performance by implementing event driven design.",
                "Improved the application performance by implementing index & partitions in heavily used tables."
            ],
        },
        {
            title: "Staff Software Engineer",
            company: "NIUM",
            location: "Mumbai, IN",
            startDate: "Jan 2021",
            endDate: "Nov 2024",
            description:
                "The Send/Pay-Out API's product allowed customers to send money to 190+ countries, out of which 85+ countries were real-time. The Receive/Pay-in API’s product allows the customers to receive the money in the markets where they don't have a presence without holding any bank accounts, which helps to reduce foreign exchange risks.",
            achievements: [
                "Improved cards authorization transaction performance by implementing parallel processing.",
                "Implemented multi-currency auto-sweep transactions authorization & settlement for cards transactions."
            ],
        },
        {
            title: "Senior Software Engineer",
            company: "NIUM",
            location: "Mumbai, IN",
            startDate: "Dec 2019",
            endDate: "Dec 2021",
            description:
                "The Send/Pay-Out API's product allowed customers to send money to 190+ countries, out of which 85+ countries were real-time.",
            achievements: [
                "Implemented CitiWorldlink multicurrency payment gateway which supports payouts in 24 currencies."
            ],
        },
        {
            title: "Senior Software Engineer",
            company: "Mphasis",
            location: "Mumbai, IN",
            startDate: "Nov 2018",
            endDate: "Dec 2019",
            description:
                "A maker checker principle is used to handle legal and commercial documents digitally. Manage and provide standing instructions repository to support different systems with the standing instruction data from the legacy system.",
            achievements: [
                "Implemented Custody Client Cash integration to import all the data from the legacy system.",
                "Improved test & mutation coverage for services to 90%+.",
                "Implemented maker checker for Legal Document updates."
            ],
        },
        {
            title: "Senior Software Engineer",
            company: "eMeasurematics",
            location: "Mumbai, IN",
            startDate: "June 2015",
            endDate: "Feb 2017",
            description:
                "Automating and managing inventory are the functions of CYMS & SYMS, developed for companies such as Tata Steel, JSW, Essar Steel, USS Gary Steel, etc. It helps clients to manage inventory and automating the manual and hard work which was done traditionally. It reduces the manpower required to sustain the inventory management in the harsh environment of steel industry.",
            achievements: [
                "Improved performance of application to bring CPU utilization to approx. 5% from 80%.",
                "Implemented gRPC for event notification for desktop based applications."
            ],
        },
        {
            title: "Software Engineer",
            company: "Rolta India Pvt. Ltd.",
            location: "Mumbai, IN",
            startDate: "Mar 2014",
            endDate: "June 2015",
            description:
                "RBMS is designed to provide a helping hand to the Indian army in chaos of battle. This project helps individual soldier to view the real-time update of battlefield. Also includes the communication channel between soldiers, battalions and army headquarters. And the different types of data communication including image, videos, text and mail communications.",
            achievements: [
                "Completed media player for streaming IP camera, thermal imagers, etc. in Battleﬁeld Management System."
            ],
        },
        {
            title: "Software Developer",
            company: "Verchaska InfoTech",
            location: "Mumbai, IN",
            startDate: "Sept 2011",
            endDate: "Nov 2013",
            description:
                "Ezeego1 is sister concern company of Cox & Kings Travels. It is an end-to-end travel Solution for B2C Clients, Travel Agents, Hoteliers, Consolidators, Travel Service Providers and Customers. It involves online integration with Galileo, Amadeus, Abacus and domestic/international LCC’s for Flights and various international/domestic Hotel suppliers. It also has integrated with various payment gateways for online payment.",
            achievements: [
                "Integrated Galileo, Pegasus web-services to get Hotels result and bookings."
            ],
        },
    ],
    education: [
        {
            degree: "Bachelor of Engineering",
            institution: "Pune University",
            location: "Nashik, IN",
            startDate: "Aug 2007",
            endDate: "July 2011",
            description: "Specialized in Software Engineering. Graduated with bachelors.",
            achievements: [
                ""
            ],
        },
        {
            degree: "Higher Secendory School",
            institution: "Pune University",
            location: "Nashik, IN",
            startDate: "Jun 2005",
            endDate: "Jul 2007",
            description: "",
            achievements: [
                ""
            ],
        },
        {
            degree: "Secondary School Certificate",
            institution: "Latur University",
            location: "Nashik, IN",
            startDate: "Jun 1995",
            endDate: "May 2005",
            description: "",
            achievements: [
                ""
            ],
        },
    ],
    skills: [
        { name: "Java", icon: "fab fa-java" },
        { name: "SpringBoot", icon: "fab fa-java" },
        { name: "Hibernate", icon: "fab fa-java" },
        { name: "AWS", icon: "fab fa-aws" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Jenkins", icon: "fab fa-jenkins" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Node", icon: "fab fa-node" },
        { name: "React", icon: "fab fa-react" },
        { name: "TypeScript", icon: "fas fa-code" },
    ],
    projects: [
        {
            title: "NIUM One",
            description:
                "",
            image: "./static/images/nium.svg?height=250&width=500",
            tags: ["Java", "SpringBoot", "Hibernate", "PostgreSQL", "AWS"],
            companyWebsite: "https://www.nium.com/",
        },
    ],
}

