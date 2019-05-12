//Objective: find a year where the Chiefs won a SuperBowl and set it to a var superbowlWin

// take the array of objects in record and set it to a var result
// .find the array where the record.result is a W (for 'win')

let superbowlWin = record => {
  let result = record.find( record => record.result === "W" )
  //using a ternary operator, ask if there is a result? If so, return the result.year
  // otherwise return 'undefined'
  return !!result ? result.year : undefined
}
