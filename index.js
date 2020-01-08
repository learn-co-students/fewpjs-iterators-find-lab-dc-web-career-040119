const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
	let winner = array.find(i => i.result === "W")
	
	return winner === undefined ? undefined : winner.year
}
