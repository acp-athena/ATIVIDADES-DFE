function media(){

    let nota1 = document.getElementById("tNota1").value;
    let nota2 = document.getElementById("tNota2").value;
    let faltas = document.getElementById("tFaltas").value;

    let media = (parseFloat(nota1)*4+parseFloat(nota2)*6)/10;

    document.write('<h2>A nota 1 vale '+ nota1 +' e nota 2 vale '+ nota2 +'. A media do aluno vale '+ media +'</h2>');
    document.write('<h2>O aluno possui '+ faltas +' faltas</h2>');

    if(faltas<=16 && media>=6){
        document.write('<h2>Aluno aprovado!</h2>');
    }

    else{
        document.write('<h2>Aluno reprovado.</h2>');
    }
}