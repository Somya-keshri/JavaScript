const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach( function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'peru'){
            body.style.backgroundColor = 'burlywood';
        }
        if(event.target.id === 'green'){
            body.style.backgroundColor = 'darkseagreen';
        }
        if(event.target.id === 'pink'){
            body.style.backgroundColor = 'lightpink';
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = 'cadetblue';
        }
    })
} )