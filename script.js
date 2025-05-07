// Animasi ketik
const typedText = "Halo, Saya Harya Ananta Darma";
let index = 0;
const speed = 100; // Kecepatan ketik

function typeWriter() {
  if (index < typedText.length) {
    document.getElementById('typed-text').innerHTML += typedText.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// Dark mode toggle
const toggleButton = document.getElementById('toggle-darkmode');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
