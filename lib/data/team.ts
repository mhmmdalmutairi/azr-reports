import { TeamMember } from "../types";

export const team: TeamMember[] = [
  {
    name: { ar: "أحمد الحربي", en: "Ahmad Al-Harbi" },
    role: { ar: "الرئيس التنفيذي", en: "Chief Executive Officer" },
    bio: {
      ar: "خبير تطوير أعمال ومبتكر حلول نمو، أكثر من 8 سنوات خبرة في إطلاق المبادرات وتحويل التحديات إلى فرص في القطاعين الحكومي والخاص.",
      en: "Business development expert and growth solution innovator with 8+ years experience launching initiatives and transforming challenges into opportunities.",
    },
    image: "/assets/team/ahmad.jpg",
  },
  {
    name: { ar: "محمد المطيري", en: "Mohammad Al-Mutairi" },
    role: { ar: "مدير تطوير الأعمال", en: "Business Development Manager" },
    bio: {
      ar: "خبير تطوير أعمال وقيادي اجتماعي، أكثر من 10 سنوات خبرة في تأسيس المبادرات وإدارة المشاريع المعقدة في القطاعين الربحي وغير الربحي.",
      en: "Business development expert and social leader with 10+ years experience founding initiatives and managing complex projects.",
    },
    image: "/assets/team/mohammad.jpg",
  },
];

export const experts = [
  "محمد البيز", "ياسر الحزيمي", "فواز حكومي", "حسين دغريري",
  "الاء مهدي", "نورة الحميد", "حامد الذيابي", "هلال القرشي",
  "عبدالله المزين", "فيصل الرويلي", "أنس شريفي", "محمد حليم",
  "أحمد الذكير", "ليال رواس",
];
