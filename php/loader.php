<?php
error_reporting(0);
include_once('./database/mysql.php');
include_once('./database/connect.php');

/*if(!isset($_REQUEST['a'])) {
    echo json_encode(array('success' => false, 'error' => 'fatal error! code: 0'));
    die;
}*/

$a = explode('.', $_REQUEST['a']);
$class; $method; $file;

$file = (sizeof($a[0])>1 ? $a[0] : 'Main').'Controller';
$class = (isset($a[1]) ? $a[1] : 'Main').'Controller';
$method = isset($a[2]) ? $a[2] : 'getList';

include('controllers/'.$file.'.php');
$class = new $class();
$response = $class->$method();
echo json_encode($response);

unset($response);
unset($class);
unset($method);
unset($file);
?>