const privateButton = document.querySelector("card_select_private")
privateButton.addEventListener("click", () => {
    privateChat()
})

const privateChat = () => {

    const headerSelectConteiner = document.querySelector('.conteiner_main')

    const privateDiv = document.createElement("div")
    privateDiv.classList = "private_div"

    const privateUl = document.createElement("ul")
    privateUl.classList = "private_ul"

    const privateChatsLi = document.createElement("li")
    privateLi.classList = "private-chats_li"
    privateLi.innerText = "Conversas"

    const privateStatusLi = document.createElement("li")
    privateStatusLi.classList = "private-status_li"
    privateStatusLi.innerText = "Status"
}