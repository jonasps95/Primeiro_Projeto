<!DOCTYPE html>
<html>
<head>
    <title>Meu Site Culinári</title>
    <link rel="shotcut icon" type="image-x/png" href="imagens/minilogo.ico" /> 
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
    <link href="css/slick.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <meta name="description" content="descrição do meu site">
    <meta name="keywords" content="palavras,chaves,separads,por,virgula">
    <meta name="author" content="JP_Programador">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>
    <meta charset="utf-8"/>

</head>
<body>
<header>
    <div class="container">
        <div class="logo"></div>
    <nav class="menuDesktop">
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="cardapio">Cardápio</a></li>
            <li><a id="#contato" href="home">Contato</a></li>
            <li><a id="#sobre" href="home">Sobre</a></li>
        </ul>
    </nav><!--menuDesktop-->

    <nav class="menuMobile">
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="cardapio">Cardápio</a></li>
            <li><a id="#contato" href="home">Contato</a></li>
            <li><a id="#sobre" href="home">Sobre</a></li>
            <div class="mini-redesSocial">
                <a href="https://facebook.com"><img src="imagens/minifacebook.png"></a>
                <a href="https://instagram.com"><img src="imagens/miniinstagram.png"></a>
                <a href="https://wa.me/5551999999999?text=Olá%20Faça%20Seu%20Pedido!"><img src="imagens/miniwhatsapp.png"></a>
            </div><!--mini-redeSocial-->
        </ul>
    </nav><!--menuMobile-->

    </div><!--container-->
    <div class="clear"></div>
</header>

<section class="wts">
    <div class="balao ">
        <a href=https://wa.me/5551999999999?text=Olá%20Faça%20Seu%20Pedido!">
        <img src="imagens/whats.png">
        <p>(51) 99999-9999  Faça seu Pedido</p>
        </a>
    </div><!--balao-->
    <div class="clear"></div>
</section><!--wts-->

<?php
	if(isset($_GET['url'])){
		if(file_exists($_GET['url']).'.html'){
			include($_GET['url'].'.html');
		}else{
			include('404.html');
		}
	}else{
		include('home.html');
	}
?>

<footer>
    <div class="container">
        <div class="footer-logo">  </div><!--footer-logo-->
        <div class="refs">
        <p>jp.progdev@gmail.com</p>
        <p>2020</p>
        </div><!--refs-->
        <div class="minis">
            <a href="https://facebook.com"><img src="imagens/minifacebook.png"></a>
            <a href="https://instagram.com"><img src="imagens/miniinstagram.png"></a>
            <a href="https://wa.me/5551999999999?text=Olá%20Faça%20Seu%20Pedido!"><img src="imagens/miniwhatsapp.png"></a>
        </div><!--minis-->
    </div><!--container-->
    <div class="clear"></div>
</footer>

<script src="js/jquery.js"></script>
<script src="js/slick.js"></script>
<script src="js/functions.js"></script>
<script src="js/menuScroll.js"></script>
</body>
</html>