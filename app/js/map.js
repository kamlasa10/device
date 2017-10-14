var Map = document.querySelector('.modal-map');
var MapLink = document.querySelector('.map__link');
var MapClose = document.querySelector('.modal__close');

MapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  Map.classList.add('modal-show');
});
MapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  Map.classList.remove('modal-show');
});