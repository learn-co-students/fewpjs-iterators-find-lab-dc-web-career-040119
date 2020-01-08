const superbowlWin = (array) => {
  const win = array.find(obj => {return obj.result === "W"});
  return win ? win.year : undefined;
};