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

document.getElementById("player_question").innerHTML = "question turn:  " + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn:  " + player2_name ;

//send function//

function send() {
    get_number = document.getElementById("number1").value;
    number = get_number.toLowerCase();
    console.log("number to Lower Case" + word);

    charAt1 = number.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(number.length / 2);

    charAt2 = number.charAt(length_divide_2);
    console.log(charAt2);

    charAt3 = number.charAt(length_divide_2);
    console.log(charAt3);

    length_minus_1 = number.length - 1;

    charAt1=document.getElementById("number1").value;
    charAt2=document.getElementById("operation").value;
    charAt3=document.getElementById("number2").value;

    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";


}
question_turn = "player1";
answer_turn = "player2";

//function check//
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case" + answer);
    if (answer == number)
     {
        if (answer_turn == "player1")
         {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            console.log(player1_score);
        } else 
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1")
     {
      question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn:  "  +   player2_name;
    } else 
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn:  "  +   player1_name;
    }



    if (answer_turn == "player1")
     {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn:  "  +   player2_name;
    } else 
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn:  "   +   player1_name ;

    }
    document.getElementById("output").innerHTML = "";


}