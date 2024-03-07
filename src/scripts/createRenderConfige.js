const img = "./src/icons/perfil.png"

let verify = false

const createConfig = () => {

    const modalConfig = document.querySelector(".modal_config")
    modalConfig.showModal()

    const titleConfig = document.createElement("h2")
    titleConfig.innerText = "Configuraçao"
    titleConfig.classList = "titleConfig"

    const imgPelfil = document.querySelector("img")
    imgPelfil.src = img
    imgPelfil.classList = "imgPerfil pointer"

    const closeButton = document.createElement("p")
    closeButton.innerText = "X"
    closeButton.classList = "closeButton"

    renderHeaderConfig(titleConfig, imgPelfil, closeButton)

    verify = true
}

const renderHeaderConfig = (titleConfig, imgPelfil, closeButton) => {
    const divConfig = document.querySelector(".conteiner_config")

    divConfig.appendChild(imgPelfil)
    divConfig.appendChild(titleConfig)
    divConfig.appendChild(closeButton)

    closeButtonConfig()
}

const closeButtonConfig = () => {
    const buttonCloseConfig = document.querySelector(".closeButton")
    
    buttonCloseConfig.addEventListener("click", () => {
        const modalConfig = document.querySelector(".modal_config")
        modalConfig.close()
    })
}

const verifyConfig = () => {
    const butonConfig = document.querySelector(".setinst")

    butonConfig.addEventListener("click", () => {
        if (verify == false) {
            createConfig()
        } else {
            const modalConfig = document.querySelector(".modal_config")
            modalConfig.showModal()
        }
    })
}

verifyConfig()