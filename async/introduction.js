//An async functions depends directly of a promise. Without a promise we don't have any
//way to do async operations.
function sendDataToApi(forceError = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        name: "Lucas",
        occupation: "Software dev",
        showAbilities: function () {
          console.log("I'm awesome, ur motherf*cker")
        }
      }
      
      if(!forceError)  resolve(data);
      else reject("A awful message")
    }, 6 * 1000)
  })
}

async function consumeData() {
  try {
    const result = await sendDataToApi(true);
    console.log("After consume: ");
    console.log(result);
  } catch (error) {
    console.log("There is an error: " + error)
  }
}

consumeData();