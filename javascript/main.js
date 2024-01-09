let navOp =  document.querySelector('.openNv')
let navCl =  document.querySelector('.closeNv')
let navIt = document.querySelector('.nav_items')
let bodyOv= document.querySelector('body');

navOp.addEventListener('click', function() {
    navCl.classList.add('active')
    navIt.classList.add('active')
    bodyOv.classList.add('active')
})
navCl.addEventListener('click', function() {
    navCl.classList.remove('active')
    navIt.classList.remove('active')
    bodyOv.classList.remove('active')
})