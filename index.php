<?php
$servername = "localhost";
$username = "bcdrive";
$password = "123456";
$dbname = "bcdrive";

$json = '';
$data = array();
class Ques {
    public $id;
    public $question;
    public $ans1;
    public $ans2;
    public $ans3;
    public $ans4;
    public $corr;
}

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}



$sql = "SELECT * FROM bcdrive";
$result = $conn->query($sql);

$front_id;

if ($result) {
    //echo "查询成功";
    while ($row = $result->fetch_assoc()) {
        $ques = new Ques();
        $ques->id = $row["id"];
        $ques->question = $row["question"];
        $ques->ans1 = $row["ans1"];
        $ques->ans2 = $row["ans2"];
        $ques->ans3 = $row["ans3"];
        $ques->ans4 = $row["ans4"];
        $ques->corr = $row["corr"];
        $data[] = $ques;
    }
    //把数据转换为JSON数据.
    $json = json_encode($data, JSON_UNESCAPED_UNICODE);
    echo "{" . '"ques"' . ":" . $json . "}";
} else {
    echo "查询失败";
}

if ($result->num_rows > 0) {
    // 输出数据
    while ($row = $result->fetch_assoc()) {
        //echo "id: " . $row["id"] . " - ques: " . $row["question"] . " " . $row["ans1"] . "<br>";
        //echo ($row['ans1']);
        //echo $row['id']." ".$row['question']." ".$row['ans1']." ".$row['ans2']." ".$row['ans3']." ".$row['ans4']," ".$row['corr'];
    }
} else {
    echo "0 结果";
}

$result2 = mysqli_query($conn, "SELECT * FROM bcdrive");

while ($row = mysqli_fetch_array($result2)) {
    //echo $row['question'] . " " . $row['corr'];
    //echo "<br>";
    //echo ($row['id'][0]);
}

$conn->close();
?>