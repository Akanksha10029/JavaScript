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

## Project 2 BMI Calculator

```javascript
const form = document.querySelector("form")
form.addEventListener("submit", e=>{
    e.preventDefault()

    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseFloat(document.querySelector("#weight").value)

    let formula = (weight/(height**2))*10000
    
    let result = formula.toFixed(2)

    if (result<18.6){
        document.querySelector("#result").innerHTML = `${result} => UnderWeight`
    }
    else if (result>=18.6 && result<24.9){
        document.querySelector("#result").innerHTML = `${result} => Normal`
    }
    else if (result>=25 && result<29.9){
        document.querySelector("#result").innerHTML = `${result} => Overweight`
    }
    else{
        document.querySelector("#result").innerHTML = `${result} => Obese`
    }

    // document.querySelector("#result").innerHTML = `<b>${result}</b>`;


})
```
