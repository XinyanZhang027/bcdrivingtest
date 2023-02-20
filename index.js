const img_exist = [4, 6, 7, 8, 11, 13, 17, 19, 21, 26, 28, 30, 32, 33, 34, 37, 40, 45, 47, 49, 52, 53, 58, 59, 60, 61, 63, 64, 66, 69, 70,
    77, 74, 79, 80, 82, 86, 91, 92, 93, 94, 96, 101, 103, 105, 106, 108, 110, 111, 113, 116, 119, 124, 129, 130, 132, 133, 134, 137, 145, 149,
    152, 169, 170, 171, 177, 178, 179, 184, 193, 194, 196, 200]


function next() {
    orgin_id = document.getElementById('question_number').value;
    a = (parseInt(orgin_id) + 1).toString();
    if (parseInt(orgin_id) < 200) {
        document.getElementById('question_number').value = a;
        document.getElementById('question').innerHTML = response.ques[parseInt(document.getElementById('question_number').value) - 1].question;
        document.getElementById('ans1').innerHTML = "A. " + response.ques[parseInt(document.getElementById('question_number').value) - 1].ans1;
        document.getElementById('ans2').innerHTML = "B. " + response.ques[parseInt(document.getElementById('question_number').value) - 1].ans2;
        document.getElementById('ans3').innerHTML = "C. " + response.ques[parseInt(document.getElementById('question_number').value) - 1].ans3;
        document.getElementById('ans4').innerHTML = "D. " + response.ques[parseInt(document.getElementById('question_number').value) - 1].ans4;
    }
    var img = document.getElementById('img');
    if (img_exist.includes(parseInt(document.getElementById('question_number').value))) {
        img.src = './imgs/' + document.getElementById('question_number').value + '.png';
        document.getElementById("img").style.display = "block";
    } else {
        document.getElementById("img").style.display = "none";
    }

    /*重置选项style*/
    var radios = document.getElementsByName("flexRadioDefault");

    radios[0].checked = false;
    radios[1].checked = false;
    radios[2].checked = false;
    radios[3].checked = false;

    document.getElementById('ans1').style.color = "black";
    document.getElementById('ans2').style.color = "black";
    document.getElementById('ans3').style.color = "black";
    document.getElementById('ans4').style.color = "black";
}

function previous() {
    orgin_id = document.getElementById('question_number').value;
    a = (parseInt(orgin_id) - 1).toString();
    if (parseInt(orgin_id) > 1) {
        document.getElementById('question_number').value = a;
        document.getElementById('question').innerHTML = response.ques[parseInt(document.getElementById('question_number').value) - 1].question;
        document.getElementById('ans1').innerHTML = "A. " + response.ques[parseInt(document.getElementById('question_number').value) - 1].ans1;
        document.getElementById('ans2').innerHTML = "B. " + response.ques[parseInt(document.getElementById('question_number').value) - 1].ans2;
        document.getElementById('ans3').innerHTML = "C. " + response.ques[parseInt(document.getElementById('question_number').value) - 1].ans3;
        document.getElementById('ans4').innerHTML = "D. " + response.ques[parseInt(document.getElementById('question_number').value) - 1].ans4;

    }

    var img = document.getElementById('img');

    if (img_exist.includes(parseInt(document.getElementById('question_number').value))) {
        img.src = './imgs/' + document.getElementById('question_number').value + '.png';
        document.getElementById("img").style.display = "block";
    } else {
        document.getElementById("img").style.display = "none";
    }

    /*重置选项style*/
    var radios = document.getElementsByName("flexRadioDefault");
    radios[0].checked = false;
    radios[1].checked = false;
    radios[2].checked = false;
    radios[3].checked = false;
    document.getElementById('ans1').style.color = "black";
    document.getElementById('ans2').style.color = "black";
    document.getElementById('ans3').style.color = "black";
    document.getElementById('ans4').style.color = "black";

}


function reset1() {
    initializePage();
    document.getElementById('question_number').value = '1'; 
    document.getElementById("img").style.display = "none";
}



function choose() {
    var radios = document.getElementsByName("flexRadioDefault");
    var value = 0;
    let corr = response.ques[parseInt(document.getElementById('question_number').value) - 1].corr;
    let num = '';
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            value = radios[i].value;
            num = 'ans' + String(i + 1);
        }

    }
    if (value == corr) {
        document.getElementById('ans1').style.color = "black";
        document.getElementById('ans2').style.color = "black";
        document.getElementById('ans3').style.color = "black";
        document.getElementById('ans4').style.color = "black";
        document.getElementById(num).style.color = "green";
    } else {
        document.getElementById('ans1').style.color = "black";
        document.getElementById('ans2').style.color = "black";
        document.getElementById('ans3').style.color = "black";
        document.getElementById('ans4').style.color = "black";
        document.getElementById(num).style.color = "red";
    }


}



const initializePage = function () {
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.onreadystatechange = function () {
        if (objXMLHttpRequest.readyState === 4) {
            if (objXMLHttpRequest.status === 200) {
                //alert(objXMLHttpRequest.responseText);
                response = JSON.parse(objXMLHttpRequest.responseText);
                document.getElementById('question').innerHTML = response.ques[0].question;
                document.getElementById('ans1').innerHTML = "A. " + response.ques[0].ans1;
                document.getElementById('ans2').innerHTML = "B. " + response.ques[0].ans2;
                document.getElementById('ans3').innerHTML = "C. " + response.ques[0].ans3;
                document.getElementById('ans4').innerHTML = "D. " + response.ques[0].ans4;

            } else {
                alert('Error Code: ' + objXMLHttpRequest.status);
                alert('Error Message: ' + objXMLHttpRequest.statusText);
            }
        }
    }
    objXMLHttpRequest.open('POST', 'index.php');
    objXMLHttpRequest.send();
}
window.onload = initializePage
/* window.onload = function () {
    //console.log(document.getElementById('rs'));
    //console.log('aaa');
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.onreadystatechange = function () {
        if (objXMLHttpRequest.readyState === 4) {
            if (objXMLHttpRequest.status === 200) {
                //alert(objXMLHttpRequest.responseText);
                response = JSON.parse(objXMLHttpRequest.responseText);
                document.getElementById('question').innerHTML = response.ques[0].question;
                document.getElementById('ans1').innerHTML = "A. " + response.ques[0].ans1;
                document.getElementById('ans2').innerHTML = "B. " + response.ques[0].ans2;
                document.getElementById('ans3').innerHTML = "C. " + response.ques[0].ans3;
                document.getElementById('ans4').innerHTML = "D. " + response.ques[0].ans4;

            } else {
                alert('Error Code: ' + objXMLHttpRequest.status);
                alert('Error Message: ' + objXMLHttpRequest.statusText);
            }
        }
    }
    objXMLHttpRequest.open('POST', 'index.php');
    objXMLHttpRequest.send();

} */
