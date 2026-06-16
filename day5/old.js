const parent = document.querySelector("#parent");

const child = document.querySelector("#child");

parent.addEventListener(
    "click",
    ()=>{
        console.log("Parent");
    }
)

child.addEventListener(
    "click",
    ()=>{
        console.log("child");
    }
)

// when i am hitting button click what will be the output??