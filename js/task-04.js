const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const displayValue = document.querySelector('#value');
let currentValue = 0;

incrementBtn.addEventListener('click',()=>{
    currentValue += 1
    displayValue.innerText = currentValue
});
decrementBtn.addEventListener('click',()=>{
    currentValue -= 1
    displayValue.innerText = currentValue
});