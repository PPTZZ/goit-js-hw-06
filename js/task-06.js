
const input = document.querySelector("#validation-input");
const charSet = document.querySelector('input[data-length="6"]');
const charNumb = Number(charSet.dataset.length);

const validateInput = (e)=>{
    let value = e.currentTarget.value.length
    if (e.currentTarget.value != ''){
        if (value === charNumb){
            input.classList.remove('invalid');
            input.classList.add('valid');
            return;
        }
        input.classList.add('invalid');
        return;
    }
    input.removeAttribute('class');
}

input.addEventListener('blur', validateInput);




