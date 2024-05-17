<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
require_once "config/database.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$title = $request->title;
$format = $request->format;
$genre = $request->genre;
$path = $request->path;

if (empty($title) || empty($format) || empty($genre) || empty($path)) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit(); // Stop execution if validation fails
}

global $connection;
$sql_query = "insert into files(title, format, genre, path) values ('$title', '$format', '$genre', '$path')";
$result = mysqli_query($connection, $sql_query);

if ($result) {
    echo json_encode(["success" => true, "message" => "File added successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to add file"]);
}

mysqli_close($connection);
