//1
// const button = document.getElementById("btn");
// button.addEventListener("click", function () {
//     button.innerText = "click me";
// })

//2
// const button1 = document.getElementById("btn1")
// const button2 = document.getElementById("btn2")
// const button3 = document.getElementById("btn3")
// const button4 = document.getElementById("btn4")

// button1.addEventListener("click", function () {
//     alert("smile")
// })
// button2.addEventListener("click", function () {
//     alert("life")
// })
// button3.addEventListener("click", function () {
//     alert("is")
// })
// button4.addEventListener("click", function () {
//     alert("Good! ;)")
// })

//3
// const list = document.getElementsByClassName("list");
// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener("click", function () {
//         console.log(list[i].innerText);
//     })
// }

//4-5
// const button = document.getElementById("button")
// const button2 = document.getElementById("button2")
// const counter = document.getElementById("counter")
// let num = 0;
// button.addEventListener("click", function () {
//     num++;
//     counter.innerText = num
// })
// button1.addEventListener("click", function () {
//     num--;
//     counter.innerText = num
// })

//7
// const groceries = [
//     {
//         name: "avocado",
//         price: 12,
//         description: "fresh and clean"
//     },
//     {
//         name: "steak",
//         price: 90,
//         description: "fresh out the bucher"
//     },
//     {
//         name: "vodka",
//         price: 40,
//         description: "hangover free"
//     }
// ]


// function getExpensiver() {
//     let max = 0;
//     for (let i = 0; i < groceries.length; i++) {
//         if (groceries[i].price > max) {
//             max = groceries[i].price;
//         }
//     } 
//     console.log(max);
// }
// getExpensiver()

// function getCheaper() {
//     let min = groceries[0].price;
//     for (let i = 0; i < groceries.length; i++) {
//         if (groceries[i].price < min) {
//             min = groceries[i].price;
//         }
//     } 
//     console.log(min);
// }
// getCheaper()

// function getLowerPricecs() {
//     for (let i = 0; i < groceries.length; i++) {
//         groceries[i].price = groceries[i].price *70 / 100
//     }
//     return groceries
// }
// getLowerPricecs()
// console.log(groceries);