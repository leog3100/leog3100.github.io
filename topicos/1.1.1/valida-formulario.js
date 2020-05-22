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

    if (document.querySelector("#recaptcha-anchor").value="") {
        alert("Você não preencheu o Captcha de verificação.");
        return false;
    }

}

function recaptchaCallback()
 {
    jQuery('#submitBtn').prop('disabled', false);
 }
