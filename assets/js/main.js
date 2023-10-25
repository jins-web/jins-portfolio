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
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,MotionPathPlugin,DrawSVGPlugin,GSDevTools);

const leftText = gsap.utils.toArray(".l_txt");
leftText.forEach((item)=> { 
    gsap.from(item,{
        x: -500,
        ease:"back",
        duration:1.5,
        opacity:0,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            markers :false,
            toggleActions:"play none none reset"
        }
    })
});
const dropText = gsap.utils.toArray(".ani_ex01");
dropText.forEach((items)=> {
    gsap.from(items,{
        y: -150,
        ease:"back",
        duration:1,
        opacity:0,
        scrollTrigger: {
            trigger:items,
            start:"top 60%",
            markers :false,
            toggleActions:"play none none reset"
        }
    })
});