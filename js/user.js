function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => showUser(data));
}

function showUser(data) {
  const ul = document.getElementById("uli");
  for (const uli of data) {
    // console.log(uli);
    const li = document.createElement("li");
    li.innerText = `name; ${uli.name} email: ${uli.email}`;
    // console.log(userName);
    ul.appendChild(li);
  }
}
