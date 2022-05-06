const params = new URLSearchParams(window.location.search);
const params2 = new URLSearchParams(window.location.search);

const ig = params2.get("ig");

document.getElementById("instagram_handle").value = ig 

function next_form() {
    let email1 = document.getElementById("email").value;
    let email2 = document.getElementById("confirm_email").value;
    let match = true;
    if (email1 !== email2) {
      document.getElementById("email").style.borderColor = "#ff0000";
      document.getElementById("confirm_email").style.borderColor = "#ff0000";
      match = false;
      alert("Please check that emails match.")
    }
    else {
        let instagram = document.getElementById("instagram_handle").value
        let their_type = document.getElementById("inputGroupFile02").value
        let in_miami = document.getElementById("in_miami").value
        let loyalty_check = document.getElementById("loyalty_check").value
        
        console.log(email1, instagram, their_type, in_miami, loyalty_check)
        if (in_miami !== "1") {
            /* Take them to signup page to ask if they want to notified when this service is available in there area -> enter zip code*/
            alert("Sorry, we currently only service Miami area. Please email us at info@loyaltycheck.love with their approximate location and we can see if we can find an agent in that location.")
        }
        else {
            /* Send the data to our servers and redirect them to payment */
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "https://localhost/form");
             
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