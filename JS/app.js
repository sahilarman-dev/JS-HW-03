let incrementBtn=document.querySelector('.incrementBtn')
let counterInput = document.querySelector('.counter input')


function increment(){
let value = Number(counterInput.value)
counterInput.value = value + 1
console.log(value)
}


incrementBtn.addEventListener('click', increment)



let decrementBtn=document.querySelector('.decrementBtn')

function decrement(){
let value=Number(counterInput.value)
if(value>1){
    counterInput.value=value-1
}

}

decrementBtn.addEventListener('click' , decrement)

function convertPositiveNumber(){
    let positiveNum = Math.abs(counterInput.value)
counterInput.value = positiveNum
}
counterInput.addEventListener('keyup' , convertPositiveNumber)




let passwordToggler = document.querySelector('.passwordBtn')
let passwordInput = document.querySelector('.passwordField input')

function passwordShow(){
if(passwordInput.type == 'password'){
    passwordInput.type = 'text'
    passwordToggler.innerHTML='<i class="bi bi-eye"></i>'
} else {
    passwordInput.type = 'password'
    passwordToggler.innerHTML='<i class="bi bi-eye-slash"></i>'
}

    
}

passwordToggler.addEventListener('click' , passwordShow)


let submitBtn = document.querySelector('.submitBtn')

function submitForm(){


    passwordInput.value.length > 6 ? alert('Form Submitted') 
    : (passwordInput.value.length == 0 ? alert('Password is required') : alert('Password must be at least 7 character long'))



    // if(passwordInput.value.length > 6 ){
    //     alert('Form Submitted')
    // } else{alert('Weak Password')}
}

 submitBtn.addEventListener('click' , submitForm);