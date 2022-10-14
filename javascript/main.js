const ham = document.getElementById(`ham`)
const menu = document.getElementById(`menu`)
let navLink = document.getElementsByClassName(`navBar__link`)

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

