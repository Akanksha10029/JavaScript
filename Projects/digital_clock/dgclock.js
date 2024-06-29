const clock = document.querySelector("#clock")
setInterval(function (e){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000)
