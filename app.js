
//javascript for the typing effect

const typing = document.getElementById("typing");
const professions = ["Children wears ", "women wears", "men wears", "Official wears"];

var index = 0;
var professionIndex = 0;
var isDeleting = false;

function type() {
  const currentText = professions[professionIndex];
  if (isDeleting) {
    typing.textContent = currentText.substring(0, index-1);
    index--;
  } else {
    typing.textContent = currentText.substring(0, index+1);
    index++;
  }
  
  if (index === currentText.length+1) {
    isDeleting = true;
  }
  
  if (index === 0 && isDeleting) {
    professionIndex = (professionIndex + 1) % professions.length;
    isDeleting = false;
  }
  
  const typingSpeed = Math.random() * 100 + 50;
  
  setTimeout(type, typingSpeed);
}


// javascript for the responsive navbar



setTimeout(type, 1000);

const hamburger=document.querySelector(".hamburger");
const navlinks=document.querySelector(".nav-links");
const links=document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");

    });
})
