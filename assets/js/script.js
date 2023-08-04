let horas = document.querySelector("#horas")
let minutos = document.querySelector("#minutos")
let segundos = document.querySelector("#segundos")

setInterval(function time(){
    let DateToday = new Date();
    let hr = DateToday.getHours();
    let mim = DateToday.getMinutes();
    let s = DateToday.getSeconds();

    if(hr<10)hr = "0" + hr

    if(mim<10)mim = "0" + mim

    if(s<10)s = "0" + s

    horas.textContent = hr
    minutos.textContent = mim
    segundos.textContent = s
})