const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const radioMale = document.getElementById("male");
const radioFemale = document.getElementById("female");
const radioOther = document.getElementById("other");

const container = document.querySelector("#container");
const form = document.querySelector("form");

const userData = new Object();
radioMale.checked = true;
///////////

//////////form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(form);

  for (const [key, value] of f) {
    userData[key] = value;
  }
  const errAry = new Array();

  for (const item in userData) {
    if (userData[item] == "") {
      errAry.push(item);
      continue;
    }
  }

  if (errAry.length > 0) {
    const popup = document.querySelector(".popup");
    popup.classList.add("add");
    return;
  } else {
    // if valid
    if (localStorage.getItem("user") != null) {
      data.push(userData);
      localStorage.setItem(`user`, JSON.stringify(data));

      alert("Registration Successfully!!");
      window.location.href = "login.html";
    } else {
      let data = new Array();
      data.push(userData);
      localStorage.setItem(`user`, JSON.stringify(data));

      alert("Registration Successfully!!");
      window.location.href = "login.html";
    }
  }

  /////////////////////////////////////////////////////////////////////
});
// userData[`user${1}`] = 1;
