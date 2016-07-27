<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Bilangan Fibonacci</title>
	<script type="text/javascript" src="<?php echo base_url('assets/js/javascript.js') ?>"></script>
	<link rel="stylesheet" href="<?php echo base_url('assets/css/style.css') ?>" type="text/css" />
</head>
<body onload="nextData()">
<div id="container">
	<h1 align="center">Bilangan Fibonacci</h1>

	<div id="body" align="center">
		<div id="result"></div>
    <div id="navigation">
    	<button type="button" id="prev" onclick="previousData()" style="visibility: visible;">Prev</button> &nbsp;
    	<button type="button" id="next" onclick="nextData()">Next</button>
    </div>
	</div>

	<p class="footer">Page rendered in <strong>{elapsed_time}</strong> seconds. <?php echo  (ENVIRONMENT === 'development') ?  'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?></p>
</div>

</body>
</html>