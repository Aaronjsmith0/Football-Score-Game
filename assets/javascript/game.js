$(document).ready(function () {
    var randomScore = Math.floor(Math.random() * 101 + 19)
    $('#randomScore').text(randomScore);
    var helmet1 = Math.floor(Math.random() * 11 + 1)
    var helmet2 = Math.floor(Math.random() * 11 + 1)
    var helmet3 = Math.floor(Math.random() * 11 + 1)
    var helmet4 = Math.floor(Math.random() * 11 + 1)
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        randomScore = Math.floor(Math.random() * 101 + 19);
        $('#randomScore').text(randomScore);
        helmet1 = Math.floor(Math.random() * 11 + 1);
        helmet2 = Math.floor(Math.random() * 11 + 1);
        helmet3 = Math.floor(Math.random() * 11 + 1);
        helmet4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#yourScore').text(userTotal);
    }

    function win() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function loser() {
        alert("You lose! Your final total was: " + userTotal);
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    $('#helmetOne').on('click', function () {
        userTotal = userTotal + helmet1;
        $('#yourScore').text(userTotal);
        if (userTotal === randomScore) {
            win();
        } else if (userTotal > randomScore) {
            loser();
        }
    })
    $('#helmetTwo').on('click', function () {
        userTotal = userTotal + helmet2;
        $('#yourScore').text(userTotal);
        if (userTotal === randomScore) {
            win();
        } else if (userTotal > randomScore) {
            loser();
        }
    })
    $('#helmetThree').on('click', function () {
        userTotal = userTotal + helmet3;
        $('#yourScore').text(userTotal);
        if (userTotal === randomScore) {
            win();
        } else if (userTotal > randomScore) {
            loser();
        }
    })
    $('#helmetFour').on('click', function () {
        userTotal = userTotal + helmet4;
        $('#yourScore').text(userTotal);
        if (userTotal === randomScore) {
            win();
        } else if (userTotal > randomScore) {
            loser();
        }
    });
});