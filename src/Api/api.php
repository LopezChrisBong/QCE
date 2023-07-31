<?php 

include "db.php";

if(isset($_SERVER['HTTP_ORIGIN'])){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 1000');
}
if($_SERVER['REQUEST_METHOD']== 'OPTIONS'){
    if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])){
        header("Access-Control-Allow-Headers: POST, GET, OPTIONS, PUT, DELETE");
    }
    if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])){
        header("Access-Control-Allow-Headers: Accept, COntent-Type, Content-Length, Access-Encoding, 
        X-CSRF-Token,Authorizetion");
    }
    exit(0);
}
$res =array('error' => false);
$action='';

if(isset($_GET['action'])){
    $action=$_GET['action'];
}
if($action=="login"){
    $sql="Select * from 1 `admin` where username='$username' AND password= '$password'";
    $res = $conn->query($sql);
    $num=mysqli_num_rows($res);
    if($num > 0) {
        $res['message'] ="Login Successfuly";
    }
    else{
       $res['error']=true;
       $res['message'] ="Your Login Email or Password is invalid";
    }
}


?>