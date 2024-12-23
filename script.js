// --------------------------------------------------------------------------
// -------------------------------contagem-----------------------------------
// --------------------------------------------------------------------------
const countdownInterval = setInterval(function() {
  // Obtém o tempo atual
  const currentTime = Date.now();

  // Calcula a diferença entre o tempo atual e o início da contagem
  let remainingTime = countdownDuration - (currentTime - countdownStart);

  if (remainingTime <= 0) {
      // Se o tempo acabou, reinicia a contagem
      countdownStart = Date.now();
      localStorage.setItem("countdownStart", countdownStart); // Atualiza a hora de início no localStorage
      remainingTime = countdownDuration; // Reinicia a contagem para 48 horas
  }

  // Cálculos para dias, horas, minutos e segundos
  const countdownDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const countdownHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const countdownMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const countdownSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Exibe os resultados na página
  document.getElementById("days").innerHTML = String(countdownDays).padStart(2, '0');
  document.getElementById("hours").innerHTML = String(countdownHours).padStart(2, '0');
  document.getElementById("minutes").innerHTML = String(countdownMinutes).padStart(2, '0');
  document.getElementById("seconds").innerHTML = String(countdownSeconds).padStart(2, '0');
}, 1000);

// --------------------------------------------------------------------------
// -------------------------------contagem-----------------------------------
// --------------------------------------------------------------------------


