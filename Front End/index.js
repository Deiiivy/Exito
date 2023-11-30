const input = document.querySelector('.input');
const popup = document.querySelector('.popup');

input.addEventListener('click', () => {
    popup.style.display = 'block';
});


document.addEventListener('click', function(event) {
    if (!input.contains(event.target)) {
        popup.style.display = 'none';
    }
});
