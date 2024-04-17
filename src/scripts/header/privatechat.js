export const privateButton = (liCardSelectPrivate) => {
    liCardSelectPrivate.addEventListener("click", () => {
        privateChat()
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
    
    const sectionFriendsConversation = document.createElement("section")
    sectionFriendsConversation.classList = "chat-friend-conversation_section"

    const divFriendsConversation = document.createElement("div")
    divFriendsConversation.classList = "chat-friend-conversation_div"

    const ulFriendsConversation = document.createElement("ul")
    ulFriendsConversation.classList = "chat-friend-conversation_ul"

    const liFriendsConversation = document.createElement("li")
    liFriendsConversation.classList = "chat-friend-conversation_"

    renderPrivateChatFriends( sectionPrivateChat, divFriendsPrivateChat, ulFriendsPrivateChat, liFriendsPrivateChat)
    
    renderFriendsConversation(sectionPrivateChat, sectionFriendsConversation, divFriendsConversation, ulFriendsConversation, liFriendsConversation)

    console.log(sectionPrivateChat)
}

const renderPrivateChatFriends = (sectionPrivateChat, sectionFriendsPrivateChat, divFriendsPrivateChat, ulFriendsPrivateChat, liFriendsPrivateChat) => {
    sectionPrivateChat.append(sectionFriendsPrivateChat)
    sectionFriendsPrivateChat.append(divFriendsPrivateChat)
    divFriendsPrivateChat.append(ulFriendsPrivateChat)
    ulFriendsPrivateChat.append(liFriendsPrivateChat)
}

const renderFriendsConversation = (sectionPrivateChat, sectionFriendsConversation, divFriendsConversation, ulFriendsConversation, liFriendsConversation) => {
    sectionPrivateChat.append(sectionFriendsConversation)
    sectionFriendsConversation.append(divFriendsConversation)
    divFriendsConversation.append(ulFriendsConversation)
    ulFriendsConversation.append(liFriendsConversation)
}