// script.js
document.addEventListener('DOMContentLoaded', () => {
    let currentView = 'finals';
    loadContent(currentView);

    toggleButton.addEventListener('click', () => {
        if (toggleButton.textContent === 'Show Full Bracket') {
            loadContent('fullbracket');
            toggleButton.textContent = 'Show Finals';
        } else {
            loadContent('finals');
            toggleButton.textContent = 'Show Full Bracket';
        }
    });
});

const container = document.querySelector('.container');
const toggleButton = document.getElementById('toggleView');

async function loadContent(view) {
    let contentUrl = '';
    if (view === 'finals') {
        contentUrl = 'finals.html';
    } else if (view === 'fullbracket') {
        contentUrl = 'fullbracket.html';
    }

    const response = await fetch(contentUrl);
    const content = await response.text();
    container.innerHTML = content;

    const modal = document.getElementById('matchModal');
    const modalImg = modal.querySelector('.modal-match-image img');
    const modalCaption = modal.querySelector('.modal-match-caption');
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', () => {
            const img = container.querySelector('img');
            const imgSrc = img.src;
            const caption = container.querySelector('.caption');
            const captionText = caption.textContent;

            modalImg.src = imgSrc;
            modalImg.alt = captionText;
            modalCaption.textContent = captionText;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}