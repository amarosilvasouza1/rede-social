import { verifyConfig } from "../config/createRenderConfige.js"

const img = "./src/icons/perfil.png"
const user = "Amaro_Silva"

const imgButton = "./src/icons/imgbutton.svg"

const renderButtonClickArrow = () => {
    const arrowButtonConteiner = document.querySelector('.header_cfg')

    const sectionButtonArrow = document.createElement("section")
    sectionButtonArrow.classList = "section_button_arrow"
        
    const divArrowButton = document.createElement("div")
    divArrowButton.classList = "arrow_button_div"

    const arrowButton = document.createElement("img")
    arrowButton.classList = "arrow_button_header pointer open"
    arrowButton.src = imgButton

    sectionButtonArrow.append(divArrowButton)
    divArrowButton.append(arrowButton)
    arrowButtonConteiner.append(divArrowButton)

    const clickArrow = () => {
        const buttonArrow = document.querySelector(".open")
        buttonArrow.addEventListener("click", () => {
            const sectionConteinerSelect = document.querySelector(".section_conteiner_select")
            sectionConteinerSelect.classList.remove("off")
            const buttonArrow = document.querySelector(".arrow_button_header")
            buttonArrow.classList.remove("open")
            buttonArrow.classList.add("close")

            const buttonArrowClose = document.querySelector(".close")
            buttonArrowClose.addEventListener("click", () => {
                const sectionConteinerSelect = document.querySelector(".section_conteiner_select")
                sectionConteinerSelect.classList.add("off")
                const buttonArrow = document.querySelector(".arrow_button_header")
                buttonArrow.classList.remove("close")
                buttonArrow.classList.add("open")
                clickArrow()
                return
            })
            return
        })
    }
    clickArrow()
}

const createHeaderPage = () => {
    const saveHeader = document.querySelector('.header_cfg')

    const imgPerfilDiv = document.createElement('div')
    imgPerfilDiv.classList = "header_container"

    const imgPerfilImg = document.createElement('img')
    imgPerfilImg.classList = "imgPerfil"
    imgPerfilImg.src = img

    const txtPerfilName = document.createElement('p')
    txtPerfilName.classList = "name_header_container"
    txtPerfilName.innerText = user

    const namePerfilDiv = document.createElement('div')
    namePerfilDiv.classList = "name_header_container"

    const imgPerfilButton = document.createElement('button')
    imgPerfilButton.classList = "button_header_container setinst"
    imgPerfilButton.innerText = "Configuração"
    imgPerfilButton.type = "button"

    renderHeaderPage(saveHeader, imgPerfilDiv, imgPerfilImg, namePerfilDiv, txtPerfilName, imgPerfilButton)
    verifyConfig()

    const headerSelectConteiner = document.querySelector('.header_cfg')

    const sectionConteinerSelect = document.createElement("section")
    sectionConteinerSelect.classList = "section_conteiner_select off"
 
    const ulContainerSelect = document.createElement("ul")
    ulContainerSelect.classList = "ul_container_select"

    const liCardSelectPrivate = document.createElement("li")
    liCardSelectPrivate.classList = "card_select_Privete card_select pointer"
    liCardSelectPrivate.innerText = "Chat Privado"

    const liCardSelectParty = document.createElement("li")
    liCardSelectParty.classList = "card_select_party card_select pointer"
    liCardSelectParty.innerText = "Festa"

    const liCardSelectCommunity = document.createElement("li")
    liCardSelectCommunity.classList = "card_select_community card_select pointer"
    liCardSelectCommunity.innerText = "Comunidade"

    const liCardSelectGallery = document.createElement("li")
    liCardSelectGallery.classList = "card_select_gallery card_select pointer"
    liCardSelectGallery.innerText = "Galeria"

    const liCardSelectMatch = document.createElement("li")
    liCardSelectMatch.classList = "card_select_match card_select pointer"
    liCardSelectMatch.innerText = "Match"

    const liCardSelectVipChat = document.createElement("li")
    liCardSelectVipChat.classList = "card_select_vip-chat card_select pointer"
    liCardSelectVipChat.innerText = "Chat Vip"
    liCardSelectVipChat.innerText = "Vip-Chat"

    const liCardSelectActivity = document.createElement("li")
    liCardSelectActivity.classList = "card_select_activity card_select pointer"
    
    liCardSelectActivity.innerText = "Atividade"

    const liCardSelectSuggestionsChat = document.createElement("li")
    liCardSelectSuggestionsChat.classList = "card_select_Suggestions-chat card_select pointer"
    liCardSelectSuggestionsChat.innerText = "Segestão"

    RenderSelectOption(headerSelectConteiner, sectionConteinerSelect, ulContainerSelect, liCardSelectPrivate, liCardSelectParty, liCardSelectCommunity, liCardSelectGallery, liCardSelectMatch, liCardSelectVipChat, liCardSelectActivity, liCardSelectSuggestionsChat)

    renderButtonClickArrow()
}

const RenderSelectOption = (headerSelectConteiner, sectionConteinerSelect, ulContainerSelect, liCardSelectPrivate, liCardSelectParty, liCardSelectCommunity, liCardSelectGallery, liCardSelectMatch, liCardSelectVipChat, liCardSelectActivity, liCardSelectSuggestionsChat) => {

    ulContainerSelect.append(liCardSelectPrivate, liCardSelectParty, liCardSelectCommunity, liCardSelectGallery, liCardSelectMatch, liCardSelectVipChat, liCardSelectActivity, liCardSelectSuggestionsChat)
    sectionConteinerSelect.append(ulContainerSelect)
    headerSelectConteiner.append(sectionConteinerSelect)
}

const renderHeaderPage = (saveHeader, imgPerfilDiv, imgPerfilImg, namePerfilDiv, txtPerfilName, imgPerfilButton) => {
   
    namePerfilDiv.append(imgPerfilImg, txtPerfilName)
    imgPerfilDiv.append(namePerfilDiv, imgPerfilButton)
    saveHeader.append(imgPerfilDiv)
}
createHeaderPage()