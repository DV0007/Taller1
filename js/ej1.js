
function crear() {

    var numeroFilas = parseInt(document.getElementById('filas').value);
    var numeroColumnas = parseInt(document.getElementById('columnas').value);
    var matriz = document.getElementById('matriz');


    var filas = [];
    var numeroMinimo = 100;
    var numeroMaximo = 0;
    var htmlTable = "<table border='1'>";

    for (let i = 0; i < numeroFilas; i++) {
        var nuevaFila = [];
        var htmlTr = "<tr>";

        for (let a = 0; a < numeroColumnas; a++) {
            var numeroAleatorio = Math.floor(Math.random() * (100 - 0) + 0);

            if (numeroAleatorio > numeroMaximo) {
                numeroMaximo = numeroAleatorio;
            }


            if (numeroAleatorio < numeroMinimo) {
                numeroMinimo = numeroAleatorio;
            }

            nuevaFila.push(numeroAleatorio);
            htmlTr += "<td>" + numeroAleatorio + "</td>";
        }

        filas.push(nuevaFila);
        htmlTr += "</tr>";
        htmlTable += htmlTr;
    }
    htmlTable += "</table>";

    matriz.innerHTML = htmlTable;
    matriz.innerHTML += "<p>numero mayor:" + numeroMaximo + "</p>"
    matriz.innerHTML += "<p>numero minimo:" + numeroMinimo + "</p>"
}


function reiniciar() {
    var numeroFilas = document.getElementById('filas');
    var numeroColumnas = document.getElementById('columnas');
    var matriz = document.getElementById('matriz');

    numeroFilas.value = "";
    numeroColumnas.value = "";
    matriz.innerHTML = "";
}

