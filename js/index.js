// Your code goes here




// Alert when Dbclick on buttons
const button = document.querySelectorAll('.btn')
button.forEach((b) => {
    b.addEventListener('dbclick', (e) => {
        alert('Thank you for visiting')
    })

})

const ctaColor = document.querySelectorAll('.destination p')
    ctaColor.forEach((text) => {
        text.addEventListener('mouseover', (e) => {
            e.target.style.color = 'orange';
    })
    
    })

//Alert when page loads

window.addEventListener("load", (event) => {
    alert("Welcome to the Fun Bus!");
    
});

//Nav color change on click

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((a) => {
    a.addEventListener('click', (e) => {
        e.target.style.color = 'orange';
    })
})

//Nav prevent Default

const Nav = document.querySelectorAll('.nav-link');
navLink.addEventListener('click', (e) => {
    e.preventDefault();
})


