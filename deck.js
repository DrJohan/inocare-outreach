(() => {
  "use strict";

  const CONTACT_SOURCE = "https://klinikinocare.com/contact-us/";
  const params = new URLSearchParams(window.location.search);
  const partner = params.get("partner")?.trim();
  const programme = params.get("programme")?.trim();
  const slides = [...document.querySelectorAll(".reveal .slides > section")];
  const totalSlides = slides.length;

  const translations = {
    en: {
      pageTitle: "Community Health Outreach",
      metaDescription: "Klinik Inocare Community Health Outreach co-organiser briefing deck",
      coverEyebrow: "Outreach programme",
      programmeTitle: "Community Health<br>Outreach",
      coverLead: "Trusted care, closer to your community.",
      agencies: "Agencies",
      mosques: "Mosques",
      organisations: "Organisations",
      preparedFor: "Prepared for",
      prospectivePartners: "prospective co-organisers",
      audienceGroup: "Suitable co-organisers",
      languageSelector: "Choose presentation language",
      conceptImage: "Conceptual outreach image • AI-generated",
      coverPhotoAlt: "Conceptual Malaysian community health outreach welcome",
      healthCheckPhotoAlt: "Conceptual Malaysian community blood pressure check",
      planningPhotoAlt: "Conceptual co-organiser planning meeting",
      whyEyebrow: "Why outreach",
      whyTitle: "A practical way to serve your community.",
      meetWhere: "Meet people where<br>they already gather.",
      onsite: "On-site",
      yourVenue: "At your venue",
      focused: "Focused",
      yourAudience: "For your audience",
      actionable: "Actionable",
      clearNextSteps: "With clear next steps",
      formatEyebrow: "Proposed format",
      formatTitle: "One visit. A clear health pathway.",
      pathwayAria: "Check, explain, and guide",
      check: "Check",
      riskChecks: "Selected health<br>risk checks",
      explain: "Explain",
      educationGuidance: "Focused education<br>&amp; guidance",
      guide: "Guide",
      appropriateNextStep: "Appropriate<br>next step",
      scopeAgreed: "Final scope is agreed with the co-organiser.",
      modularEyebrow: "Modular by design",
      modularTitle: "Choose the right programme mix.",
      yourAudienceShort: "Your<br>audience",
      selectedChecks: "Selected<br>checks",
      healthEducation: "Health<br>education",
      woundFoot: "Wound &amp; foot<br>awareness",
      followupGuidance: "Follow-up<br>guidance",
      buildSession: "Build the session around the people you serve.",
      participantEyebrow: "Participant experience",
      participantTitle: "A simple participant journey.",
      journeyAria: "Participant journey",
      welcome: "Welcome",
      consent: "Consent",
      conversation: "Conversation",
      nextStep: "Next step",
      voluntary: "Participation is voluntary.",
      suitability: "Suitability depends on clinical assessment.",
      settingEyebrow: "Flexible setting",
      settingTitle: "Designed for your setting.",
      agency: "Agency",
      convenient: "Convenient",
      timeBoxed: "Time-boxed",
      mosque: "Mosque",
      accessible: "Accessible",
      familiar: "Familiar",
      clientGroup: "Client group",
      tailored: "Tailored",
      organised: "Organised",
      oneFramework: "One framework. Tailored delivery.",
      deliveryEyebrow: "Shared delivery",
      deliveryTitle: "Clear roles make the day run smoothly.",
      coorganiser: "Co-organiser",
      convening: "Convening the community",
      audienceInvitation: "Audience invitation",
      venueFlow: "Venue &amp; participant flow",
      onsiteCoordinator: "On-site coordinator",
      clinicalDelivery: "Guiding the clinical delivery",
      clinicalTeam: "Clinical team",
      equipmentMaterials: "Agreed equipment &amp; materials",
      screeningFollowup: "Screening &amp; follow-up guidance",
      together: "Together:",
      togetherItems: "scope&nbsp;&nbsp;•&nbsp;&nbsp;schedule&nbsp;&nbsp;•&nbsp;&nbsp;promotion&nbsp;&nbsp;•&nbsp;&nbsp;participant experience",
      outcomesEyebrow: "Shared outcomes",
      outcomesTitle: "Success is visible—and measurable.",
      measuresAria: "Suggested outreach measures",
      registrations: "Registrations",
      attendance: "Attendance",
      completedChecks: "Completed<br>checks",
      participantFeedback: "Participant<br>feedback",
      targetsReporting: "Targets and reporting format are agreed before the event.",
      planningEyebrow: "Planning together",
      planningTitle: "Five decisions take us from idea to event.",
      planningAria: "Outreach planning steps",
      alignObjective: "Align<br>objective",
      confirmModules: "Confirm<br>modules",
      promoteRegister: "Promote &amp;<br>register",
      deliverEvent: "Deliver<br>event",
      reviewOutcomes: "Review<br>outcomes",
      adaptedCalendar: "A simple plan—adapted to your calendar.",
      nextEyebrow: "Next step",
      nextTitle: "Let’s bring trusted care closer.",
      threeChoices: "Three choices start the conversation.",
      audience: "Audience",
      programmeMix: "Programme mix",
      preferredDate: "Preferred date",
      speakWith: "Speak with Klinik Inocare",
      context: "Co-organiser briefing",
      footerAria: "Klinik Inocare contact details",
      logoAlt: "Klinik Inocare — Wound Care & Wellness Centre",
      presenterTools: "Presentation drawing tools",
      annotateTool: "Annotate slide (C)",
      chalkboardTool: "Open chalkboard (B)",
      downloadTool: "Download drawings (D)"
    },
    bm: {
      pageTitle: "Program Jangkauan Kesihatan Komuniti",
      metaDescription: "Dek taklimat penganjur bersama Program Jangkauan Kesihatan Komuniti Klinik Inocare",
      coverEyebrow: "Program jangkauan komuniti",
      programmeTitle: "Program Jangkauan<br>Kesihatan Komuniti",
      coverLead: "Penjagaan dipercayai, lebih dekat dengan komuniti anda.",
      agencies: "Agensi",
      mosques: "Masjid",
      organisations: "Organisasi",
      preparedFor: "Disediakan untuk",
      prospectivePartners: "bakal penganjur bersama",
      audienceGroup: "Penganjur bersama yang sesuai",
      languageSelector: "Pilih bahasa pembentangan",
      conceptImage: "Imej konsep program • Dijana AI",
      coverPhotoAlt: "Imej konsep sambutan program kesihatan komuniti Malaysia",
      healthCheckPhotoAlt: "Imej konsep pemeriksaan tekanan darah komuniti Malaysia",
      planningPhotoAlt: "Imej konsep mesyuarat perancangan penganjur bersama",
      whyEyebrow: "Mengapa jangkauan",
      whyTitle: "Cara praktikal untuk menyantuni komuniti anda.",
      meetWhere: "Dekati masyarakat di tempat<br>mereka berkumpul.",
      onsite: "Di lokasi",
      yourVenue: "Di tempat anda",
      focused: "Berfokus",
      yourAudience: "Untuk kumpulan sasaran anda",
      actionable: "Boleh ditindak",
      clearNextSteps: "Dengan langkah seterusnya yang jelas",
      formatEyebrow: "Cadangan format",
      formatTitle: "Satu kunjungan. Laluan kesihatan yang jelas.",
      pathwayAria: "Saring, terangkan, dan bimbing",
      check: "Saring",
      riskChecks: "Saringan risiko<br>kesihatan terpilih",
      explain: "Terangkan",
      educationGuidance: "Pendidikan &amp; panduan<br>berfokus",
      guide: "Bimbing",
      appropriateNextStep: "Langkah seterusnya<br>yang sesuai",
      scopeAgreed: "Skop akhir dipersetujui bersama penganjur.",
      modularEyebrow: "Format modular",
      modularTitle: "Pilih gabungan program yang tepat.",
      yourAudienceShort: "Kumpulan<br>sasaran anda",
      selectedChecks: "Saringan<br>terpilih",
      healthEducation: "Pendidikan<br>kesihatan",
      woundFoot: "Kesedaran luka<br>&amp; kaki",
      followupGuidance: "Panduan<br>susulan",
      buildSession: "Bentuk sesi mengikut keperluan komuniti anda.",
      participantEyebrow: "Pengalaman peserta",
      participantTitle: "Perjalanan peserta yang mudah.",
      journeyAria: "Perjalanan peserta",
      welcome: "Sambutan",
      consent: "Persetujuan",
      conversation: "Perbincangan",
      nextStep: "Langkah seterusnya",
      voluntary: "Penyertaan adalah secara sukarela.",
      suitability: "Kesesuaian bergantung pada penilaian klinikal.",
      settingEyebrow: "Lokasi fleksibel",
      settingTitle: "Direka untuk lokasi anda.",
      agency: "Agensi",
      convenient: "Mudah",
      timeBoxed: "Mengikut masa",
      mosque: "Masjid",
      accessible: "Mudah diakses",
      familiar: "Selesa",
      clientGroup: "Kumpulan klien",
      tailored: "Disesuaikan",
      organised: "Teratur",
      oneFramework: "Satu rangka kerja. Pelaksanaan disesuaikan.",
      deliveryEyebrow: "Pelaksanaan bersama",
      deliveryTitle: "Peranan jelas melancarkan program.",
      coorganiser: "Penganjur bersama",
      convening: "Menghimpunkan komuniti",
      audienceInvitation: "Jemputan peserta",
      venueFlow: "Lokasi &amp; aliran peserta",
      onsiteCoordinator: "Penyelaras di lokasi",
      clinicalDelivery: "Membimbing pelaksanaan klinikal",
      clinicalTeam: "Pasukan klinikal",
      equipmentMaterials: "Peralatan &amp; bahan dipersetujui",
      screeningFollowup: "Panduan saringan &amp; susulan",
      together: "Bersama:",
      togetherItems: "skop&nbsp;&nbsp;•&nbsp;&nbsp;jadual&nbsp;&nbsp;•&nbsp;&nbsp;promosi&nbsp;&nbsp;•&nbsp;&nbsp;pengalaman peserta",
      outcomesEyebrow: "Hasil bersama",
      outcomesTitle: "Kejayaan dapat dilihat dan diukur.",
      measuresAria: "Cadangan ukuran program jangkauan",
      registrations: "Pendaftaran",
      attendance: "Kehadiran",
      completedChecks: "Saringan<br>selesai",
      participantFeedback: "Maklum balas<br>peserta",
      targetsReporting: "Sasaran dan format laporan dipersetujui sebelum program.",
      planningEyebrow: "Perancangan bersama",
      planningTitle: "Lima keputusan membawa idea menjadi program.",
      planningAria: "Langkah perancangan program jangkauan",
      alignObjective: "Selaraskan<br>objektif",
      confirmModules: "Sahkan<br>modul",
      promoteRegister: "Promosi &amp;<br>pendaftaran",
      deliverEvent: "Laksanakan<br>program",
      reviewOutcomes: "Nilai<br>hasil",
      adaptedCalendar: "Pelan mudah yang disesuaikan dengan jadual anda.",
      nextEyebrow: "Langkah seterusnya",
      nextTitle: "Mari dekatkan penjagaan yang dipercayai.",
      threeChoices: "Tiga pilihan memulakan perbincangan.",
      audience: "Kumpulan sasaran",
      programmeMix: "Gabungan program",
      preferredDate: "Tarikh pilihan",
      speakWith: "Hubungi Klinik Inocare",
      context: "Taklimat penganjur bersama",
      footerAria: "Maklumat hubungan Klinik Inocare",
      logoAlt: "Klinik Inocare — Pusat Penjagaan Luka & Kesejahteraan",
      presenterTools: "Alat melukis pembentangan",
      annotateTool: "Catat pada slaid (C)",
      chalkboardTool: "Buka papan kapur (B)",
      downloadTool: "Muat turun lukisan (D)"
    }
  };

  slides.forEach((slide, index) => {
    const logo = document.createElement("img");
    logo.className = "slide-logo";
    logo.src = "assets/brand/horizontal-dark-transparent.png";
    logo.alt = translations.en.logoAlt;
    slide.prepend(logo);

    const context = document.createElement("div");
    context.className = "deck-context";
    context.dataset.i18n = "context";
    context.textContent = translations.en.context;
    slide.append(context);

    const footer = document.createElement("footer");
    footer.className = "contact-footer";
    footer.dataset.i18nAria = "footerAria";
    footer.setAttribute("aria-label", translations.en.footerAria);
    footer.innerHTML = `
      <div class="contact-footer__address"><i class="ph ph-map-pin" aria-hidden="true"></i>G06 &amp; G07, VUE Residence Service Suite, 102 Jalan Pahang, 53300 Kuala Lumpur</div>
      <div class="contact-footer__phone"><i class="ph ph-phone" aria-hidden="true"></i>03-9771 4550 &nbsp;•&nbsp; 017-897 4751</div>
      <div class="contact-footer__page">${String(index + 1).padStart(2, "0")}/${String(totalSlides).padStart(2, "0")}</div>
    `;
    slide.append(footer);

    let notes = slide.querySelector("aside.notes");
    if (!notes) {
      notes = document.createElement("aside");
      notes.className = "notes";
      slide.append(notes);
    }

    const conceptSource = slide.dataset.conceptImage
      ? `<br>Conceptual image (${slide.dataset.conceptImage}): AI-generated with OpenAI image generation, 11 August 2026; not a real patient, participant, co-organiser, or event.`
      : "";
    notes.insertAdjacentHTML(
      "beforeend",
      `<p><strong>[Sources]</strong><br>Footer contact details: ${CONTACT_SOURCE} (accessed 11 August 2026).<br>Approved logo: Klinik Inocare brand asset supplied with the project.${conceptSource}</p>`
    );
  });

  const presenterTools = document.createElement("div");
  presenterTools.className = "presenter-tools";
  presenterTools.setAttribute("role", "toolbar");
  presenterTools.innerHTML = `
    <button type="button" data-drawing-tool="annotate"><i class="ph ph-pencil-simple-line" aria-hidden="true"></i><span>C</span></button>
    <button type="button" data-drawing-tool="chalkboard"><i class="ph ph-chalkboard" aria-hidden="true"></i><span>B</span></button>
    <button type="button" data-drawing-tool="download"><i class="ph ph-download-simple" aria-hidden="true"></i><span>D</span></button>
  `;
  document.body.append(presenterTools);

  presenterTools.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-drawing-tool]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();

    const actions = {
      annotate: "toggleNotesCanvas",
      chalkboard: "toggleChalkboard",
      download: "download"
    };
    const method = actions[button.dataset.drawingTool];
    window.RevealChalkboard?.[method]?.();
  });

  const requestedLanguage = params.get("lang")?.toLowerCase();
  let currentLanguage = ["bm", "ms", "ms-my"].includes(requestedLanguage) ? "bm" : "en";

  function setLanguage(language, updateUrl = false) {
    currentLanguage = language === "bm" ? "bm" : "en";
    const copy = translations[currentLanguage];

    document.documentElement.lang = currentLanguage === "bm" ? "ms-MY" : "en-MY";
    document.querySelector('meta[name="description"]').content = copy.metaDescription;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = copy[node.dataset.i18n];
      if (value !== undefined) node.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      const value = copy[node.dataset.i18nAria];
      if (value !== undefined) node.setAttribute("aria-label", value.replace(/<[^>]+>/g, ""));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
      const value = copy[node.dataset.i18nAlt];
      if (value !== undefined) node.alt = value.replace(/<[^>]+>/g, "");
    });

    document.querySelectorAll(".slide-logo").forEach((logo) => {
      logo.alt = copy.logoAlt;
    });

    if (partner) {
      document.querySelectorAll("[data-partner-name]").forEach((node) => {
        node.textContent = partner;
      });
    }

    if (programme) {
      document.querySelectorAll("[data-programme-name]").forEach((node) => {
        node.textContent = programme;
      });
    }

    document.title = `Klinik Inocare | ${programme || copy.pageTitle}`;

    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    presenterTools.setAttribute("aria-label", copy.presenterTools);
    const toolLabels = {
      annotate: copy.annotateTool,
      chalkboard: copy.chalkboardTool,
      download: copy.downloadTool
    };
    presenterTools.querySelectorAll("[data-drawing-tool]").forEach((button) => {
      const label = toolLabels[button.dataset.drawingTool];
      button.title = label;
      button.setAttribute("aria-label", label);
    });

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", currentLanguage);
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }

    if (window.Reveal?.isReady?.()) {
      window.Reveal.sync();
      window.Reveal.layout();
    }
  }

  document.addEventListener("click", (event) => {
    const languageButton = event.target.closest("button[data-language]");
    if (!languageButton) return;
    event.preventDefault();
    event.stopPropagation();
    setLanguage(languageButton.dataset.language, true);
  });

  setLanguage(currentLanguage);

  Reveal.initialize({
    width: 1920,
    height: 1080,
    margin: 0,
    minScale: 0.2,
    maxScale: 2,
    center: false,
    controls: true,
    controlsTutorial: false,
    progress: true,
    hash: true,
    history: true,
    transition: "fade",
    backgroundTransition: "fade",
    autoAnimateDuration: 0.7,
    pdfSeparateFragments: false,
    view: params.has("print-pdf") || params.get("view") === "print" ? "print" : undefined,
    chalkboard: {
      boardmarkerWidth: 4,
      chalkWidth: 7,
      chalkEffect: 0.85,
      storage: "klinik-inocare-outreach-v2",
      transition: 700,
      theme: "chalkboard",
      background: [
        "rgba(83, 138, 195, 0.07)",
        "vendor/reveal/plugin/chalkboard/img/blackboard.png"
      ],
      grid: { color: "rgba(255,255,255,0.08)", distance: 80, width: 1 },
      rememberColor: true
    },
    plugins: [RevealNotes, RevealChalkboard]
  }).then(() => {
    setLanguage(currentLanguage);
  });
})();
