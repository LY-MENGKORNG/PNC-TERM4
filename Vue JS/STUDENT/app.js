const inputField = document.getElementById("goal");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

function greateList(text) {
    ul.innerHTML += `
        <li>${text}</li>
    `;
}

btn.onclick = (e) => {
    if (inputField.value !== "") {
        greateList(inputField.value)
    }
    inputField.value = ""
}