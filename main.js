let email = document.getElementById("email");
let nome = document.getElementById("nome");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");
let textNome = document.getElementById("textNome");

form.addEventListener("submit" , (e) => {
    if(email.value == "" && nome.value == "")(
        textForm.textContent = "*Precisa preencher todos os campos"
    )
    
    e.preventDefault()
})

email.addEventListener("keyup", () =>{
    if(validationEmail(email.value) !== true) {
    textEmail.textContent = "Email invalido"
    }else{
        textEmail.textContent = ""
    }
})

function validationEmail (email){
    let emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailPattern.test(email)
}



nome.addEventListener("keyup", () =>{
    if(validationNome(nome.value) !== true) {
    textNome.textContent = "Minimo 3 letras"
    }else{
        textNome.textContent = ""
    }
})


function validationNome(nome){
    let = nome.value < 3;
}
