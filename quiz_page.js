player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

//player name//
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
//player score//
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question turn" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn" + player2_name

//send function//

function send() {
    get_number = document.getElementById("number").value;
    number = get_number.toLowerCase();
    console.log("word In Lower Case" + number);

    charAt1 = number.charAt(1);
    console.log(charAt1);
    length_divide_2 = Math.floor(number.length / 2);

    chatAt2 = number.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = number.length - 1;

    charAt3 = number.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = number.replace(charAt1, "_");
    remove_charAt2 = charAt1.replace(charAt2, "_");
    remove_charAt3 = charAt2.replace(charAt3, "_");
    console.log(charAt3);

    question_number= "<h4 id='number_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number").value = "";


}