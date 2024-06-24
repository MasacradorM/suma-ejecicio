window.onload = function(){
    document.getElementById('calcular').addEventListener('click', ()=>{
        let numberUno = parseFloat(document.getElementById('numeroUno').value);
        let numberDos = parseFloat(document.getElementById('numeroDos').value);
        let resultado = "";

        resultado = numberUno + numberDos;

        document.getElementById('resultadoCalculo').innerText = `${numberUno} + ${numberDos} = ${resultado}`;

        return true;

    })
}