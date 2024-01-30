
const greetingElement = document.getElementById("greeting");


const currentHour = new Date().getHours();


const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  
  const containerWidth = container.offsetWidth; 
  const numColumns = Math.floor(containerWidth / 240); 
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;
});

observer.observe(container);
