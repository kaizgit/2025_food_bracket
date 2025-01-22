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

function loadContent(view) {
    const content = (view === 'finals') ? finalsHtml : fullBracketHtml;
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

const finalsHtml = '<div class="half top-half"><div class="top-header">AFC</div><div class="columns-container"><div class="column"><div class="image-container"><img src="./images/bills_v_chiefs.jpeg" alt="TBD"><p class="caption">Bills vs Chiefs</p></div></div></div></div><div class="half bottom-half"><div class="columns-container"><div class="column"><div class="image-container"><img src="./images/eagles_v_commanders.jpeg" alt="Commanders vs Eagles"><p class="caption">Commanders vs Eagles</p></div></div></div><div class="bottom-footer">NFC</div></div>';
const fullBracketHtml = '<div class="half top-half"><div class="top-header">AFC</div><div class="columns-container"><div class="column"><div class="image-container"><img src="./images/bills_v_broncos.jpg" alt="Bills vs Broncos"><p class="caption">Bills vs Broncos</p></div><div class="image-container"><img src="./images/steelers_v_ravens.jpg" alt="Steelers vs Ravens"><p class="caption">Steelers vs Ravens</p></div><div class="image-container"><img src="./images/chargers_v_texans.jpg" alt="Chargers vs Texans"><p class="caption">Chargers vs Texans</p></div></div><div class="column"><div class="image-container"><img src="./images/texans_v_chiefs.jpg" alt="TBD"><p class="caption">Texans vs Chiefs</p></div><div class="image-container"><img src="./images/bills_v_ravens.jpg" alt="TBD"><p class="caption">Bills vs Ravens</p></div></div><div class="column"><div class="image-container"><img src="./images/bills_v_chiefs.jpeg" alt="TBD"><p class="caption">Bills vs Chiefs</p></div></div></div></div><div class="half bottom-half"><div class="columns-container"><div class="column"><div class="image-container"><img src="./images/eagles_v_commanders.jpeg" alt="Commanders vs Eagles"><p class="caption">Commanders vs Eagles</p></div></div><div class="column"><div class="image-container"><img src="./images/commanders_v_lions.jpg" alt="TBD"><p class="caption">Commanders vs Lions</p></div><div class="image-container"><img src="./images/eagles_v_rams.jpg" alt="TBD"><p class="caption">Eagles vs Rams</p></div></div><div class="column"><div class="image-container"><img src="./images/packers_v_eagles.jpg" alt="Packers vs Eagles"><p class="caption">Packers vs Eagles</p></div><div class="image-container"><img src="./images/commanders_v_buccaneers.jpg" alt="Commanders vs Buccaneers"><p class="caption">Commanders vs Buccaneers</p></div><div class="image-container"><img src="./images/rams_v_vikings.jpg" alt="Rams vs Vikings"><p class="caption">Rams vs Vikings</p></div></div></div><div class="bottom-footer">NFC</div></div>';