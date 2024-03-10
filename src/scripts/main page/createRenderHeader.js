import { verifyConfig } from "../config/createRenderConfige.js"

const img = "./src/icons/perfil.png"
const user = "Amaro"

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

