window.addEventListener('scroll', onScroll)




onscroll()
function onScroll() {
    showBackToTopButtonOnScroll() 
    showNavOnScroll()  
} 



function showBackToTopButtonOnScroll() {
    
    if (scrollY > 400 ) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function showNavOnScroll() {    
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
     
  }

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'left', 
  distance: '30px', 
  duration:1800,
}).reveal(`
#home,
#home img,
#home img,
#home.stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#about img`);
