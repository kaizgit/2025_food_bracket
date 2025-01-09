// script.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('matchModal');
    const modalImg = modal.querySelector('.modal-match-image img');
    const modalCaption = modal.querySelector('.modal-match-caption');
    const closeButton = document.querySelector('.close-button');
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
});
