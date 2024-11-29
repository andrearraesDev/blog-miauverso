// Seleciona o pop-up pelo ID
var popup = document.getElementById("popup");

// Seleciona todos os botões de "Ler Mais"
var openPopupButtons = document.querySelectorAll(".texto-botao-ler-mais");

// Seleciona o elemento de fechar o pop-up pelo ID
var closePopupSpan = document.getElementById("close-popup");

// Função para abrir o pop-up
function openPopup() {
  // Faz o pop-up aparecer
  popup.style.display = "block";
}

// Adiciona evento de clique a todos os botões "Ler Mais"
openPopupButtons.forEach(function (button) {
  button.addEventListener("click", openPopup);
});

// Função para fechar o pop-up ao clicar no "X"
closePopupSpan.onclick = function () {
  // Faz o pop-up desaparecer
  popup.style.display = "none";
};

// Função para fechar o pop-up ao clicar fora dele
window.onclick = function (event) {
  if (event.target == popup) {
    // Faz o pop-up desaparecer se clicar fora dele
    popup.style.display = "none";
  }
};

// Alterna a visibilidade do menu ao clicar no botão
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".nav-links");
  const toggleButton = document.querySelector(".menu-toggle");
  if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
    menu.classList.remove("show");
  }
});
