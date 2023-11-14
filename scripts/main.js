// let myHeading = document.querySelector("h1")
// myHeading.textContent = 'Hello world!'


// 변수 선언
let myVariable

// 값 할당
myVariable = "hello"

console.log(myVariable)

let myVariable2 = "world"

console.log(myVariable2)

var a = 1
let b = 2
const c = 3

console.log(a, b, c)

a = 10
b = 20
// c = 30
// const로 선언된 변수는 재할당 불가능 

console.log(a, b, c)


var a
// let b 
// const c
// let,const 선언된 변수는 재선언 불가능

let srtingVar = "hello"
let numberBar = 10
let boolVar = true
let arrayVar = []
let objectVar = {}
console.log(srtingVar,numberBar,boolVar,arrayVar,objectVar)


arrayVar.push("hello")
console.log(arrayVar)

// objectVar['name'] = "kim"
objectVar.name = "kim"
objectVar.location = "seoul"
console.log(objectVar)

// my_dict = Dict()

let myObj = new Object()


// 연산자 
let myVarA = 10
let myVarB = "10"

console.log(myVarA == myVarB) // 결과 true, 예전거 쓰지 X
console.log(myVarA === myVarB) // 결과 false, 이게 안정적


// let iceCream = "vanilla"
// if (iceCream === "chocolate") {
//     alert("choco")
// } else {
//     alert("no choco")
// }




//반복문
console.log("while")
let i = 0
while (i<5){
    console.log(i)
    // python => i+= 1
    i ++
}


console.log("for1")
for (let i=0; i<5; i++) {
    console.log(i)
}


console.log("for2")
let myArray = [1,2,3,4,5]
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}


console.log("for in")
// for item in myArray:
for (let item in myArray) {
    console.log(item)
    // console.log(myArray[item])
}



console.log("for of")
for (let item of myArray) {
    console.log(item)
}


console.log("for each")
myArray.forEach(function(item, index, array){
    console.log(item, index, array)
})




// 함수


// def multi():
function multiply1(num1, num2){
    let result = num1 * num2
    return result
}
multiply1(3, 4)
console.log(multiply1(3, 4))


// 함수표현식
let multiply2 = function (num1, num2) {
    let result = num1 * num2
    return result
}
console.log(multiply2(3, 4))


// 화살표함수
let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}
console.log(multiply3(3, 4))

// 화살표 함수 생략 1
// {}안에 코드가 return 하는 문장 하나만 있는 경우 
// => {}, return을 생략 가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply3(3, 4))


// 화살표 함수 생략 2
// ()안에 매개변수가 하나만 있다면 ()를 생략가능
let multiply5 = num1 => num1 * 2
console.log(multiply5(6))


let people1 = {
    "name": "kim",
    "greeting": function (){console.log(this)}
}



let people2 = {
    "name": "hong",
    "greeting": () => {console.log(this)}
}

people1.greeting()
people2.greeting()


// 이벤트

// onclick 이벤트
// document.querySelector("h1").onclick = function () {
//     alert("hihi")
// }

// 이벤트 리스너
let myH1 = document.querySelector("h1")
// addEventListenre(무슨일이 일어났을떄, 무슨 행동을 할지)
myH1.addEventListener("mouseover", function (e){
    // alert("hihi")
    console.log(e)
})


let myInput = document.querySelector("input")
myInput.addEventListener("keydown",function(e){
    console.log(e)
})


let myImage = document.querySelector("img")
console.log(myImage)

myImage.addEventListener("click",function (){
    let src= myImage.getAttribute("src")
    
    if (src === "images/firefox-icon.png") {
        myImage.setAttribute("src","images/img1.jpg")
    } else {
        myImage.setAttribute("src","images/firefox-icon.png")
    }
})



// 비동기
console.log("hi")
// setTimeout(실행시킬 함수,시간)
setTimeout(function(){console.log("hello")},1000)
console.log("bye")


const URL ='https://jsonplaceholder.typicode.com/todos/1'

// let response = fetch(URL)
// console.log(response)

// let result = response.json()
// console.log(result)

fetch(URL)
    .then((response)=> response.json())
    .then(json => console.log(json))


async function fetchAndPrint(){
    let res = await fetch(URL)  // 페이지 로딩 0~1시간 걸릴지 모름
    let result = await res.json()

    console.log(result)
}

fetchAndPrint()


let liElements = document.querySelectorAll("li")

// console.log(liElements)

// for (let li of liElements) {
//     console.log(li)
// }

liElements.forEach(function(li){
    console.log(li)
    li.style.color = "red"
    li.style.backgroundColor = "blue"
})


liElements.forEach(function(li){
    li.addEventListener("click",function(e){
        // console.log(e.target)
        // console.log(e.target.textContent)
        if (e.target.textContent === "technologists") {
            e.target.style.color = "yellow"
        } else if (e.target.textContent === "thinkers") {
            e.target.style.color = "black"            
        } else {
            e.target.style.color = "green"            
        }
    })
})
