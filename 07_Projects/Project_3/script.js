const clock = document.getElementById('clock')
// OR
// const clock = document.querySelector('#clock')


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // OR
    // clock.textContent = date.toLocaleTimeString();
}, 1000);