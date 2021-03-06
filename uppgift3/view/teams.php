<?php

	require_once('../controller/controller.php'); // The file with all functions is required (can't be loaded more than once)
	$controller = new Controller; // Creates a controller object
	$controller -> getHeader(); // Loads the header before the main content

?>

	<!-- The Main Content
	====================================================================== -->

	<div class="container-fluid">
		<div class="row">

			<div class="col-md-12">

				<h1>Alla lag</h1>

				<!-- We loop all teams here, atm this is just a filler -->

				<?php 
				$url = $controller->getURL("team_details.php?id=");

					foreach($controller->getAllTeams() as $row) { ?>
						<div class="team-image">
						<a href="<?php echo $url . $row['teamId'] ?>"><img src="../img/team_noimg.png" alt="Bild p&aring; laget"></a>
						<h4><a href="<?php echo $url . $row['teamId'] ?>"><?php echo $row[name]; ?></a></h4>
						</div>

						<?php
					}

				?>
	
			</div>

		</div>
	</div>

<?php
	$controller->getFooter(); // Loads the footer after the main content
?>