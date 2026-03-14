import { MethodologyPhase } from "../types";

export const phases: MethodologyPhase[] = [
  {
    id: "discover",
    number: "01",
    title: { ar: "الاكتشاف", en: "Discover" },
    subtitle: { ar: "نفهم قبل أن نبدأ", en: "Understand before we begin" },
    description: {
      ar: "تحليل عميق لبيئة العميل لتحديد التحديات الحقيقية والفرص الخفية عبر 4 طبقات تحليلية.",
      en: "Deep analysis of the client's environment to identify real challenges and hidden opportunities across 4 analytical layers.",
    },
    activities: {
      ar: [
        "تحليل البيئة الداخلية والخارجية",
        "دراسة السوق والمنافسة",
        "مقابلات أصحاب المصلحة",
        "تحليل البيانات واستخلاص البصائر",
      ],
      en: [
        "Internal & external environment analysis",
        "Market & competitive study",
        "Stakeholder interviews",
        "Data analysis & insight extraction",
      ],
    },
    outputs: {
      ar: "5 بصائر استراتيجية + خريطة فرص + توصية استراتيجية + تقرير تحليلي",
      en: "5 strategic insights + opportunity map + strategic recommendation + analytical report",
    },
  },
  {
    id: "design",
    number: "02",
    title: { ar: "التصميم", en: "Design" },
    subtitle: { ar: "نبتكر حلولاً ملموسة", en: "We create tangible solutions" },
    description: {
      ar: "تحويل البصائر إلى حلول إبداعية ملموسة عبر 3 سيناريوهات: جريء، ذكي، آمن.",
      en: "Transform insights into concrete creative solutions through 3 scenarios: bold, smart, safe.",
    },
    activities: {
      ar: [
        "بناء البصيرة الجوهرية والنموذج المفاهيمي",
        "تصميم 3 سيناريوهات: جريء / ذكي / آمن",
        "تطوير شلال التطبيقات من الفكرة الكبرى",
        "نماذج أولية تفاعلية",
      ],
      en: [
        "Building core insight & conceptual model",
        "Design 3 scenarios: bold / smart / safe",
        "Develop application waterfall from big idea",
        "Interactive prototyping",
      ],
    },
    outputs: {
      ar: "مفهوم جوهري + 3 سيناريوهات + خطة تطبيق + نماذج أولية",
      en: "Core concept + 3 scenarios + application plan + prototypes",
    },
  },
  {
    id: "deliver",
    number: "03",
    title: { ar: "التسليم", en: "Deliver" },
    subtitle: { ar: "ننتقل من التخطيط إلى التنفيذ", en: "From planning to precise execution" },
    description: {
      ar: "الانتقال من التخطيط إلى التنفيذ الدقيق مع شفافية كاملة في التسعير والمتابعة.",
      en: "Move from planning to precise execution with complete transparency in pricing and follow-up.",
    },
    activities: {
      ar: [
        "جدول زمني تفصيلي بمراحل واضحة",
        "تسعير ديناميكي شفاف",
        "إدارة المخاطر (عالي/متوسط/منخفض)",
        "متابعة يومية وتقارير أسبوعية",
      ],
      en: [
        "Detailed timeline with clear phases",
        "Dynamic transparent pricing",
        "Risk management (high/medium/low)",
        "Daily follow-up & weekly reports",
      ],
    },
    outputs: {
      ar: "خطة تنفيذ + ميزانية شفافة + تقارير متابعة + المنتج النهائي",
      en: "Implementation plan + transparent budget + monitoring reports + final product",
    },
  },
  {
    id: "develop",
    number: "04",
    title: { ar: "التطوير", en: "Develop" },
    subtitle: { ar: "لا نتوقف عند التسليم", en: "We don't stop at delivery" },
    description: {
      ar: "قياس الأثر وتطوير الحلول لنمو مستدام — لا نتوقف عند التسليم بل نضمن استمرارية النجاح.",
      en: "Measure impact and develop solutions for sustainable growth — we ensure continued success.",
    },
    activities: {
      ar: [
        "قياس مؤشرات الأداء حسب نوع المشروع",
        "تقرير أثر شامل",
        "توصيات تحسين مبنية على البيانات",
        "خطة المرحلة التالية",
      ],
      en: [
        "Measure KPIs by project type",
        "Comprehensive impact report",
        "Data-driven improvement recommendations",
        "Next phase plan",
      ],
    },
    outputs: {
      ar: "تقرير أثر + تحليل KPIs + توصيات تطوير + خطة المرحلة التالية",
      en: "Impact report + KPI analysis + development recommendations + next phase plan",
    },
  },
];
