//Just some example
function prototypeEx() {
  let set = new Set()
  let object = set
  do {
    object = Object.getPrototypeOf(object)
    console.log(object);
  } while (object)
}

prototypeEx()