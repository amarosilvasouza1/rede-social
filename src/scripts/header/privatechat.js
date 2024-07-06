import { renderInpultChatSand } from "./privatechat/emterSend.js"

let clickOn = ""
const userName = "Amaro silva"

export const privateButton = (liCardSelectPrivate) => {
    liCardSelectPrivate.addEventListener("click", () => {

        const chatOn = document.querySelector(".card_select_private")
        chatOn.classList = "card_select_private card_select pointer green_on"

        if (clickOn === "privateChat") {
            return
        } else {
            clickOn = "privateChat"
            privateChat()
        }
    })
}

const privateChat = () => {

    const headerSelectConteiner = document.querySelector('.conteiner_main')

    const sectionPrivateChat = document.createElement("section")
    sectionPrivateChat.classList = "private-chat_section"

    headerSelectConteiner.append(sectionPrivateChat)

    const sectionFriendsPrivateChat = document.createElement("section")
    sectionFriendsPrivateChat.classList = "private-chat-friends_section"

    const divFriendsPrivateChat = document.createElement("div")
    divFriendsPrivateChat.classList = "private-chat_div"

    const ulFriendsPrivateChat = document.createElement("ul")
    ulFriendsPrivateChat.classList = "private-chat_ul"

    const liFriendsPrivateChat = document.createElement("li")
    liFriendsPrivateChat.classList = "private-chat_li"

    const imgFriendsPrivateChat = document.createElement("img")
    imgFriendsPrivateChat.src = "./src/icons/perfil.png"
    imgFriendsPrivateChat.classList = "imgFriendsPrivateChat"

    const infoDivChatPrivate = document.createElement("div")
    infoDivChatPrivate.classList = "info_div_chat_private"

    const nameFriendsPrivateChat = document.createElement("p")
    nameFriendsPrivateChat.innerText = "Amaro silva"
    nameFriendsPrivateChat.classList = "name_fruends_private-chat"

    const mensagemFriendsPrivateChat = document.createElement("p")
    mensagemFriendsPrivateChat.classList = "mensagem_friends_private_chat"
    mensagemFriendsPrivateChat.innerText = "eu estou bem sim"

    infoDivChatPrivate.append(nameFriendsPrivateChat, mensagemFriendsPrivateChat)

    const sectionFriendsConversation = document.createElement("section")
    sectionFriendsConversation.classList = "chat-friend-conversation_section"

    const divFriendsConversation = document.createElement("div")
    divFriendsConversation.classList = "chat-friend-conversation_div"

    const ulFriendsConversation = document.createElement("ul")
    ulFriendsConversation.classList = "chat-friend-conversation_ul"

    const liFriendsConversation = document.createElement("li")
    liFriendsConversation.classList = "left"
    
    const divFriendsConversation2 = document.createElement("div")
    divFriendsConversation2.classList = "chat-friend-conversation chat-holy holy-chat_blue-glod blue-gold_chat blue-gold_text pointer"
    divFriendsConversation2.value = "Amaro silva"
    divFriendsConversation2.innerText = "oi tudo bem"

    liFriendsConversation.append(divFriendsConversation2)

    const liFriendsConversation2 = document.createElement("li")
    liFriendsConversation2.classList = "right"

    const divFriendsConversation1 = document.createElement("div")
    divFriendsConversation1.classList = "chat-friend-conversation chat-holy holy-chat_blue-glod blue-gold_chat blue-gold_text pointer"
    divFriendsConversation1.value = "joao almeida"
    divFriendsConversation1.innerText = "oi"

    liFriendsConversation2.append(divFriendsConversation1)

    const liFriendsConversation3 = document.createElement("li")
    liFriendsConversation3.classList = "right"
    
    const divFriendsConversation3 = document.createElement("div")
    divFriendsConversation3.classList = "chat-friend-conversation chat-holy holy-chat_blue-glod blue-gold_chat blue-gold_text pointer"
    divFriendsConversation3.value = "joao almeida"
    divFriendsConversation3.innerText = "estou bem sim e vc"

    const divRenderInpultChatSand = document.createElement("div")

    const inpultChatSand = document.createElement("input")

    divRenderInpultChatSand.append(inpultChatSand)

    liFriendsConversation3.append(divFriendsConversation3)

    liFriendsPrivateChat.append(imgFriendsPrivateChat, infoDivChatPrivate)

    ulFriendsConversation.append(liFriendsConversation, liFriendsConversation2, liFriendsConversation3)

    sectionFriendsConversation.append(divFriendsConversation, divRenderInpultChatSand)

    renderPrivateChatFriends(sectionPrivateChat, sectionFriendsPrivateChat, divFriendsPrivateChat, ulFriendsPrivateChat, liFriendsPrivateChat)

    renderFriendsConversation(sectionPrivateChat, sectionFriendsConversation, divFriendsConversation, ulFriendsConversation, divRenderInpultChatSand)
}

const renderPrivateChatFriends = (sectionPrivateChat, sectionFriendsPrivateChat, divFriendsPrivateChat, ulFriendsPrivateChat, liFriendsPrivateChat) => {
    sectionPrivateChat.append(sectionFriendsPrivateChat)
    sectionFriendsPrivateChat.append(divFriendsPrivateChat)
    divFriendsPrivateChat.append(ulFriendsPrivateChat)
    ulFriendsPrivateChat.append(liFriendsPrivateChat)
}

const renderFriendsConversation = (sectionPrivateChat, sectionFriendsConversation, divFriendsConversation, ulFriendsConversation, liFriendsConversation, divRenderInpultChatSand) => {
    sectionPrivateChat.append(sectionFriendsConversation)
    divFriendsConversation.append(ulFriendsConversation)

    renderInpultChatSand()
}