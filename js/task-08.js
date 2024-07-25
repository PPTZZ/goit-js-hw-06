const loginForm = document.querySelector('.login-form');
const user = {
    email:'',
    password:''
}



loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const {elements} = e.target
    const userEmail = elements['email'].value
    const userPassword = elements['password'].value
    if (userEmail===''|| userPassword===''){
        alert('Toate câmpurile trebuie completate!');
        return;
    }
    user.email = userEmail
    user.password = userPassword
    console.log(user);
    loginForm.reset();
});
