import { Service } from "../types";

export const services: Service[] = [
  {
    id: "build",
    icon: "Rocket",
    title: { ar: "بناء المشاريع", en: "Building Projects" },
    description: {
      ar: "نحوّل الأفكار الجريئة إلى شركات ناشئة ومشاريع قابلة للتوسع والنمو. من التحقق من الفكرة وحتى إطلاق المنتج في السوق، نرافقكم في كل خطوة.",
      en: "We transform bold ideas into scalable startups and projects. From idea validation to market launch, we accompany you every step of the way.",
    },
    outcome: {
      ar: "من فكرة إلى مشروع قابل للتوسع",
      en: "From idea to scalable venture",
    },
    features: {
      ar: [
        "دراسة الجدوى والتحقق من السوق",
        "تطوير نموذج العمل",
        "بناء المنتج الأولي MVP",
        "خطة التوسع والانطلاق",
        "بناء الفريق المؤسس",
      ],
      en: [
        "Feasibility studies & market validation",
        "Business model development",
        "MVP development",
        "Expansion & launch plans",
        "Founding team building",
      ],
    },
  },
  {
    id: "design",
    icon: "Palette",
    title: { ar: "تصميم الخدمات", en: "Service Design" },
    description: {
      ar: "نبتكر تجارب عملاء استثنائية ونقاط تلامس فعالة تزيد من الإيرادات وولاء المستفيدين. نصمم كل تفصيل بعناية ليعكس هوية علامتكم التجارية.",
      en: "We create exceptional customer experiences and effective touchpoints that increase revenue and beneficiary loyalty.",
    },
    outcome: {
      ar: "تجارب عملاء تبني ولاءً مستداماً",
      en: "Customer experiences that build lasting loyalty",
    },
    features: {
      ar: [
        "بحث وتحليل تجربة المستخدم",
        "تصميم رحلة العميل",
        "تصميم الهوية المكانية والرقمية",
        "نماذج أولية تفاعلية",
        "اختبار وتحسين مستمر",
      ],
      en: [
        "User experience research & analysis",
        "Customer journey design",
        "Physical & digital identity design",
        "Interactive prototyping",
        "Continuous testing & improvement",
      ],
    },
  },
  {
    id: "growth",
    icon: "TrendingUp",
    title: { ar: "استشارات النمو", en: "Growth Consulting" },
    description: {
      ar: "نقدم استراتيجيات مبنية على البيانات لتعظيم العائد المالي والأثر الاجتماعي. نساعدكم في تحديد فرص النمو وتحويلها إلى نتائج ملموسة.",
      en: "We provide data-driven strategies to maximize financial returns and social impact. We help identify growth opportunities and turn them into tangible results.",
    },
    outcome: {
      ar: "نمو مستدام مبني على بيانات حقيقية",
      en: "Sustainable growth built on real data",
    },
    features: {
      ar: [
        "استراتيجيات التوسع والانتشار",
        "تحسين الكفاءة التشغيلية",
        "قياس وإدارة الأثر",
        "تحليل البيانات واتخاذ القرارات",
        "تطوير الشراكات الاستراتيجية",
      ],
      en: [
        "Expansion & scaling strategies",
        "Operational efficiency improvement",
        "Impact measurement & management",
        "Data analysis & decision-making",
        "Strategic partnership development",
      ],
    },
  },
];
