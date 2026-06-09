const elementoCaixaAno = document.getElementById("caixa-ano");
const elementoCaixaSemanasAno = document.getElementById('caixa-semanas-ano');
const elementoCaixaDiasSemana = document.getElementById('caixa-dias-semana');
const elementoDiario = document.getElementById('diario');

/* pega a data e horas atuais */
const hoje = new Date();

/* Primeiro dia de referência do ano */
const inicioAno = new Date(hoje.getFullYear(), 0, 0);

/* resultado em milissegundos */
const diferencaDias = hoje - inicioAno;

/* Quantidade de milissegundos em um dia */
const umDia = 1000 * 60 * 60 * 24;

/* Cálcula quantidade de dias do ano */
const diaAnoAtualBase = Math.floor(diferencaDias / umDia);

/* pega o ano atual */
const anoAtual = hoje.getFullYear();
/* pega o mês atual (0 a 11) */
const mesAtual = hoje.getMonth();
/* pega o dia do mês atual */
const diaMesAtual = hoje.getDate();
/* pega o dia da semana atual (0 a 6) */
const diaSemanaAtual = hoje.getDay();
/* pega o dia da ano atual */
const diaAnoAtual = diaAnoAtualBase;

console.log(anoAtual, mesAtual, diaMesAtual, diaSemanaAtual, diaAnoAtual);

/* calcular se o ano é bissexto */
const anoBissexto = ((anoAtual % 4) === 0 && (anoAtual % 100) !== 0) || (anoAtual % 400) === 0;

let diasAno = anoBissexto ? 366 : 365;
console.log(anoBissexto ? "É bissexto" : "Não é bissexto");

// calcular dia da semana de início do ano
let ajusteDiaSemanaInicio =
(
  anoAtual +
  Math.floor(anoAtual / 4) -
  Math.floor(anoAtual / 100) +
  Math.floor(anoAtual / 400)
) % 7;

const diaSemanaInicioAno = !anoBissexto ? ajusteDiaSemanaInicio : (ajusteDiaSemanaInicio + 1);

console.log(diaSemanaInicioAno);

function criaDias() {
  const diasAnoAjustado = diaSemanaInicioAno + diasAno;
  const celulasDia = [];

  for (let i = 0; i < diasAnoAjustado; i++) {
    const dia = document.createElement('div');
    dia.classList.add("celula-dia");
    dia.id = `celula-dia-${i}`;
    elementoDiario.appendChild(dia);
    celulasDia.push(dia);
  }

  const indiceDiaAtual = diaAnoAtualBase + diaSemanaInicioAno;

  // Pinta os dias passados
  for (let i = 0; i < indiceDiaAtual; i++) {
    if (i < diaSemanaInicioAno) {
      celulasDia[i].classList.add("morto");
    } else if (i == (indiceDiaAtual - 1)) {
      celulasDia[i].classList.add("marca-dia-atual");
    } else {
      celulasDia[i].classList.add("percorrido");
    }
  }
}

function criaSemanasAno() {
  for (let i = 0; i < 53; i++) {
    const semanasAno = document.createElement('div');
    semanasAno.classList.add("semanas-ano");
    semanasAno.id = `semanas-ano-${i}`;
    elementoCaixaSemanasAno.appendChild(semanasAno);
  }
}

criaSemanasAno();
criaDias();

elementoDiario.addEventListener('scroll', function () {
  elementoCaixaSemanasAno.scrollLeft = elementoDiario.scrollLeft;
});

elementoCaixaSemanasAno.addEventListener('scroll', function () {
  elementoDiario.scrollLeft = elementoCaixaSemanasAno.scrollLeft;
});

