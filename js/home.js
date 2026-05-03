/**
 * Handles word-switching animation and opener removal
 */
document.addEventListener("DOMContentLoaded", () => {
  const opener = document.getElementById('opener');
  const skipBtn = document.getElementById('skip-opener');
  const textEl = document.getElementById("opener-text");
  
  if (!opener) return;

  const openerWords = ["Hello", "Ahoj", "Bonjour", "Hola", "Hallo","Ciao", "こんにちは", "Olá", "Привет", "你好", "Hi"];
  let wordIndex = 0;
  let currentDelay = 480;
  let isSkipped = false;

  /**
   * Triggers the slide-up transition
   */
  const slideUpOpener = () => {
    if (isSkipped && opener.classList.contains("slide-up")) return; 
    isSkipped = true;
    
    opener.style.transition = "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
    opener.classList.add("slide-up");

    opener.addEventListener("transitionend", () => {
      opener.style.display = "none";
      document.body.classList.remove("no-scroll");
    }, { once: true });
  };

  /**
   * Cycles through the word list
   */
  function showNextWord() {
    if (isSkipped || !textEl) return;
    
    textEl.style.opacity = "0";
    setTimeout(() => {
      if (isSkipped) return;
      
      textEl.textContent = openerWords[wordIndex];
      textEl.style.opacity = "1";
      wordIndex++;
      
      if (wordIndex < openerWords.length) {
        currentDelay = Math.max(60, currentDelay * 0.72);
        setTimeout(showNextWord, currentDelay);
      } else {
        setTimeout(slideUpOpener, 500);
      }
    }, 160);
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.preventDefault();
      slideUpOpener();
    });
  }

  setTimeout(showNextWord, 300);
});