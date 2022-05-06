/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};


function find_out() {
    var instagram_handle = document.getElementById("instagram_handle").value
    if (instagram_handle) {var ig=instagram_handle} else {var ig=" "};
    window.location = `/form?ig=${ig}`
};

function changeCss () {
    if (this.scrollY >786){
        for (left_item in document.querySelectorAll(".fly-in-left")){
            console.log(left_item)
            var amount_left = (left_item.getBoundingClientRect.top-786)/742 * 360;
            left_item.style = `transform: translateX(-${amount_left}px);`;
        }
        for ( right_item in document.querySelectorAll(".fly-in-right")){
            var amount_right = (right_item.getBoundingClientRect.top-786)/742 * 360;
            right_item.style = `transform: translateX(${amount_right}px);`;
        }
    }
/* this.scrollY > 500 ? chrono_item.style.opacity = .8 : chrono_item.style.opacity = 1; */
  }
window.addEventListener("scroll", changeCss , false);


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Usage example:

console.log(uuidv4());
