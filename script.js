function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar_matos.png")
    img.setAttribute("alt", "Logo da agencia com fundo preto e escrita branca.")
  } else {
    img.setAttribute("src", "./assets/avatar_matos.png")
    img.setAttribute("alt", "Logo da agencia com fundo preto e escrita branca.")
  }
}
