const tabItems = document.querySelectorAll(".tab-item");
const tabItemsContents = document.querySelectorAll(".tab-content-item");

tabItems.forEach(item => item.addEventListener("click", selectItem));

function selectItem(e) {
  removeBorder();
  removeShowClass();

  this.classList.add("tab-border");
  const tabItemContent = document.querySelector(`#${this.id}-content`);
  tabItemContent.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShowClass() {
  tabItemsContents.forEach(item => item.classList.remove("show"));
}
