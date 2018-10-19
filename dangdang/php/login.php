<?php
require "conn.php";
if(isset($_POST['name'])){//前端ajax传输过来的额
	$username=$_POST['name'];
	$password=md5($_POST['pass']);
	$result=mysql_query("select * from zhuce where username='$username'");
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}

}
?>