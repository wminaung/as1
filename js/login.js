const nameTag = document.getElementById("name");
const emailTag = document.getElementById("email");
const passwordTag = document.getElementById("password");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameTag.value;
  const email = emailTag.value;
  const password = passwordTag.value;

  const user = JSON.parse(localStorage.getItem("user"));

  user.forEach((usr) => {
    if (name != usr.name || email != usr.email || password != usr.password) {
      const popup = document.querySelector(".popup");
      let variable = "";
      let a = 0;

      // if (name == "") {
      // }
      // if (email == "") {
      // }
      // if (password == "") {
      // }
      if (name != usr.name) {
        variable += `name, `;
        a++;
      }
      if (email != usr.email) {
        variable += `email, `;
        a++;
      }
      if (password != usr.password) {
        variable += `password, `;
        a++;
      }

      if (a > 1) {
        variable += "are not valid!";
      } else {
        variable += "is not valid!";
      }

      popup.textContent = `${variable}`;
      popup.classList.add("add");
    } else {
      alert("you are successfully Login!");
      sessionStorage.setItem("isLogin", "true");
      window.location.href = "index.html";
    }
  });

  ///
});
