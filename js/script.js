const Text = document.querySelector('.content_text');
const buttonShow = document.querySelector('.btn_show');
const buttonUpdate = document.querySelector('.btn_update');
const bodyLinght = document.querySelector('.light-theme');
const bodyDark = document.querySelector('body');

let NewText = 'Ты нажал на кнопку';

buttonShow.addEventListener('click', function() {
    Text.textContent = NewText;
})

buttonUpdate.addEventListener('click', function() {
    Text.textContent = 'ПУСТО';
});

bodyLinght.addEventListener('click', function() {
    bodyLinght.classList.toggle('light-color');
})
bodyDark.addEventListener('click', function() {
    bodyDark.classList.toggle('dark-color');
})