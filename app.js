const sidebar = document.querySelector('.sidebar')
const mainSlides = document.querySelector('.main-slide')
const countAllSlides = mainSlides.querySelectorAll('div').length
sidebar.style.top = `-${(countAllSlides-1)*100}vh`

const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

let activeSlideIndex = 0

upBtn.addEventListener('click', ()=> {
    changePictures('up')
})

downBtn.addEventListener('click', ()=> {
    changePictures('down')
})

document.addEventListener('keydown', (event)=>{
    console.log(event.key)
if (event.key === 'ArrowUp'){
    changePictures('up')
} else if (event.key === 'ArrowDown'){
    changePictures('down')
}



})
function changePictures(direction) {

    if (direction==='up') {
        activeSlideIndex++
        if (activeSlideIndex===countAllSlides){
            activeSlideIndex=0
        }

    }

    else if (direction==='down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = countAllSlides-1
        }

    }

    mainSlides.style.transform = `translateY(-${activeSlideIndex*100}vh)`
    sidebar.style.transform= `translateY(${activeSlideIndex*100}vh)`
}