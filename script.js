$(document).ready(function(){
    let casas = ["0", "1", "2", "3", "4", "5", "6", "8", "8"];
    let simbolo = "X";
    $(".casas").on('click', function(){
        $(this).html(simbolo);
        let idCasa = $(this).attr("id");
        idCasa = idCasa.slice(-1);
        casas[idCasa-1] = simbolo
        verificarVitoria(casas, simbolo)
        if(simbolo === "X"){
            simbolo = "O";
        }else{
            simbolo = "X";
        }
    });
    $("body").on('keyup', function(e){
        key = parseInt(e.originalEvent.key);
        switch(key) {
            case 1:
                $("#casa-7").trigger("click");
            break;
            case 2:
                $("#casa-8").trigger("click");
            break;
            case 3:
                $("#casa-9").trigger("click");
            break;
            case 4:
                $("#casa-4").trigger("click");
            break;
            case 5:
                $("#casa-5").trigger("click");
            break;
            case 6:
                $("#casa-6").trigger("click");
            break;
            case 7:
                $("#casa-1").trigger("click");
            break;
            case 8:
                $("#casa-2").trigger("click");
            break;
            case 9:
                $("#casa-3").trigger("click");
            break;
            default:

            break;
        }
    });

    function resetCasas(){
        casas = ["0", "1", "2", "3", "4", "5", "6", "8", "8"];
    }

    function verificarVitoria(casasArray, simboloAtual){
        if(casasArray[0] === casasArray[1] && casasArray[1] === casasArray[2]){
            $(".casas").html("");
            if(simboloAtual === "O"){
                $(".status").html("<span class='playerwinO'>"+simboloAtual+"</span>"+" GANHOU!");
            }else{
                $(".status").html("<span class='playerwinX'>"+simboloAtual+"</span>"+" GANHOU!");
            }
            
            resetCasas();
        }
        if(casasArray[3] === casasArray[4] && casasArray[4] === casasArray[5]){
            $(".casas").html("");
            if(simboloAtual === "O"){
                $(".status").html("<span class='playerwinO'>"+simboloAtual+"</span>"+" GANHOU!");
            }else{
                $(".status").html("<span class='playerwinX'>"+simboloAtual+"</span>"+" GANHOU!");
            }
            resetCasas();
        }
        if(casasArray[6] === casasArray[7] && casasArray[7] === casasArray[8]){
            $(".casas").html("");
            if(simboloAtual === "O"){
                $(".status").html("<span class='playerwinO'>"+simboloAtual+"</span>"+" GANHOU!");
            }else{
                $(".status").html("<span class='playerwinX'>"+simboloAtual+"</span>"+" GANHOU!");
            }
            resetCasas();
        }
        // vitórias horizontais a cima
        if(casasArray[0] === casasArray[3] && casasArray[3] === casasArray[6]){
            $(".casas").html("");
            if(simboloAtual === "O"){
                $(".status").html("<span class='playerwinO'>"+simboloAtual+"</span>"+" GANHOU!");
            }else{
                $(".status").html("<span class='playerwinX'>"+simboloAtual+"</span>"+" GANHOU!");
            }
            resetCasas();
        }
        if(casasArray[1] === casasArray[4] && casasArray[4] === casasArray[7]){
            $(".casas").html("");
            if(simboloAtual === "O"){
                $(".status").html("<span class='playerwinO'>"+simboloAtual+"</span>"+" GANHOU!");
            }else{
                $(".status").html("<span class='playerwinX'>"+simboloAtual+"</span>"+" GANHOU!");
            }
            resetCasas();
        }
        if(casasArray[2] === casasArray[5] && casasArray[5] === casasArray[8]){
            $(".casas").html("");
            if(simboloAtual === "O"){
                $(".status").html("<span class='playerwinO'>"+simboloAtual+"</span>"+" GANHOU!");
            }else{
                $(".status").html("<span class='playerwinX'>"+simboloAtual+"</span>"+" GANHOU!");
            }
            resetCasas();
        }
        // vitórias verticais a cima
        if(casasArray[0] === casasArray[4] && casasArray[4] === casasArray[8]){
            $(".casas").html("");
            if(simboloAtual === "O"){
                $(".status").html("<span class='playerwinO'>"+simboloAtual+"</span>"+" GANHOU!");
            }else{
                $(".status").html("<span class='playerwinX'>"+simboloAtual+"</span>"+" GANHOU!");
            }
            resetCasas();
        }
        if(casasArray[2] === casasArray[4] && casasArray[4] === casasArray[6]){
            $(".casas").html("");
            if(simboloAtual === "O"){
                $(".status").html("<span class='playerwinO'>"+simboloAtual+"</span>"+" GANHOU!");
            }else{
                $(".status").html("<span class='playerwinX'>"+simboloAtual+"</span>"+" GANHOU!");
            }
            resetCasas();
        }
        jogado = 0
        casasArray.forEach(casa => {
            if(casa === "X" || casa === "O"){
                jogado += 1
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