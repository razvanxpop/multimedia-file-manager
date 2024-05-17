<?php
header("Access-Control-Allow-Origin: *");
require_once 'config/database.php';
$sql_query = "SELECT * FROM files;";
global $connection;
$result = mysqli_query($connection, $sql_query);

if ($result) {
    $number_of_rows = mysqli_num_rows($result);
    $requested_files = array();
    $title = $_GET["title"];
    for ($i = 0; $i < $number_of_rows; $i++) {
        $row = mysqli_fetch_array($result);
        if (str_contains($row["title"], $title))
            array_push($requested_files, array(
                "id" => (int)$row['id'],
                "title" => $row['title'],
                "format" => $row['format'],
                "genre" => $row['genre'],
                "path" => $row['path']));
    }
    mysqli_free_result($result);
    echo json_encode($requested_files);
}
mysqli_close($connection);