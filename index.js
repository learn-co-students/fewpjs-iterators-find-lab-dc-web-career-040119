const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let team = record.find(record => record.result==="W")
  if (team){
    return team.year
  }
  else{
    return undefined
  }
}
