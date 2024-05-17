<?php
    $env = parse_ini_file("../.env");

    $host = $env["DATABASE_HOST"];
    $username = $env["DATABASE_USERNAME"];
    $password = $env["DATABASE_PASSWORD"];
    $name = $env["DATABASE_NAME"];

    $connection = mysqli_connect($host, $username, $password, $name);
    if (! $connection) {
        die("Could not connect to database. " . mysqli_connect_error());
    }