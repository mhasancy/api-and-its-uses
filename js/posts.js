function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}
loadPosts();

function displayPosts(posts) {
  const postContainer = document.getElementById("posts");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("dec");
    div.innerHTML = `<h3>${post.title}</h3>
    <p>${post.body}</p>`;
    postContainer.appendChild(div);
    console.log(posts);
  }
}

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);

const premikas = { name: "keka ferdousi", cars: { brand: "toyota" } };
const { brand } = premikas.cars;
console.log(brand);
