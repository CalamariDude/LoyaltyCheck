const params = new URLSearchParams(window.location.search);
const params2 = new URLSearchParams(window.location.search);

const ig = params2.get("ig");

document.getElementById("instagram_handle").value = ig 