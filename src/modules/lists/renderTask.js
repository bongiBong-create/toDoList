import { createElement } from "../helpers/create.js";
import { udpateLocalStorage, tasks} from "../storage/storage.js";

export function task(arr, render) {
    const arrTasks = arr.map(task => {
        const taskDiv = createElement("div", "", { class: "task" });
        const infoDiv = createElement("div", "", { class: "info w-3/6 flex flex-col gap-1" });
        const titleDiv = createElement("div", task.title, { class: "title" });
        const descriptionDiv = createElement("div", task.description, { class: "description text-xs" });
        const priorityDiv = createElement("div", `priority: ${task.priority}`, { class: "priority mr-10" });
        const dateDiv = createElement("div", `date: ${task.date}`, { class: "date" });
        const btnDel = createElement("button", "delete", { class: `${task.title}` });

        btnDel.addEventListener("click", (e) => {
            const updateLocal = tasks.filter(t => t.title !== e.target.classList[0]);
            udpateLocalStorage(updateLocal);
            render();
        });

        infoDiv.append(titleDiv, descriptionDiv);
        taskDiv.append(infoDiv, priorityDiv, dateDiv, btnDel);

        return taskDiv;
    });

    return arrTasks;
}