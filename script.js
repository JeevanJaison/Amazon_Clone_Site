const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 1;

function changeSlide() {
    for (let index = 0; index < imgs.length; index++) {
        imgs[index].style.display = 'none';
    }
    imgs[n].style.display = 'block'
}
changeSlide();

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    }
    else {
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
    if (n > imgs.length) {
        n = 0
    }
    else {
        n++;
    }
    changeSlide();
})
