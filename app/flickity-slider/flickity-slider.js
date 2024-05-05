var elem = document.querySelectorAll('.main-carousel');
for (const i of elem) {
    var flkty = new Flickity(i, {
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
        accessibility: false,
        freeScrollFriction: 0.07,
        autoPlay: 115000,
        pauseAutoPlayOnHover: false
    });
}