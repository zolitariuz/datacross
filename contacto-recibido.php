<?php

	$nombre = $empresa = $mail = $telefono = $mensaje = $demo = '';

	$nombre 	= ( isset($_POST['nombre']) ) ? $_POST['nombre'] : '';
	$empresa 	= ( isset($_POST['empresa']) ) ? $_POST['empresa'] : '';
	$mail 		= ( isset($_POST['mail']) ) ? $_POST['mail'] : '';
	$telefono 	= ( isset($_POST['telefono']) ) ? $_POST['telefono'] : '';
	$mensaje 	= ( isset($_POST['mensaje']) ) ? $_POST['mensaje'] : '';
	$demo 		= ( isset($_POST['demo']) ) ? $_POST['demo'] : '';

	//$mail_to = 'clientes@sgwsistemas.com.mx, clientes@datacross.com.mx, gabriel.garcia@sgwsistemas.com.mx, raul@pcuervo.com';
	$mail_to = 'raul@pcuervo.com, raul.zdesign@gmail.com';
	$subject = 'Contacto Datacross';

	$body_message = 'Nombre: '.$nombre."\n";
	$body_message .= 'Empresa: '.$empresa."\n";
	$body_message .= 'Mail: '.$mail."\n";
	$body_message .= 'Telefono: '.$telefono."\n";
	$body_message .= 'Mensaje: '.$mensaje."\n";
	if ( $demo == '1' ){
		$body_message .= 'Solicitó demo';
	} else {
		$body_message .= 'No solicitó demo';
	}

	$headers = 'From: '.$mail."\r\n";
	$headers .= 'Reply-To: '.$mail."\r\n";

	$mail_status = mail($mail_to, $subject, $body_message, $headers);

?>
<!doctype html>
	<head>

		<meta charset="utf-8">

		<title>Datacross</title>

		<link rel="shortcut icon" href="images/favicon.ico">
		<link rel="stylesheet" href="style.css">

		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

		<meta name="description" content="">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="cleartype" content="on">
		<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

		<script type="text/javascript" src="//use.typekit.net/miq6ffp.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

	</head>

	<body>
		<!--[if lt IE 9]>
			<p class="chromeframe">Estás usando una versión <strong>vieja</strong> de tu explorador. Por favor <a href="http://browsehappy.com/" target="_blank"> actualiza tu explorador</a> para tener una experiencia completa.</p>
		<![endif]-->
		<div class="container">

			<header class="full">
				<div class="width clearfix menu">
					<h1>
						<a href="index.html">
							<img src="images/logo-datacross.png" alt="" />
						</a>
					</h1>
					<nav>
						<a href="descargas.html">
							<i class="fa fa-cloud-download block text-center"></i>
							<span class="block text-center">descargas</span>
						</a>
						<a href="ejemplos.html">
							<i class="fa fa-desktop"></i>
							<span class="block text-center">ejemplos</span>
						</a>
						<a href="historia.html">
							<i class="fa fa-book"></i>
							<span class="block text-center">historia</span>
						</a>
						<a href="contacto.html">
							<i class="fa fa-envelope"></i>
							<span class="block text-center">contacto / demo</span>
						</a>
						<a>
							<i class="fa fa-phone"></i>
							<span class="block text-center">+52 (777) 315 9912</span>
						</a>
					</nav>
				</div><!-- width -->
			</header>

			<div class="main not-home">
				<section class="full">
					<div class="span margin-bottom"><img class="contacto-wrapper" src="images/descargas_ch.jpg"></div>
					<div class="clear"></div>
					<div class="container-blanco columna xmall-10 center block margin-bottom clearfix">
						<h2 class="columna xmall-6 text-center center margin-bottom">Contacto recibido</h2>
						<h3 class="text-center">Gracias por ponerte en contacto con nosotros, te contactaremos lo antes posible.</h3>
					</div>
				</section>
			</div><!-- main -->

			<!-- <footer>
				<div class="width">
					<p class="text-center">DataCross es un software 100% mexicano desarrollado por SGW Sistemas.</p>
					<p class="text-center">Teléfonos: (777) 315 9912 y (777) 319 9154.</p>
				</div>
			</footer>-->

		</div><!-- container -->

	</body>
	<script src="js/jquery.js"></script>
	<script src="js/plugins.js"></script>
	<script src="js/functions.js"></script>
	<script src="path/to/jquery.fitvids.js"></script>

</html>