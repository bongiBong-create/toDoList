import { createElement } from "../helpers/create.js";
import { pushTaskLocalStorage, tasks } from "../storage/storage.js";
import { task } from "./renderTask.js";

window.addEventListener("click", (e) => {
    const form = document.querySelector("dialog");
    const main = document.querySelector("main")
    if (e.target == main) {
        form.style.display = "none"
    }
})

export default function renderList(name) {
    const root = document.getElementById("root");

    // dialog
    const dialog = createElement("dialog", "");
    const divTitle = createElement("div", "", { class: "input input__title" });
    divTitle.classList.add("input__title")
    divTitle.classList.add("input")
    const labelTitle = createElement("label", "Title", { for: "title" });
    const inputTitle = createElement("input", "", {id: "title"});
    inputTitle.required = true;
    inputTitle.type = "text";
    divTitle.append(labelTitle, inputTitle);

    const divDes = createElement("div", "", { class: "input input__description" });
    divDes.classList.add("input__description")
    divDes.classList.add("input")
    const labelDes = createElement("label", "Description", { for: "description" });
    const inputDes = createElement("input");
    inputDes.required = true;
    divDes.append(labelDes, inputDes);

    const divDate = createElement("div", "", { class: "input input__date" });
    const labelDate = createElement("label", "Date", { for: "date" });
    const inputDate = createElement("input");
    inputDate.type = "date";
    divDate.append(labelDate, inputDate);

    const divPriority = createElement("div", "", { class: "input input__priority" });
    const labelPriority = createElement("label", "Priority", { for: "priority" });
    const inputPriority = createElement("input");
    divPriority.append(labelPriority, inputPriority);

    const btnAdd = createElement("button", "add", { class: "add__task bg-transparent border-4 bg-slate-200 p-2" });
    btnAdd.type = "submit";

    // main
    const todayTitle = document.createElement("div");
    todayTitle.classList.add("today__title")
    const h1 = createElement("h1", name);
    const btn = createElement("button", "+ Add task", {class: "add__btn"});
    h1.textContent = name.toUpperCase();
    todayTitle.style.marginBottom = "10px";

    btn.addEventListener("click", () => {
        dialog.style.display = "flex";
    })

    // tasks
    const tasksDiv = createElement("div", "", { class: "tasks flex flex-col w-full gap-3" })

    function renderTasks() {
        tasksDiv.innerText = "";
        tasksDiv.append(...task(tasks.filter(task => task.name === name), renderTasks))
    }

    if (tasks) {
        renderTasks()
    }

    btnAdd.addEventListener("click", () => {
        dialog.style.display = "none";
        pushTaskLocalStorage(name, inputTitle.value, inputDes.value, inputDate.value, inputPriority.value)
        renderTasks()
    })

    todayTitle.append(h1, btn)
    dialog.append(divTitle, divDes, divDate, divPriority, btnAdd)
    root.append(todayTitle, dialog, tasksDiv)
}