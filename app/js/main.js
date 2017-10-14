var btn = document.querySelector('.about-us__write-us-btn');
var close = document.querySelector('.modal__close');
var popup = document.querySelector('.modal-write-us');

btn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});
linkMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.add('modal-show');
});
mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.remove('modal-show');
});


