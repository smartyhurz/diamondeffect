
document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const diamond = document.querySelector('.diamond');

    if (scrollY < windowHeight) {
        diamond.style.left = '10%';
        diamond.style.top = '60px';
        diamond.style.transform = 'translateX(-40%) rotate(40deg)';
    } else if (scrollY >= windowHeight && scrollY < windowHeight * 2) {
        diamond.style.left = '90%';
        diamond.style.top = '300px';
        diamond.style.transform = 'rotate(0deg)';
    } else if (scrollY >= windowHeight * 2 && scrollY < windowHeight * 3) {
        diamond.style.left = '10%';
        diamond.style.top = '60vh';
        diamond.style.transform = 'rotate(-45deg)';
    } else if (scrollY >= windowHeight * 3) {
        diamond.style.left = '90%';
        diamond.style.top = '600px';
        diamond.style.transform = 'rotate(0deg)';
    }
});

