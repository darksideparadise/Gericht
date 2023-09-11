// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import { document } from 'postcss';
import Swiper, { Autoplay, EffectFade } from 'swiper';
Swiper.use([Autoplay]);
const swiper1 = new Swiper('.mySwiper', {
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  keyboard: {

    enabled: false,
    onlyInViewport: false,
    pageUpDown: false,
  }
});

Swiper.use([Autoplay]);
const swiper2 = new Swiper('.secondSwiper', {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 'auto',
  direction: 'horizontal',
  loop: true,
  spaceBetween: 60,

});
// ==============================================
Swiper.use([Autoplay]);
const swiper3 = new Swiper('.barSwiper', {
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,

});

Swiper.use([Autoplay]);
const swiper4 = new Swiper('.poisonSwiper', {
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 'auto',
    },
  }
});


Swiper.use([Autoplay, EffectFade]);
const swiper5 = new Swiper('.happyHoursSwiper', {
  autoplay: {
    delay: 4000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  mousewheelControl: false,
  keyboardControl: false,
  slidesPerView: 1,
  direction: 'horizontal',
});
// -------------------------------------------------------------------------


// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
import SmoothScroll from 'smooth-scroll';
import { auto } from '@popperjs/core';
const scroll = new SmoothScroll('a[href*="#"]');
// -------------------------------------------------------------------------
// Cекция video

$(function () {
  var $video = $('#video'),
    $videoControls = $('.video-control'),
    $myVideo = $('#myVideo')[0];

  $videoControls.click(function () {
    if ($myVideo.paused) {
      $myVideo.play();
      $video.addClass('video-is-playing');
    } else {
      $myVideo.pause();
      $video.removeClass('video-is-playing');
      //  возврат постера
      $myVideo.load();
    }
  });
});
// -------------------------------------------------------------------------
// Дропдаун меню

document.querySelectorAll('.option').forEach(function (optionWrapper) {

  const Btn = optionWrapper.querySelector('.option__button');
  const list = optionWrapper.querySelector('.option__list');
  const listItem = list.querySelectorAll('.option__item');


  // клик по кнопке. открыть/закрыть select
  Btn.addEventListener('click', function () {
    list.classList.add('option__list--visible');
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

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// import { auto } from '@popperjs/core';
// document.addEventListener('swiped', function (e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);


