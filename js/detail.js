let items = [];
let hasItems = false;

if (localStorage.getItem("items") != null) {
  items = JSON.parse(localStorage.getItem("items"));
  hasItems = true;
}
let forFilterItems = [];
items.forEach((item) => {
  item.forEach((i) => {
    forFilterItems.push(i);
  });
});
console.log(forFilterItems, "filterItems");

if (hasItems) {
  const imgTag = document.querySelector(".d-img");
  const itemNameTag = document.querySelector(".item-name");
  const itemPriceTag = document.querySelector(".item-price");
  const itemModelTag = document.querySelector(".item-model");
  const itemColorTag = document.querySelector(".item-color");
  const itemDescTag = document.querySelector(".item-desc");

  let urlString = window.location.href;
  let url = new URL(urlString);
  let queryName = url.searchParams.get("name");

  if (queryName !== null) {
    ////////

    let filteredItem = forFilterItems.filter((item) => {
      return item.name == queryName;
    });
    console.log(filteredItem);
    console.log(filteredItem.length);
    if (filteredItem.length > 0) {
      imgTag.src = filteredItem[0].src;
      itemNameTag.textContent = filteredItem[0].name;
      itemPriceTag.textContent = filteredItem[0].price + "$";
      itemModelTag.textContent = filteredItem[0].model;
      itemColorTag.textContent = filteredItem[0].color;
      itemDescTag.textContent = filteredItem[0].desc;
    }
  }
}

// for (let i = 0; i < item.length; i++) {
//     return item[i].name == queryName;
//   }
