export function today() {
    const root = document.getElementById("root");

    const h1 = document.createElement("h1");

    h1.textContent = "TODAY"
    
    root.append(h1)
}