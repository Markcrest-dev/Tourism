<?php

  $database_name = "database1";
  $database_password = "";
  $database_server = "localhost";
  $database_username = "root";

  $db = new mysqli($database_server, $database_username, $database_password, $database_name) or die("Could not connect to to database");
  
 
    // if($db){
    //     echo "Database connection has been created";
    // }else{
    //     echo "Database connection failed";
    // }
?>   