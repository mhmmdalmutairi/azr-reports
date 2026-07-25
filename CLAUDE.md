# قواعد azr-reports

هذا المستودع مستهلك فقط. لا تضف tokens أو palette أو خطاً أو قالب عرض أو مهارة
تأليف محلية.

قبل أي تغيير بصري:

1. اقرأ `canonical-brand-source.json`.
2. حدّث المواد المولدة عبر `npm run brand:sync` من clone المصدر الكانوني.
3. استخدم محرك `mhmmdalmutairi/azr-design-system` لأي PDF/deck/report.
4. شغّل `npm run brand:check` و`npm run build`.
5. فشل الوصول للمصدر الكانوني = توقف، بلا fallback.
