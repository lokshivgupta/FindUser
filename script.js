let input = document.getElementById("search-input");
let btn = document.getElementById("search-btn")
const profileCon = document.querySelector(".profile-container");
const url = "https://api.github.com/users/"

btn.addEventListener("click" , async ()=>{
    const response = await fetch(url + input.value);
    const data = await response.json();
    const repoAddress = data.repos_url;
    const reposResponse = await fetch(repoAddress + "?sort=created&per_page=5");
    const reposData = await reposResponse.json();
    console.log(data);
    displayData(data, reposData);
});

const displayData = (data, reposData)=>{
    profileCon.innerHTML = `
        <div class="profile-header">
            <img src="${data.avatar_url}" class="avatar">
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>@${data.login}</p>
                <p>${data.bio}</p>
            </div>
        </div>
        <div class="stats">
            <div>
                <p>Repos</p>
                <strong>${data.public_repos}</strong>
            </div>
            <div>
                <p>Followers</p>
                <strong>${data.followers}</strong>
            </div>
            <div>
                <p>Following</p>
                <strong>${data.following}</strong>
            </div>
        </div>
        <div class="repo-list">
    ${reposData.map(repo => `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`).join('')}
</div>
        `
}