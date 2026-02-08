document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const heartsContainer = document.getElementById("hearts");
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  let musicPlaying = false;

  // --- Gestion musique ---
  musicBtn.addEventListener('click', () => {
    if (!musicPlaying) {
      music.play()
        .then(() => {
          musicPlaying = true;
          musicBtn.textContent = "🔇";
        })
        .catch(err => console.log("Lecture bloquée jusqu’à interaction :", err));
    } else {
      music.pause();
      musicPlaying = false;
      musicBtn.textContent = "🎵";
    }
  });

  // 💞 Si elle clique sur "Oui"
  yesBtn.addEventListener('click', () => {
    for (let i = 0; i < 25; i++) createHeart();
    setTimeout(() => {
      window.location.href = "access.html"; // Page d’accès
    }, 1800);
  });

  // 😅 Le bouton "Non" esquive
  noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  });

  // --- Crée des cœurs flottants aléatoires
  function createHeart() {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2.5 + Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }

  // Cœurs constants en fond
  setInterval(createHeart, 700);
});

