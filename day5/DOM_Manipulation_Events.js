// --------- DOM Manipulation ---------->

// querySelector will select first element and give complete element.

const heading = document.querySelector("h1");
console.log(heading);
const btn = document.querySelector("button");
console.log(btn);

// querySelectorAll will select all element.
const h = document.querySelectorAll("h1");
console.log(h);

const list = document.querySelector("li");
console.log(list);
console.log(list.parentElement); // give parent element

// Select by id
const heading1 = document.getElementById("heading1");
console.log(heading1);

// Select by class
const button = document.getElementsByClassName("btn");
console.log(button);

// Select by tagName
const h1 = document.getElementsByTagName("h1");
console.log(h1);

// for changing text content - tag inside it consider as plain text
heading1.textContent = "Hi, this heading text is changed.";

// innerHtml - tags inside it will actively structure dom.
const box = document.getElementById("box");
box.innerHTML = `<p>Hello my name is Bob. I like to play cricket. i am a professional bowling all-rounder.</p>
        <button>Click me</button>`;

const list1 = document.getElementById("list1");

// createElement
const li = document.createElement("li");
li.textContent = "my Value is ac.";
// append
list1.appendChild(li);

// ---------- Event Handling ------->

// addEventListner

// const btn_main = document.getElementsByClassName("btn-main");
// btn_main[0].addEventListener(
//     "click",
//     ()=>{
//         console.log("button clicked...")
//         alert("button is pressed...");
//     }
// )

// const user_input = document.getElementById("user_input");

// const btn_main = document.getElementsByClassName("btn-main");
// btn_main[0].addEventListener(
//     "click",
//     ()=>{
//         console.log(user_input.value);
//         alert("user input is stored..");
//     }
// )

// Event Bubbling -> browser event ko travel krata h.

// const parent = document.querySelector("#parent");

// const child = document.querySelector("#child");

// parent.addEventListener(
//     "click",
//     ()=>{
//         console.log("Parent");
//     }
// )

// child.addEventListener(
//     "click",
//     ()=>{
//         console.log("child");
//     }
// )

// when i am hitting button click what will be the output??

// child -> parent

// document -> HTML -> body -> div -> button.

// Event delegation -> adding addEventLister to the parent inplace of adding EventListner to all childs separate

const parent = document.getElementById("parent");

parent.addEventListener("click", (e) => {
  console.log("Parent clicked");
  console.log("Event target:", e.target); // The actual clicked element
  console.log("Current target:", e.currentTarget); // The element with the listener
});
