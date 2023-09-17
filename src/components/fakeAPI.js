const fetchAPI = () => {
  let timesArray = [
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
  ];

  const nums = new Set();
  while (nums.size !== 5) {
    nums.add(Math.floor(Math.random() * 9));
  }
  let randomNumbers = [...nums];
  randomNumbers.sort();
  let availableTimes = [];
  availableTimes.push(timesArray[randomNumbers[0]]);
  availableTimes.push(timesArray[randomNumbers[1]]);
  availableTimes.push(timesArray[randomNumbers[2]]);
  availableTimes.push(timesArray[randomNumbers[3]]);
  availableTimes.push(timesArray[randomNumbers[4]]);
  return availableTimes;
};

export { fetchAPI };
