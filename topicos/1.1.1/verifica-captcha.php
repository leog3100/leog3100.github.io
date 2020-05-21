<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificacaptcha</title>
</head>

<body>
      <?php
        if (isset($_POST['nome'])){
            $nome = $_POST['nome'];
        }  
        if (isset($_POST['mensagem'])) {
            $mensagem = $_POST['mensagem'];
        }
        if (isset($_POST['g-recaptcha-response'])) {
            $captcha_data = $_POST['g-recaptcha-response'];
        }
        
        if (!$captcha_data) {
            echo '<p>Clique em <a href="topicos\1.1.1\exemplo-captcha.html">Formulário</a> para tentar novamente</p>'
            exit;
        }
        $resposta = file_get_contents(
            "https://www.google.com/recaptcha/api/siteverify?secret=6LeRqfoUAAAAAKGaVUXtOY-axeGPh5ezZc-CerBe&response=".$captcha_data."&remoteip=".$_SERVER['REMOTE_ADDR']);
            if ($resposta.sucess) {
                echo "Mensagem enviada!";
            }else{
                echo "Captcha detectou uma ação mal intencionada. Mensagem não enviada.";
                exit;
            }
                ?>
</body>
</html>