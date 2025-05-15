import { verifyIsAvailable, showMessage } from "../simulating.js"

function wait(timing) {
  return new Promise(resolve => setTimeout(resolve, timing))
}

async function runningTests() {
  console.log("Iniciando testes...")
  
  console.log("Verifica se \"coke\" está disponivel...")
  verifyIsAvailable("coke", showMessage)
  await wait(10 * 1000)
  
  console.log("Verifica se \"coca\" está disponivel...")
  verifyIsAvailable("coca", showMessage)
    await wait(10 * 1000)

  
  console.log("Verifica se \"sushi\" está disponivel")
  verifyIsAvailable("sushi", showMessage)
    await wait(10 * 1000)

  
  console.log("Verifica se \"pizza\" está disponivel")
  verifyIsAvailable("pizza", showMessage)
    await wait(10 * 1000)

  
  console.log("Verifica se \"piza\" está disponivel")
  verifyIsAvailable("piza", showMessage)
  await wait(10 * 1000)

  
  console.log("Finalizando...")
}

runningTests()