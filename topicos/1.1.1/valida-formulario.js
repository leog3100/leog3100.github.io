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

    if (!document.getElementById('recaptcha-id').value=="") {
        alert("Você não preencheu o Captcha de verificação.");
        return false;
    }else {
        recaptchaCallback();
    }

}

function recaptchaCallback()
{
   document.getElementsByName("Submit") = jQuery('#submitBtn').prop('disabled', newFunction());

    function newFunction() {
        document.getElementsByName("Submit").jQuery('disabled', true);
        return false;
    }
}
