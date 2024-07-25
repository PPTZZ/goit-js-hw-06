const text = document.querySelector('#text');
const rangeControl = document.querySelector('#font-size-control');


rangeControl.addEventListener('input',(e)=>{
    text.style.fontSize = `${e.currentTarget.value}px`
})
