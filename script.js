/* --- THEME MANAGER SYSTEM --- */
const ThemeManager = {
  init() {
    const toggleBtn = document.getElementById("theme-toggle");
    const text = document.getElementById("theme-text");
    const icon = document.querySelector("#theme-toggle i");
    // 1. Force default to dark
    // const saved = localStorage.getItem("theme");
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
    // 2. Update Text/Icon based on current theme
    if (theme === "dark") {
      icon.className = "fa-solid fa-sun icon";
      text.textContent = "Light Mode"; // Action: Switch to Light
    } else {
      icon.className = "fa-solid fa-moon icon";
      text.textContent = "Dark Mode"; // Action: Switch to Dark
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
      document.body.style.overflow = "hidden"; // Prevent background scrolling
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
      // Check for CTRL+K or META+K (Mac)
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
/* --- EXISTING PORTFOLIO LOGIC --- */
const navItems = document.querySelectorAll(".nav-item:not(#theme-toggle)"); // Exclude theme button from main nav items
const sections = document.querySelectorAll(".section");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");
function setupLoadMore(containerId, buttonId, initialItems) {
  const container = document.getElementById(containerId);
  const button = document.getElementById(buttonId);
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
}
function setActiveSection(targetSectionId, pushState = true) {
  // Only target the primary navigation links, not the theme toggle
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
document.addEventListener("DOMContentLoaded", () => {
  setupLoadMore("projects-container", "load-more-projects", 6);
  setupLoadMore("blog-container", "load-more-blog", 6);
  setupLoadMore("certificates-container", "load-more-certificates", 6);
  // Initialize Theme Manager (must happen before setting initial section)
  ThemeManager.init();
  // Handle URL Hash and initial section display
  handleInitialLoadAndPopState();
  // Initialize Command Palette
  CommandPalette.init();
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
// Target only the main navigation links for click handling
document.querySelectorAll(".sidebar > .nav-item:not(#theme-toggle)").forEach((item) => {
  item.addEventListener("click", function () {
    const targetSectionId = this.getAttribute("data-section");
    setActiveSection(targetSectionId, true);
  });
});
document
  .querySelectorAll(".project-card, .certificate-card")
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    // Using a semi-transparent hover so it works on both themes
    this.style.background = "linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))";
  });
  card.addEventListener("mouseleave", function () {
    this.style.background = "var(--secondary-bg)";
  });
});
document.querySelectorAll(".blog-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    const readMoreLink = this.querySelector(".read-more");
    if (readMoreLink && readMoreLink.getAttribute("href") !== "#") {
      if (e.target.tagName.toLowerCase() !== "a") {
        window.open(readMoreLink.getAttribute("href"), "_blank");
      }
    } else if (
      readMoreLink &&
      readMoreLink.getAttribute("href") === "#"
    ) {
      if (e.target.tagName.toLowerCase() !== "a") {
        const title = this.querySelector(".blog-title").textContent;
        alert(`Blog post: "${title}" is a placeholder and has no link.`);
      }
    }
  });
});
document.querySelectorAll(".contact-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.background =
      "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))";
  });
  card.addEventListener("mouseleave", function () {
    this.style.background = "var(--secondary-bg)";
  });
});
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
document.addEventListener("DOMContentLoaded", function () {
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
document.addEventListener("keydown", function (e) {
  // Filter out the theme toggle which is now also a nav-item
  const mainNavItems = Array.from(document.querySelectorAll(".sidebar > .nav-item:not(#theme-toggle)"));
  const activeNavIndex = mainNavItems.findIndex((item) =>
    item.classList.contains("active")
  );
  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    // Avoid conflict if command palette is open
    if (document.getElementById('cmdOverlay').classList.contains('open')) return;
    e.preventDefault();
    const nextIndex = (activeNavIndex + 1) % mainNavItems.length;
    mainNavItems[nextIndex].click();
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    // Avoid conflict if command palette is open
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
const skillData = {
  aws: {
    title: "AWS",
    desc: "Used AWS EC2 and S3 for cloud deployment automation and scalable infrastructure setup.",
  },
  jenkins: {
    title: "Jenkins",
    desc: "Implemented CI/CD pipelines automating testing, building, and deployment processes.",
  },
  docker: {
    title: "Docker",
    desc: "Built and deployed containerized applications for consistent environments across dev and production.",
  },
  terraform: {
    title: "Terraform",
    desc: "Created reusable IaC templates for provisioning cloud environments efficiently.",
  },
  git: {
    title: "Git",
    desc: "Managed source control workflows using branching, merging, and version management best practices.",
  },
  github: {
    title: "GitHub",
    desc: "Hosted and collaborated on projects, integrated CI/CD actions, and managed repositories.",
  },
  bash: {
    title: "Bash",
    desc: "Automated server setup and deployments through scripting and command-line utilities.",
  },
  python: {
    title: "Python",
    desc: "Developed automation scripts and tools for data processing and backend integration.",
  },
  linux: {
    title: "Linux",
    desc: "Configured, secured, and managed Linux servers for cloud infrastructure.",
  },
  kubernetes: {
    title: "Kubernetes",
    desc: "Deployed and managed containerized workloads with Kubernetes clusters for scalability.",
  },
};
const modal = document.getElementById("skillModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.querySelector(".close-modal");
document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("click", () => {
    const skillKey = card.getAttribute("data-skill");
    const skill = skillData[skillKey];
    if (skill) {
      modalTitle.textContent = skill.title;
      modalDescription.textContent = skill.desc;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

/* --- CODE PROTECTION --- */
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
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
