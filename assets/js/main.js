
// Show Menu
const showMenu = (toggleId, navId) => {

    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// Remove Menu Mobile

const navLink = document.querySelectorAll('.nav_link')


function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll sections active link

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// change background header

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// show scroll Top
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

const mixer = mixitup('.porfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 400
    }
});



const linkPortfolio = document.querySelectorAll('.portfolio_item')

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('.active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

gsap.from('.home_img', { opacity: 0, duration: 2, delay: .2, x: 60 })
gsap.from('.home_data', { opacity: 0, duration: 2, delay: .3, y: 25 })
gsap.from('.home_greeting , .home_name, .home_profession, .home_button', { opacity: 0, duration: 2, delay: .2, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.nav_logo, .nav_toggle', { opacity: 0, duration: 2, delay: .2, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav_item', { opacity: 0, duration: 2, delay: .1, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.home_social-icon', { opacity: 0, duration: 2, delay: .2, y: 25, ease: 'expo.out', stagger: .2 })


