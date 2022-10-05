let isLogin = sessionStorage.getItem("isLogin") === "true" ? true : false;
console.log(isLogin);

if (!isLogin) {
  location.href = "login.html";
} else {
  console.log("you are login");
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
      desc: "This is a Camera And You can Catch the image of what you want",
    },
    {
      id: 2,
      name: "Shirt",
      src: "image/shirt.jpg",
      model: "1A",
      price: "400",
      color: "Blue/Black",
      desc: "This is a Camera And You can Catch the image of what you want",
    },
    {
      id: 3,
      name: "S21 Ultra",
      src: "image/s21ultra5g.jpg",
      model: "1A",
      price: "300",
      color: "White/Black",
      desc: "This is a Camera And You can Catch the image of what you want",
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
      desc: "This is a Camera And You can Catch the image of what you want",
    },
    {
      id: 5,
      name: "Sneaker",
      src: "image/sneaker.jpg",
      model: "1A",
      price: "300",
      color: "White/Red",
      desc: "This is a Camera And You can Catch the image of what you want",
    },
    {
      id: 6,
      name: "Pen",
      src: "image/pen.jpg",
      model: "1A",
      price: "1000",
      color: "White/Black",
      desc: "This is a Camera And You can Catch the image of what you want",
    },
  ],
];

// if (localStorage.getItem("items") == null) {
//   localStorage.setItem("items", JSON.stringify(items));
// }

localStorage.setItem("items", JSON.stringify(items));

function logout() {
  let logout = window.confirm("Are you Sure You want to Logout?");
  if (logout) {
    sessionStorage.setItem("isLogin", "false");
    window.location.href = "index.html";
  }
}
