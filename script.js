function toggleMode() {
    const html = document.documentElement

    //pegar a tag imagem
    const img = document.querySelector("#profile img")

        if(html.classList.contains("light")) {
            html.classList.remove('light')
            img.setAttribute("src", "./assets/avatar.png")
        } else {
            html.classList.add('light')
            img.setAttribute("src", "./assets/avatar-light.png")
        }

    // Outro modo de fazer a troca do modo light:  html.classList.toggle("light")
}