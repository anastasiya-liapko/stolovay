'use strict';

(function () {
    var ESC_KEYCODE = 27;
    var userMail = document.querySelector('.user__mail');
    var userMailPopup = userMail.querySelector('.user__mail-popup');
    var onPopupEscPress = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
      }
    };
    var closePopup = function () {
      userMailPopup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    };
    userMail.addEventListener('click', function () {
      userMailPopup.classList.remove('hidden');
      document.addEventListener('keydown', onPopupEscPress);
    });
})();