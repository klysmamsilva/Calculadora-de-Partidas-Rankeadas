// Função para calcular saldo de vitórias e determinar nível do jogador
function calcularRanked(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna saldo e nível
    return {
        saldoVitorias,
        nivel
    };
}

// Laço de repetição para permitir várias entradas
function iniciarCalculadora() {
    let continuar = true;

    while (continuar) {
        // Recebe valores do usuário
        let vitorias = parseInt(prompt("Digite o número de vitórias:"));
        let derrotas = parseInt(prompt("Digite o número de derrotas:"));

        // Chama a função principal
        let resultado = calcularRanked(vitorias, derrotas);

        // Exibe resultado
        alert(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

        // Pergunta se o usuário quer continuar
        let resposta = prompt("Deseja calcular novamente? (s/n)");
        if (resposta.toLowerCase() !== 's') {
            continuar = false;
        }
    }
}

// Inicia a calculadora
iniciarCalculadora();