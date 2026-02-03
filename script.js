let input = document.getElementById("search-input");
let btn = document.getElementById("search-btn")
const profileCon = document.querySelectorAll(".profile-container");
const url = "https://api.github.com/users/"

btn.addEventListener("click" , async ()=>{
    const response = await fetch(url + input.value);
    const data = await response.json();
    console.log(data);
});