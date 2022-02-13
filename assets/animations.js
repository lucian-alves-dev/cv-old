function isElementInViewport (el)
{
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ((window.innerHeight  || document.documentElement.clientHeight) * 1.3) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function wokeAnimation() {
    document.querySelector("#pageHeader").classList.add("animate");
    for(let section of document.querySelectorAll('main section')) {
        if(isElementInViewport(section)) section.classList.add("animate");
    }
}

document.addEventListener('DOMContentLoaded', wokeAnimation);
document.addEventListener('load', wokeAnimation);
document.addEventListener('resize', wokeAnimation);
document.addEventListener('scroll', wokeAnimation);