function goRight() {
    var nav = document.querySelector('#right');
    var menu = document.querySelector('#check');
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (menu.checked == true) {
        nav.style.right = 0;
    } else {
        if (mediaQuery.matches){
            nav.style.right = '-100%';
        }else{
            nav.style.right = '-60%';
        }
    }
    
}

function checkPosition() {
if (window.matchMedia('(max-width: 992px)').matches) {
const swiper = new Swiper('.swiper', {
slidesPerView: 4,
});
} else {
const swiper = new Swiper('.swiper', {
slidesPerView:3,
});
}
}