// Duração da contagem em milissegundos (24 horas = 24 * 60 * 60 * 1000)
const countdownDuration = 24 * 60 * 60 * 1000;

// Recupera o início da contagem do localStorage ou define como agora
let countdownStart = localStorage.getItem("countdownStart");
if (!countdownStart) {
  countdownStart = Date.now();
  localStorage.setItem("countdownStart", countdownStart); // Salva no localStorage
} else {
  countdownStart = parseInt(countdownStart, 10); // Converte para número
}

// Função de atualização da contagem regressiva
const countdownInterval = setInterval(function () {
  // Obtém o tempo atual
  const currentTime = Date.now();

  // Calcula o tempo restante
  let remainingTime = countdownDuration - (currentTime - countdownStart);

  if (remainingTime <= 0) {
    // Se o tempo acabou, reinicia a contagem
    countdownStart = Date.now();
    localStorage.setItem("countdownStart", countdownStart); // Atualiza o início no localStorage
    remainingTime = countdownDuration; // Reinicia a contagem
  }

  // Calcula dias, horas, minutos e segundos
  const countdownDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const countdownHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const countdownMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const countdownSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Atualiza os elementos na página
  document.getElementById("days").textContent = String(countdownDays).padStart(2, '0');
  document.getElementById("hours").textContent = String(countdownHours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(countdownMinutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(countdownSeconds).padStart(2, '0');
}, 1000);

// --------------------------------------------------------------------------
// -------------------------------contagem-----------------------------------
// --------------------------------------------------------------------------

function playVideo2() {
  const iframe = document.getElementById('video2');
  const videoUrl = "https://www.youtube.com/embed/y15JDMAGYqo?autoplay=1";
  iframe.src = videoUrl;
  iframe.style.display = 'block'; 
  document.querySelector('.video-thumbnail2').style.display = 'none'; 
}
