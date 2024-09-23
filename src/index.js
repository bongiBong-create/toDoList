import "./style.css";
import {today} from "./modules/today.js"

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        today()
    })
})