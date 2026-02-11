// the music slide
const audio = document.getElementById('aud1');
const image = document.getElementById('slide1');
image.addEventListener('mouseenter', () => {
    audio.play();
});
image.addEventListener('mouseleave', () => {
    audio.pause();
});
const audio2 = document.getElementById('aud2');
const image2 = document.getElementById('slide2');
image2.addEventListener('mouseenter', () => {
    audio2.play();
});
image2.addEventListener('mouseleave', () => {
    audio2.pause();
});
const audio3 = document.getElementById('aud3');
const image3 = document.getElementById('slide3');
image3.addEventListener('mouseenter', () => {
    audio3.play();
});
image3.addEventListener('mouseleave', () => {
    audio3.pause();
});