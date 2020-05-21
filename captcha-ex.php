<?php
    $captcha = $_POST['g-recaptcha-response'];

    if($captcha != ''){

        $secreto = '6LdHU_oUAAAAADvJ5YTMM4almp-_3CQg7fyG9aUt';
        $ip = $_SERVER['REMOTE_ADDR'];
        $var = file_get_contents("https://google.com/recaptch/api/siteverify?secret=$secreto&response=$captcha&remoteip=$ip");
        $resposta = json_decode($var, true);

        if($resposta['success']){
            echo "Recaptcha preenchido com sucesso!"

        }else{
            echo "Recaptcha não selecionado"
        }
    }