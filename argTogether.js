function addTogether() {
  //create a placeholder x and retrieve arguments from given function
  var x = Array.from(arguments);
  //retrieve arguments that match criteria (using some function) inside arrow function and return undefined if argument is not a number
  return x.some(y => typeof y !=='number') ?
  undefined:
  //check arguments and if there is  more than 1 argument
  x.length >1 ?
    //sum up all arguments using reduce function and arrow function
    x.reduce((val, y) => val +=y, 0): 
  //if given parameters are numbers then sum all arguments 
  n=> typeof n ==='number' ?
  n + x[0]:
  //return undefined if parameter is not a number
  undefined;
}
addTogether(2,3);
