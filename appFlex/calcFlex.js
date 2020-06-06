/**
* JS - Aula05: Calculadora Flex
* @author Otávio Eiji Mitsuzaki
*/

var etanol, gasolina;

function calcular(){
    // O parseFloat converse o conteúdo entre parentêses para Float
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",", "."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."));
    
    if(etanol < 0.7 * gasolina){
        //Document Object Model(DOM). Existem vários métodos.
        //O document.getElementById é um método que retorna o elemento que estiver contendo o nome do ID passado. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.
        document.getElementById("status").src="etanol.png";
    }else{
        document.getElementById("status").src="gasolina.png";
    }
}

function resetar(){
    document.getElementById("status").src="neutro.png";
}