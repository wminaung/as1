const itemsContainer = document.querySelector(".itemsContainer");

for (let i = 0; i < items.length; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < items[i].length; j++) {
    const item = document.createElement("div");
    item.classList.add("item");
    const a = document.createElement("a");
    a.classList.add("img-container");

    const h5 = document.createElement("h5");
    h5.textContent = `${items[i][j].name}`;
    const img = document.createElement("img");
    img.classList.add("img");
    img.src = items[i][j].src;
    img.alt = items[i][j].name;

    item.append(a);
    a.append(h5, img);
    row.append(item);

    img.addEventListener("click", () => {
      a.href = `detail.html?name=${items[i][j].name}`;
      return;
    });
  }
  itemsContainer.append(row);
}
