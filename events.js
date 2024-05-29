// const div1 = document.querySelector(".div1");
// const div2 = document.querySelector(".div2");
// const div3 = document.querySelector(".div3");

// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// div1.onmouseover = () => {
//     div1.innerText = "You are in div1";
//     div1.style.backgroundColor = getRandomColor();
// };
// div2.onmouseover = () => {
//     div2.innerText = "You are in div2";
//     div2.style.backgroundColor = getRandomColor();
// };
// div3.onmouseover = () => {
//     div3.innerText = "You are in div3";
//     div3.style.backgroundColor = getRandomColor();
// };

let btn1 = document.querySelector("#btn1")
let btn2  = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let body = document.querySelector("body")

btn1.addEventListener("click",(evt) =>{
    body.style.backgroundColor = "red"
})

btn2.addEventListener("click",(evt) =>{
    body.style.backgroundColor = "green"
})
btn3.addEventListener("click",(evt) =>{
    body.style.backgroundColor = "blue"
})