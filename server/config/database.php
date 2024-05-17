<?php
$env = parse_ini_file("../../.env");

$servername = $env["DATABASE_SERVERNAME"];
$username = $env["DATABASE_USERNAME"];
$password = $env["DATABASE_PASSWORD"];
$dbname = $env["DATABASE_NAME"];

$connection = mysqli_connect($servername, $username, $password, $dbname);
if (! $connection) {
    die("Could not connect to database. " . mysqli_connect_error());
}