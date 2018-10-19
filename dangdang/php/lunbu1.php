

<?php
require "conn.php";
$result=mysql_query("select * from lunbu");
	 $newpic=array();
    
    for($i=0;$i<mysql_num_rows($result);$i++){
    	$newpic[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
    	
    }	
      echo json_encode($newpic);
?>