export const entreSaveBio = () => {
    const saveButtonBio = document.querySelector(".enter_save_bio")
    saveButtonBio.addEventListener("click", () => {
        const bioValue = document.querySelector(".input_conteiner")
        localStorage.removeItem("@bio_user")
        localStorage.setItem("@bio_user", JSON.stringify(bioValue.value))
    })
}