'use strict';

(function () {
    var firstBtn = document.querySelector('.slider__controls-first');
    var secondBtn = document.querySelector('.slider__controls-second');
    var thirdBtn = document.querySelector('.slider__controls-third');
    var forthBtn = document.querySelector('.slider__controls-forth');
    var sliderControls = document.querySelector('.slider__controls');
    var sliderInner = document.querySelector('.slider__inner');
    var sliderPrev = document.querySelector('.slider__prev');
    var sliderNext = document.querySelector('.slider__next');

    sliderControls.addEventListener('click', function (evt) {
    var elem = evt.target;
    sliderInner.classList.remove('first-translate');
    sliderInner.classList.remove('second-translate');
    sliderInner.classList.remove('third-translate');
    sliderInner.classList.remove('forth-translate');
    if (elem === firstBtn) {
        sliderInner.classList.add('first-translate');
      } else if (elem === secondBtn) {
        sliderInner.classList.add('second-translate');
      } else if (elem === thirdBtn) {
        sliderInner.classList.add('third-translate');
      } else if (elem === forthBtn) {
        sliderInner.classList.add('forth-translate');
      }
    })

    sliderPrev.addEventListener('click', function () {
    if (sliderInner.classList.contains('first-translate')) {
        sliderInner.classList.remove('first-translate');
        sliderInner.classList.add('forth-translate');
      } else if (sliderInner.classList.contains('second-translate')) {
        sliderInner.classList.remove('second-translate');
        sliderInner.classList.add('first-translate');
      } else if (sliderInner.classList.contains('third-translate')) {
        sliderInner.classList.remove('third-translate');
        sliderInner.classList.add('second-translate');
      } else if (sliderInner.classList.contains('forth-translate')) {
        sliderInner.classList.remove('forth-translate');
        sliderInner.classList.add('third-translate');
      }
    })
    
    sliderNext.addEventListener('click', function () {
    if (sliderInner.classList.contains('first-translate')) {
        sliderInner.classList.remove('first-translate');
        sliderInner.classList.add('second-translate');
      } else if (sliderInner.classList.contains('second-translate')) {
        sliderInner.classList.remove('second-translate');
        sliderInner.classList.add('third-translate');
      } else if (sliderInner.classList.contains('third-translate')) {
        sliderInner.classList.remove('third-translate');
        sliderInner.classList.add('forth-translate');
      } else if (sliderInner.classList.contains('forth-translate')) {
        sliderInner.classList.remove('forth-translate');
        sliderInner.classList.add('first-translate');
      }
    })
    })();