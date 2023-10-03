const card = document.querySelector('.card');
card.addEventListener('click', 
function(){
this.classList.toggle('flipped');
});

const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');

cardFront.addEventListener('click',
function(event) {
    event.stopPropagation();
});