var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    accessibility: false,
    freeScrollFriction: 0.05,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false
});