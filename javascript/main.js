let navOp =  document.querySelector('.openNv')
let navCl =  document.querySelector('.closeNv')
let navIt = document.querySelector('.nav_items')

navOp.addEventListener('click', function() {
    navCl.classList.add('active')
    navIt.classList.add('active')
})
navCl.addEventListener('click', function() {
    navCl.classList.remove('active')
    navIt.classList.remove('active')

})