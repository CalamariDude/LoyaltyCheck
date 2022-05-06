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

function next_form() {
    let email1 = document.getElementById("email").value;
    let email2 = document.getElementById("confirm_email").value;
    let match = true;
    if (email1 !== email2) {
      document.getElementById("email").style.borderColor = "#ff0000";
      document.getElementById("confirm_email").style.borderColor = "#ff0000";
      match = false;
    
    }
    else {
        let instagram = document.getElementById("instagram_handle").value
        let their_type = document.getElementById("inputGroupFile02").value
        let in_miami = document.getElementById("in_miami").value
        let loyalty_check = document.getElementById("loyalty_check").value
        
        console.log(email1, instagram, their_type, in_miami, loyalty_check)
        if (in_miami == 2) {
            /* Take them to signup page to ask if they want to notified when this service is available in there area -> enter zip code*/
        }
        else {
            /* Send the data to our servers and redirect them to payment */
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost/form");
             
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
               
            xhr.onload = () => console.log(xhr.responseText);
            let uuid = uuidv4();
            let payload = {secret: uuid, instagram: instagram, their_type: their_type, in_miami: in_miami, loyalty_check: loyalty_check} 
            const data = JSON.stringify(payload);
            xhr.send(data);
            window.location = `payment.html?uuid=${uuid}`
        }
    }
}