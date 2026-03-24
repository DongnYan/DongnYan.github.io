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
      subtitle: "Dongning Yan",
    },
    profile: {
      dualDegreeLabel: "本科双学位",
      szuDegree: "经济学学士 金融科技专业 2022 - 2026",
      audenciaDegree: "理学学士 金融科技专业 2022 - 2026",
      coreCoursesLabel: "核心课程",
      coreCoursesText:
        "公司金融、金融科技导论、金融计量学、投资管理、金融风险管理、计量经济学、人工智能与机器学习、数据库系统等",
      exchangeLabel: "交换项目",
      exchangeText:
        "Audencia Business School – Centrale Nantes 工商管理项目 交换 2025.09 - 2025.12。核心课程：大数据分析、供应链管理、国际贸易运营、工业 BI 等",
      ieltsLabel: "语言成绩",
      ieltsText: "雅思 7.5 分",
    },
    internships: [
      {
        logo: "./投控东海.JPG",
        company: "深圳市投控东海投资有限公司",
        department: "并购业务部 实习",
        meta: "深圳 / 2026.03 - 至今",
      },
      {
        logo: "./五矿证券.jpg",
        company: "五矿证券",
        department: "研究所新能源组 实习",
        meta: "深圳 / 2025.05 - 2025.08",
      },
      {
        logo: "./嘉实国际投资.jpg",
        company: "嘉实国际投资",
        department: "战略市场部 实习",
        meta: "香港 / 2024.07 - 2024.08",
      },
    ],
    hobbies: [
      "篮球：学院篮球队",
      "摄影：视觉中国签约摄影师",
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
    metaTitle: "Dongning Yan | Personal Website",
    metaDescription: "Bilingual personal website for Dongning Yan.",
    nav: {
      profile: "Profile",
      internships: "Internships",
      hobbies: "Hobbies",
      contact: "Contact",
    },
    hero: {
      title: "Dongning Yan",
      subtitle: "颜东宁",
    },
    profile: {
      dualDegreeLabel: "Dual Bachelor's Degrees",
      szuDegree: "Bachelor of Economics in Financial Technology, 2022 - 2026",
      audenciaDegree: "Bachelor of Science in Financial Technology, 2022 - 2026",
      coreCoursesLabel: "Core Courses",
      coreCoursesText:
        "Corporate Finance, Introduction to FinTech, Financial Econometrics, Investment Management, Financial Risk Management, Econometrics, Artificial Intelligence and Machine Learning, Database Systems, etc.",
      exchangeLabel: "Exchange Program",
      exchangeText:
        "Audencia Business School - Centrale Nantes Business Administration Program, Exchange Sep 2025 - Dec 2025. Core courses: Big Data Analytics, Supply Chain Management, International Trade Operations, Industrial BI, etc.",
      ieltsLabel: "Language Score",
      ieltsText: "IELTS 7.5",
    },
    internships: [
      {
        logo: "./投控东海.JPG",
        company: "Shenzhen Topsocend Capital Co., Ltd.",
        department: "M&A Division Intern",
        meta: "Shenzhen / Mar 2026 - Present",
      },
      {
        logo: "./五矿证券.jpg",
        company: "Minmetals Securities",
        department: "New Energy Research Group Intern",
        meta: "Shenzhen / May 2025 - Aug 2025",
      },
      {
        logo: "./嘉实国际投资.jpg",
        company: "Harvest Global Capital Investments Limited",
        department: "Strategic Marketing Department Intern",
        meta: "Hong Kong / Jul 2024 - Aug 2024",
      },
    ],
    hobbies: [
      "Basketball: college team",
      "Photography: signed photographer on Visual China",
      "Film and television series",
      "Fitness",
      "Golf",
      "Flag football",
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
          <p class="internship-meta">${item.meta}</p>
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
  setText("szuDegree", text.profile.szuDegree);
  setText("audenciaDegree", text.profile.audenciaDegree);
  setText("coreCoursesLabel", text.profile.coreCoursesLabel);
  setText("coreCoursesText", text.profile.coreCoursesText);
  setText("exchangeLabel", text.profile.exchangeLabel);
  setText("exchangeText", text.profile.exchangeText);
  setText("ieltsLabel", text.profile.ieltsLabel);
  setText("ieltsText", text.profile.ieltsText);

  renderInternships(text.internships);
  renderHobbies(text.hobbies);

  setText("contactEmailLabel", text.contact.labels.email);
  setText("contactPhoneLabel", text.contact.labels.phone);
  setText("contactLocationLabel", text.contact.labels.location);
  setText("contactLocationValue", text.contact.location);

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.setLang === lang);
  });

  localStorage.setItem("site-lang", lang);
}

function updateActiveNav() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = entry.target.dataset.section;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    {
      threshold: 0.24,
      rootMargin: "-18% 0px -60% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
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
      window.requestAnimationFrame(updatePhotoOffset);
      ticking = true;
    }
  },
  { passive: true },
);

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
