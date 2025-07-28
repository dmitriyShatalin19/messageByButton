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


const btnLight = document.querySelector('.btn-light');
const btnDark = document.querySelector('.btn-dark');

btnLight.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
});

btnDark.addEventListener('click', () => {
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
});