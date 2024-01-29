const btnStart = document.querySelector('#btn-start');
const btnStop = document.querySelector('#btn-stop');

function Changecolor() {
    const hex = "0123456789ABCDEF";
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let helpToChangeBgColor;
const startChangingColor = function () {
    helpToChangeBgColor = setInterval(changeBgColor, 1000);
    function changeBgColor() {
        document.body.style.backgroundColor = Changecolor();
    };
}
const stopChangingColor = function () {
    clearInterval(helpToChangeBgColor);
}

btnStart.addEventListener('click', startChangingColor)
btnStop.addEventListener('click', stopChangingColor)








