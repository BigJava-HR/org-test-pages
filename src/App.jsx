import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  addCardContent();
  return (
    <>
      {/* <div> <p>This is A Test</p> </div>
    <div> <p>This is A Test</p> </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Boost HR
        </a>
        <div class="search-container mx-auto">
          <input class="form-control" type="text" placeholder="Search..." />
        </div>
      </nav>

      <div class="row">
        <div class="col-md-2 sidebar">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-tachometer-alt"></i> Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-bell"></i> Notifications
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-users"></i> Employees
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-user-shield"></i> Admins
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-file-alt"></i> Documents
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-chart-bar"></i> Reports
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-10">
          <div class="admin-cards-container">
            <div class="admin-card">
              <img class="banner-image" />
              <h3></h3>
              <p></p>
              <button class="btn btn-primary btn-update">Güncelle</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

let cardContainer = document.querySelector(".admin-cards-container");
let input = "asdasd";
let input1 = "asdasd";
let input2 = "asdasd";
let input3 = "asdasd";

const addCardContent = () => {
  fetch("http://34.118.57.216:9090/api/v1/admin/findall")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((item) => {
        let card = document.createElement("div");
        card.classList.add("admin-card");
        let cardInside = document.createElement("div");
        let childHtml = `<div>
  <img
    class="banner-image"
    src="${item["imageUrl"]}"
  />
  <h3>${item.name} ${item.middleName} ${item.lastName}</h3>
  <p>${item.email}</p>
  <button class="btn btn-primary btn-update"> Güncelle</button>
</div>`;
        cardInside.innerHTML = childHtml;
        card.appendChild(cardInside);
        cardContainer.appendChild(card);
      })
    );
};


const updateButtons = document.querySelectorAll(".btn-update");

updateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const adminId = button.getAttribute("data-admin-id");
    window.location.href = `/admin/update?id=${adminId}`;
  });
});
