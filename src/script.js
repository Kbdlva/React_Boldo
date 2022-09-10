const burger = document.querySelector(".header_burger")
const head_menu = document.querySelector(".header_menu")
const lock_body = document.querySelector("body")



burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    head_menu.classList.toggle("active");
    lock_body.classList.toggle('lock')

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    burger.classList.remove("active");
    head_menu.classList.remove("active");
    lock_body.classList.remove('lock')

}))