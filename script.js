/* Desenvolva seu código abaixo */

function playRockPaperScissor(player1, player2){
    while(true){
        player1 = prompt("Jogador 1: Digite pedra, papel ou tesoura");
        player2 = prompt("Jogador 2: Digite pedra, papel ou tesoura");

        if (player1 == "pedra") {
            if (player2 == "tesoura") {
                alert ("Pedra quebra tesoura");
            } else if (jogador2 == "papel"){
                alert ("Papel envolve a Pedra");
            } else if (jogador2 == "pedra") {
                alert ("Empate");
            }

        }
        else if (player1 == "tesoura") {
            if (player2 == "pedra") {
                alert ("Pedra quebra tesoura");
            } else if (player2 == papel){
                alert ("tesoura corta papel");
            } else if (player2 == "tesoura") {
                alert ("Empate");
            }
        }

        else if (player1 == "papel"){
            if (player2 == "pedra") {
                alert ("Papel envolve pedra");
            }else if (player2 == "tesoura") {
                alert ("Tesoura corta papel");
            }else if (player2 == "papel")  {
                alert ("Empate");
            }

        }

    }
}
console.log(playRockPaperScissor)