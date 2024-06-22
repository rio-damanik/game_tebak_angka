let round = 1;
let maxRounds = 5;
let player1Score = 0;
let player2Score = 0;

function playRound() {
  let player1Input = parseInt(document.getElementById("player1-input").value);
  let player2Input = parseInt(document.getElementById("player2-input").value);

  // harap input angka 1-3 saja
  if (
    isNaN(player1Input) ||
    isNaN(player2Input) ||
    player1Input < 1 ||
    player1Input > 3 ||
    player2Input < 1 ||
    player2Input > 3
  ) {
    alert(
      "Angka yang dapat di input adalah angka 1 - 3 saja, selain itu tidak bisa."
    );
    return;
  }

  // Harap tidak menginput angka yang sama
  if (player1Input === player2Input) {
    alert(
      "Player tidak bisa menginput angka yang sama , player 1 dan 2 diharapkan input angka yang berbeda."
    );
    return;
  }

  //angka random untuk tebakannya
  let correctNumber = Math.floor(Math.random() * 3) + 1;

  let resultText = `Round ${round} of ${maxRounds}\nTebakan yang benar adalah nomor --> ${correctNumber}\n`;

  let player1Correct = player1Input === correctNumber;
  let player2Correct = player2Input === correctNumber;

  if (player1Correct) {
    player1Score++;
    resultText += "Player 1 Tebakan anda Benar!\n";
  } else {
    resultText += "Player 1 Tebakan mu salah, Coba lagi !\n";
  }

  if (player2Correct) {
    player2Score++;
    resultText += "Player 2 Tebakan anda Benar!\n";
  } else {
    resultText += "Player 2 Tebakan mu salah, Coba lagi !\n";
  }

  if (!player1Correct && !player2Correct) {
    alert(
      `Round ${round} of ${maxRounds}\nSeri! Tebakan belum ada yang benar.`
    );
  } else {
    alert(resultText);
  }

  document.getElementById("player1-score").innerText = player1Score;
  document.getElementById("player2-score").innerText = player2Score;

  round++;

  if (round <= maxRounds) {
    document.getElementById(
      "round-info"
    ).innerText = `Round ${round} of ${maxRounds}`;
  } else {
    let winner;
    if (player1Score > player2Score) {
      winner = "Player 1";
      alert(`Selamat! Permainan ini telah dimenangkan oleh ${winner}`);
    } else if (player1Score < player2Score) {
      winner = "Player 2";
      alert(`Selamat! Permainan ini telah dimenangkan oleh ${winner}`);
    } else {
      alert("Permainan berakhir seri! Tidak ada yang menang.");
    }
    document.querySelector("button").disabled = true;
    document.getElementById("restart-button").disabled = false;
  }
}

function restartGame() {
  round = 1;
  player1Score = 0;
  player2Score = 0;
  document.getElementById("round-info").innerText = `Round 1 of 5`;
  document.getElementById("player1-score").innerText = 0;
  document.getElementById("player2-score").innerText = 0;
  document.getElementById("player1-input").value = "";
  document.getElementById("player2-input").value = "";
  document.querySelector("button").disabled = false;
  document.getElementById("restart-button").disabled = true;
}
