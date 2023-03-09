// Scrolling to add scroll-effect
let scrollPosition = document.getElementsByTagName("html")[0];
const header = document.getElementsByTagName("header")[0];

window.addEventListener("scroll", () => {
    if(window.scrollY > 40){
        header.classList.add("scroll-effect")
    }
    if(window.scrollY < 5){
        header.classList.remove("scroll-effect")
    }
    // window.scrollY > 100 ? header.classList.add("scroll-effect") : header.classList.remove("scroll-effect");    
})