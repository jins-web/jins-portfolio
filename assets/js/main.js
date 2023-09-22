// menu 노출
const menu = document.querySelector(".btn_menu");
const menu_wrap = document.querySelector(".menu_wrap");

menu.addEventListener("click", () => {
    menu_wrap.classList.toggle("menu_open");
});


