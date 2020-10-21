function andTheWinnerIs(player1, player2) {
	var player1 = document.getElementById("player1").value;
	var player2 = document.getElementById("player2").value;
	var result = { paper: "rock", scissors: "paper", rock: "scissors" };
	var answer;
	if (player1 === player2) {
		answer = "We have a tie!";
	} else {
		if (result[player1] === player2) {
			answer = "Player 1 wins!";
		} else {
			answer = "Player 2 wins!";
		}
	}
	document.getElementById("result").innerHTML = answer;
}
