export type Lang = "ar" | "en";

export const content = {
  ar: {
    dir: "rtl" as const,
    brand: { name: "بي بلس", sub: "Bee Plus", mark: "ب" },
    nav: [
      { label: "الشبكة", href: "#network" },
      { label: "التغطية", href: "#coverage" },
      { label: "الشركاء", href: "#partners" },
      { label: "المزايا", href: "#features" },
    ],
    langBtn: "EN",
    contactCta: "اتصل بنا",
    hero: {
      badge: "شبكة تحصيل الفواتير الإلكترونية في مصر",
      title1: "تحصيل فوري،",
      title2: "بدقة هندسية.",
      body: "حلول دفع إلكتروني تربط مرافق الكهرباء والمياه والغاز بملايين المواطنين عبر التطبيق ونقاط البيع وشبكة الوكلاء — وتُسدَّد الفاتورة في ثوانٍ.",
      primary: "ابدأ التكامل",
      secondary: "استكشف الشبكة",
    },
    network: {
      eyebrow: "قنوات التحصيل",
      title: "ثلاث نقاط وصول، نظام واحد",
      pos: {
        title: "نقاط البيع",
        body: "أجهزة دفع تعمل على مدار الساعة عبر نقاط البيع في مصر، مع تسوية آلية وتكامل مباشر مع أنظمة الفوترة.",
        stats: [
          { value: "4.2M", label: "نقطة بيع نشطة" },
          { value: "99.97%", label: "نسبة نجاح العملية" },
        ],
      },
      app: {
        eyebrow: "التطبيق المحمول",
        title: "دفع من جيبك",
        body: "فواتير فورية وإشعارات ذكية عبر تطبيق بي بلس على iOS وAndroid.",
      },
      agents: {
        eyebrow: "وكلاء التجزئة",
        title: "شبكة الوكلاء",
        body: "آلاف وكلاء التجزئة يغطون الأحياء الحضرية والريفية في كل محافظة.",
      },
    },
    coverage: {
      eyebrow: "التغطية الجغرافية",
      title: "مصر بالكامل، على شبكة واحدة",
      body: "من الإسكندرية إلى أسوان، تصل شبكة التحصيل إلى كل محافظة عبر بنية تحتية مملوكة بالكامل.",
      badge: "تغطية 100%",
      alt: "خريطة تغطية بي بلس في مصر",
      stats: [
        { value: "27", label: "محافظة مغطاة", hl: true },
        { value: "1.1B", label: "فاتورة سنوياً", hl: false },
        { value: "125K", label: "وكيل معتمد", hl: false },
        { value: "3s", label: "متوسط زمن المعالجة", hl: true },
      ],
    },
    partners: {
      eyebrow: "شركاء التحصيل",
      items: [
        "شركات الكهرباء",
        "مياه الشرب",
        "الغاز الطبيعي",
        "بتروتريد",
        "الجهات الحكومية",
        "شركاء مصرفيون",
      ],
    },
    features: {
      eyebrow: "قدرات المنصة",
      title: "بنية تحتية مُهندسة للتحصيل",
      items: [
        { k: "24/7", t: "تشغيل مستمر", b: "خدمة غير متقطعة عبر مراكز بيانات مزدوجة داخل مصر." },
        { k: "3s", t: "سرعة المعالجة", b: "موافقة فورية وإيصال مطبوع في أقل من ثلاث ثوانٍ." },
        { k: "→", t: "توجيه ذكي", b: "توجيه تلقائي لكل عملية إلى أسرع مسار متاح." },
        { k: "AES", t: "أمان البيانات", b: "تشفير عند النقل والتخزين مطابق لمعايير PCI-DSS." },
        { k: "⟂", t: "تقارير لحظية", b: "لوحات تحكم وتسويات في الوقت الحقيقي." },
        { k: "API", t: "تكامل مفتوح", b: "واجهات برمجية موثقة وبيئة تجريبية جاهزة." },
      ],
    },
    contact: {
      title: "لنتحدث عن التحصيل",
      body: "فريق التكامل مستعد لمساعدتك في ربط خدماتك بالشبكة.",
      emailLabel: "البريد الإلكتروني",
    },
    rights: "© 2026 بي بلس للمدفوعات الإلكترونية — جميع الحقوق محفوظة.",
  },
  en: {
    dir: "ltr" as const,
    brand: { name: "Bee Plus", sub: "بي بلس", mark: "B" },
    nav: [
      { label: "Network", href: "#network" },
      { label: "Coverage", href: "#coverage" },
      { label: "Partners", href: "#partners" },
      { label: "Features", href: "#features" },
    ],
    langBtn: "ع",
    contactCta: "Contact us",
    hero: {
      badge: "Egypt's electronic bill collection network",
      title1: "Instant collection,",
      title2: "engineered precisely.",
      body: "Electronic payment rails connecting electricity, water and gas utilities to millions of citizens through the app, POS terminals and a nationwide agent network — bills settled in seconds.",
      primary: "Start integration",
      secondary: "Explore the network",
    },
    network: {
      eyebrow: "Collection channels",
      title: "Three access points, one system",
      pos: {
        title: "Point of sale",
        body: "Terminals running around the clock across Egypt, with automated settlement and direct integration into billing systems.",
        stats: [
          { value: "4.2M", label: "Active POS points" },
          { value: "99.97%", label: "Transaction success" },
        ],
      },
      app: {
        eyebrow: "Mobile app",
        title: "Pay from your pocket",
        body: "Instant bills and smart reminders through the Bee Plus app on iOS and Android.",
      },
      agents: {
        eyebrow: "Retail agents",
        title: "Agent network",
        body: "Thousands of retail agents covering urban and rural neighborhoods in every governorate.",
      },
    },
    coverage: {
      eyebrow: "Geographic coverage",
      title: "All of Egypt, on one network",
      body: "From Alexandria to Aswan, the collection network reaches every governorate through fully owned infrastructure.",
      badge: "100% coverage",
      alt: "Bee Plus coverage map of Egypt",
      stats: [
        { value: "27", label: "Governorates covered", hl: true },
        { value: "1.1B", label: "Bills per year", hl: false },
        { value: "125K", label: "Certified agents", hl: false },
        { value: "3s", label: "Average processing", hl: true },
      ],
    },
    partners: {
      eyebrow: "Collection partners",
      items: [
        "Electricity companies",
        "Drinking water",
        "Natural gas",
        "Petrotrade",
        "Government entities",
        "Banking partners",
      ],
    },
    features: {
      eyebrow: "Platform capabilities",
      title: "Infrastructure built for collection",
      items: [
        { k: "24/7", t: "Always on", b: "Uninterrupted service across dual data centers inside Egypt." },
        { k: "3s", t: "Processing speed", b: "Instant approval and printed receipt in under three seconds." },
        { k: "→", t: "Smart routing", b: "Every transaction is routed automatically to the fastest path." },
        { k: "AES", t: "Data security", b: "Encryption in transit and at rest, aligned with PCI-DSS." },
        { k: "⟂", t: "Live reporting", b: "Real-time dashboards and settlement reconciliation." },
        { k: "API", t: "Open integration", b: "Documented APIs and a ready sandbox environment." },
      ],
    },
    contact: {
      title: "Let's talk collection",
      body: "Our integration team is ready to connect your services to the network.",
      emailLabel: "Email",
    },
    rights: "© 2026 Bee Plus Electronic Payments — All rights reserved.",
  },
};
