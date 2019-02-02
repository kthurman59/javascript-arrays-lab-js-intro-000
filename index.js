var kittens = ["Milo", "Otis", "Garfield"]
//define your array here

// Add your functions and code here
function appendKittens("Ralph"){
  var newArray = kittens.slice();
  // or ES6 way
  // var newArray = [...kittens];
  newArray.push("Ralph")
  return newArray
}
