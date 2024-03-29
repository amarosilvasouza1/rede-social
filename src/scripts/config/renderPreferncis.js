import { preferencesUser } from "./data.config.js"

export const createRenderPreferencesConfig = () => {
    const preferencesConteiner = document.querySelector(".Info_user_config ")

    const divPreferencesInfo = document.createElement("div")
    divPreferencesInfo.classList = "conteiner_preferences close_info"

    const ulPreferenceInfo = document.createElement("ul")
    ulPreferenceInfo.classList = "ul_preferences_info"  
    
    for (let i = 0; i < preferencesUser.length; i++) {
        const array = preferencesUser[i]
        
        const liPreferenceInfo = document.createElement("li")
        liPreferenceInfo.classList = `li_preference_info ${array.preferences} ${array.color}`
        liPreferenceInfo.innerText = array.preferences

        ulPreferenceInfo.append(liPreferenceInfo)
    }
 
    divPreferencesInfo.append(ulPreferenceInfo)
    preferencesConteiner.append(divPreferencesInfo)
}