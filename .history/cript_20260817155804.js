// script.js - التحكم بتبديل اللغة في صفحة واحدة

document.addEventListener('DOMContentLoaded', function() {
    // تحديد اللغة الحالية من الرابط أو المتصفح
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || navigator.language || 'ar';

    // إذا كنت تستخدم صفحة واحدة (index.html) وتريد عرض المحتوى حسب اللغة
    // يمكنك تنفيذ هذا الكود لعرض/إخفاء المحتوى حسب اللغة

    console.log('SpeedMeter Privacy Policy Loaded');
    console.log('Current Language:', lang);
});

// دالة لتبديل اللغة
function switchLanguage(lang) {
    if (lang === 'ar') {
        window.location.href = 'privacy-policy-ar.html';
    } else {
        window.location.href = 'privacy-policy-en.html';
    }
}