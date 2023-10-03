const card = document.querySelector('.card');
const cardFront = document.querySelector('.front');
const cardBack = document.querySelector('.back');

card.addEventListener('click', 
function(){
card.classList.toggle('flipped');
});

cardBack.addEventListener('click', function(this) {
    event.stopPropagation();
    card.classList.toggle('flipped');
});