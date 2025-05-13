//Em sua declaração, saudacao receberá `nome` e `callback` como parâmetros.
//Nome será utilizada como parâmetro de chamada para callback
//1. Declaração da função que aceitará um callback
function saudacao(nome, callback) {
  //3. Evocamos a função que foi passada e passamos `nome` como parâmetro
  console.log("Setamos um timeout!");

  setTimeout(() => {
    //Evoca o callback que ESTÁ A DEFINIR e passa um parâmetro
    //callback(string):void
    callback(`Olá, ${nome}!`, "Teste")
    //Aqui só chamamos e passamos os parametros
  }, 3 * 1000)

  console.log("Fora do callback")
}

console.log("Evocando saudacao")

//2. Evocação de saudação que denota um callback
saudacao("Lucas", 
  function (stringPassada) {
    //Essa função anônima que está sendo passada vai receber o(s) parâmetro(s) passado lá em cima ^^^
    //E vai ser executada conforme execução de código lá na declaração
    //Aqui a gente define o que vai acontecer e usa (ou não) oq vai ser passado 
    console.log(stringPassada)
    console.log("Estamos dentro do callback")
  }
)
