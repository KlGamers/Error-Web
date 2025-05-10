const key = document.querySelector(".key");
const keyhole = document.querySelector(".keyhole");
const ghost = document.querySelector(".ghost");

const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");


const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);

const animationDuration = parseInt(rootStyles.getPropertyValue("--animation-duration"))*1000;
let keyTimer = animationDuration*9/8;


const keyBox = key.getBoundingClientRect();

const timeoutID = setTimeout(() => {
  key.parentElement.parentElement.style.cursor = "grab";

  key.style.animationPlayState = "running";
  keyhole.style.animationPlayState = "running";


  key.style.pointerEvents = "none";

  window.addEventListener("mousemove", updateKeyPosition);

  keyhole.addEventListener("mouseover", grantAccess);

  clearTimeout(timeoutID);
}, keyTimer);


const updateKeyPosition = (e) => {
  let x = e.clientX;
  let y = e.clientY;
  key.style.left = x - keyBox.width/1.5;
  key.style.top = y - keyBox.height/2;
};

const grantAccess = () => {
  key.parentElement.parentElement.style.cursor = "default";

  heading.textContent = '🎉 ¡Genial! 🎉';
paragraph.textContent = 'Acceso concedido';


  keyhole.style.display = "none";
  key.style.display = "none";

  window.removeEventListener("mousemove", updateKeyPosition);
  keyhole.removeEventListener("mouseover", grantAccess);
};