const content = {
  zh: {
    metaTitle: "颜东宁 | 个人主页",
    metaDescription: "颜东宁的中英双语个人主页。",
    nav: {
      profile: "简介",
      internships: "实习经历",
      hobbies: "爱好",
      contact: "联系",
    },
    hero: {
      title: "颜东宁",
      subtitle: "Dongning (Don) Yan",
    },
    profile: {
      dualDegreeLabel: "本科双学位",
      szuName: "深圳大学",
      szuDegree: "经济学学士 · 金融科技专业",
      szuTime: "2022.09 - 2026.07",
      audenciaName: "Audencia Business School",
      audenciaDegree: "理学学士 · 金融科技专业",
      audenciaTime: "2022.09 - 2026.07",
      exchangeLabel: "法国交换",
      exchangeSchools: "Audencia Business School × Centrale Nantes",
      exchangeProgram: "工商管理项目 BBA Data, AI & Management",
      exchangeTime: "2025.09 - 2025.12",
      skillsLabel: "专业技能",
      programmingSkills: "编程能力：Python（数据分析、机器学习）、SQL",
      toolSkills:
        "通用与金融工具：Microsoft Office（PPT、Word、Excel）、Wind、Bloomberg",
      languageSkills: "语言：雅思 7.5 分",
    },
    internships: [
      {
        logo: "./投控东海.JPG",
        company: "深圳市投控东海投资有限公司",
        department: "并购业务部 实习",
        time: "2026.03 - 至今",
        location: "深圳",
      },
      {
        logo: "./五矿证券.jpg",
        company: "五矿证券",
        department: "研究所新能源组 实习",
        time: "2025.05 - 2025.08",
        location: "深圳",
      },
      {
        logo: "./嘉实国际投资.jpg",
        company: "嘉实国际投资",
        department: "战略市场部 实习",
        time: "2024.07 - 2024.08",
        location: "香港",
      },
      {
        logo: "./平安银行.jpg",
        company: "平安银行深圳分行",
        department: "零售贷款部 实习",
        time: "01/2024 - 02/2024",
        location: "深圳",
      },
    ],
    hobbies: [
      "学院篮球队",
      "视觉中国签约摄影师",
      "影视剧",
      "健身",
      "高尔夫",
      "腰旗橄榄球",
    ],
    contact: {
      labels: {
        email: "邮箱",
        phone: "电话 / 微信",
        location: "城市",
      },
      location: "深圳 / 广州",
    },
  },
  en: {
    metaTitle: "Dongning (Don) Yan | Personal Website",
    metaDescription: "Bilingual personal website for Dongning (Don) Yan.",
    nav: {
      profile: "Profile",
      internships: "Internships",
      hobbies: "Hobbies",
      contact: "Contact",
    },
    hero: {
      title: "颜东宁",
      subtitle: "Dongning (Don) Yan",
    },
    profile: {
      dualDegreeLabel: "Dual Bachelor's Degrees",
      szuName: "Shenzhen University",
      szuDegree: "Bachelor of Economics · Financial Technology",
      szuTime: "Sep 2022 - Jul 2026",
      audenciaName: "Audencia Business School",
      audenciaDegree: "Bachelor of Science · Financial Technology",
      audenciaTime: "Sep 2022 - Jul 2026",
      exchangeLabel: "France Exchange",
      exchangeSchools: "Audencia Business School × Centrale Nantes",
      exchangeProgram: "BBA Data, AI & Management",
      exchangeTime: "Sep 2025 - Dec 2025",
      skillsLabel: "Professional Skills",
      programmingSkills: "Programming: Python (data analysis, machine learning), SQL",
      toolSkills:
        "General & Finance Tools: Microsoft Office (PPT, Word, Excel), Wind, Bloomberg",
      languageSkills: "Language: IELTS 7.5",
    },
    internships: [
      {
        logo: "./投控东海.JPG",
        company: "Toposcend Capital",
        department: "M&A",
        time: "Mar 2026 - Present",
        location: "Shenzhen",
      },
      {
        logo: "./五矿证券.jpg",
        company: "Minmetals Securities",
        department: "Research Institute",
        time: "May 2025 - Aug 2025",
        location: "Shenzhen",
      },
      {
        logo: "./嘉实国际投资.jpg",
        company: "Harvest Global Capital Investments",
        department: "Strategic Marketing Department",
        time: "Jul 2024 - Aug 2024",
        location: "Hong Kong",
      },
      {
        logo: "./平安银行.jpg",
        company: "Ping An Bank Co., Ltd. Shenzhen Branch",
        department: "Retail Loan Department",
        time: "01/2024 - 02/2024",
        location: "Shenzhen",
      },
    ],
    hobbies: [
      "College Basketball Team",
      "Signed Photographer on Visual China",
      "Film and Television Series",
      "Fitness",
      "Golf",
      "Flag Football",
    ],
    contact: {
      labels: {
        email: "Email",
        phone: "Phone / WeChat",
        location: "Location",
      },
      location: "Shenzhen / Guangzhou",
    },
  },
};

const langButtons = document.querySelectorAll("[data-set-lang]");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("[data-section]");
const heroPhoto = document.querySelector(".hero-photo");

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function renderInternships(items) {
  const container = document.getElementById("internshipList");
  container.innerHTML = items
    .map(
      (item) => `
        <article class="internship-item">
          <img class="internship-logo" src="${item.logo}" alt="${item.company} logo" />
          <div class="internship-text">
            <h3>${item.company}</h3>
            <p>${item.department}</p>
          </div>
          <div class="internship-meta">
            <span class="internship-time">${item.time}</span>
            <span class="internship-location">${item.location}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderHobbies(items) {
  const container = document.getElementById("hobbyList");
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function render(lang) {
  const text = content[lang];

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = text.metaTitle;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", text.metaDescription);
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", text.metaTitle);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", text.metaDescription);

  setText("navProfile", text.nav.profile);
  setText("navInternships", text.nav.internships);
  setText("navHobbies", text.nav.hobbies);
  setText("navContact", text.nav.contact);

  setText("heroTitle", text.hero.title);
  setText("heroSubtitle", text.hero.subtitle);

  setText("dualDegreeLabel", text.profile.dualDegreeLabel);
  setText("szuName", text.profile.szuName);
  setText("szuDegree", text.profile.szuDegree);
  setText("szuTime", text.profile.szuTime);
  setText("audenciaName", text.profile.audenciaName);
  setText("audenciaDegree", text.profile.audenciaDegree);
  setText("audenciaTime", text.profile.audenciaTime);
  setText("exchangeLabel", text.profile.exchangeLabel);
  setText("exchangeSchools", text.profile.exchangeSchools);
  setText("exchangeProgram", text.profile.exchangeProgram);
  setText("exchangeTime", text.profile.exchangeTime);
  setText("skillsLabel", text.profile.skillsLabel);
  setText("programmingSkills", text.profile.programmingSkills);
  setText("toolSkills", text.profile.toolSkills);
  setText("languageSkills", text.profile.languageSkills);

  renderInternships(text.internships);
  renderHobbies(text.hobbies);

  setText("contactEmailLabel", text.contact.labels.email);
  setText("contactPhoneLabel", text.contact.labels.phone);

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.setLang === lang);
  });

  localStorage.setItem("site-lang", lang);
}

function updateActiveNav() {
  let currentId = sections[0]?.dataset.section;
  let matchedId = "";
  const headerOffset = 160;
  const probe = Math.max(window.innerHeight * 0.34, 220);
  const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= probe && rect.bottom >= probe) {
      matchedId = section.dataset.section;
    }

    if (!matchedId && window.scrollY + headerOffset >= section.offsetTop) {
      currentId = section.dataset.section;
    }
  });

  if (matchedId) {
    currentId = matchedId;
  }

  if (pageBottom && sections.length) {
    currentId = sections[sections.length - 1].dataset.section;
  }

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
}

let ticking = false;

function updatePhotoOffset() {
  if (!heroPhoto) {
    return;
  }

  const offset = Math.min(window.scrollY * 0.04, 14);
  heroPhoto.style.transform = `translateY(${offset}px)`;
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updatePhotoOffset();
        updateActiveNav();
      });
      ticking = true;
    }
  },
  { passive: true },
);

window.addEventListener("resize", updateActiveNav);

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.setLang;
    if (lang) {
      render(lang);
    }
  });
});

render(localStorage.getItem("site-lang") || "zh");
updateActiveNav();
updatePhotoOffset();
