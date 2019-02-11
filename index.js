var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name)
{
  var kit = kittens.concat(name)
  return kit
}
//var kit = destructivelyRemoveFirstKitten()
function prependKitten(name)
{
  
  kittens.unshift(name)
  //destructivelyRemoveFirstKitten()
  var hit = kittens
  return hit
}
function removeLastKitten()
{
  kittens.pop()
  var kit = kittens
  return kit
}