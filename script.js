document.addEventListener('DOMContentLoaded', () =>
{
    for(let el of document.querySelectorAll('#sectionHardSkills *[data-popup-txt]')) {
        el.onclick = () => { showPopup(el.innerText, el.dataset.popupTxt); }
    }

    for(let el of document.querySelectorAll('#sectionSoftSkills *[data-popup-txt]')) {
        el.onclick = () => { showPopup(el.innerText, el.dataset.popupTxt); }
    }

    for(let el of document.querySelectorAll('#sectionProfile *[data-popup-txt]')) {
        el.onclick = () => { showPopup(el.dataset.popupTitle, el.dataset.popupTxt); }
    }
});

function showPopup(title, txt)
{
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');

    let popup = document.createElement('div');
    popup.classList.add('popup');

    let header = document.createElement('div');
    header.classList.add('header');

    let boxTitle = document.createElement('div');
    boxTitle.classList.add('title');
    boxTitle.innerText = title;

    let body = document.createElement('div');
    body.classList.add('body');
    body.innerHTML = txt;

    let btnClose = document.createElement('div');
    btnClose.classList.add('btnClose');
    btnClose.innerHTML = '&#9587;';
    btnClose.onclick = () => { overlay.parentElement.removeChild(overlay); }
    
    header.appendChild(boxTitle);
    header.appendChild(btnClose);
    popup.appendChild(header);
    popup.appendChild(body);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
}

document.addEventListener('keyup', (e) => { 
    let btnClose = document.querySelector('.overlay .popup .header .btnClose');
    if (btnClose && e.key === 'Escape') btnClose.click();
});
