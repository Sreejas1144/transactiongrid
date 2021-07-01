import moment from "moment";
function calculatePoints(amount) {
  let points = 0;
  if (amount >= 50) {
    points = amount - 50;
  }
  if (amount >= 100) {
    points = 50 + (amount - 100) * 2;
  }
  return points;
}

function processData(rawData) {
  let totalPoints = 0;
  const rows = rawData.map((data) => {
    const points = calculatePoints(data.amount);
    totalPoints += points;
    return {
      date: moment(data.time).format("HH:mm:ss Do MMM YYYY"),
      points,
      ...data
    };
  });
  return {
    rows,
    totalPoints
  };
}

module.exports = { processData };
