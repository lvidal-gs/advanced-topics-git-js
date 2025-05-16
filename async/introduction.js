function sendDataToApi() {
  const simulatingAPICall = setTimeout(() => {
    const data = {
      name: "Lucas",
      occupation: "Software dev",
      showAbilities: function () {
        console.log("I'm awesome, ur motherf*cker")
      }
    }

    return data;
  }, 6 * 1000)
}

async function consumeData() {
  try {
    const result = await sendDataToApi();
    console.log("After consume: ");
    console.log(result);
  } catch (error) {
    console.log("There is an error")
  }
}

consumeData();