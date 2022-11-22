{
    let emailInput = document.getElementById("#email");
    let motdepasseInput = document.getElementById("#password");
    let confirmemotdepasseInput = document.getElementById("#confirm-password");
    let form1 = document.querySelector("form:first-of-type");
    let form2 = document.querySelector("form:nth-of-type(2)");
    let formOk = true;
    
    form1.addEventListener("submit",function(e){
         e.preventDefault();
         let usernameInput = document.getElementById("#username");
    if (usernameInput.value ()!=="")
    {
        e.target.submit();
    }
    else
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form: first-of-type fieldset: first-of-type");
        inputError.innerHTML = "Veuillez choisir un nom d'utilisateur";
        inputError.classList.add("erreur");
        fieldset.appendChild(inputError);
        formOk = false;
    }
    
})}