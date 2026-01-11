

/* --- DATA CONFIGURATION --- */

const skillsData = [
  // AUTOMATION TOOLS (Priority 1)
  {
    id: "n8n",
    title: "n8n",
    desc: "Workflow Automation",
    modalDesc: "Fair-code licensed workflow automation tool for building complex integrations and automations.",
    iconType: "image",
    icon: "https://cdn.simpleicons.org/n8n"
  },
  {
    id: "jenkins",
    title: "Jenkins",
    desc: "CI/CD",
    modalDesc: "Automates building, testing, and deployment pipelines.",
    iconType: "class",
    icon: ["fa-brands", "fa-jenkins"]
  },
  {
    id: "bash",
    title: "Bash",
    desc: "Scripting",
    modalDesc: "Command-line scripting and automation for system tasks.",
    iconType: "image",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg"
  },
  {
    id: "python",
    title: "Python",
    desc: "Programming Language",
    modalDesc: "High-level language for automation, scripting, and versatile coding.",
    iconType: "class",
    icon: ["fa-brands", "fa-python"]
  },
  {
    id: "postman",
    title: "Postman",
    desc: "API Testing",
    modalDesc: "API development and testing platform for building and testing APIs.",
    iconType: "image",
    icon: "https://cdn.simpleicons.org/postman/FF6C37"
  },
  // CLOUD ENGINEERING TOOLS (Priority 2)
  {
    id: "aws",
    title: "AWS",
    desc: "Cloud Platform",
    modalDesc: "Leading cloud platform for scalable applications and infrastructure.",
    iconType: "class",
    icon: ["fa-brands", "fa-aws"]
  },
  {
    id: "docker",
    title: "Docker",
    desc: "Containerization",
    modalDesc: "Build once, run anywhere containerization platform.",
    iconType: "class",
    icon: ["fa-brands", "fa-docker"]
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    desc: "Container Orchestration",
    modalDesc: "Container orchestration and management at scale.",
    iconType: "class",
    icon: ["fa-solid", "fa-dharmachakra"]
  },
  {
    id: "terraform",
    title: "Terraform",
    desc: "Infrastructure as Code",
    modalDesc: "Infrastructure as Code provisioning and management tool.",
    iconType: "image",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-plain.svg"
  },
  {
    id: "prometheus",
    title: "Prometheus",
    desc: "Monitoring",
    modalDesc: "Powerful monitoring and alerting toolkit for cloud infrastructure.",
    iconType: "image",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg"
  },
  {
    id: "grafana",
    title: "Grafana",
    desc: "Visualization",
    modalDesc: "Analytics and interactive visualization web application.",
    iconType: "image",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"
  },
  {
    id: "linux",
    title: "Linux",
    desc: "Operating System",
    modalDesc: "Open-source OS for servers and cloud infrastructure.",
    iconType: "class",
    icon: ["fa-brands", "fa-linux"]
  },
  {
    id: "github",
    title: "GitHub",
    desc: "Code Management",
    modalDesc: "Code hosting and collaboration platform for version control.",
    iconType: "class",
    icon: ["fa-brands", "fa-github"]
  }
];

const projectsData = [
  {
    link: "https://www.linkedin.com/posts/bishalranjit0606_automated-data-enrichment-reporting-workflow-activity-7409174963527806976-FQIZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM",
    image: "images/n8n Course Level 2.png",
    title: "Data Enrichment & Reporting Automation",
    description: "This n8n workflow automates the synchronization of customer data between an external ERP system and Airtable.",
    tech: ["n8n", "automation", "ERP"],
    buttons: [
      { text: "Code", link: "https://lnkd.in/gphcF8tk", icon: ["fa-brands", "fa-github"] },
      { text: "View Details", link: "https://www.linkedin.com/posts/bishalranjit0606_automated-data-enrichment-reporting-workflow-activity-7409174963527806976-FQIZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "https://shorturl.at/Q0Fwb",
    image: "images/ECS-PROJECT.png",
    title: "Building and Deploying Containers Using AWS ECS",
    description: "This project demonstrates the use of AWS ECS to host a simple web application composed of a website with two supporting API services.",
    tech: ["ECS", "Docker", "AWS"],
    buttons: [
      { text: "Code", link: "https://github.com/bishalranjit0606/Building-and-Deploying-Containers-Using-Amazon-Elastic-Container-Service", icon: ["fa-brands", "fa-github"] },
      { text: "View Details", link: "https://www.linkedin.com/posts/bishalranjit0606_building-and-deploying-containers-using-ecs-activity-7388895436796891136-zUO-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "https://tinyurl.com/5dwmf6cj",
    image: "images/3TierArch.png",
    title: "Highly Available 3 Tier Web Deployment",
    description: "End-to-end deployment of a resilient, scalable, and multi-AZ three-tier application on AWS.",
    tech: ["Load Balancing", "ASG", "RDS"],
    buttons: [
      { text: "Code", link: "https://github.com/bishalranjit0606/aws-three-tier-web-architecture-workshop", icon: ["fa-brands", "fa-github"] },
      { text: "View Details", link: "https://tinyurl.com/5dwmf6cj", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "https://www.linkedin.com/posts/bishalranjit0606_terraform-aws-project-scalable-web-infrastructure-activity-7373954959689576448-TEbD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM",
    image: "images/Terraform aws project.png",
    title: "AWS Infrastructure as Code with Terraform",
    description: "Terraform project to deploy a scalable AWS environment with VPC, EC2 Auto Scaling and ALB. Demonstrates IaC and cloud automation.",
    tech: ["Terraform", "AWS", "Networking"],
    buttons: [
      { text: "Code", link: "https://github.com/bishalranjit0606/terraform-aws-project", icon: ["fa-brands", "fa-github"] },
      { text: "View Details", link: "https://www.linkedin.com/posts/bishalranjit0606_terraform-aws-project-scalable-web-infrastructure-activity-7373954959689576448-TEbD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "https://www.linkedin.com/posts/bishalranjit0606_nodejs-static-site-with-docker-jenkins-activity-7334108481165180928-1cDF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlIw8sL_O_lqqClQDpM",
    image: "images/CI:CD.png",
    title: "CI/CD pipeline project using Jenkins",
    description: "Created a CI/CD pipeline using Jenkins to automate the build, test, and deployment of a Node.js static website within Docker containers.",
    tech: ["Jenkins", "Docker", "CI/CD"],
    buttons: [
      { text: "Code", link: "https://github.com/bishalranjit0606/jenkins-project", icon: ["fa-brands", "fa-github"] },
      { text: "View Details", link: "https://www.linkedin.com/posts/bishalranjit0606_nodejs-static-site-with-docker-jenkins-activity-7334108481165180928-1cDF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "https://github.com/bishalranjit0606/Deployment-of-Node.js-Application-Using-Docker-on-AWS-EC2",
    image: "images/Deployment of nodejs app using docker.png",
    title: "Node.js + Docker + AWS EC2",
    description: "This project demonstrates how to deploy a Node.js application inside a Docker container on an AWS EC2 instance.",
    tech: ["Docker", "Node.js", "AWS", "EC2"],
    buttons: [
      { text: "Code", link: "https://github.com/bishalranjit0606/Deployment-of-Node.js-Application-Using-Docker-on-AWS-EC2", icon: ["fa-brands", "fa-github"] },
      { text: "View Details", link: "https://www.linkedin.com/posts/bishalranjit0606_deployment-of-nodejs-application-using-docker-activity-7300411374654906369-a5ve?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "https://www.linkedin.com/posts/bishalranjit0606_weekly-erp-reporting-workflow-in-n8n-activity-7406724257918988288-tuh5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM",
    image: "images/ERP-n8n.png",
    title: "Weekly ERP Reporting Workflow in n8n",
    description: " multi-path n8n workflow that handles weekly ERP data extraction, applies conditional logic, and automatically routes the results to two different destinations.",
    tech: ["n8n", "automation", "ERP"],
    buttons: [
      { text: "Code", link: "https://github.com/bishalranjit0606/Weekly-ERP-Reporting-Workflow-in-n8n", icon: ["fa-brands", "fa-github"] },
      { text: "View Details", link: "https://www.linkedin.com/posts/bishalranjit0606_weekly-erp-reporting-workflow-in-n8n-activity-7406724257918988288-tuh5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "https://www.linkedin.com/posts/bishalranjit0606_iot-project-activity-7377657531134885888-pRNq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM",
    image: "images/Smart Thermostat with AWS IoT Core.png",
    title: "Smart Thermostat with AWS IoT Core",
    description: "The goal was to build a thermostat simulator that sends temperature readings and controls the AC based on set thresholds.",
    tech: ["IOT Core", "AWS", "SNS"],
    buttons: [
      { text: "View Details", link: "https://www.linkedin.com/posts/bishalranjit0606_iot-project-activity-7377657531134885888-pRNq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "https://www.linkedin.com/posts/bishalranjit0606_django-app-deployment-with-shell-script-activity-7376084565133541377-VM61?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM",
    image: "images/bash project.png",
    title: "Django App Deployment with Shell Scripting",
    description: "This project automates the deployment of a Django application on an AWS EC2 Ubuntu instance using Bash scripting, Docker, and Docker Compose.",
    tech: ["Django", "Bash script", "AWS"],
    buttons: [
      { text: "Code", link: "https://github.com/bishalranjit0606/shell-scripted-django", icon: ["fa-brands", "fa-github"] },
      { text: "View Details", link: "https://www.linkedin.com/posts/bishalranjit0606_django-app-deployment-with-shell-script-activity-7376084565133541377-VM61?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM", icon: ["fa-solid", "fa-file-alt"] }
    ]
  },
  {
    link: "https://www.linkedin.com/posts/bishalranjit0606_deploy-two-tier-application-with-aws-activity-7295494032263200768-RDbH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM",
    image: "images/Two-Tier Web App on AWS.png",
    title: "Two-Tier Web App on AWS",
    description: "Deployed a Two-Tier Web Application on AWS! From setting up a secure VPC to configuring EC2, RDS (MariaDB), and WordPress, this project helped me strengthen my cloud and DevOps skills.",
    tech: ["AWS", "Database", "Wordpress"],
    buttons: [
      { text: "View Details", link: "https://www.linkedin.com/posts/bishalranjit0606_deploy-two-tier-application-with-aws-activity-7295494032263200768-RDbH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt5JzsBTeytu69SlI0w8sL_O_lqqClQDpM", icon: ["fa-solid", "fa-file-alt"] }
    ]
  }
];

const blogsData = [
  {
    date: "December 23, 2025",
    title: "Making Data Work for You: How I Built an Automated Reporting System",
    excerpt: "Data is everywhere, but the real magic happens when you make that data move and talk to other systems without lifting a finger.",
    link: "https://medium.com/@bishalranjit2002/making-data-work-for-you-how-i-built-an-automated-reporting-system-b71e18ad8305?postPublishedType=initial"
  },
  {
    date: "December 16, 2025",
    title: "Mastering the Fundamentals of n8n: A Beginner’s Guide to Automation",
    excerpt: "I recently completed the n8n Course Level 1, diving deep into the foundations of this powerful workflow automation platform.",
    link: "https://medium.com/@bishalranjit2002/mastering-the-fundamentals-of-n8n-a-beginners-guide-to-automation-a07980de5f92"
  },
  {
    date: "October 18, 2025",
    title: "Docker for DevOps: A Beginner’s Guide to Containerization",
    excerpt: "This blog provides an introduction to Docker and covering key concepts, benefits, and a simple tutorial to get started.",
    link: "https://medium.com/@bishalranjit2002/docker-for-devops-a-beginners-guide-to-containerization-84daa5cd2de9"
  },
  {
    date: "October 13, 2025",
    title: "How I Passed the AWS Solutions Architect Associate Exam (SAA-C03)",
    excerpt: "This blog shares easy steps and tips to pass the AWS Solutions Architect Associate exam with the right study plan and practice.",
    link: "https://medium.com/@bishalranjit2002/how-i-passed-the-aws-solutions-architect-associate-exam-saa-c03-9e1ef7421548"
  },
  {
    date: "October 12, 2025",
    title: "AWS Solutions Architect Associate Study Guide (The Architect’s Cheat Sheet)",
    excerpt: "A comprehensive study guide for the AWS Solutions Architect Associate exam, covering key concepts, best practices, and exam strategies.",
    link: "https://medium.com/@bishalranjit2002/aws-solutions-architect-associate-study-guide-the-architects-cheat-sheet-4f20fdbf37b7"
  },
  {
    date: "September 24, 2025",
    title: "Bash Basics for DevOps with AWS: Automate, Script, Repeat!",
    excerpt: "A beginner's guide to using Bash for automation in AWS environments, covering essential commands, scripting techniques, and best practices.",
    link: "https://medium.com/@bishalranjit2002/bash-basics-for-devops-with-aws-automate-script-repeat-2abc23835fae"
  },
  {
    date: "September 21, 2025",
    title: "Why Testing Matters in AWS DevOps",
    excerpt: "A comprehensive guide to testing strategies in AWS DevOps, including unit testing, integration testing, and end-to-end testing for cloud applications.",
    link: "https://medium.com/@bishalranjit2002/why-testing-matters-in-aws-devops-8941902eddbd"
  },
  {
    date: "July 18, 2025",
    title: "Mastering Amazon S3 Encryption & Security: A Simple Guide",
    excerpt: "A deep dive into Amazon S3 encryption options, security best practices, and how to implement them effectively in your applications.",
    link: "https://medium.com/@bishalranjit2002/mastering-amazon-s3-encryption-security-a-simple-guide-0dd3d30970b4"
  }
];

const experienceData = [
  {
    title: "Automation Intern",
    company: "Recruit Nepal",
    type: "Internship",
    duration: "Jan 2026 – Present",
    description: [
      "Automated social media workflows, reducing manual post creation effort by 50%",
      "Built and optimized automation scripts to streamline internal recruitment processes",
      "Improved operational efficiency by minimizing repetitive tasks across platforms",
      "Collaborated with the team to identify automation opportunities and implement scalable solutions"
    ]
  },
  {
    title: "Leo Club Member",
    company: "Leo District Council 325D",
    type: "Part-time",
    duration: "Jan 2024 – Present",
    description: [
      "Developed leadership skills by leading community service projects and coordinating club initiatives.",
      "Collaborated with team members to organize and execute high-impact volunteering acti vities.",
      "Contributed to diverse social projects aimed at creating a positive impact in the local community."
    ]
  },
  {
    title: "Cloud Apprentice",
    company: "Adex International",
    type: "Apprenticeship",
    duration: "Jul 2025 - Aug 2025",
    description: [
      "Gained valuable, hands-on experience with AWS services through an 8-week Cloud Apprenticeship",
      "Mastered the essentials of cloud computing and effectively utilized AWS services",
      "Prepared for the AWS Solution Architect Associate exam through hands-on training and labs",
      "Received mentorship from industry experts and engaged in practical, industry-based learning"
    ]
  },
  {
    title: "IT Club Member",
    company: "KBC IT Club",
    type: "Part-time",
    duration: "Jan 2022 - Jan 2023",
    description: [
      "Developed a strong foundation in cloud architecture by mastering core AWS services and cloud computing essentials.",
      "Completed an intensive 8-week Cloud Apprenticeship featuring hands-on labs and practical, industry-based training.",
      "Prepared for the AWS Solutions Architect Associate certification through expert-led mentorship and technical workshops.",
      "Applied theoretical knowledge to real-world scenarios by utilizing AWS tools to solve industry-specific problems."
    ]
  }
];

const certificatesData = [
  {
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/9d548433416649208f29cbe572265c54",
    title: "AWS Solutions Architect Associate",
    certifiedTag: true,
    issuer: "Amazon Web Services (AWS)",
    date: "Issued: Sep 2025 • Expires: Sep 2028",
    image: "certificate-image/aws.png"
  },
  {
    link: "https://community.n8n.io/badges/105/completed-n8n-course-level-2?username=bishal_ranjit",
    title: "Badges / Completed n8n Course Level 2",
    certifiedTag: false,
    issuer: "n8n",
    date: "Issued: December 2025 • No Expiration",
    image: "certificate-image/n8n Course Level 2.png"
  },
  {
    link: "https://github.com/bishalranjit0606/Building-and-Deploying-Containers-Using-Amazon-Elastic-Container-Service/blob/main/Building%20and%20Deploying%20Containers%20Using%20ECS.jpg",
    title: "Building and Deploying Containers Using ECS",
    certifiedTag: false,
    issuer: "Amazon Web Services (AWS)",
    date: "Issued: October 2025 • No Expiration",
    image: "certificate-image/Building and Deploying Containers Using ECS.jpg"
  },
  {
    link: "https://github.com/bishalranjit0606/certified-aws-testing/blob/main/Advanced%20Testing%20Practices%20Using%20AWS%20DevOps%20Tools_page-0001.jpg",
    title: "Advanced Testing Using AWS DevOps Tools",
    certifiedTag: false,
    issuer: "Amazon Web Services (AWS)",
    date: "Issued: September 2025 • No Expiration",
    image: "certificate-image/Advanced Testing Practices Using AWS DevOps Tools_page-0001.jpg"
  },
  {
    link: "https://www.coursera.org/account/accomplishments/specialization/SGQUR3LL8S4U",
    title: "Google Cloud Security Specialization",
    certifiedTag: false,
    issuer: "Google Cloud",
    date: "Issued: November 2024 • No Expiration",
    image: "certificate-image/cloud-security.jpg"
  },
  {
    link: "https://www.coursera.org/account/accomplishments/specialization/DE8XO7ZN6C84",
    title: "Google Cybersecurity Certificate",
    certifiedTag: false,
    issuer: "Google",
    date: "Issued: October 2024 • No Expiration",
    image: "certificate-image/cybersecurity.jpg"
  },
  {
    link: "https://github.com/bishalranjit0606/Certificate-Deploy-an-End-to-End-IoT-Application/blob/main/3b201b5d-2be4-4cc1-a556-917160a11c67_page-0001.jpg",
    title: "Deploy an End-to-End IoT Application from AWS",
    certifiedTag: false,
    issuer: "Amazon Web Services (AWS)",
    date: "Issued: September 2025 • No Expiration",
    image: "certificate-image/deploy-iot-app.jpg"
  },
  {
    link: "https://www.coursera.org/account/accomplishments/certificate/RTS6DS58N42W",
    title: "AWS Cloud Technical Essentials",
    certifiedTag: false,
    issuer: "Amazon Web Services (AWS)",
    date: "Issued: March 2025 • No Expiration",
    image: "certificate-image/cloud-technical.jpg"
  },
  {
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_P6goJBTMstKSHt3nv_1748792896154_completion_certificate.pdf",
    title: "Solutions Architecture Job Simulation",
    certifiedTag: false,
    issuer: "Forage",
    date: "Issued: June 2025 • No Expiration",
    image: "certificate-image/forage.jpg"
  },
  {
    link: "https://cdn.pwskills.com/learn/certificates/0acafd53-dbd6-44ee-b183-389aeb70a01b.pdf",
    title: "Cloud Technology For Websites",
    certifiedTag: false,
    issuer: "PW Skills",
    date: "Issued: January 2025 • No Expiration",
    image: "certificate-image/pwskills.jpg"
  }
  ,
  {
    link: "https://community.n8n.io/badges/104/completed-n8n-course-level-1?username=bishal_ranjit",
    title: "n8n Course Level 1",
    certifiedTag: false,
    issuer: "n8n",
    date: "Issued: December 2025 • No Expiration",
    image: "certificate-image/n8n Course Level 1.png"
  }
];

const contactsData = [
  {
    link: "https://github.com/bishalranjit0606",
    icon: ["fa-brands", "fa-github"],
    title: "GitHub",
    desc: "Check out my code and open source contributions"
  },
  {
    link: "https://www.linkedin.com/in/bishalranjit0606/",
    icon: ["fa-brands", "fa-linkedin-in"],
    title: "LinkedIn",
    desc: "Connect with me professionally"
  },
  {
    link: "mailto:bishalranjitofficial@gmail.com",
    icon: ["fa-solid", "fa-envelope"],
    title: "Email",
    desc: "Send me a message directly"
  }
];

/* --- THEME MANAGER SYSTEM --- */
const ThemeManager = {
  init() {
    const toggleBtn = document.getElementById("theme-toggle");
    const text = document.getElementById("theme-text");
    const icon = document.querySelector("#theme-toggle i");

    let theme = "dark";
    this.apply(theme);

    toggleBtn.onclick = () => {
      theme = theme === "dark" ? "light" : "dark";
      this.apply(theme);
    };
  },

  apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const icon = document.querySelector("#theme-toggle i");
    const text = document.getElementById("theme-text");

    if (theme === "dark") {
      icon.className = "fa-solid fa-sun icon";
      text.textContent = "Light Mode";
    } else {
      icon.className = "fa-solid fa-moon icon";
      text.textContent = "Dark Mode";
    }
  },
};

/* --- COMMAND PALETTE SYSTEM --- */
const CommandPalette = {
  init() {
    const overlay = document.getElementById("cmdOverlay");
    const input = document.getElementById("cmdInput");
    const list = document.getElementById("cmdList");

    const commands = [
      { name: "Go to About", shortcut: "A", action: () => CommandPalette.selectSection("about") },
      { name: "Go to Projects", shortcut: "P", action: () => CommandPalette.selectSection("projects") },
      { name: "Go to Certificates", shortcut: "C", action: () => CommandPalette.selectSection("certificates") },
      { name: "Go to Experience", shortcut: "E", action: () => CommandPalette.selectSection("experience") },
      { name: "Go to Blog", shortcut: "B", action: () => CommandPalette.selectSection("blog") },
      { name: "Go to Contact", shortcut: "@", action: () => CommandPalette.selectSection("contact") },
      { name: "Toggle Theme", shortcut: "T", action: () => document.getElementById("theme-toggle").click() },
      { name: "Download Resume", shortcut: "DL", action: () => window.open("docs/Bishal Ranjitkar resume.pdf", "_blank") }
    ];

    this.selectSection = (sectionId) => {
      setActiveSection(sectionId, true);
    };

    function openPalette() {
      overlay.classList.add("open");
      input.value = "";
      input.focus();
      renderList("");
      document.body.style.overflow = "hidden";
    }

    function closePalette() {
      overlay.classList.remove("open");
      document.body.style.overflow = "auto";
    }

    function renderList(filter) {
      list.innerHTML = "";
      const filtered = commands.filter((c) =>
        c.name.toLowerCase().includes(filter.toLowerCase())
      );

      if (filtered.length === 0) {
        const noResult = document.createElement("div");
        noResult.className = "cmd-item";
        noResult.style.cursor = "default";
        noResult.style.justifyContent = "center";
        noResult.style.opacity = "0.5";
        noResult.textContent = "No commands found";
        list.appendChild(noResult);
        return;
      }

      filtered.forEach((c) => {
        const item = document.createElement("div");
        item.className = "cmd-item";
        item.innerHTML = `<span>${c.name}</span> <span class="cmd-shortcut">${c.shortcut || '↵'}</span>`;
        item.onclick = () => {
          closePalette();
          c.action();
        };
        list.appendChild(item);
      });
    }

    input.oninput = (e) => renderList(e.target.value);

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (overlay.classList.contains("open")) {
          closePalette();
        } else {
          openPalette();
        }
      }
      if (e.key === "Escape" && overlay.classList.contains("open")) {
        closePalette();
      }
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closePalette();
    });
  },
};

/* --- RENDERING FUNCTIONS --- */

function renderSkills() {
  const container = document.querySelector('.skills-grid');
  if (!container) return;
  container.innerHTML = '';

  skillsData.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-skill', skill.id);

    let iconHtml = '';
    if (skill.iconType === 'class') {
      iconHtml = `<i class="${skill.icon.join(' ')}"></i>`;
    } else {
      iconHtml = `<img src="${skill.icon}" alt="${skill.title}" width="48" height="48" />`;
    }

    card.innerHTML = `
      <div class="icon">${iconHtml}</div>
      <h4>${skill.title}</h4>
      <p>${skill.desc}</p>
    `;

    // Add click event for modal
    card.addEventListener("click", () => {
      const modal = document.getElementById("skillModal");
      const modalTitle = document.getElementById("modalTitle");
      const modalDescription = document.getElementById("modalDescription");

      // Note: In a real app, you might want to store descriptions in the data object
      // For now, we'll use the description from the card or a lookup if needed.
      // The original code used a separate skillData object for descriptions.
      // We can use the 'desc' from our data, or if more detail is needed, add it to data.
      // Let's assume 'desc' is enough or we can add a 'longDesc' field later.
      // For this refactor, I'll use the 'desc' field.

      modalTitle.textContent = skill.title;
      modalDescription.textContent = skill.modalDesc || skill.desc;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    container.appendChild(card);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  container.innerHTML = '';

  projectsData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

    const buttonsHtml = project.buttons.map(btn => `
      <a href="${btn.link}" class="btn btn-primary btn-small" target="_blank" rel="noopener noreferrer">
        <i class="${btn.icon.join(' ')}"></i> ${btn.text}
      </a>
    `).join('');

    card.innerHTML = `
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" />
        </div>
      </a>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">${techTags}</div>
        <div class="project-buttons">${buttonsHtml}</div>
      </div>
    `;

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    container.appendChild(card);
  });
}

function renderBlogs() {
  const container = document.getElementById('blog-container');
  if (!container) return;
  container.innerHTML = '';

  blogsData.forEach(blog => {
    const card = document.createElement('article');
    card.className = 'blog-card';

    card.innerHTML = `
      <div class="blog-date">${blog.date}</div>
      <h3 class="blog-title">${blog.title}</h3>
      <p class="blog-excerpt">${blog.excerpt}</p>
      <a href="${blog.link}" class="read-more" target="_blank" rel="noopener noreferrer">Read More →</a>
    `;

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.borderColor = "var(--highlight-color)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.borderColor = "var(--border-color)";
    });

    // Add click event
    card.addEventListener("click", function (e) {
      const readMoreLink = this.querySelector(".read-more");
      if (readMoreLink && readMoreLink.getAttribute("href") !== "#") {
        if (e.target.tagName.toLowerCase() !== "a") {
          window.open(readMoreLink.getAttribute("href"), "_blank");
        }
      }
    });

    container.appendChild(card);
  });
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  container.className = 'experience-timeline';
  container.innerHTML = '';

  experienceData.forEach((exp, index) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('data-index', index);

    // Handle both string and array descriptions
    let descriptionHtml = '';
    if (Array.isArray(exp.description)) {
      descriptionHtml = '<ul class="job-description-list">';
      exp.description.forEach((bullet, i) => {
        descriptionHtml += `<li class="job-bullet" style="animation-delay: ${0.3 + (i * 0.1)}s">${bullet}</li>`;
      });
      descriptionHtml += '</ul>';
    } else {
      descriptionHtml = `<p class="job-description">${exp.description}</p>`;
    }

    const typeTag = exp.type ? `<span class="job-type-tag">${exp.type}</span>` : '';

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3 class="job-title">${exp.title} ${typeTag}</h3>
        <div class="company">${exp.company}</div>
        <div class="job-duration">${exp.duration}</div>
        ${descriptionHtml}
      </div>
      <div class="expand-indicator">▼</div>
    `;

    // Add accessibility attributes
    item.setAttribute('role', 'button');
    item.setAttribute('aria-expanded', 'false');
    item.setAttribute('tabindex', '0');
    item.style.cursor = 'pointer';

    // Click handler for accordion functionality
    const toggleExpand = () => {
      const isExpanded = item.classList.contains('expanded');

      // Toggle expanded state
      item.classList.toggle('expanded');
      item.setAttribute('aria-expanded', !isExpanded);

      // Re-trigger bullet animations when expanding
      if (!isExpanded) {
        const bullets = item.querySelectorAll('.job-bullet');
        bullets.forEach((bullet) => {
          bullet.style.animation = 'none';
          bullet.offsetHeight; // Trigger reflow
          bullet.style.animation = '';
        });
      }
    };

    // Click event
    item.addEventListener('click', toggleExpand);

    // Keyboard support
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpand();
      }
    });

    container.appendChild(item);
  });

  // Initialize scroll animations
  initExperienceAnimations();
}

function initExperienceAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  if (!timelineItems.length) return;

  // Create Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all timeline items
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}


function renderCertificates() {
  const container = document.getElementById('certificates-container');
  if (!container) return;
  container.innerHTML = '';

  certificatesData.forEach(cert => {
    const card = document.createElement('a');
    card.href = cert.link;
    card.className = 'certificate-card';
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    const certifiedTagHtml = cert.certifiedTag ? '<span class="certified-tag">Certified</span>' : '';

    card.innerHTML = `
      <div class="certificate-header">
        <div class="certificate-info">
          <h3>${cert.title} ${certifiedTagHtml}</h3>
          <div class="certificate-issuer">${cert.issuer}</div>
        </div>
      </div>
      <div class="certificate-date">${cert.date}</div>
      <div class="certificate-image-container" style="text-align: center; margin-top: 15px">
        <img src="${cert.image}" alt="${cert.title}" style="width: 100%; max-height: 250px; object-fit: contain; border-radius: 8px;" />
      </div>
    `;

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    container.appendChild(card);
  });
}

function renderContacts() {
  const container = document.querySelector('.contact-grid');
  if (!container) return;
  container.innerHTML = '';

  contactsData.forEach(contact => {
    const card = document.createElement('a');
    card.href = contact.link;
    card.className = 'contact-card';
    if (contact.link.startsWith('http')) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    card.innerHTML = `
      <span class="icon"><i class="${contact.icon.join(' ')}"></i></span>
      <h4>${contact.title}</h4>
      <p>${contact.desc}</p>
    `;

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.background = "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))";
    });
    card.addEventListener("mouseleave", function () {
      this.style.background = "var(--secondary-bg)";
    });

    container.appendChild(card);
  });
}

/* --- MAIN LOGIC --- */

const navItems = document.querySelectorAll(".nav-item:not(#theme-toggle)");
const sections = document.querySelectorAll(".section");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");

function setupLoadMore(containerId, buttonId, initialItems) {
  const container = document.getElementById(containerId);
  const button = document.getElementById(buttonId);

  // Wait for content to be rendered
  setTimeout(() => {
    const items = Array.from(container.children);
    items.forEach((item, index) => {
      if (index >= initialItems) {
        item.classList.add("hidden");
      }
    });

    if (button) {
      if (items.length <= initialItems) {
        button.style.display = "none";
      }

      button.addEventListener("click", () => {
        items.forEach((item) => {
          item.classList.remove("hidden");
        });
        button.style.display = "none";
      });
    }
  }, 100);
}

function setActiveSection(targetSectionId, pushState = true) {
  document.querySelectorAll(".sidebar > .nav-item:not(#theme-toggle)").forEach((nav) => {
    nav.classList.remove("active");
    if (window.innerWidth > 1024) {
      nav.style.borderLeft = "";
    }
  });
  sections.forEach((section) => section.classList.remove("active"));

  const targetNavItem = document.querySelector(
    `.nav-item[data-section="${targetSectionId}"]`
  );
  const targetSection = document.getElementById(targetSectionId);

  if (targetNavItem && targetSection) {
    targetNavItem.classList.add("active");
    targetSection.classList.add("active");

    if (window.innerWidth > 1024) {
      targetNavItem.style.borderLeft = "3px solid var(--highlight-color)";
    }

    if (pushState) {
      history.pushState(
        { section: targetSectionId },
        targetSectionId,
        `#${targetSectionId}`
      );
    }

    smoothTransition();
    if (window.innerWidth <= 1024) {
      if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}

function handleInitialLoadAndPopState() {
  let initialSection = window.location.hash.substring(1) || "about";
  history.replaceState(
    { section: initialSection },
    initialSection,
    `#${initialSection}`
  );
  setActiveSection(initialSection, false);

  window.addEventListener("popstate", (event) => {
    let sectionFromHistory = event.state ? event.state.section : "about";
    setActiveSection(sectionFromHistory, false);
  });
}

function smoothTransition() {
  const activeSection = document.querySelector(".section.active");
  if (activeSection) {
    activeSection.style.opacity = "0";
    activeSection.style.transform = "translateY(20px)";

    setTimeout(() => {
      activeSection.style.opacity = "1";
      activeSection.style.transform = "translateY(0)";
    }, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Render Dynamic Content
  renderSkills();
  renderProjects();
  renderBlogs();
  renderExperience();
  renderCertificates();
  renderContacts();

  setupLoadMore("projects-container", "load-more-projects", 6);
  setupLoadMore("blog-container", "load-more-blog", 6);
  setupLoadMore("certificates-container", "load-more-certificates", 6);

  ThemeManager.init();
  handleInitialLoadAndPopState();
  CommandPalette.init();

  // Modal Close Logic
  const modal = document.getElementById("skillModal");
  const closeModal = document.querySelector(".close-modal");

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  }

  // Initial Animation
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);

  setTimeout(() => {
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = "translateY(-5px)";
        setTimeout(() => {
          card.style.transform = "translateY(0)";
        }, 200);
      }, index * 100);
    });
  }, 1000);
});

mobileMenuToggle.addEventListener("click", function () {
  sidebar.classList.toggle("open");

  if (sidebar.classList.contains("open")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

document.querySelectorAll(".sidebar > .nav-item:not(#theme-toggle)").forEach((item) => {
  item.addEventListener("click", function () {
    const targetSectionId = this.getAttribute("data-section");
    setActiveSection(targetSectionId, true);
  });
});

document.addEventListener("keydown", function (e) {
  const mainNavItems = Array.from(document.querySelectorAll(".sidebar > .nav-item:not(#theme-toggle)"));
  const activeNavIndex = mainNavItems.findIndex((item) =>
    item.classList.contains("active")
  );

  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    if (document.getElementById('cmdOverlay').classList.contains('open')) return;

    e.preventDefault();
    const nextIndex = (activeNavIndex + 1) % mainNavItems.length;
    mainNavItems[nextIndex].click();
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    if (document.getElementById('cmdOverlay').classList.contains('open')) return;

    e.preventDefault();
    const prevIndex =
      activeNavIndex === 0 ? mainNavItems.length - 1 : activeNavIndex - 1;
    mainNavItems[prevIndex].click();
  }
});

let konamiCode = [];
const konamiPattern = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", function (e) {
  konamiCode.push(e.code);
  if (konamiCode.length > konamiPattern.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(",") === konamiPattern.join(",")) {
    document.body.style.animation = "rainbow 2s infinite";
    setTimeout(() => {
      document.body.style.animation = "";
      alert("🎉 Konami Code activated! You found the easter egg!");
    }, 2000);
    konamiCode = [];
  }
});

const style = document.createElement("style");
style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
document.head.appendChild(style);

/* --- CODE PROTECTION --- */
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});
