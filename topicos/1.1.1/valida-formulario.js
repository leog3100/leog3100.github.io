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

    if (document.getElementById("recaptcha-id").value=="") {
        alert("Você não preencheu o Captcha de verificação.");
        return false;
    }else {
        document.getElementsByClassName('recaptchaCallback') = jQuery('#submitBtn').prop('disabled', true);
    }

}

function recaptchaCallback()
{
   document.getElementsByClassName('recaptchaCallback') = jQuery('#submitBtn').prop('disabled', false);
}
