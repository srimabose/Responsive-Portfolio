const textElement = document.getElementById("animated-text");

const sentences = [
  "Web Developer",
  "Passionate Coder",
];

let currentSentenceIndex = 0;

function changeText() {
  textElement.textContent = sentences[currentSentenceIndex];
  textElement.style.opacity = 1;
  setTimeout(() => {
    textElement.style.opacity = 0;
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    changeText();
  }, 1000); // change sentence every 2 seconds
}

changeText();