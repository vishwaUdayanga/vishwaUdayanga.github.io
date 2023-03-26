//nav-bar
let menuIcon = document.querySelector('.menu-bar')
let menuLinks = document.querySelectorAll('.menu-links')
menuIcon.addEventListener('click', () => {
    document.querySelector('.menu-list').classList.toggle('active')
})
menuLinks.forEach(n => n.addEventListener('click', () => {
    document.querySelector('.menu-list').classList.remove('active')
}))

//scroll-effect 
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400 
})

ScrollReveal().reveal('.text-area', { delay: 500 })
ScrollReveal().reveal('.main-image img', { delay: 500, origin: 'right' })
ScrollReveal().reveal('.service-card', { delay: 500, origin: 'bottom', interval: 200 })
ScrollReveal().reveal('.service-content-left', { delay: 500, origin: 'left' })
ScrollReveal().reveal('.personal-details .details', { delay: 500, origin: 'bottom', interval: 300 })
    
//main navigation disappear and rotate inner circle   
window.onscroll = function() {
    if (window.pageYOffset == 0) {
        document.querySelector('.nav-bar').classList.remove('active')
    } else {
        document.querySelector('.nav-bar').classList.add('active')
    }
    var offset = window.pageYOffset
    offset = offset * 0.07
    document.querySelector('.main-circle').style.transform = "rotate(" + offset + "deg)"
}
    
//change main text    
var count = 1
setInterval(function(){
    document.getElementById('radio' + count).checked = true
    count++
    if (count > 3) {
        count = 1
    }
}, 5000)
    
//image-slider  
var imageCount = 1

function slideToNext() {
    disableButtons()
    imageCount++
    if (imageCount > 3) {
        imageCount = 1
    }
    viewSlidesNext(imageCount)
    setSlideContainer()
}

function slideToPrev() {
    disableButtons()
    imageCount--
    if (imageCount == 0) {
        imageCount = 3
    }
    viewSlidesPrev(imageCount)
    setSlideContainer()
}

function disableButtons() {
    document.getElementById('prev-btn').disabled = true
    document.getElementById('next-btn').disabled = true
    setTimeout(() => {
        document.getElementById('prev-btn').disabled = false
        document.getElementById('next-btn').disabled = false
    }, 2500);
}
function setSlideContainer(){
    document.querySelector('.slide-container').classList.add('active')
    setTimeout(function() {
        document.querySelector('.slide-container').classList.remove('active')
    }, 1000)
}
function viewSlidesNext(m){
    var imageNumber = m-1
    if (m == 1) {
        imageNumber = 3
    }
    document.querySelector('.slide-image' + imageNumber).classList.remove('slide-active')
    document.querySelector('.slide-image' + m).classList.add('slide-active')
    document.getElementById('for-text' + m).checked = true
}
function viewSlidesPrev(m){
    var imageNumber = m+1
    if (m == 3) {
        imageNumber = 1
    }
    document.querySelector('.slide-image' + imageNumber).classList.remove('slide-active')
    document.querySelector('.slide-image' + m).classList.add('slide-active')
    document.getElementById('for-text' + m).checked = true
}
    
//pre-loader   
let preLoader = document.querySelector(".preloader")
window.addEventListener("load", function() {
    preLoader.style.display = "none"
})
    
//skill-generator    
window.addEventListener("scroll", skillGenerator)
let skillMainCount = 1
function skillGenerator() {
    var skillContainer = document.querySelector('.skills')
    var skillTop = skillContainer.getBoundingClientRect().top
    if (skillTop < window.innerHeight - 500) {
        if ( skillMainCount == 1) {
            skillCounter()
            skillMainCount += 1
        }
    }
}
function skillCounter() {
    let percentageElement = document.querySelectorAll('.percentage')
    let interval = 3000

    percentageElement.forEach((e) => {
        let startValue = 0
        let endValue = parseInt(e.getAttribute("percentage-val"))
        let duration = Math.floor(interval / endValue)
        let counter = setInterval(function() {
            startValue += 1
            e.textContent = startValue
            if (startValue == endValue) {
                clearInterval(counter)
            }
        }, duration)
    })
}

function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "vishwaudayanga310@gmail.com",
        Password : "###########",
        To : 'vishwaudayanga310@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact From Inquiry",
        Body : "Name : " + document.getElementById('name').value
            + "<br> Website Name : " + document.getElementById('website-name').value
            + "<br> Message : " + document.getElementById('message').value 
    }).then(
      message => alert("Message sent successfully!")
    );
}
    