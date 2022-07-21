console.log("app.js linked");

// ALERT BANNER 
const closeButton = document.getElementById('x-button');
const alertBanner = document.getElementById('alert')

closeButton.addEventListener('click', () => {
    alertBanner.style.display = "none";
})

