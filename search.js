const overlay = document.getElementById('overlay');
const searchInput = document.getElementById('searchInput');
const links = document.getElementById('links');
let typingStarted = false;
let mouseMoving = false;
let timer;

document.addEventListener('mousemove', function() {
    overlay.classList.add('active');
    searchInput.focus();
    links.style.display = 'block';
    mouseMoving = true;

    clearTimeout(timer);
    timer = setTimeout(() => {
        if (!typingStarted && !mouseMoving) {
            overlay.classList.remove('active');
            links.style.display = 'none';
        }
        mouseMoving = false;
    }, 2000);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        overlay.classList.remove('active');
        searchInput.value = '';
        links.style.display = 'none';
        typingStarted = false;
    } else if (event.key.length === 1 && !overlay.classList.contains('active')) {
        overlay.classList.add('active');
        searchInput.focus();
        searchInput.value = '';
        links.style.display = 'block';
        typingStarted = true;
    } else if (event.key.length === 1) {
        typingStarted = true;
    }
});

searchInput.addEventListener('input', function(event) {
    if (!overlay.classList.contains('active')) {
        overlay.classList.add('active');
        links.style.display = 'block';
    }
    typingStarted = true;
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    const query = searchInput.value;
    if (!query) {
        event.preventDefault();
        overlay.classList.remove('active');
        links.style.display = 'none';
        typingStarted = false;
    }
});

window.onload = function() {
    searchInput.focus();
};

setInterval(() => {
    mouseMoving = false;
}, 100);
