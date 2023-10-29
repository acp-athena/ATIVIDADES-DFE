function carros(){

    let modelo = document.getElementById("cMod").value;
    let marca = document.getElementById("cMar").value;
    let custo = document.getElementById("cFab").value;
    

    let venda = parseFloat(custo) * (130/100);

    document.write('<h2>Modelo: '+ modelo +'<br>Marca: '+ marca +'<br>Custo de fabricação: R$'+ custo +'<br>Valor de venda: R$'+ venda +'</h2>');
}