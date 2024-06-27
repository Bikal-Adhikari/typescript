enum Choice {
  Rock,
  Paper,
  Scissors,
}

function playGame(player1: Choice, player2: Choice): string {
  if (player1 === player2) return "It's a tie!";
  if (player1 === Choice.Rock) {
    if (player2 === Choice.Scissors)
      return "Rock crushes Scissors! Player 1 wins!";
    else return "Paper covers Rock! Player 2 wins!";
  } else if (player1 === Choice.Paper) {
    if (player2 === Choice.Rock) return "Paper covers Rock! Player 1 wins!";
    else return "Scissors cuts Paper! Player 2 wins!";
  } else {
    if (player2 === Choice.Paper) return "Scissors cuts Paper! Player 1 wins!";
    else return "Rock crushes Scissors! Player 2 wins!";
  }
}

console.log(playGame(Choice.Rock, Choice.Scissors)); 