const card = document.querySelector('.card');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');

card.addEventListener('click', 
function(){
card.classList.toggle('flipped');
});

cardBack.addEventListener('click', function(event) {
    event.stopPropagation();
    card.classList.toggle('flipped');
});