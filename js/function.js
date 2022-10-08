import Cookier from "./../myLib/Cookier.js";
const cookie = new Cookier();

if (!cookie.hasCookieKey("user_id")) {
  alert("you need to login first");
  location.href = "login.html";
}

const items = [
  [
    {
      id: 1,
      name: "Camera",
      src: "image/camera.jpg",
      model: "1A",
      price: "300",
      color: "White/Black",
      desc: "This is a Camera And You can Catch the image of what you want Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus voluptatem, unde culpa optio in laboriosam inventore debitis esse sequi officia quibusdam ex incidunt omnisquis, odit enim tempore praesentium et.",
    },
    {
      id: 2,
      name: "Shirt",
      src: "image/shirt.jpg",
      model: "1A",
      price: "400",
      color: "Blue/Black",
      desc: "This is a Shirt that you can wear Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus voluptatem, unde culpa optio in laboriosam inventore debitis esse sequi officia quibusdam ex incidunt omnisquis, odit enim tempore praesentium et.",
    },
    {
      id: 3,
      name: "S21 Ultra",
      src: "image/s21ultra5g.jpg",
      model: "1A",
      price: "300",
      color: "White/Black",
      desc: "This is a phone Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus voluptatem, unde culpa optio in laboriosam inventore debitis esse sequi officia quibusdam ex incidunt omnisquis, odit enim tempore praesentium et.",
    },
  ],
  [
    {
      id: 4,
      name: "Nikon Camera",
      src: "image/nikonCamera.jpg",
      model: "1A",
      price: "1003",
      color: "Black",
      desc: "This is a Camera Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus voluptatem, unde culpa optio in laboriosam inventore debitis esse sequi officia quibusdam ex incidunt omnisquis, odit enim tempore praesentium et.",
    },
    {
      id: 5,
      name: "Sneaker",
      src: "image/sneaker.jpg",
      model: "1A",
      price: "300",
      color: "White/Red",
      desc: "This is a Sneaker Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus voluptatem, unde culpa optio in laboriosam inventore debitis esse sequi officia quibusdam ex incidunt omnisquis, odit enim tempore praesentium et.",
    },
    {
      id: 6,
      name: "Pen",
      src: "image/pen.jpg",
      model: "1A",
      price: "1000",
      color: "White/Black",
      desc: "This is pen Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus voluptatem, unde culpa optio in laboriosam inventore debitis esse sequi officia quibusdam ex incidunt omnisquis, odit enim tempore praesentium et.",
    },
  ],
];

localStorage.setItem("items", JSON.stringify(items));

const logoutTag = document.querySelector(".logout");

logoutTag.addEventListener("click", () => {
  const isLogout = confirm("Are you sure Want to Logout");
  if (isLogout) {
    cookie.deleteCookie("user_id", "/");
    window.location.href = "login.html";
  }
});
