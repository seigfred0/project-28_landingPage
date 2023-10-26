const validation = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const button = document.querySelector('#emailButton');
const error = document.querySelector('#error');
const tyPage = document.querySelector('#thankYouPage');
const closeButton = document.querySelector('#closeButton');


button.addEventListener('click', () => {
    const emailInput = document.querySelector('#emailInput');
    const email = emailInput.value;


    if(validation.test(email)) {
        console.log('valid');
        error.style.display = 'none';
        thankYouPage();
        emailInput.value = '';

    } else {
        console.log('invalid');
        error.style.display = 'block';
    }

    
});

function thankYouPage() {
    tyPage.style.display = 'block';

}

closeButton.addEventListener('click', () => {
    tyPage.style.display = 'none'
});

// user@example.com