const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const principal = document.querySelector("#principal");
  principal.src = event.currentTarget.src;
  principal.alt = event.currentTarget.alt;

  console.log(principal);
}

function galeriaClick(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClick);
