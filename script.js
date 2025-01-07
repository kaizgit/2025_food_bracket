document.addEventListener('DOMContentLoaded', function () {
    const matches = document.querySelectorAll('.match');
    const modal = document.getElementById('matchModal');
    const modalImage = modal.querySelector('.modal-match-image img');
    const modalCaption = modal.querySelector('.modal-match-caption');
    const closeButton = modal.querySelector('.close-button');

    matches.forEach(match => {
        match.addEventListener('click', function () {
            const imageSrc = this.getAttribute('data-image');
            const captionText = this.getAttribute('data-caption');

            modalImage.src = imageSrc;
            modalCaption.textContent = captionText;
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});