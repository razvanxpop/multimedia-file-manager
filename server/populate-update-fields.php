<?php
//header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
require_once "config/database.php";

$id = $_GET["id"];

global $connection;
$sql_query = "SELECT * FROM files WHERE id = '$id';";
$result = mysqli_query($connection, $sql_query);

if ($result) {
    $row = mysqli_fetch_array($result);
    echo json_encode([
        "id" => (int)$row['id'],
        "title" => $row['title'],
        "format" => $row['format'],
        "genre" => $row['genre'],
        "path" => $row['path'],
    ]);
    mysqli_free_result($result);
    //echo json_encode(["success" => true, "message" => "File updated successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to update file"]);
}