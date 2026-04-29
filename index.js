
const myButton = document.querySelector('.btn');
const myForm = document.querySelector('.form'); // Renamed for clarity
const resultDisplay = document.querySelector('.result-message');

myButton.addEventListener('click', (event) => {
    event.preventDefault(); 

    // 1. Get values
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    // 2. Validation
    if (isNaN(weight) || isNaN(height) || height === 0) {
        // Show error message on the screen instead of hiding the form
        resultDisplay.textContent = "Please enter valid weight and height.";
        return;
    }

    // 3. Calculation
    let bmi = weight / (height * height);
    let interpretation = "";
        
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi.toFixed(1) + "." ;
    } else if (bmi < 24.9) {
        interpretation = "Your BMI is " + bmi.toFixed(1) + ".";
    } else if (bmi < 29.9) {
        interpretation = "Your BMI is " + bmi.toFixed(1) + ".";
    } else if (bmi < 34.9) {
        interpretation = "Your BMI is " + bmi.toFixed(1) + ".";
    } else {
        interpretation = "Your BMI is " + bmi.toFixed(1) + ".";
    }

    // 4. Success! Hide the form and show the result
    myForm.classList.add('is-hidden'); 
    resultDisplay.textContent = interpretation + " But that's poppycock. BMI is as valid as Scientology.";
});


