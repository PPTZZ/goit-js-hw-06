const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

input.addEventListener('input', (e)=>{
    if(e.currentTarget.value && e.currentTarget.value !=" "){
        output.innerText = capitalizeFirstLetter(e.currentTarget.value);
    } else {
        output.innerText = 'Anonymous'
    }
});