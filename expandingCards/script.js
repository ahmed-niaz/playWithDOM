const slide = document.querySelectorAll(`.slide`)

for (const slides of slide){
    slides.addEventListener(`click`,function(){
        removeActiveClasses()
        slides.classList.add(`active`)
    })
}

function removeActiveClasses(){
    for (const slides of slide){
        slides.classList.remove(`active`)
    }
}