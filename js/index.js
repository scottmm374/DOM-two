// Your code goes here




// Alert when Dbclick on buttons
const button = document.querySelectorAll('.btn')
button.forEach((b) => {
    b.addEventListener('dbclick', (e) => {
        alert('Thank you for visiting')
    })

})

//Alert when page loads

window.addEventListener("load", (event) => {
    alert("Welcome to the Fun Bus!");
    
});

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((a) => {
    a.addEventListener('click', (e) => {
        e.target.style.color = 'orange';
    })
})