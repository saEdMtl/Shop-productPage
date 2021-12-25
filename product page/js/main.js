function goRight() {
    var nav = document.querySelector('#right');
    var menu = document.querySelector('#check');
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (menu.checked == true) {
        nav.style.right = 0;
    } else {
        if (mediaQuery.matches) {
            nav.style.right = '-100%';
        } else {
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
            slidesPerView: 3,
        });
    }
}

function active() {
    var tab = document.querySelectorAll(".nav-link");
    for (var a = 0; a < 2; a++) {
        if (tab[a].classList.contains('active')) {
            tab[a].style.borderBottom = "2px solid #c6ad8f";
        } else {
            tab[a].style.borderBottom = "0";
        }
    }
}

function activeOne() {

    var one = document.getElementById("linkone");
    var two = document.getElementById("linktwo");

    one.style.borderBottom = "2px solid #c6ad8f";
    two.style.border = "0";
}
function activeTwo() {

    var one = document.getElementById("linkone");
    var two = document.getElementById("linktwo");

    one.style.border = "0";
    two.style.borderBottom = "2px solid #c6ad8f";
}

function likeone() {

    var number = document.querySelector(".likeone");
    var plus = document.querySelector(".likeone-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".likeone-number").innerHTML = plus;

}

function liketwo() {

    var number = document.querySelector(".liketwo");
    var plus = document.querySelector(".liketwo-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".liketwo-number").innerHTML = plus;

}

function likethree() {

    var number = document.querySelector(".likethree");
    var plus = document.querySelector(".likethree-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".likethree-number").innerHTML = plus;

}

function likefour() {

    var number = document.querySelector(".likefour");
    var plus = document.querySelector(".likefour-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".likefour-number").innerHTML = plus;

}

function likefive() {

    var number = document.querySelector(".likefive");
    var plus = document.querySelector(".likefive-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".likefive-number").innerHTML = plus;

}

function dislikeone() {

    var number = document.querySelector(".dislikeone");
    var plus = document.querySelector(".dislikeone-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".dislikeone-number").innerHTML = plus;

}

function disliketwo() {

    var number = document.querySelector(".disliketwo");
    var plus = document.querySelector(".disliketwo-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".disliketwo-number").innerHTML = plus;

}


function dislikethree() {

    var number = document.querySelector(".dislikethree");
    var plus = document.querySelector(".dislikethree-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".dislikethree-number").innerHTML = plus;

}


function dislikefour() {

    var number = document.querySelector(".dislikefour");
    var plus = document.querySelector(".dislikefour-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".dislikefour-number").innerHTML = plus;

}


function dislikefive() {

    var number = document.querySelector(".dislikefive");
    var plus = document.querySelector(".dislikefive-number").innerHTML;

    plus = parseFloat(plus);
    plus += 1;
    document.querySelector(".dislikefive-number").innerHTML = plus;

}

function signIn() {

    var box = document.querySelector(".sign-in");
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    var right = document.getElementById("rast");

    if (mediaQuery.matches) {
        right.style.height = "900px";
        box.style.display = "block";
    } else {
        box.style.display = "block";
        box.style.border = "2px solid #d35252";
    }



}

function responsive() {



}

function validate() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var erorText = "";

    if (email === "") {
        erorText += ".ایمیل یا نام کاربری خود را وارد کنید" + "<br>";
    }
    if (password === "") {
        erorText += ".رمز خود را وارد کنید" + "<br>";
    }

    document.getElementById("eror").innerHTML = erorText;

}







