// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }

// creates function "superbowlWin" that receives array [record]
superbowlWin = (record) => {
  // sets var "result" to the result of the first record that is === "W"
  let result = record.find( record => record.result === "W" )
  // returns year when win occurred. If no win occurred, return undefined
  return !!result ? result.year : undefined
}
