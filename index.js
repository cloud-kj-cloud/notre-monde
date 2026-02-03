document.addEventListener('DOMContentLoaded', () => {
  const correctCode = "220922"; // ✅ Code secret
  const messageEl = document.getElementById("msg");
  const inputEl = document.getElementById("code");
  const buttonEl = document.getElementById("enter-btn");
  const toggleBtn = document.getElementById("toggle-visibility");

  // --- Fonction principale : vérification du code
  function checkAccess() {
    const userCode = inputEl.value.trim();

    if (userCode === correctCode) {
      messageEl.style.color = "#00ff88";
      messageEl.textContent = "✅ Accès autorisé !";
      setTimeout(() => {
        window.location.href = "main.html";
      }, 800);
    } else if (userCode.length === 0) {
      messageEl.textContent = "⚠️ Entre ton code.";
    } else {
      messageEl.textContent = "❌ Code incorrect.";
      inputEl.value = "";
      inputEl.focus();

      // Effet shake sur champ + message
      [inputEl, messageEl].forEach(el => {
        el.classList.remove("error-shake");
        void el.offsetWidth;
        el.classList.add("error-shake");
      });
    }
  }

  // --- Gestion du bouton Entrer
  buttonEl.addEventListener('click', checkAccess);

  // --- Touche "Entrée"
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === "Enter") checkAccess();
  });

  // --- Affiche / cache le code secret
  toggleBtn.addEventListener('click', () => {
    const isPassword = inputEl.getAttribute("type") === "password";
    inputEl.setAttribute("type", isPassword ? "text" : "password");
    toggleBtn.textContent = isPassword ? "🙈" : "👁️";
  });
});

