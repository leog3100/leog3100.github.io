function validacao() {
    if(document.form.nome.value=="") {
        alert("Por favor, preencha o Nome.");
        document.form.nome.focus();
        return false;
    }

    if(document.form.mensagem.value=="") {
        alert("Por favor, digite alguma mensagem.");
        document.form.mensagem.focus();
        return false;
    }

    if (document.querySelector("#recaptcha-anchor > div.recaptcha-checkbox-checkmark").value==="") {
        alert("Você não preencheu o Captcha de verificação.");
        return false;
    }else {
        document.querySelector("body > div.container > form > input:nth-child(9)").toggleAttribute=('disabled,' true);
    }

}
//document.querySelector("#recaptcha-anchor > div.recaptcha-checkbox-checkmark")
//function recaptchaCallback()
//{
   //document.getElementsByName("Submit") = jQuery('#submitBtn').prop('disabled', true);

//}