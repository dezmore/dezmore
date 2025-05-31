document.getElementById('start-game').addEventListener('click', () => {
  alert('Game berakhir! (simulasi kalah)');
  document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('love-you').addEventListener('click', () => {
  document.getElementById('popup').classList.add('hidden');
  startFireworks();
});

function startFireworks() {
  const fireworks = document.getElementById('fireworks');
  fireworks.classList.remove('hidden');
  setTimeout(() => {
    fireworks.classList.add('hidden');
    showBirthdaySection();
  }, 10000); // Kembang api selama 10 detik

  // Buat kembang api
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    fireworks.appendChild(firework);

    // Hapus elemen kembang api dari DOM setelah animasi selesai
    setTimeout(() => firework.remove(), 1000);
  }
}

function showBirthdaySection() {
  document.getElementById('birthday-section').classList.remove('hidden');
  const music = document.getElementById('background-music');
  music.play();
}
