<?php
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
require_once "config/database.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = $request->id;
$title = $request->title;
$format = $request->format;
$genre = $request->genre;
$path = $request->path;

if (!empty($id) && !empty($title) && !empty($format) && !empty($genre) && !empty($path)) {
    // Update the file in the database
    $sql_query = "UPDATE files SET title='$title', format='$format', genre='$genre', path='$path' WHERE id=$id";

    global $connection;
    $result = mysqli_query($connection, $sql_query);
    //mysqli_close($connection);

    if ($result) {
        echo json_encode(["success" => true, "message" => "File updated successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update file"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "All fields are required and cannot be empty"]);
}