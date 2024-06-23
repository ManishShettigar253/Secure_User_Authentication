<?php
$host = 'localhost'; 
$username = 'root'; 
$password = ''; 
$dbname = 'sua';

// Establish database connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
