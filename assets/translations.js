var availableLanguages = ['en', 'pt'];

document.addEventListener('DOMContentLoaded', () =>
{
    let navLang = (navigator.language) ? navigator.language.substring(0, 2) : null;
    let userLang = localStorage.getItem('userLang');
    if(userLang) setLanguage(userLang); else if(navLang) setLanguage(navLang);

    for(let el of document.querySelectorAll(".box-lang-selector input[name='language']")) {
        el.onclick = () => { setLanguage(el.value); }
    }

    for(let el of document.querySelectorAll('#sectionHardSkills *[data-popup-txt]')) {
        el.onclick = () =>
        {
            let title = "";
            if(el.classList.contains("gold")) title = "Expert in " + el.innerText;
            if(el.classList.contains("silver")) title = "Competent in " + el.innerText;
            if(el.classList.contains("bronze")) title = "Novice in " + el.innerText;

            if(document.querySelector('html').lang == 'pt') {
                if(el.classList.contains("gold")) title = "Especialista em " + el.innerText;
                if(el.classList.contains("silver")) title = "Competente em " + el.innerText;
                if(el.classList.contains("bronze")) title = "Novato em " + el.innerText;
            }

            showPopup(title, el.dataset.popupTxt);
        }
    }
});

function setLanguage(lang)
{
    if(! availableLanguages.includes(lang)) return false;

    document.querySelector('html').lang = lang;
    localStorage.setItem('userLang', lang);

    for(let el of document.querySelectorAll(".box-lang-selector input[name='language']")) {
        el.checked = false;
    }

    let inputLang = document.querySelector(`.box-lang-selector input[name='language'][value='${lang}']`);
    inputLang.checked = true;
}