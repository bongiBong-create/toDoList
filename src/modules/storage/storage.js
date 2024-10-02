import { AddToDo } from "../lists/addToDo.js";

export let tasks = JSON.parse(window.localStorage.getItem("arr")) || [];

export function pushTaskLocalStorage(name, inputTitle, inputDes, inputDate, inputPriority) {
    const el = new AddToDo(name, inputTitle, inputDes, inputDate, inputPriority);
    tasks.push(el);
    window.localStorage.setItem("arr", JSON.stringify(tasks));
}

export function udpateLocalStorage (arr) {
    window.localStorage.setItem("arr", JSON.stringify(arr));
    tasks = JSON.parse(window.localStorage.getItem("arr")) || [];
}