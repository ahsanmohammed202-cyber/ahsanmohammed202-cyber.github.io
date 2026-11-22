/* BEHAVIOR FILE — you normally do not need to edit this. */
(() => {
  "use strict";
  const data = window.PORTFOLIO || {};
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const safeUrl = (url) => /^https:\/\//i.test(url || "") ? url : "";
  const text = (id, value) => { const element = document.getElementById(id); if (element && value != null) element.textContent = value; };
  text("logo-initials", data.initials || "YN");
  text("hero-name", String(data.name || "Your Name").toUpperCase());
  text("hero-description", data.shortIntro);
  text("hero-location", data.location);
  text("hero-status", data.status);
  text("about-title", data.aboutTitle);
  text("about-one", data.aboutOne);
  text("about-two", data.aboutTwo);
  text("footer-note", data.footerNote);
  const logo = $("#footer-logo");
  if (logo) { logo.textContent = String(data.name || "Your Name").toUpperCase(); const period = document.createElement("span"); period.textContent = "."; logo.appendChild(period); }
  document.title = `${data.name || "Your Name"} | Statistics & Research`;
  const metaDesc = $('meta[name="description"]');
  if (metaDesc && data.shortIntro) metaDesc.content = data.shortIntro;
  const interests = $("#interest-pills");
  if (interests) interests.innerHTML = (data.interests || []).map(item => `<span>${escapeHTML(item)}</span>`).join("");

  const art = {
    market: `<svg viewBox="0 0 360 180" role="img" aria-label="Illustrative market trends"><defs><linearGradient id="line1" x1="0" x2="1"><stop stop-color="#6de9e0"/><stop offset="1" stop-color="#af81ff"/></linearGradient></defs><path d="M15 145H345" stroke="#647bb7" opacity=".5"/><path d="M15 144L62 119 112 129 153 91 199 109 248 69 291 77 345 28" fill="none" stroke="url(#line1)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><g fill="#6de9e0" stroke="#20204a" stroke-width="4"><circle cx="62" cy="119" r="7"/><circle cx="153" cy="91" r="7"/><circle cx="248" cy="69" r="7"/><circle cx="345" cy="28" r="8"/></g><g fill="#b58cfb" opacity=".3"><rect x="23" y="95" width="26" height="50" rx="4"/><rect x="85" y="74" width="26" height="71" rx="4"/><rect x="183" y="96" width="26" height="49" rx="4"/><rect x="266" y="85" width="26" height="60" rx="4"/></g></svg>`,
    nlp: `<svg viewBox="0 0 360 180" role="img" aria-label="Illustration of reconstructing incomplete text">
      <g font-family="monospace" font-size="18" font-weight="600"><text x="28" y="47" fill="#9c8dff">data[0:...]</text><text x="28" y="87" fill="#dce6ff">the qu_ck br_wn</text><text x="28" y="128" fill="#74ece3">the quick brown</text></g>
      <path d="M30 103H323" stroke="#8d7ec1" stroke-dasharray="5 7" opacity=".65"/><path d="M297 90l22 13-22 13" fill="none" stroke="#72e8e4" stroke-width="3" stroke-linejoin="round"/><rect x="18" y="13" width="324" height="147" rx="14" fill="none" stroke="#8e85ce" opacity=".38"/>
    </svg>`,
    regression: `<svg viewBox="0 0 360 180" role="img" aria-label="Illustrative regression scatterplot"><g fill="#9d89f7" opacity=".8"><circle cx="37" cy="131" r="5"/><circle cx="67" cy="108" r="6"/><circle cx="77" cy="137" r="4"/><circle cx="108" cy="104" r="5"/><circle cx="135" cy="95" r="5"/><circle cx="155" cy="108" r="4"/><circle cx="178" cy="82" r="6"/><circle cx="206" cy="66" r="5"/><circle cx="216" cy="99" r="4"/><circle cx="247" cy="57" r="6"/><circle cx="274" cy="54" r="5"/><circle cx="304" cy="47" r="4"/><circle cx="327" cy="25" r="6"/></g><path d="M25 151L338 25" fill="none" stroke="#75f0df" stroke-width="5" stroke-linecap="round"/><path d="M25 151L338 25" fill="none" stroke="#fff" stroke-width="22" opacity=".05"/></svg>`,
    experiment: `<svg viewBox="0 0 360 180" role="img" aria-label="Illustrative experiment comparison"><g font-family="sans-serif" font-size="11" fill="#c8c4e7"><text x="39" y="163">Group A</text><text x="149" y="163">Group B</text><text x="256" y="163">Comparison</text></g><g fill="#947afa"><rect x="30" y="84" width="63" height="64" rx="8"/><rect x="137" y="53" width="63" height="95" rx="8"/></g><g fill="#6de9e0"><rect x="243" y="30" width="63" height="118" rx="8"/></g><path d="M24 151H317" stroke="#b2b6df" stroke-width="2" opacity=".55"/><g fill="none" stroke="#d0bdff" opacity=".75"><path d="M59 73V58M166 43V25M272 20V8"/><path d="M49 58H69M156 25H176M262 8H282"/></g></svg>`
  };
  const workGrid = $("#work-grid");
  if (workGrid) {
    workGrid.innerHTML = (data.work || []).map((project,index) => {
      const link = safeUrl(project.link);
      const label = escapeHTML(project.label);
      return `<article class="work-card fade-up">
        <div class="work-art">${art[project.visual] || art.regression}<span class="art-corner">// ${label}</span></div>
        <div class="work-card-body"><div class="work-meta"><span class="work-number">${escapeHTML(project.number || String(index+1).padStart(2,'0'))} / ${label}</span><span class="work-badge">${escapeHTML(project.badge || "")}</span></div>
        <h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.description)}</p>
        <div class="work-tags">${(project.tags || []).map(tag=>`<span>${escapeHTML(tag)}</span>`).join("")}</div>
        <div class="work-bottom"><span>${link ? "PROJECT DETAILS" : "PROJECT OVERVIEW"}</span>${link ? `<a href="${escapeHTML(link)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(project.title)}">View project ↗</a>` : `<span aria-hidden="true">↗</span>`}</div></div></article>`;
    }).join("");
  }
  const experienceTimeline = $("#experience-timeline");
  if (experienceTimeline) experienceTimeline.innerHTML = (data.experience || []).map(job => `<article class="experience-item fade-up"><div class="experience-date">${escapeHTML(job.dates)}</div><div><h3>${escapeHTML(job.role)}</h3><p class="experience-org">${escapeHTML(job.organization)}</p><p class="experience-description">${escapeHTML(job.description)}</p></div></article>`).join("");
  const communityGrid = $("#community-grid");
  if (communityGrid) communityGrid.innerHTML = (data.community || []).map((item,i) => `<article class="community-card fade-up"><div class="community-icon">${["✳","◈","✦","✎"][i%4]}</div><h3>${escapeHTML(item.title)}</h3><p class="community-subtitle">${escapeHTML(item.subtitle)}</p><p class="community-description">${escapeHTML(item.description)}</p></article>`).join("");
  text("language-list",data.languages);
  text("personal-interests",data.personalInterests);
  const timeline = $("#education-timeline");
  if (timeline) timeline.innerHTML = (data.studies || []).map(study=>`<article class="education-item fade-up"><span class="education-date">${escapeHTML(study.dates)}</span><h3>${escapeHTML(study.degree)}</h3><p class="education-school">${escapeHTML(study.school)}</p><p class="education-detail">${escapeHTML(study.detail)}</p></article>`).join("");
  const skillGrid = $("#skill-grid");
  if (skillGrid) skillGrid.innerHTML = (data.skills || []).map((group,i)=>`<article class="skill-card fade-up"><div class="skill-head"><h3>${escapeHTML(group.category)}</h3><span>${["∑","◎","⌘"][i%3]}</span></div><div class="skill-list">${(group.items||[]).map(item=>`<span>${escapeHTML(item)}</span>`).join("")}</div></article>`).join("");

  const contactButtons = $("#contact-buttons");
  const links = [];
  const email = (data.email || "").trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) links.push(`<a class="button button-primary" href="mailto:${escapeHTML(email)}">Send an email <span>↗</span></a>`);
  if (safeUrl(data.linkedin)) links.push(`<a class="button button-ghost" href="${escapeHTML(data.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>`);
  if (safeUrl(data.github)) links.push(`<a class="button button-ghost" href="${escapeHTML(data.github)}" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>`);
  if (data.cv && (data.cv === "cv.html" || /^(assets\/)[^?#]+\.pdf$/i.test(data.cv))) links.push(`<a class="button button-ghost" href="${escapeHTML(data.cv)}" target="_blank" rel="noopener noreferrer">View my CV <span>↗</span></a>`);
  if (contactButtons && links.length) {
    contactButtons.innerHTML = links.join("");
    const hint = $("#contact-hint"); if (hint) hint.hidden = true;
  }

  // Theme: persists after a page refresh; safe fallback when storage is blocked.
  const themeButton = $("#theme-switch");
  try { const saved = window.localStorage.getItem("portfolio-theme"); if (saved === "light" || saved === "dark") document.documentElement.dataset.theme = saved; } catch (_) {}
  if (themeButton) themeButton.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content",theme === "dark" ? "#080b1b" : "#f7f7ff");
    try { window.localStorage.setItem("portfolio-theme",theme); } catch (_) {}
  });

  // Menu accessibility: click link, click toggle, or press Escape.
  const menuToggle = $("#menu-toggle"), nav = $("#site-navigation");
  const closeMenu = () => { nav?.classList.remove("open"); menuToggle?.setAttribute("aria-expanded","false"); menuToggle?.setAttribute("aria-label","Open navigation"); };
  menuToggle?.addEventListener("click", () => {
    const isOpen = nav?.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",String(!!isOpen));
    menuToggle.setAttribute("aria-label",isOpen ? "Close navigation" : "Open navigation");
  });
  $$(".nav-link").forEach(link=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry=>{
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }),{threshold:.08,rootMargin:"0px 0px 32px 0px"});
    $$(".fade-up").forEach((item,i) => { item.style.transitionDelay = `${Math.min(i % 4, 3)*75}ms`; observer.observe(item); });
  } else $$(".fade-up").forEach(el=>el.classList.add("is-visible"));

  const roles = (data.roles || []).filter(Boolean);
  const role = $("#rotating-role");
  if (role && roles.length) {
    role.textContent = roles[0];
    if (!reducedMotion && roles.length > 1) {
      let i = 0;
      window.setInterval(()=> { i=(i+1)%roles.length; role.animate([{opacity:0,transform:"translateY(6px)"},{opacity:1,transform:"translateY(0)"}],{duration:400}); role.textContent=roles[i]; }, 3300);
    }
  }
  const header = $(".header"), progress = $("#scroll-progress");
  let ticking = false;
  const updateScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle("scrolled",y>15);
    if (progress) progress.style.width = `${Math.max(0,Math.min(100,(y / Math.max(1,document.documentElement.scrollHeight-window.innerHeight))*100))}%`;
    ticking=false;
  };
  window.addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true;}},{passive:true});
  updateScroll();
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      $$(".nav-link").forEach(link=>link.classList.toggle("active",link.hash === `#${id}`));
    }),{rootMargin:"-25% 0px -65% 0px",threshold:0});
    $$("main section[id]").forEach(section=>sectionObserver.observe(section));
  }
})();
