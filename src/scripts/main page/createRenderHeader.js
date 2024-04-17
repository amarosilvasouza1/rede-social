import { verifyConfig } from "../config/createRenderConfige.js"
import { privateButton } from "../header/privatechat.js"

const img = "./src/icons/perfil.png"
const user = "Amaro_Silva"

const imgButton = "./src/icons/imgbutton.svg"
const imgCloseButton = "./src/icons/imgbuttonclose.svg"

const renderButtonClickArrow = () => {
    const arrowButtonConteiner = document.querySelector('.header_cfg')

    const sectionButtonArrow = document.createElement("section")
    sectionButtonArrow.classList = "section_button_arrow"

    const divSelectOpition = document.createElement("div")
    divSelectOpition.classList = "div_select_opition"

    const divArrowButton = document.createElement("div")
    divArrowButton.classList = "arrow_button_div"

    const arrowButton = document.createElement("img")
    arrowButton.classList = "arrow_button_header pointer open"
    arrowButton.src = imgButton

    arrowButtonConteiner.append(sectionButtonArrow)
    sectionButtonArrow.append(divSelectOpition, divArrowButton)
    divArrowButton.append(arrowButton)

    const clickArrow = () => {
        const buttonArrow = document.querySelector(".open")
        buttonArrow.addEventListener("click", () => {

            const headerSelectConteiner = document.querySelector('.div_select_opition')

            const sectionConteinerSelect = document.createElement("section")
            sectionConteinerSelect.classList = "section_conteiner_select"

            const ulContainerSelect = document.createElement("ul")
            ulContainerSelect.classList = "ul_container_select"

            const liCardSelectPrivate = document.createElement("li")
            liCardSelectPrivate.classList = "card_select_private card_select pointer"
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

            ulContainerSelect.append(liCardSelectPrivate, liCardSelectParty, liCardSelectCommunity, liCardSelectGallery, liCardSelectMatch, liCardSelectVipChat, liCardSelectActivity, liCardSelectSuggestionsChat)
            sectionConteinerSelect.append(ulContainerSelect)
            headerSelectConteiner.append(sectionConteinerSelect)

            const divOpenArrowButton = document.querySelector(".arrow_button_div")
            const openArrowButton = document.querySelector(".open")
            divOpenArrowButton.removeChild(openArrowButton)

            const divCloseArrowButton = document.querySelector(".arrow_button_div")
            const closeArrowButtonImg = document.createElement("img")
            closeArrowButtonImg.classList = "arrow_button_header pointer close"
            closeArrowButtonImg.src = imgCloseButton

            divCloseArrowButton.append(closeArrowButtonImg)

            privateButton(liCardSelectPrivate)


            const closeArrowClick = document.querySelector(".close")
            closeArrowClick.addEventListener("click", () => {
                const arrowButtonConteiner = document.querySelector('.header_cfg')
                const reset = document.querySelector(".section_button_arrow")
                arrowButtonConteiner.removeChild(reset)
                renderButtonClickArrow()
            })
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
}

const renderHeaderPage = (saveHeader, imgPerfilDiv, imgPerfilImg, namePerfilDiv, txtPerfilName, imgPerfilButton) => {

    namePerfilDiv.append(imgPerfilImg, txtPerfilName)
    imgPerfilDiv.append(namePerfilDiv, imgPerfilButton)
    saveHeader.append(imgPerfilDiv)
}

createHeaderPage()

renderButtonClickArrow()