/**
* JS - Aula08: Controle de uma lâmpada
* @author Otávio Eiji Mitsuzaki
*/

function on(){
    document.getElementById("lamp").src = "on.jpg";
}
function off(){
    document.getElementById("lamp").src = "off.jpg";
}
function blink(){
    var intervalo = 0;
    var contador = 0;
    
    //pisca a lâmpada por 10 vezes com tempo de 300 milissegundos a cada loop.
    while(contador < 10){
        intervalo += 300;
        //O método setTimeout executa uma função após um determinado tempo. É um método de sincronização.
        setTimeout("document.getElementById('lamp').src = 'on.jpg';", intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src = 'off.jpg';", intervalo);
        contador ++;
    }
}