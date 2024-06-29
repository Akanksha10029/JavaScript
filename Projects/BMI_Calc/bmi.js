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