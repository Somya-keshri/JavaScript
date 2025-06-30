const form = document.querySelector('form');
// this usecase will give you empty

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height =  parseInt(document.querySelector('#height').value);
    const weight =  parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 || height === '' || weight === '') {
        results.textContent = 'Please enter valid height and weight.';
        return;
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span> ${BMI} </span>`;

        if(BMI < 18.6) {
        results.innerHTML += `<p class="text"> You are underweight </p>`;
        }
        else if(BMI >= 18.6 && BMI <= 24.9){
            results.innerHTML += `<p class="text"> You are normal </p>`;
        }
        else if(BMI >= 25){
            results.innerHTML += `<p class="text"> You are overweight </p>`;
        }
    }
})