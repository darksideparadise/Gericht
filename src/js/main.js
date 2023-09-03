import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';
import { document } from 'postcss';

// ----------------------------------------------------------------------------
// Дропдаун меню
document.querySelectorAll('.option').forEach(function (optionWrapper) {



  const Btn = optionWrapper.querySelector('.option__button');
  const list = optionWrapper.querySelector('.option__list');
  const listItem = list.querySelectorAll('.option__item');


  // клик по кнопке. открыть/закрыть select
  Btn.addEventListener('click', function () {
    list.classList.toggle('option__list--visible');
    this.classList.add('option__button--active');
  });
  // Выбор элемента списка.Запомнить значение. Закрыть дропдаун
  listItem.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      Btn.innerText = this.innerText;
      Btn.focus();
      document.querySelector('.option__input-hidden').value = this.dataset.value;
      list.classList.remove('option__list--visible');
    });
  });
  // Клик снаружи дропдауна
  document.addEventListener('click', function (e) {
    if (e.target !== Btn) {
      Btn.classList.remove('option__button--active');
      list.classList.remove('option__list--visible');
    }
  });
});

// ========================================================================================

// Cекция video

// var playButton = document.getElementsByClassName("play_button");
// // Event listener for the play/pause button
// playButton.addEventListener("click", function () {
//   if (video.paused == true) {
//     // Play the video
//     video.play();

//     // Update the button text to 'Pause'
//     playButton.innerHTML = "Pause";
//   } else {
//     // Pause the video
//     video.pause();

//     // Update the button text to 'Play'
//     playButton.innerHTML = "Play";
//   }
// });
const play_button = document.querySelector('.play_button');
const video = document.querySelector('.video-video');

play_button.onclick = function () {
  if (video.paused == true) {
    video.play();
  } else {
    video.pause();
  }
}

// ========================================================================================
