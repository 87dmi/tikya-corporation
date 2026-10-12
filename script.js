document.addEventListener("DOMContentLoaded", function() {
    var u = localStorage.getItem("tk_user"); if(u) loginUI(u);
    var p = localStorage.getItem("tk_plus") === "true"; if(p) applyPremiumUI();
});
function openM(id) { document.getElementById(id).style.display = "flex"; }
function closeM(id) { document.getElementById(id).style.display = "none"; }
function submitReg(e) { e.preventDefault(); var n = document.getElementById("regName").value.trim(); localStorage.setItem("tk_user", n); loginUI(n); alert("Аккаунт создан! 🎉"); closeM('regModal'); }
function loginUI(n) { document.getElementById("regBtn").innerText = "Профиль: " + n; document.getElementById("regBtn").disabled = true; document.getElementById("logoutBtn").style.display = "block"; }
function logout() { localStorage.clear(); location.reload(); }
function checkPromo() { var c = document.getElementById("promoInput").value.trim(); var s = document.getElementById("promoStatus"); if(c === "DIMA228") { localStorage.setItem("tk_plus", "true"); s.style.color = "#2ecc71"; s.innerText = "Подписка TIKYA+ активирована! 👑"; setTimeout(function(){ applyPremiumUI(); closeM('settingsModal'); }, 1000); } else { s.style.color = "var(--red)"; s.innerText = "Неверный код!"; } }
function applyPremiumUI() { document.getElementById("premiumBadge").style.display = "block"; document.getElementById("aiTitle").style.color = "#ffe066"; document.getElementById("aiPanel").style.borderColor = "#ffe066"; document.getElementById("aiPanel").style.boxShadow = "0 0 25px rgba(255,224,102,0.2)"; }
function switchTab(t) { var pB = document.getElementById("tPromo"); var sB = document.getElementById("tSup"); var pV = document.getElementById("tabPromoView"); var sV = document.getElementById("tabSupView"); if(t === 'promo') { pB.classList.add("active"); sB.classList.remove("active"); pV.style.display = "block"; sV.style.display = "none"; } else { sB.classList.add("active"); pB.classList.remove("active"); pV.style.display = "none"; sV.style.display = "block"; } }
function submitMail(e) { e.preventDefault(); alert("Отправлено через Tmail! 🚀"); closeM('tmailModal'); }

// ВСТРОЕННЫЙ СВЕРХБЫСТРЫЙ ИИ (РАБОТАЕТ ОФЛАЙН И МГНОВЕННО)
function sendAi() {
    var i = document.getElementById("aiInput"); var b = document.getElementById("aiBox"); var t = i.value.trim(); if(!t) return;
    b.innerHTML += "<br><b>Вы:</b> " + t; i.value = ""; b.scrollTop = b.scrollHeight;
    
    var low = t.toLowerCase();
    var r = "";

    // Интеллектуальная матрица ответов TIKYA AI
    if (low.includes("дима") || low.includes("ржака")) {
        r = "Канал РЖАКА/ДИМА — это абсолютный шедевр юмора и главный топ рекомендаций! 🔥🚀";
    } else if (low.includes("анекдот") || low.includes("шутка") || low.includes("рассмеши")) {
        var jokes = [
            "Почему программисты любят темную тему? Потому что свет привлекает багов! 🪲 Ха-ха, классика!",
            "В мире есть 10 типов людей: те, кто понимают двоичную систему, и те, кто её не понимают. 🤖",
            "Заходит разработчик в лифт, а ему на 12 этаж. Он нажимает 1, потом 2 и ищет кнопку Enter... 😂"
        ];
        r = jokes[Math.floor(Math.random() * jokes.length)];
    } else if (low.includes("разработчик") || low.includes("создал") || low.includes("программист") || low.includes("кодер")) {
        r = "Круто! Быть разработчиком — это создавать будущее. Наш браузер TIKYA как раз написан на чистом коде, и мы с тобой на одной волне! Какой твой следующий проект? 💻";
    } else if (low.includes("привет") || low.includes("ку") || low.includes("здарова") || low.includes("hello") || low.includes("хай")) {
        r = "Привет! Я твой локальный ИИ-помощник браузера TIKYA. Готов ответить на любые вопросы! Что у тебя на уме? 🤖";
    } else if (low.includes("как дела") || low.includes("как ты")) {
        r = "Мои виртуальные процессоры работают на полную мощность! Особенно сейчас, когда мы улучшаем TIKYA. А у тебя как дела? 😊";
    } else if (low.includes("тикток") || low.includes("tiktok") || low.includes("апк") || low.includes("apk")) {
        r = "Для стабильного просмотра ТикТока используй проверенные моды и плагины. А самый лучший контент ищи на канале РЖАКА/ДИМА! 🎬";
    } else if (low.includes("спасибо") || low.includes("благодарю")) {
        r = "Всегда пожалуйста! Рад помочь гениальному пользователю TIKYA. Напиши, если понадобится что-то еще! 🚀";
    } else {
        // Универсальный умный ответ, если точное слово не найдено
        r = "Отличная мысль! Я занёс фразу '" + t + "' в нейросетевую базу знаний TIKYA. Кстати, попробуй активировать промокод DIMA228 в настройках, чтобы открыть секретный Luxury-дизайн! 🌟";
    }

    // Мгновенный вывод ответа без зависаний интернета
    setTimeout(function() {
        b.innerHTML += "<br><b>ИИ TIKYA:</b> " + r;
        b.scrollTop = b.scrollHeight;
    }, 150);
}

function sendSup() { var i = document.getElementById("supInput"); var b = document.getElementById("supBox"); var t = i.value.trim(); if(!t) return; b.innerHTML += "<br><b>Вы:</b> " + t; i.value = ""; setTimeout(function() { b.innerHTML += "<br><b>Агент:</b> Обращение зафиксировано!"; b.scrollTop = b.scrollHeight; }, 400); }
