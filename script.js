$(document).ready(function(){
    let casas = ["0", "1", "2", "3", "4", "5", "6", "8", "8"];
    let simbolo = "X";
    $(".casas").on('click', function(){
        markCasa($(this));
    });
    $("body").on('keyup', function(e){
        key = parseInt(e.originalEvent.key);
        if(key == 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
            markCasa($("#casa-"+key));
        }
    });

    function markCasa(casa){
        let idCasa = casa.attr("id").slice(-1);

        if(casas[idCasa-1] === "X" || casas[idCasa-1] === "O"){
            return false;
        }

        casas[idCasa-1] = simbolo;
        casa.html(simbolo);
        
        verificarVitoria(casas, simbolo);

        simbolo = simbolo === "X" ? "O" : "X";
    }

    function resetCasas(){
        casas = ["0", "1", "2", "3", "4", "5", "6", "8", "8"];
    }

    function verificarVitoria(casasArray, simboloAtual){
        if(
            (casasArray[0] === casasArray[1] && casasArray[1] === casasArray[2]) ||
            (casasArray[3] === casasArray[4] && casasArray[4] === casasArray[5]) ||
            (casasArray[6] === casasArray[7] && casasArray[7] === casasArray[8]) ||
            (casasArray[0] === casasArray[3] && casasArray[3] === casasArray[6]) ||
            (casasArray[1] === casasArray[4] && casasArray[4] === casasArray[7]) ||
            (casasArray[2] === casasArray[5] && casasArray[5] === casasArray[8]) ||
            (casasArray[0] === casasArray[4] && casasArray[4] === casasArray[8]) ||
            (casasArray[2] === casasArray[4] && casasArray[4] === casasArray[6])
        ){
            $(".casas").html("");
            let span = simboloAtual === "O" ? "<span class='playerwinO'>"+simboloAtual+"</span>"+" GANHOU!" : "<span class='playerwinX'>"+simboloAtual+"</span>"+" GANHOU!";
            $(".status").html(span);

            resetCasas();
        }
        let jogado = 0;
        casasArray.forEach(casa => {
            if(casa === "X" || casa === "O"){
                jogado += 1;
            }
        });
        if(jogado == 9){
            $(".casas").html("");
            $(".status").html("EMPATE!");
            resetCasas();
        }
        // vitórias diagonais a cima
    }
});