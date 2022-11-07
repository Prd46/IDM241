const modal = document.querySelector('.interactionModal');
const button = document.querySelector('.interactionBox');
const exit = document.querySelector('.modalX');
const body = document.querySelector('body');
const yellowCog = document.querySelector('.yellowCog_image');
const purpleCog = document.querySelector('.purpleCog_image');

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
});
button.addEventListener('mousedown', function (event){
    button.classList.add('interactionBox__squeeze');
});
button.addEventListener('click', function (event){
    gClickDetected = true;
    button.classList.remove('interactionBox__active');
    button.classList.remove('interactionBox__squeeze');
    button.classList.add('interactionBox__clicked');
    yellowCog.classList.add('yellowClicked');
    purpleCog.classList.add('purpleClicked');
    body.classList.add('preventScroll');
    setTimeout(function(){
    modal.classList.add('interactionModal__active');
    exit.classList.remove('modalX__fadeOut');
        setTimeout(function(){
            gClickDetected = false;
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