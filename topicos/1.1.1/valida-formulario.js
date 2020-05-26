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
        var op = document.getElementsByClassName('g-recaptcha').value;
    if(op == "")
            {
                if(!document.getElementById('btn-enviar').disabled) document.getElementById('btn-enviar').disabled=true;              
            }

            else if(op == "1")
            {
                if(document.getElementById('btn-enviar').disabled) document.getElementById('btn-enviar').disabled=false;
            }

}

        function habilitaBtn () {
            var op = document.getElementsByClassName('g-recaptcha').value;

            if(op == "")
            {
                if(!document.getElementById('btn-enviar').disabled) document.getElementById('btn-enviar').disabled=true;              
            }

            else if(op == "1")
            {
                if(document.getElementById('btn-enviar').disabled) document.getElementById('btn-enviar').disabled=false;
            }
        }



function recaptchaCallback()
{
   document.getElementsByClassName('recaptchaCallback') = jQuery('#submitBtn').prop('disabled', false);
}
