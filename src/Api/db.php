<?php
    $conn= new mysqli("localhost","root","root","vue-php");
    if(!$conn){
        echo "Error! DB Not Found";
    }

?>