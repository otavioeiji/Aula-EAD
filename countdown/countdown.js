/**
* JS - Aula10: Countdown
* @author Otávio Eiji Mitsuzaki
*/

/*Criando a variável ckeck para evitar de clicar enquanto estiver executando a contagem regressiva.*/
var check = false;

function xequeMate(){
    if(check == false){
        /*Criando uma variável que recebe um método para executar a função start a cada 1 segundo.*/
        var timer1 = setInterval(function(){start()}, 1000);
        /*Criando uma variável que recebe um método para executar a função end apenas uma vez após o tempo de aproximadamente 13 segundos.*/
        var timer2 = setTimeout(function(){end()}, 13200);
        var count = 10; /*Iniciando o contador com o número 10.*/
        function start(){
            soundBeep();
            document.getElementById("time").innerHTML = count; /*Substitui o texto Cowntdown pelo conteúdo da variável count.*/
            if(count == 0){
                clearInterval(timer1); /*Interrompe a execução do método setInterval.*/
                soundThunder(); /*Executa o som após a contagem.*/
                document.getElementById("fire").src = "explosion.gif"; /*Altera a imagem do botão para a imagem gif.*/
                document.getElementById("time").innerHTML = "GAME OVER"; /*Mudar o valor zero pela palavra Game Over.*/
            }
            count --; /*Faz a contagem regressiva.*/
        }
        check = true;
    }   
}

function soundBeep(){
    /*Criando uma variável que recebe o objeto Audio.*/
    var beep = new Audio();
    beep.src = "Beep_Short.mp3"; /*Caminho do arquivo de audio.*/
    beep.play(); /*Reproduz o audio.*/
}

function soundThunder(){
    /*Criando uma variável que recebe o objeto Audio.*/
    var beep = new Audio();
    beep.src = "Thunder_Crack.mp3"; /*Caminho do arquivo de audio.*/
    beep.play(); /*Reproduz o audio.*/
}

/*Função que troca a imagem do gif após a explosão.*/
function end(){
    document.getElementById("fire").src = "clean.png";
}


