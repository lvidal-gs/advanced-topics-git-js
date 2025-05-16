//Just some example
function prototypeEx() {
  let set = new Set()
  let object = set
  do {
    object = Object.getPrototypeOf(set) //An infinity loop
    console.log(object);
  } while (object)
}

prototypeEx()