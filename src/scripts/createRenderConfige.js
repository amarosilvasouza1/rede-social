const img = "./src/icons/perfil.png"

let verify = false

const createConfig = () => {

    const modalConfig = document.querySelector(".modal_config")
    modalConfig.showModal()

    const imgPelfil = document.querySelector("img")
    imgPelfil.src = img
    imgPelfil.classList = "imgPerfil pointer"
    
    const titleConfig = document.createElement("h2")
    titleConfig.innerText = "Configuraçao"
    titleConfig.classList = "titleConfig"

    const closeButton = document.createElement("p")
    closeButton.innerText = "X"
    closeButton.classList = "closeButton"

    renderHeaderConfig(titleConfig, imgPelfil, closeButton)

    const ulListConfig = document.createElement("ul")
    ulListConfig.classList = "ulCardConfigList"

    const optionColor = document.createElement("li")
    optionColor.classList = "cardConfig optionColor"
    optionColor.innerText = "Cores"

    const optionBio = document.createElement("li")
    optionBio.classList = "cardConfig optionBio"
    optionBio.innerText = "Bio"

    const optionPreferences = document.createElement("li")
    optionPreferences.classList = "cardConfig optionPreferences"
    optionPreferences.innerText = "Preferençias"

    const optionFonts = document.createElement("li")
    optionFonts.classList = "cardConfig optionFonts"
    optionFonts.innerText = "Fonts-Chats"

    const optionSecurit = document.createElement("li")
    optionSecurit.classList = "cardConfig optionSecurit"
    optionSecurit.innerText = "Securanças E Notificaçoes"

    const optionShortly = document.createElement("li")
    optionShortly.classList = "cardConfig optionShotly"
    optionShortly.innerText = "Em Breve"

    const optionDarkList = document.createElement("li")
    optionDarkList.classList = "cardConfig optionDarkList"
    optionDarkList.innerText = "Lista Negra"

    const optionHelp = document.createElement("li")
    optionHelp.classList = "cardConfig optionHelp"
    optionHelp.innerText = "Ajuda-Contato"

    renderSectionConfig(ulListConfig, optionColor, optionBio, optionPreferences, optionFonts, optionSecurit, optionShortly, optionDarkList, optionHelp)

    verify = true
}

const renderHeaderConfig = (titleConfig, imgPelfil, closeButton) => {
    const divConfig = document.querySelector(".conteiner_config")

    divConfig.appendChild(imgPelfil)
    divConfig.appendChild(titleConfig)
    divConfig.appendChild(closeButton)

    closeButtonConfig()
}

const renderSectionConfig = (ulListConfig, optionColor, optionBio, optionPreferences, optionFonts, optionSecurit, optionShortly, optionDarkList, optionHelp) => {
    const sectionConfig = document.querySelector(".configConteiner")

    ulListConfig.appendChild(optionColor)
    ulListConfig.appendChild(optionBio)
    ulListConfig.appendChild(optionPreferences)
    ulListConfig.appendChild(optionFonts)
    ulListConfig.appendChild(optionSecurit)
    ulListConfig.appendChild(optionShortly)
    ulListConfig.appendChild(optionDarkList)
    ulListConfig.appendChild(optionHelp)
    
    sectionConfig.appendChild(ulListConfig)
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