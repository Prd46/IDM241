const modal = document.querySelector('.interactionModal');
const button = document.querySelector('.interactionBox');
const exit = document.querySelector('.modalX');
const body = document.querySelector('body');

button.addEventListener('mouseover', function (event){
        button.classList.add('interactionBox__active');

});
button.addEventListener('mouseout', function (event){
    button.classList.remove('interactionBox__active');
});

button.addEventListener('click', function (event){
button.classList.remove('interactionBox__active');
body.classList.add('preventScroll');
setTimeout(function(){
    modal.classList.add('interactionModal__active');
    exit.classList.remove('modalX__fadeOut');
    }, 400);
});


exit.addEventListener('mouseover', function (event){
    exit.classList.add('modalX__active');

});
exit.addEventListener('mouseout', function (event){
exit.classList.remove('modalX__active');
});

exit.addEventListener('click', function (event){
    exit.classList.remove('modalX__active');
    exit.classList.add('modalX__fadeOut');
    setTimeout(function(){
        modal.classList.remove('interactionModal__active');
        body.classList.remove('preventScroll');
    }, 400);
    });