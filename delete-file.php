<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
require_once "config/database.php";
global $connection;

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = $request->id;

$sql_query = "delete from files where id = '$id';";
$result = mysqli_query($connection, $sql_query);

mysqli_close($connection);