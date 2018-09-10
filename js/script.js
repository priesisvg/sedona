
var link = document.querySelector(".search_hotels_btn");
var form = document.querySelector(".search_form");
var arrival = document.querySelector("[name=check_in]");
var departure = document.querySelector("[name=check_out]");

var search = document.querySelector(".search_btn");

form.classList.remove("form_show");

link.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.toggle("form_show");
  arrival.focus();
});

search.addEventListener("click", function (event) {
  form.classList.remove("form_error");
  form.offsetWidth = form.offsetWidth;
  if (!(arrival.value && departure.value)) {
    event.preventDefault();
    form.classList.add("form_error");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (form.classList.contains("form_show")) {
      form.classList.remove("form_show");
    }
  }
});

search.onClick = function (evt) {

}
