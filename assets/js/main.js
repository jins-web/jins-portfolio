// menu 노출
const menu = document.querySelector(".btn_menu");
const header = document.querySelector(".header_btn");
const menu_wrap = document.querySelector(".menu_wrap");

menu.addEventListener("click", () => {
    menu_wrap.classList.toggle("menu_open");
    header.classList.toggle("menu_open");
    if(menu_wrap.classList.contains("menu_open")) {
        menu.innerText = "Close"
    } else {
        menu.innerText = "Menu"
    }
});
// scroll event
const scrollChange = 10;
const top_position = document.querySelectorAll(".top_sec");

window.addEventListener("scroll", () => {
    const scrollpos = window.scrollY;
    header.classList.toggle('on', scrollpos > scrollChange);
})

top_position.forEach((item) => {
    window.addEventListener('scroll', () => {
        const scrollTop  = item.scrollTop;
        const sec_height = document.querySelector(".ele_height").clientHeight;
        const absoluteTop = item.getBoundingClientRect().top - sec_height/2;

        if (scrollTop > absoluteTop) {
            item.classList.add('on');
        } else {
            item.classList.remove('on');
        }
    })
})
// gsap
gsap.registerPlugin(ScrollTrigger);
const anitext01 = gsap.utils.toArray(".ani_ex01");
anitext01.forEach((item) => {
    gsap.from(item, {
        y: -120,
        autoAlpha:0,
        duration:1,
        ease: "elastic",
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
            scrub: false,
            toggleActions: "play none none reset"
        }
    });
});
gsap.utils.toArray(".l_txt").forEach((items) => {
    gsap.from(items, {
        y: -100, 
        autoAlpha:0, 
        duration:1,
        ScrollTrigger: {
            trigger: items,
            start: "top 80%",
            end: "bottom 20%",
            scrub: false,
            markers: false,
            toggleActions: "play none none reset"
        }
    })
});









