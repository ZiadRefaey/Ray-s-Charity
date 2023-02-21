const customBtn = document.querySelector(".btn-bot");
const customField = document.querySelector(".donation__form--custom");
const twentyBtn = document.querySelector(".twenty-five");
const fiftyBtn = document.querySelector(".fifty");
const hundredBtn = document.querySelector(".hundred");
const total = document.querySelector(".donation__total");
customBtn.addEventListener("click", function (e) {
  e.preventDefault();
  customField.value = "";
  customField.focus();
});
twentyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  customField.value = "25.00";
  total.textContent = `$25.00`;
});
fiftyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  customField.value = "50.00";
  total.textContent = `$50.00`;
});
hundredBtn.addEventListener("click", function (e) {
  e.preventDefault();
  customField.value = "100.00";
  total.textContent = `$100.00`;
});
customField.addEventListener("change", function () {
  total.textContent = `$${this.value}`;
});
