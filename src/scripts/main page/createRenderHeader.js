const img = "./src/icons/perfil.png"

const createHeaderPage = () => {
    const saveHeader = document.querySelector('.header_cfg')
    console.log(saveHeader) 
    const imgPerfilDiv = document.createElement('div')
    imgPerfilDiv.classList = "header_container"

    const imgPerfilImg = document.createElement('img')
    imgPerfilImg.classList = "header_container"

    const txtPerfilName = document.createElement('p')
    txtPerfilName.classList = "name_header_container"

    const namePerfilDiv = document.createElement('div')
    namePerfilDiv.classList = "name_header_container"

    const imgPerfilButton = document.createElement('button')
    imgPerfilButton.classList = "button_header_container"

    

    renderHeaderPage(saveHeader, imgPerfilDiv, imgPerfilImg, namePerfilDiv, txtPerfilName, imgPerfilButton)
}

const renderHeaderPage = (saveHeader, imgPerfilDiv, imgPerfilImg, namePerfilDiv, txtPerfilName, imgPerfilButton) => {
    namePerfilDiv.append(imgPerfilImg)
    namePerfilDiv.append(txtPerfilName)

    imgPerfilDiv.append(namePerfilDiv)
    imgPerfilDiv.append(imgPerfilButton)

    saveHeader.append(imgPerfilDiv)
}
createHeaderPage()