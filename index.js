const record = [
  { year: '2018', result: 'L' },
  { year: '2017', result: 'W' },
  { year: '2016', result: 'N/A' },
];

function superbowlWin(record) {
  const match = record.find(record => record.result === 'W');
  return !!match ? match.year : undefined;
};

console.log(superbowlWin(record));
