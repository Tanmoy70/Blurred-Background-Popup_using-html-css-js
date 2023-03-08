var containerE1 = document.querySelector(".container");
var btnE1 = document.querySelector(".btn");
var popupContainerE1 = document.querySelector(".popup-container");

var closeIconE1 = document.querySelector(".close-icon");

btnE1.addEventListener("click", () => {
  containerE1.classList.add("active");
  popupContainerE1.classList.remove("active");
});

closeIconE1.addEventListener("click", () => {
  containerE1.classList.remove("active");
  popupContainerE1.classList.add("active");
});
