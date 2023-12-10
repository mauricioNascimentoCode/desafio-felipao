
let nomeHeroi = prompt ("Digite o nome do Herói")
let pontosXp =   prompt("Digite os pontos EXP")
let nivelHeroi = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"]

            if (pontosXp < 1000 ) {
            console.log ( "O Herói de nome " +  nomeHeroi + " está no nível de " + nivelHeroi[0])
            }
             else if (pontosXp >= 1001 && pontosXp <= 2000) {
            console.log ( "O Herói de nome " +  nomeHeroi + " está no nível de " + nivelHeroi[1])
            }
             else if (pontosXp >= 2001 && pontosXp <= 5000) {
            console.log ( "O Herói de nome " +  nomeHeroi + " está no nível de " + nivelHeroi[2])
             }
             else if (pontosXp >= 6001 && pontosXp <= 7000) {
            console.log ( "O Herói de nome " +  nomeHeroi + " está no nível de " + nivelHeroi[3])
             }
             else if (pontosXp >= 7001 && pontosXp <= 8000) {
            console.log ( "O Herói de nome " +  nomeHeroi + " está no nível de " + nivelHeroi[4])
             }
             else if (pontosXp >= 8001 && pontosXp <= 9000) {
            console.log ( "O Herói de nome " +  nomeHeroi + " está no nível de " + nivelHeroi[5])
             }
             else if (pontosXp >= 9001 && pontosXp <= 10000) {
            console.log ( "O Herói de nome " +  nomeHeroi + " está no nível de " + nivelHeroi[6])
             }
             else if (pontosXp >= 10000) {
            console.log ( "O Herói de nome " +  nomeHeroi + " está no nível de " + nivelHeroi[7])
            }
