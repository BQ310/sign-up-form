const password = document.querySelector('#password');
const confirm = document.querySelector('#password-confirm');
const form = document.querySelector('form');
password.classList.toggle('error');
confirm.classList.toggle('error');
form.addEventListener('submit', () => {
    if (password.value != confirm.value) {
        password.classList.add('error');
        confirm.classList.add('error');
    } else {
        password.classList.remove('error');
        confirm.classList.remove('error');
    }
});



