const date = new Date(); /* utilizado Date(), pegamos a data e hora exata no momento de abertura da página, atribuí essa data na constante "date" */
const dateDay = date.getDate() /* utilizando a constante date, usamos o comando .getDate(), para extrair apenas o dia do mês */
const dateYear = date.getFullYear() /* utilizando a constante date, usamos o comando .getFullYear(), para extrair apenas o ano */
let dateMonth = date.getMonth() /* utilizando a constante date, usamos o comando .getMonth(), para extrair apenas o mês */
/* Foi utilizado "Let" para que o valor da variável possa ser alterado a partir do switch */
const dateHours = date.getHours() /* utilizando a constante date, usamos o comando .getHours(), para extrair apenas a hora */
const dateMinutes = date.getMinutes() /* utilizando a constante date, usamos o comando .getMinutes(), para extrair apenas os minutos */
let dateSem = date.getDay() /* utilizando a constante date, usamos o comando .getDay(), para extrair apenas o dia da semana */
/* Foi utilizado "Let" para que o valor da variável possa ser alterado a partir do switch */


function zeroAEsquerda (num) {  /* Função para adicionar um zero à esquerda dos números inferiores à 10 */
    return num >= 10 ? num : `0${num}`
}

switch (dateSem) { /* a variável retorna um número correspondente ao dia da semana, sendo Domingo o número 0 e Sábado o número 6, transformamos esse valor em uma string dizendo qual seria o dia da semana atual. */
    case 0:
        dateSem = `Domingo`
        break
    case 1:
        dateSem = `Segunda-Feira`
        break
    case 2:
        dateSem = `Terça-Feira`
        break
    case 3:
        dateSem = `Quarta-Feira`
        break
    case 4:
        dateSem = `Quinta-Feira`
        break
    case 5:
        dateSem = `Sexta-Feira`
        break
    case 6:
        dateSem = `Sábado`
        break
}

switch (dateMonth) { /* a variável retorna um número correspondente ao mês, sendo Janeiro o número 0 e Dezembro o número 11, transformamos esse valor em uma string dizendo qual seria o mês atual.*/
    case 0:
        dateMonth = `Janeiro`
        break
    case 1:
        dateMonth = `Fevereiro`
        break
    case 2:
        dateMonth = `Março`
        break
    case 3:
        dateMonth = `Abril`
        break
    case 4:
        dateMonth = `Maio`
        break
    case 5:
        dateMonth = `Junho`
        break
    case 6:
        dateMonth = `Julho`
        break
     case 7:
        dateMonth = `Agosto`
        break
    case 8:
        dateMonth = `Setembro`
        break
    case 9:
        dateMonth = `Outubro`
        break
    case 10:
        dateMonth = `Novembro`
        break
    case 11:
        dateMonth = `Dezembro`
        break    
}
document.getElementById('day').innerHTML= `${dateSem}, ${dateDay} de ${dateMonth} de ${dateYear}`
document.getElementById('hours').innerHTML += `${zeroAEsquerda(dateHours)}:${zeroAEsquerda(dateMinutes)}`
