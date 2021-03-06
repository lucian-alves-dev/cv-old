function isElementInViewport (el)
{
    let rect = el.getBoundingClientRect();
    return (rect.y + (el.clientHeight * 0.5)) < window.innerHeight;
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