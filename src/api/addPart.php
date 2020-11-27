<?php
// error_reporting(0);
date_default_timezone_set('Asia/Kolkata');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "webathon";
// $flag=0;
// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
$index=$_POST[0];
$team=$index['team'];
// $problem=$index['prob'];
// $leader=$index['name'];
// $date=date("D M d, Y G:i");
//    $sql = "INSERT INTO teams ( name,time,Problem_id,Leader)
//  VALUES ('".$team."','".$date."','".$problem."','".$leader."')";
 
   
//   $id = $conn->query($sql);
// $team_id=0;

// $sql = "SELECT id FROM teams WHERE time='".$date."' AND name = '".$team."'";
// $id = $conn->query($sql);
// if ($id->num_rows > 0) {
//    // output data of each row
//    while($row = $id->fetch_assoc()) {
//       $team_id=$row["id"];
     
//    }
//  } else {
//    echo "0 results";
//  }
// foreach($_POST as $row){
   
//    $sql = "INSERT INTO reg_entry ( name ,roll,phone,mail_id,university,college,course,semester,team_id)
// VALUES ('".$row['name']."','".$row['roll']."','".$row['phone']."','".$row['mail']."','".$row['university']."','".$row['college']."','".$row['course']."','".$row['semister']."',".$team_id.")";
    
//     if ($conn->query($sql) === TRUE) {
//       $flag=1;
//     } else {
//       $flag=0;
//     }
// }
// if($flag===1){
//    echo "team added successfully";
// }
echo json_encode(["message" => $team]);
?>