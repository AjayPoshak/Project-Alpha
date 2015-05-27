<!-- Using Parallex effect along with bootstrap for Mobile First Experience-->
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Flying Thoughts</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- External Style Sheet -->
	<link rel="stylesheet" type="text/css" href="style.css">
	<!-- Bootstrap Library Files -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

</head>
<body>

	<?php 
		include 'View/Head.php';
	?>
	<div class="container-fluid">
	<div class="col-lg-16 col-md-16 col-sm-16 col-xs-16 index-padding">
	<div class="row">
			<div class="col-lg-16 col-md-16 col-xs-16 col-sm-16" style="background-color:BLUE;">
				<div id="home">Home Screen
				<p> This is my home screen where I will put my stuff which is top hit from all sections.<br>
				In this section I will do something different from other section in terms of User Interface.<br>
				There will be sliders containing top stories from each section, but I must be extra careful in these<br>
				sliders because I want to make my blog a very light weight and designed with minimalist approach.
				</p>
				<a href="#header">TOP</a>
				</div>
			</div>
			<div class="col-lg-16 col-md-16 col-xs-16 col-sm-16" style="background-color:GREEN;">
				<div id="polity">Politics
				<p>This section of my blog will be dedicated to stories from political field.<br>
				Whatever comments and stories I will published from political point of view will be<br>
				placed here. There would be lot of political stories in this section, that's why<br>
				I placed this section second to Home Section.<br>
				</p>
				<a href="#header">TOP</a>
				</div>
			</div>
			<div class="col-lg-16 col-md-16 col-xs-16 col-sm-16" style="background-color:RED;">
				<div id="tech">Technology
				<p>As I am tech enthusiast, So I like to write a lot about technology and various trends in fields of science<br>
				I am writing tech stuff from previous two years and I am publishing it through a blog named<br>
				as Free and Open Source Technology hosted at blogspot. Main areas about which I write is open source technology<br>
				which mainly consists various trnds and challenges in field of open source software.<br>
				</p>
				<a href="#header">TOP</a>
				</div>
			</div>
			<div class="col-lg-16 col-md-16 col-xs-16 col-sm-16" style="background-color:CYAN;">
				<div id="pers">Personal
				<p>
				I am quite hesitant about talking myself but given some recent changes in my life<br>
				I was forced to think that incidents that I have experienced may be useful or amusing to others<br>
				So I took it as a challenge and would start writing about myself very soon.<br>
				</p>
				<a href="#header">TOP</a>
				</div>
			</div>
			<div class="col-lg-16 col-md-16 col-xs-16 col-sm-16" style="background-color:GREY;">
				<div id="misc">MISCELLANEOUS
				<p> There are many topics on which I write about and these topics do not fall under any<br>
				category defined as above. So I thought that it would be better to put them in this section. <br>
				This may contain various topics like books, fiction, any special incidents or various irrelevant topics like weather<br>
				or symbology.<br>
				</p>
				<a href="#header">TOP</a>
				</div>
			</div>
		</div>
		</div>
		</div>
	<?php
		include 'View/Footer.php';
	?>
	
	</body>
</html>