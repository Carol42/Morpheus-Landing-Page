// top button

button = document.getElementById("topButton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
} 

// escreve título

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

// MVV

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
el.addEventListener("click", openTabs);
});


function openTabs(el) {
var btnTarget = el.currentTarget;
var janela = btnTarget.dataset.janela;

tabContent.forEach(function(el) {
  el.classList.remove("active");
});

tabLinks.forEach(function(el) {
  el.classList.remove("active");
});

document.querySelector("#" + janela).classList.add("active");

btnTarget.classList.add("active");
}
