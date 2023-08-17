//----------------------------Burger-menu-------------------------------------//
function onClickMenu() {
    document.getElementById('btn-menu').classList.toggle("active");
    document.getElementById('ul-menu').classList.toggle("active");
    document.getElementById('body-noscroll').classList.toggle("active");
    document.getElementById('body-shadow').classList.toggle("active");
}
//----------------------------Burger-menu-------------------------------------//


//----------------------------PopUP-menu-------------------------------------//
function onClickPopup1() {
    document.getElementById('popup-card1').classList.toggle("active");
    document.getElementById('testimonials-btn-x').classList.toggle("active");
    document.getElementById('body-shadow-card1').classList.toggle("active");
    document.getElementById('body-noscroll').classList.toggle("active");
}

function onClickPopup2() {
    document.getElementById('popup-card2').classList.toggle("active");
    document.getElementById('testimonials-btn-x2').classList.toggle("active");
    document.getElementById('body-shadow-card2').classList.toggle("active");
    document.getElementById('body-noscroll').classList.toggle("active");
}

function onClickPopup3() {
    document.getElementById('popup-card3').classList.toggle("active");
    document.getElementById('testimonials-btn-x3').classList.toggle("active");
    document.getElementById('body-shadow-card3').classList.toggle("active");
    document.getElementById('body-noscroll').classList.toggle("active");
}
//----------------------------PopUP-menu-------------------------------------//


//----------------------------Testimonials-carousel-------------------------------------//


document.addEventListener( "scroll", () => {
    const scroll = document.querySelector('.testimonials-scroll-line');
    const flex = document.querySelector('.testimonials-comments-line');
    const box = document.querySelector('.wrapper-testimonials-comment');
    const boxWidth = box.clientWidth;
    scroll.addEventListener("input", () => {
        let scrollValue = scroll.value
        flex.style.transition = '800ms ease transform';
        flex.style.transform = `translateX(${-scrollValue * (boxWidth + 30)}px)`;
        console.log(flex.style.transform );
    });
})
//----------------------------Testimonials-carousel-------------------------------------//