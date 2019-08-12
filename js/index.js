// Your code goes here




// Alert when Dbclick on buttons
const button = document.querySelectorAll('.btn')
button.forEach((b) => {
    b.addEventListener('dblclick', (e) => {
        alert('Thank you for visiting')
    })

})

const ctaColor = document.querySelectorAll('.destination ')
ctaColor.forEach((text) => {
    text.addEventListener('mouseover', (e) => {
        e.target.style.color = 'orange';
    })

})

// Stop propagation (without H4 turns Orange)

const headings = document.querySelectorAll('.destination h4')
headings.forEach((text) => {
    text.addEventListener('mouseover', (e) => {
        e.stopPropagation();
        e.target.style.fontSize = '3rem';
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
        e.preventDefault();
        e.target.style.color = 'orange';
    })
})



//Resize 

window.addEventListener("resize", (event) => {
    console.log("reportWindowSize");
});


