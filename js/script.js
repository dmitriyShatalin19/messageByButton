const Text = document.querySelector('.content_text');
const buttonShow = document.querySelector('.btn_show');
const buttonUpdate = document.querySelector('.btn_update');

let NewText = 'Ты нажал на кнопку';

buttonShow.addEventListener('click', function() {
    Text.textContent = NewText;
})

buttonUpdate.addEventListener('click', function() {
    Text.textContent = 'ПУСТО';
});