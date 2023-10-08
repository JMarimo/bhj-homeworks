const signin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');

let url = 'https://students.netoservices.ru/nestjs-backend/auth';

if(localStorage.hasOwnProperty('userid')) {
    let userid = localStorage.userid;

    const welcomeDiv = document.querySelector('#welcome');

    welcomeDiv.innerHTML = 'Добро пожаловать, пользователь #${userID}';
    welcomeDiv.classList.add('welcome_active');

    signin.classList.remove('signin_active');
};

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.responseType = 'json';

    xhr.onload = function(e) {
        let response = xhr.response;

        if(response.success) {
        const userId = response.user_id;
        localStorage.setItem('userid', userId);

        welcomeDiv.innerHTML = 'Добро пожаловать, пользователь #${userID}';
        welcomeDiv.classList.add('welcome_active');

        signin.classList.add('signin_active');
        } else {
            alert('Неверный логин/пароль');
        }
        };
        
        xhr.send(formData);
    });