/* QozmixAI landing page
 * - English lives in the HTML (what crawlers and reviewers see first).
 * - Korean lives in KO below. The page switches automatically for Korean browsers,
 *   via ?lang=ko / ?lang=en, or with the language button (choice is remembered).
 */
(function () {
  "use strict";

  var STORAGE_KEY = "qozmix-lang";
  var EMAIL = "hello@qozmixai.tech";

  var META = {
    en: {
      title: "QozmixAI — AI social media marketing for SMEs in Korea",
      description: "QozmixAI plans a month of social media content for small businesses in Korea, writes on-brand posts and designs ready-to-post carousels. You review and approve.",
      toggle: "한국어",
      mailSubject: "QozmixAI early access",
      mailBody: "Hi QozmixAI team,\n\nBusiness name:\nIndustry:\nInstagram / website:\nWhat I'd like help with:\n\nThanks!"
    },
    ko: {
      title: "QozmixAI — 국내 중소기업을 위한 AI 소셜 미디어 마케팅",
      description: "QozmixAI가 한 달 치 SNS 콘텐츠를 기획하고, 브랜드에 맞는 게시물과 바로 올릴 수 있는 카드뉴스를 만들어 드립니다. 사장님은 확인하고 승인만 하세요.",
      toggle: "English",
      mailSubject: "QozmixAI 얼리 액세스 신청",
      mailBody: "안녕하세요, QozmixAI 팀.\n\n업체명:\n업종:\n인스타그램 / 웹사이트:\n도움받고 싶은 부분:\n\n감사합니다."
    }
  };

  var KO = {
    "skip": "본문으로 바로가기",
    "nav.how": "이용 방법",
    "nav.features": "기능",
    "nav.pricing": "요금제",
    "nav.team": "팀 소개",
    "nav.cta": "얼리 액세스 신청",

    "hero.eyebrow": "국내 중소기업을 위한 AI 소셜 미디어 마케팅",
    "hero.title": "편집은 줄이고,<br><span class=\"accent\">판매는 늘리고.</span>",
    "hero.lead": "QozmixAI가 한 달 치 SNS 콘텐츠를 기획하고, 브랜드에 맞는 게시물을 작성하고, 바로 올릴 수 있는 카드뉴스까지 디자인합니다. 사장님은 확인하고 승인만 하세요. 남는 시간은 본업에 집중하시면 됩니다.",
    "hero.cta": "얼리 액세스 신청",
    "hero.secondary": "이용 방법 보기",
    "hero.badge1": "K-Startup 그랜드 챌린지 · Top 20",
    "hero.badge2": "경희대 Glofers 해커톤 · Top 11",
    "hero.badge3": "IKBIC 파일럿 진행 중",

    "mock.title": "게시물 · 2026년 10월",
    "mock.saved": "저장됨",
    "mock.mix": "콘텐츠 구성",
    "mock.edu": "정보형",
    "mock.promo": "홍보형",
    "mock.comm": "소통형",
    "mock.planned": "게시물 18개 기획됨",
    "mock.idea1": "속눈썹 연장 후 관리, 흔한 실수 5가지",
    "mock.draft": "초안 완성",
    "mock.edit": "검토/수정",
    "mock.replace": "교체",
    "mock.approve": "승인",
    "mock.idea2": "10월 퍼스널 컬러 이벤트",
    "mock.final": "최종 승인 완료",
    "mock.carousel": "카드뉴스 · 5장 · 내보내기 가능",
    "mock.caption": "MVP 화면 예시 · 샘플 업체 ‘하나 뷰티 스튜디오’",
    "mock.chip": "모든 게시물은 직접 승인 후 게시",

    "problem.eyebrow": "문제",
    "problem.title": "고객은 SNS를 보고 업체를 판단합니다. 문제는 꾸준히 운영하기가 어렵다는 것입니다.",
    "problem.c1.title": "멈춘 SNS는 고객을 놓칩니다",
    "problem.c1.text": "고객은 예약하거나 구매하기 전에 인스타그램이나 블로그를 먼저 확인합니다. 몇 달째 업데이트가 없는 계정을 보면 망설이게 됩니다.",
    "problem.c2.title": "대행사는 비싸고, 직접 하면 시간이 너무 걸립니다",
    "problem.c2.text": "작은 업체는 매달 대행사에 비용을 내거나, 게시물 하나를 위해 기획·작성·디자인·플랫폼별 수정까지 몇 시간씩 직접 씁니다.",
    "problem.c3.title": "외국인 창업자에게 한국 SNS는 어렵습니다",
    "problem.c3.text": "한국에 진출한 외국 스타트업에는 한국 고객에게 자연스럽게 읽히는 콘텐츠가 필요합니다. 기계 번역으로는 부족합니다.",

    "how.eyebrow": "이용 방법",
    "how.title": "브랜드 정보만 있으면, 세 단계로 게시물이 완성됩니다",
    "how.s1.title": "브랜드는 한 번만 설정",
    "how.s1.text": "업체 소개, 고객층, 말투, 브랜드 컬러를 알려주시고 마음에 드는 게시물 몇 개를 올려주세요. QozmixAI가 브랜드 스타일을 학습합니다.",
    "how.s2.title": "월간 콘텐츠 계획 승인",
    "how.s2.text": "정보형·홍보형·소통형 콘텐츠를 균형 있게 구성한 한 달 치 아이디어를 받아보세요. 마음에 드는 건 남기고, 아닌 건 바꾸면 됩니다.",
    "how.s3.title": "바로 올릴 수 있는 콘텐츠 완성",
    "how.s3.text": "AI가 문구, 캡션, 해시태그를 작성하고 브랜드 템플릿에 맞춰 단일 게시물이나 카드뉴스로 디자인합니다. 원하는 부분을 수정하고 최종 승인한 뒤 내보내세요.",

    "features.eyebrow": "기능",
    "features.title": "파일럿에서 사용할 수 있는 기능과 개발 중인 기능",
    "features.sub": "QozmixAI는 파일럿 파트너와 함께 단계적으로 만들어가고 있습니다. 각 기능의 현재 상태를 그대로 보여드립니다.",
    "features.live": "파일럿에서 사용 가능",
    "features.soon": "개발 중",
    "f.brand.title": "브랜드 설정 및 스타일 분석",
    "f.brand.text": "브랜드 설문과 참고 게시물 AI 분석으로 컬러, 폰트, 레이아웃을 제안하고, 사장님이 직접 확정합니다.",
    "f.plan.title": "월간 콘텐츠 계획",
    "f.plan.text": "원하는 게시물 수와 콘텐츠 구성을 정하세요. 뻔한 템플릿이 아니라 우리 업체에 맞춘 아이디어를 기획합니다.",
    "f.copy.title": "AI 문구, 캡션, 해시태그",
    "f.copy.text": "승인한 아이디어마다 브랜드 말투로 문구를 작성하고, 슬라이드에 맞게 분량을 조정합니다.",
    "f.templates.title": "브랜드 템플릿 및 편집기",
    "f.templates.text": "단일 게시물과 최대 10장의 카드뉴스를 브랜드 템플릿으로 만들고, 내보내기 전에 자유롭게 수정할 수 있습니다.",
    "f.approval.title": "2단계 승인",
    "f.approval.text": "승인 없이는 아무것도 나가지 않습니다. 먼저 아이디어를 승인하고, 그다음 최종 디자인을 승인합니다.",
    "f.facts.title": "정확한 홍보 정보",
    "f.facts.text": "AI가 가격, 할인, 날짜, 후기를 지어내지 않습니다. 사장님이 승인한 정보만 게시물에 들어갑니다.",
    "f.korean.title": "자연스러운 한국어 콘텐츠",
    "f.korean.text": "번역투가 아닌 자연스러운 한국어 문구. 게시 전에 한국인 검수자가 확인합니다.",
    "f.publish.title": "예약 및 자동 게시",
    "f.publish.text": "인스타그램, 페이스북, 링크드인, 네이버 블로그, 유튜브, 틱톡에 바로 게시합니다.",
    "f.trends.title": "트렌드",
    "f.trends.text": "업종별 인기 주제를 찾아 클릭 한 번으로 콘텐츠 아이디어로 만들어 드립니다.",
    "f.community.title": "커뮤니티 허브",
    "f.community.text": "모든 플랫폼의 리뷰와 문의를 한곳에서 확인하고, 추천 답변을 받아보세요.",
    "f.media.title": "블로그, 숏폼 영상, AI 인플루언서",
    "f.media.text": "링크드인·네이버 블로그 글, 숏폼 영상, 브랜드 전용 AI 인플루언서.",
    "f.autopilot.title": "오토파일럿",
    "f.autopilot.text": "설정한 브랜드 규칙에 따라 콘텐츠를 기획하고 게시까지 해주는 선택형 모드입니다.",

    "gallery.eyebrow": "MVP 둘러보기",
    "gallery.title": "개발 중인 제품의 실제 화면",
    "gallery.posts": "월간 계획 및 게시물 아이디어",
    "gallery.editor": "카드뉴스 편집기",
    "gallery.calendar": "콘텐츠 캘린더",

    "aud.eyebrow": "이런 분들께 맞습니다",
    "aud.title": "마케팅 팀이 없는 업체를 위해 만들었습니다",
    "aud.c1.title": "국내 중소기업",
    "aud.c1.text": "뷰티·피트니스 스튜디오, 병의원 등 SNS 운영이 꼭 필요하지만 시간이 부족한 라이프스타일·웰니스 업체.",
    "aud.c2.title": "한국에 진출한 외국 스타트업",
    "aud.c2.text": "한국 고객에게 현지 감성의 콘텐츠로 다가가고 싶은 창업자. 저희도 같은 길을 걸어왔습니다.",

    "rec.eyebrow": "선정 및 파일럿",
    "rec.title": "한국 스타트업 생태계에서 받은 초기 검증",
    "rec.c1.title": "K-Startup 그랜드 챌린지",
    "rec.c1.text": "Top 20에 선정되어 현재 액셀러레이팅 프로그램에 참여하고 있습니다.",
    "rec.c2.title": "경희대학교 Glofers 스타트업 해커톤",
    "rec.c2.text": "Top 11 팀으로 선정되었습니다. 최종 결과는 발표 예정입니다.",
    "rec.c3.stat": "파일럿",
    "rec.c3.text": "India–Korea Business & Innovation Corridor(IKBIC)와 파일럿을 진행 중입니다. 완성도를 높이기 위해 한 곳과 먼저 시작했습니다.",

    "pricing.eyebrow": "요금제",
    "pricing.title": "출시 예정 요금",
    "pricing.sub": "출시 시점의 월 요금입니다. ‘개발 중’ 기능은 출시되는 대로 추가됩니다.",
    "pricing.month": "/월",
    "pricing.posts": "게시물",
    "pricing.blogs": "블로그",
    "pricing.videos": "영상",
    "pricing.influencer": "AI 인플루언서",

    "team.eyebrow": "팀 소개",
    "team.title": "서울에서 시작한 글로벌 창업팀",
    "team.sub": "저희는 한국의 소상공인과 한국에 진출하는 스타트업에게 꼭 필요했던 마케팅 도구를 만들고 있는 유학생 팀입니다.",
    "team.jannat.role": "창업자 & CEO",
    "team.jannat.bio": "서울대학교 경영학과 (컴퓨터공학 부전공) · Indian Students and Researchers in Korea 부회장",
    "team.zain.role": "공동창업자 & CTO",
    "team.zain.bio": "서울대학교 컴퓨터공학부 · Pakistan Students Association in Korea 미디어 코디네이터",
    "team.aliza.role": "팀원",
    "team.aliza.bio": "연세대학교 건설환경공학 / 인공지능 · 연세대학교 외국인 학생회(Yonsei Foreign Student Union) 회장",
    "team.advisors": "자문단",
    "team.bang.bio": "BBC & Company 대표 · 국민권익위원회·농림축산식품부 자문",
    "team.iqbal.bio": "경희대학교 연구부교수 · Indian Students and Researchers in Korea 회장 · IKBIC 대표",

    "cta.eyebrow": "얼리 액세스",
    "cta.title": "파일럿에 참여하고 싶으신가요?",
    "cta.text": "완성도를 위해 소수의 업체와 먼저 함께하고 있습니다. 업체에 대해 알려주시면 연락드리겠습니다.",
    "cta.button": "이메일 보내기",

    "footer.tag": "편집은 줄이고, 판매는 늘리고.",
    "footer.privacy": "개인정보처리방침",
    "footer.copy": "© 2026 QozmixAI · 대한민국 서울"
  };

  var textNodes = document.querySelectorAll("[data-i18n]");
  var htmlNodes = document.querySelectorAll("[data-i18n-html]");
  var EN = {};
  textNodes.forEach(function (el) { EN[el.getAttribute("data-i18n")] = el.textContent; });
  htmlNodes.forEach(function (el) { EN[el.getAttribute("data-i18n-html")] = el.innerHTML; });

  function setLang(lang, persist) {
    if (lang !== "ko") lang = "en";
    var dict = lang === "ko" ? KO : EN;
    textNodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    htmlNodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    var meta = META[lang];
    document.documentElement.lang = lang;
    document.title = meta.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
    document.querySelectorAll("[data-lang-toggle]").forEach(function (b) { b.textContent = meta.toggle; });
    document.querySelectorAll("[data-mailto]").forEach(function (a) {
      a.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(meta.mailSubject) + "&body=" + encodeURIComponent(meta.mailBody);
    });
    if (persist) { try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {} }
  }

  function initialLang() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "ko" || param === "en") return param;
    try { var saved = localStorage.getItem(STORAGE_KEY); if (saved) return saved; } catch (e) {}
    return (navigator.language || "").toLowerCase().indexOf("ko") === 0 ? "ko" : "en";
  }

  setLang(initialLang(), false);

  document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(document.documentElement.lang === "ko" ? "en" : "ko", true);
    });
  });

  // Mobile menu
  var menuBtn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Optional images: only shown once the file exists in the repo.
  function loadImage(src, alt, onLoad) {
    var img = new Image();
    img.alt = alt || "";
    img.decoding = "async";
    img.onload = function () { onLoad(img); };
    img.src = src;
  }

  // Logo mark in the header (assets/img/logo-mark.png)
  document.querySelectorAll(".brand-mark[data-src]").forEach(function (el) {
    loadImage(el.getAttribute("data-src"), "", function (img) {
      el.appendChild(img);
      el.hidden = false;
    });
  });

  // Team photos (assets/img/team/*.jpg). Initials stay if a photo is missing.
  document.querySelectorAll(".avatar[data-photo]").forEach(function (el) {
    loadImage(el.getAttribute("data-photo"), el.getAttribute("data-alt"), function (img) {
      el.textContent = "";
      el.appendChild(img);
    });
  });

  // Screenshot gallery (assets/img/screens/*.png). The section appears once at least one exists.
  var gallery = document.getElementById("gallery");
  document.querySelectorAll(".gallery figure[data-src]").forEach(function (fig) {
    var caption = fig.querySelector("figcaption");
    loadImage(fig.getAttribute("data-src"), caption ? caption.textContent : "", function (img) {
      fig.insertBefore(img, fig.firstChild);
      fig.hidden = false;
      if (gallery) gallery.hidden = false;
    });
  });
})();
