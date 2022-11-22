{
    let form = document.querySelector("form:first-of-type");
    console.log(form);
    let formOK=true;
    
    form.addEventListener("submit", function(e){
        e.preventDefault();
        let usernameInput = document.querySelector("#username");
        if (usernameInput.value  !=="")
        {
            e.target.submit();
        }
        else
        {
            let inputError = document.createElement("p");
            let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
            
            inputError.innerHTML ="Veuillez choisir un nom d'utilisateur";
            inputError.classList.add("error");
            fieldset.appendChild(inputError);
            formOK= false;
            usernameInput.classList.add("error");
            
            let EmailInput = document.querySelector("#email");
            if (EmailInput.value !=="")
            {
                e.target.submit();
            }
            else 
            {
                let emailError = document.createElement("p");
                let fieldset2 = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
                
                emailError.innerHTML ="Veuillez choisir un email";
                emailError.classList.add("error");
                fieldset2.appendChild(emailError);
                EmailInput.classList.add("error");
                
                let mdpInput = document.querySelector("#password");
                if (mdpInput.value !=="")
                {
                e.target.submit();
                 }
                else
                {
            let mdpError = document.createElement("p");
            let fieldset3 = document.querySelector("form:first-of-type fieldset:nth-of-type(3)");
            
            mdpError.innerHTML ="Veuillez choisir un mot de passe";
            mdpError.classList.add("error");
            fieldset3.appendChild(mdpError);
            mdpInput.classList.add("error");
            
            
        }
        
    };
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
