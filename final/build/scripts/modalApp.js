const modal = document.querySelector('.interactionModal');
const button = document.querySelector('.interactionBox');
const exit = document.querySelector('.modalX');
const body = document.querySelector('body');
const yellowCog = document.querySelector('.interactioCogs--yellow');
const purpleCog = document.querySelector('.interactioCogs--purple');

let gClickDetected = false;

button.addEventListener('mouseover', function (event){
    if (gClickDetected == false){
        button.classList.add('interactionBox__active');
    }
});
button.addEventListener('mouseout', function (event){
    if (gClickDetected == false){
    button.classList.remove('interactionBox__active');
    }
    if (gClickDetected == true){
        button.classList.remove('interactionBox__squeeze');
    button.classList.remove('interactionBox__active');
    button.classList.add('interactionBox__clicked');
        body.classList.add('preventScroll');
        setTimeout(function(){
        modal.classList.add('interactionModal__active');
        exit.classList.remove('modalX__fadeOut');
            setTimeout(function(){
                gClickDetected = false;
                button.classList.remove('interactionBox__internal');
                button.classList.remove('interactionBox__clicked');
                }, 800);
        }, 600);
        }
});

button.addEventListener('mousedown', function (event){
    gClickDetected = true;
    button.classList.add('interactionBox__squeeze');
    button.classList.add('interactionBox__internal');
});

button.addEventListener('mouseup', function (event){
    button.classList.remove('interactionBox__squeeze');
    button.classList.remove('interactionBox__active');
    button.classList.add('interactionBox__clicked');
        body.classList.add('preventScroll');
        setTimeout(function(){
        modal.classList.add('interactionModal__active');
        exit.classList.remove('modalX__fadeOut');
            setTimeout(function(){
                gClickDetected = false;
                button.classList.remove('interactionBox__internal');
                button.classList.remove('interactionBox__clicked');
                }, 800);
        }, 600);
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