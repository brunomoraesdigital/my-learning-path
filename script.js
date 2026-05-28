const caixaRegistro = document.getElementById('caixa-registro');

/* pega o dia de hoje*/
/* Ex. Date 26/05/2026, 20:20:42 */
const hoje = new Date();
/* new Date(ano, mes, dia) */
/* new Date(2026/janeiro/0)*/
/* new Date(2026/janeiro/-1)*/
/* new Date(2025/dezembro/31)*/
const inicioAno = new Date(hoje.getFullYear(), 0, 0);
/* resultaodo em milisegundos */
/* 12.687.642.212 milissegundos*/
const diferenca = hoje - inicioAno;
/* 86400000 = 1dia em milissegundos */
/*  1000 ms = 1 segundo
    60 segundos = 1 minuto
    60 minutos = 1 hora
    24 horas = 1 diaDoAno
*/
const umDia = 1000 * 60 * 60 * 24;
/* 146 dias */
const diaDoAno = Math.floor(diferenca / umDia);


function criaCaixaRegistro () {
  let i;
  for (i = 0; i < diaDoAno; i++) {
    const registro = document.createElement('div');
    registro.classList.add("registro");
    caixaRegistro.appendChild(registro);
  }
}

criaCaixaRegistro();


console.log("Hoje:", hoje);

console.log("Inicio do ano:", inicioAno);

console.log("Diferença:", diferenca);

console.log("Um dia:", umDia);

console.log("Dia do ano:", diaDoAno);