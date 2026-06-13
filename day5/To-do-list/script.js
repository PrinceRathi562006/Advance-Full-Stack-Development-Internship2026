const input  = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("list_of_task");

btn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";

    const remove_btn = document.createElement("button");
    remove_btn.textContent = "❌";
    remove_btn.id = "remove_button"
    li.appendChild(remove_btn);

    remove_btn.addEventListener("click", () => {
        li.remove();
    });
});
