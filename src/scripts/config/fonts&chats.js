import { holyChatArray } from "./data.holyChats.js"

export const holyChatsCreate = () => {
    const holyChatsConteiner = document.querySelector(".Info_user_config")

    const divHolyChats = document.createElement("div")
    divHolyChats.classList = "div_holy-chats close_info"

    const ulHolyChats = document.createElement("ul")
    ulHolyChats.classList = "ul_holy-chats"

   for (let i = 0; i < holyChatArray.length; i++) {
    const holyChat = holyChatArray[i]

    const liCardChatHoly = document.createElement("li")
    liCardChatHoly.classList = `chat-holy ${holyChat.nameHoly} ${holyChat.colorHoly} ${holyChat.colorText}`
    
    const pTextCardHoly = document.createElement("p")
    pTextCardHoly.innerText = "A felicidade não é algo pronto. Ela é feita das suas próprias ações."

    liCardChatHoly.append(pTextCardHoly)
    ulHolyChats.append(liCardChatHoly)
   }

    holyChatsConteiner.append(divHolyChats)
    divHolyChats.append(ulHolyChats)
}