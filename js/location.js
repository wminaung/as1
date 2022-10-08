const path = window.location.pathname;

const makeColor = (c) => {
  const ok = document.querySelector(`.outline[href="${c}"]`);
  ok.classList.add("colorActive");
};

switch (path) {
  case (c = "/index.html"):
    makeColor(c);
    break;
  case (c = "/about.html"):
    makeColor(c);
    break;
  case (c = "/help.html"):
    makeColor(c);
    break;
  case (c = "detail"):
    makeColor(c);
    break;
  default:
    console.log("default");
    break;
}
