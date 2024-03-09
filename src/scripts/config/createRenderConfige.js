const img = "./src/icons/perfil.png"

let verify = false
let create = false

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

    analysisClickOpitionCard()
}

const renderHeaderConfig = (titleConfig, imgPelfil, closeButton) => {
    const divConfig = document.querySelector(".conteiner_config")

    divConfig.append(imgPelfil, titleConfig, closeButton)

    closeButtonConfig()
}

const renderSectionConfig = (ulListConfig, optionColor, optionBio, optionPreferences, optionFonts, optionSecurit, optionShortly, optionDarkList, optionHelp) => {
    const sectionConfig = document.querySelector(".configConteiner")

    ulListConfig.append(optionColor, optionColor, optionBio, optionPreferences, optionFonts, optionSecurit, optionShortly, optionDarkList, optionHelp)

    sectionConfig.appendChild(ulListConfig)
}

const createRenderBioConfig = () => {
    const bioConteiner = document.querySelector(".Info_user_config ")

    const divBioInfo = document.createElement("div")
    divBioInfo.classList = "conteiner_bio close_info"

    const pBioInfo = document.createElement("p")
    pBioInfo.innerText = "Edite Bio"
    pBioInfo.classList = "title_bio_info"

    const spanBioInfo = document.createElement("span")
    spanBioInfo.innerText = "Conte-nos mais sobre você"
    spanBioInfo.classList = "span_bio"

    const inputBioConfig = document.createElement("textarea")
    inputBioConfig.placeholder = "..."
    inputBioConfig.cols = 30
    inputBioConfig.rows = 10
    inputBioConfig.maxLength = 250
    inputBioConfig.classList = "input_conteiner"

    divBioInfo.append(pBioInfo, spanBioInfo, inputBioConfig)
    bioConteiner.append(divBioInfo)

    create = true
}

const createRenderHelpConfig = () => {
    const helpConteiner = document.querySelector(".Info_user_config ")

    const divHelpInfo = document.createElement("div")
    divHelpInfo.classList = "conteiner_help close_info"

    const titleHelpinfo = document.createElement("p")
    titleHelpinfo.innerText = "Ajuda E Contato"
    titleHelpinfo.classList = "title_Help_info"

    const inputAssuntoHelpConfig = document.createElement("input")
    inputAssuntoHelpConfig.placeholder = "Digite O Assunto"
    inputAssuntoHelpConfig.maxLength = 40

    const inputHelpConfig = document.createElement("textarea")
    inputHelpConfig.placeholder = "Tiket"
    inputHelpConfig.cols = 30
    inputHelpConfig.rows = 10
    inputHelpConfig.maxLength = 420
    inputHelpConfig.classList = "input_conteiner_Help"

    const emailHelp = document.createElement("p")
    emailHelp.innerText = "Aleatorio@gmail.com"
    emailHelp.classList = "email_info_help"

    const nunberHelp = document.createElement("p")
    nunberHelp.innerText = "+55 (00) 00000000"
    nunberHelp.classList = "nunber_info_help"

    divHelpInfo.append(titleHelpinfo, inputAssuntoHelpConfig, inputHelpConfig, emailHelp, nunberHelp)
    helpConteiner.append(divHelpInfo)

    create = true
}

const analysisClickOpitionCard = () => {
    const bioClickOpition = document.querySelector(".optionBio")
    bioClickOpition.addEventListener("click", () => {
        if (create == false) {
            createRenderBioConfig()
        } else if (create == true) {
            const closeDivRemov = document.querySelector(".Info_user_config")
            const closeRemove = document.querySelector(".close_info")
            closeDivRemov.removeChild(closeRemove)
            createRenderBioConfig()
        }
    })

    const helpClickOpition = document.querySelector(".optionHelp")
    helpClickOpition.addEventListener("click", () => {
        if (create == false) {
            createRenderHelpConfig()
        } else if (create == true) {
            const closeDivRemov = document.querySelector(".Info_user_config")
            const closeRemove = document.querySelector(".close_info")
            closeDivRemov.removeChild(closeRemove)
            createRenderHelpConfig()
        }
    })

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