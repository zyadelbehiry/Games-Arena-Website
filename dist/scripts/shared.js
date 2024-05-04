let exit_side_nav = document.querySelector(".exit");
exit_side_nav.addEventListener("click", function () {
  let side_list = document.querySelector(".side-list");
  let side_menu = document.querySelector(".side-menu");
  side_menu.classList.toggle("w-full");
  side_list.classList.toggle("hidden");
});
let menu_icon = document.querySelector(".bx-menu");
menu_icon.addEventListener("click", () => {
  let side_list = document.querySelector(".side-list");
  let side_menu = document.querySelector(".side-menu");
  side_list.classList.toggle("hidden");
  side_menu.classList.toggle("w-full");
});
