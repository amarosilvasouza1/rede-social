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
    optionPreferences.innerText = "Preferências"

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
    pBioInfo.innerText = "Biografia"
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
    inputHelpConfig.placeholder = "Ticket"
    inputHelpConfig.cols = 30
    inputHelpConfig.rows = 10
    inputHelpConfig.maxLength = 420
    inputHelpConfig.classList = "input_conteiner_Help"

    const emailHelp = document.createElement("p")
    emailHelp.innerText = "Aleatorio@gmail.com"
    emailHelp.classList = "email_info_help"

    const nunberHelp = document.createElement("p")
    nunberHelp.innerText = "+55 (00) 00000000"
    nunberHelp.classList = "number_info_help"

    divHelpInfo.append(titleHelpinfo, inputAssuntoHelpConfig, inputHelpConfig, emailHelp, nunberHelp)
    helpConteiner.append(divHelpInfo)

    create = true
}

const createRenderPreferencesConfig = () => {
    const preferencesConteiner = document.querySelector(".Info_user_config ")

    const divPreferencesInfo = document.createElement("div")
    divPreferencesInfo.classList = "conteiner_preferences close_info"

    const spanFoodpreferences = document.createElement("span")
    spanFoodpreferences.innerText = "#Comida"

    const spanCookpreferences = document.createElement("span")
    spanCookpreferences.innerText = "#cozinhar"

    const spanGamespreferences = document.createElement("span")
    spanGamespreferences.innerText = "#Jogos"

    const spanStrollpreferences = document.createElement("span")
    spanStrollpreferences.innerText = "#Passeio"

    divPreferencesInfo.append(spanFoodpreferences, spanCookpreferences, spanGamespreferences, spanStrollpreferences)
    preferencesConteiner.append(divPreferencesInfo)

    create = true
}

const creatRenderDarkList = () => {
    const drkListConteiner = document.querySelector(".Info_user_config ")

    const divDarkListInfo = document.createElement("div")
    divDarkListInfo.classList = "conteiner_darkList close_info"

    const ulCardDarkListInfo = document.createElement("ul")
    ulCardDarkListInfo.classList = "ul_card_dark-list"

    const liCardDarkListInfo = document.createElement("li")
    liCardDarkListInfo.classList = "li_card_dark-list"

    const imgUserCardDarkListInfo = document.createElement("img")
    imgUserCardDarkListInfo.classList = "img_dark-list imgPerfil"
    imgUserCardDarkListInfo.src = img

    const pCardDarkListInfo = document.createElement("p")
    pCardDarkListInfo.classList = "p_name_dark-list"
    pCardDarkListInfo.innerText = "Amaro"

    const spanCardDarkListInfo = document.createElement("span")
    spanCardDarkListInfo.classList = "hour_dark-list"
    spanCardDarkListInfo.innerText = "00:00"

    const removeCardDarkListInfo = document.createElement("button")
    removeCardDarkListInfo.classList = "remove_dark-list"
    removeCardDarkListInfo.innerText = "Remover Usuário Da Lista Negra"

    liCardDarkListInfo.append(imgUserCardDarkListInfo, pCardDarkListInfo, spanCardDarkListInfo, removeCardDarkListInfo)
    ulCardDarkListInfo.append(liCardDarkListInfo)
    divDarkListInfo.append(ulCardDarkListInfo)
    drkListConteiner.append(divDarkListInfo)

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

    const PreferencesClickOpition = document.querySelector(".optionPreferences")
    PreferencesClickOpition.addEventListener("click", () => {
        if (create == false) {
            createRenderPreferencesConfig()
        } else if (create == true) {
            const closeDivRemov = document.querySelector(".Info_user_config")
            const closeRemove = document.querySelector(".close_info")
            closeDivRemov.removeChild(closeRemove)
            createRenderPreferencesConfig()
        }
    })

    const darkListClickOpition = document.querySelector(".optionDarkList")
    darkListClickOpition.addEventListener("click", () => {
        if (create == false) {
            creatRenderDarkList()
        } else if (create == true) {
            const closeDivRemov = document.querySelector(".Info_user_config")
            const closeRemove = document.querySelector(".close_info")
            closeDivRemov.removeChild(closeRemove)
            creatRenderDarkList()
        }
    })

    const helpClickOpition = document.querySelector(".optionHelp")
    helpClickOpition.addEventListener("click", () => {
        if (create == false) {
            createRenderHelpConfig()
        } else if (create == true) {
            const closeDivRemove = document.querySelector(".Info_user_config")
            const closeRemove = document.querySelector(".close_info")
            closeDivRemove.removeChild(closeRemove)
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