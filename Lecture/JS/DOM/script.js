// console.log("The file is attached")

// Getting an element
// querySelector
let h1Element = document.querySelector("h1")
// let btn = document.getElementById("btn")
// console.log(h1Element)
let h2Element = document.querySelector(".h2class")
// console.log(h2Element)
let h3Element = document.querySelector("#h3id")
// console.log(h3Element)

// querySelectorAll
// let h1Elements = document.querySelectorAll("h1")
// console.log(h1Elements)

// getElementById
let h3ElementUsingId = document.getElementById("h3id")
// console.log(h3ElementUsingId)

// getElementByClassName
let h2ElementUsingClass = document.getElementsByClassName("h2class")
// console.log(h2ElementUsingClass)

// getElementByTagName


// Getting the Value
// InnerText
console.log(h1Element.innerText)

// Setting the Value


// console.log(btn)
// let h1Element = document.querySelector("h1")
let btn = document.getElementById("btn")
let passwordInput = document.getElementById("text")

btn.addEventListener("click", () => {
    if(passwordInput.type == "text"){
        passwordInput.type = "password"
        btn.innerText = "Show"
    }else if(passwordInput.type == "password"){
        passwordInput.type = "text"
        btn.innerText = "Hide"
    }
})






// console.log(passwordInput.type)
// btn.addEventListener("click", () => {
//     h1Element.innerText = "I am learning JS"
// })
