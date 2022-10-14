const ham = document.getElementById(`ham`)
const menu = document.getElementById(`menu`)
const navLink = document.getElementsByClassName(`navBar__link`)
const bod = document.getElementsByTagName(`body`)

ham.addEventListener("click", ()=>{
    ham.classList.toggle("active")
    menu.classList.toggle("active")
})

for (const link of navLink) {
    link.addEventListener("click", ()=>{
        ham.classList.remove("active")
        menu.classList.remove("active")
    })
}
