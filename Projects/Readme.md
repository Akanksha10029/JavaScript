# JavaScripts Projects

## Project 1 js Code Solution: Background color changer

```javascript
const bgBox = document.querySelector(".box")
const btn = document.querySelectorAll(".btn")

btn.forEach(e => {

    e.addEventListener("click", ev => {
        if (ev.target.id === "gray") {
            bgBox.style.backgroundColor = ev.target.id
        }
        else if (ev.target.id === "yellow") {
            bgBox.style.backgroundColor = ev.target.id
        }
        else if (ev.target.id === "purple") {
            bgBox.style.backgroundColor = ev.target.id
        }
        else if (ev.target.id === "pink") {
            bgBox.style.backgroundColor = ev.target.id
        }
    })
});

const box = document.querySelector(".box")
const body = document.querySelector("body")

body.addEventListener("click", () => {
    box.style.backgroundColor = "orange";
});

box.addEventListener("click", ev => {
    ev.stopPropagation();
});

```
