function verifyIsAvailable(product, callback) {
  const menu = ["hamburger", "sushi", "pizza", "coke", "orange juice"]

  setTimeout(function() {
    const isAvailable = menu.includes(product)
    callback(product, isAvailable)
  }, 3 * 1000);
}

function showMessage(nameProduct, isAvailable){
  if(isAvailable) {
    console.log("Estamos preparando seu pedido! ✅")
    console.log(`Aproveite seu ${nameProduct}`)
  } else {
    console.log(`Oh, Oh! Não temos ${nameProduct} em nosso cardápio. ❌`)
    setTimeout(() => {
      console.log("Solicitação de inclusão enviada! :D")
    }, 3 * 1000)
  }
}

verifyIsAvailable("hot roll", showMessage)