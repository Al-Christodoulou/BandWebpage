<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css.css">
	</head>

	<body>
		<?php
			echo "<p class='concertfont'>Συμπληρωμένα στοιχεία:</p>";
			echo "<pre>";
			print_r($_POST);
			echo "</pre>";

			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbname = "personal";

			// Δημιουργία σύνδεσης
			$conn = mysqli_connect($servername, $username, $password, $dbname);

			// Έλεγχος σύνδεσης
			if (!$conn)
			{
				die("Αποτυχία σύνδεσης: " . mysqli_connect_error());
			}
			else
				echo "Επιτυχία σύνδεσης!";

			//ορισμός charset της σύνδεσης ώστε να παρουσιάζονται τα ελληνικά σωστά
			mysqli_set_charset($conn, "utf8");

			$sql = "INSERT INTO
			`review_form` (`username`, `disk_name`, `disk_date`, `review_text`, `grade`) VALUES
			('".$_POST['username']."', '".$_POST['disk_name']."', '".$_POST['disk_date']."', '".$_POST['review_text']."', '".$_POST['grade']."') ;";

			//εκτέλεση ερωτήματος στη βάση
			$result = mysqli_query($conn, $sql);

			//έλεγχος αποτελεσμάτων
			if ($result)
				echo "<br>Επιτυχία αποθήκευσης!<br>";
			else
				echo "<br>Αποτυχία αποθήκευσης!<br>";

			//κλείσιμο σύνδεσης
			mysqli_close($conn);
		?>
	</body>
</html>