function getRandomBackground() {
    const backgroundsDir = 'backgrounds/';
    const images = [];
    fetch(backgroundsDir)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            doc.querySelectorAll('a').forEach(link => {
                const href = link.getAttribute('href');
                if (/\.(jpg|jpeg|png|gif)$/i.test(href)) {
                    images.push(`${backgroundsDir}${href}`);
                }
            });
            const randomImage = images[Math.floor(Math.random() * images.length)];
            document.body.style.backgroundImage = `url('${randomImage}')`;
        });
}
getRandomBackground();
