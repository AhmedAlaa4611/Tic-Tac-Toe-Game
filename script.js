var char = 'X';

window.onload = function() {
    window.setTimeout(function() {
        change_game_title("Plater " + char + " Turn");
    }, 700);
}

var Buttons = document.querySelectorAll('button');
for (var i = 0; i < Buttons.length; i++) {
    Buttons[i].onclick = function() {
        this.innerHTML = char;
        this.disabled = true;
        check();
    }
}

var isWiner = false;
function check() {
    // raws.
    if (Buttons[0].innerHTML === Buttons[1].innerHTML  && Buttons[1].innerHTML === Buttons[2].innerHTML) {
        playerWinner(0, 1, 2);
    }
    if (Buttons[3].innerHTML === Buttons[4].innerHTML  && Buttons[4].innerHTML === Buttons[5].innerHTML) {
        playerWinner(3, 4, 5);
    }
    if (Buttons[6].innerHTML === Buttons[7].innerHTML  && Buttons[7].innerHTML === Buttons[8].innerHTML) {
        playerWinner(6, 7, 8);
    }

    // columns.
    if (Buttons[0].innerHTML === Buttons[3].innerHTML  && Buttons[3].innerHTML === Buttons[6].innerHTML) {
        playerWinner(0, 3, 6);
    }
    if (Buttons[1].innerHTML === Buttons[4].innerHTML  && Buttons[4].innerHTML === Buttons[7].innerHTML) {
        playerWinner(1, 4, 7);
    }
    if (Buttons[2].innerHTML === Buttons[5].innerHTML  && Buttons[5].innerHTML === Buttons[8].innerHTML) {
        playerWinner(2, 5, 8);
    }

    // diagonal.
    if (Buttons[0].innerHTML === Buttons[4].innerHTML  && Buttons[4].innerHTML === Buttons[8].innerHTML) {
        playerWinner(0, 4, 8);
    }
    if (Buttons[2].innerHTML === Buttons[4].innerHTML  && Buttons[4].innerHTML === Buttons[6].innerHTML) {
        playerWinner(2, 4, 6);
    }

    if (isWiner === false)
    {
        char = (char == 'X') ? 'O' : 'X';
        change_game_title("Plater " + char + " Turn");
        
        var isFinished = true;  // chek if game has finished, and set default value.
        for (var i = 0; i < Buttons.length; i++)
        {
            if (Buttons[i].disabled === false) {
                isFinished = false;
                break;
            }
        }

        if (isFinished)
        {
            for (var i = 0; i < Buttons.length; i++) {
                Buttons[i].style.backgroundColor = "tomato";
            }
            change_game_title("Sorry, No player wins");
        }
    }
}

function playerWinner(b1, b2, b3) {
    for (var i = 0; i < Buttons.length; i++) {
        Buttons[i].disabled = true;
    }
    change_game_title("Plater " + char + " Wins");
    Buttons[b1].style.backgroundColor = "#0000ff33";
    Buttons[b2].style.backgroundColor = "#0000ff33";
    Buttons[b3].style.backgroundColor = "#0000ff33";
    isWiner = true;
}


var game_title_div = document.querySelector('.text-stroke');
var game_title_p = document.querySelector('.text-stroke p');
function change_game_title(text) {
    game_title_p.innerHTML = text;
    game_title_div.setAttribute('data-p-content', text);
}