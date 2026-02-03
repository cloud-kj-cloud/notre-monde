document.addEventListener('DOMContentLoaded', () => {
  const musicBtn = document.getElementById("music-btn");
  const music = document.getElementById("bg-music");

  // 🎶 Liste de tes musiques
  const tracks = [
    "assets/audio/1h55.mp3",
    "assets/audio/Pozisyon (Fem voyé 2).mp3",
    "assets/audio/music3.mp3"
  ];

  let isPlaying = false;
  let currentTrack = 0; // index du morceau actuel

  // Charge le premier morceau
  music.src = tracks[currentTrack];
  music.volume = 0.7;  // volume agréable

  // ⏭️ Quand la musique se termine, passer au suivant
  music.addEventListener("ended", () => {
    nextTrack();
  });

  // Fonction pour lecture/arrêt
  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      playMusic();
    } else {
      pauseMusic();
    }
  });

  function playMusic() {
    music.play().then(() => {
      isPlaying = true;
      musicBtn.textContent = "⏸️ Stop";
    }).catch(() => {
      console.log("Interaction requise pour démarrer la musique.");
    });
  }

  function pauseMusic() {
    music.pause();
    isPlaying = false;
    musicBtn.textContent = "🎵 Musique";
  }

  function nextTrack() {
    currentTrack = Math.floor(Math.random() * tracks.length);
    music.src = tracks[currentTrack];
    const nowPlaying = document.getElementById("now-playing");
nowPlaying.textContent = `🎶 Lecture : ${tracks[currentTrack].split("/").pop()}`;

    music.play();
  }
});
