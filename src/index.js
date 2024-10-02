import "./style.css";
import renderList from "./modules/lists/renderList";
import clear from "./modules/helpers/clear";

const nav = document.querySelector("nav")
const main = document.querySelector("main")
const theme = document.querySelector(".theme");
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        clear()
        renderList(tab.id)
    })
})

theme.addEventListener("click", () => {
    if (nav.classList.contains("dark")) {
        nav.classList.remove("dark");
        main.classList.remove("dark__light");
        theme.style.backgroundColor = "#000";
    } else {
        nav.classList.add("dark")
        main.classList.add("dark__light");
        theme.style.backgroundColor = "#fff";
    }
})