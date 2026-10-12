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
function submitMail(e) { e.preventDefault(); alert("Отправлено через Tmail! 🚀"); closeM('tmailModal'); }
function sendAi() { var i = document.getElementById("aiInput"); var b = document.getElementById("aiBox"); var t = i.value.trim(); if(!t) return; b.innerHTML += "<br><strong>Вы:</strong> " + t; i.value = ""; b.scrollTop = b.scrollHeight; setTimeout(function() { var r = "Я изучаю запрос... Спроси про 'Диму', 'ТикТок' или 'анекдот'!"; var l = t.toLowerCase(); if(l.includes("привет")) r = "Привет! Я ИИ TIKYA. Чем помочь? 🤖"; else if(l.includes("дима") || l.includes("ржака")) r = "Канал РЖАКА/ДИМА — это топ рекомендаций! 🔥🚀"; else if(l.includes("анекдот") || l.includes("шутка")) r = "Потому что свет привлекает багов! 🪲"; b.innerHTML += "<br><strong>ИИ:</strong> " + r; b.scrollTop = b.scrollHeight; }, 300); }
function sendSup() { var i = document.getElementById("supInput"); var b = document.getElementById("supBox"); var t = i.value.trim(); if(!t) return; b.innerHTML += "<br><strong>Вы:</strong> " + t; i.value = ""; setTimeout(function() { b.innerHTML += "<br><strong>Агент:</strong> Обращение принято!"; b.scrollTop = b.scrollHeight; }, 400); }
