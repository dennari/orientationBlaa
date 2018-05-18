function calculate() {
  // Calculate length of the work as minutes.
  const date = document.getElementById('date').value;
  const startTime = timeTextToMinutes(document.getElementById('startTime').value);
  const endTime = timeTextToMinutes(document.getElementById('endTime').value);
  const minutes = endTime - startTime;
  // If it is not Sunday
  // Call isSunday() function from 07.10_functions.js file
  //Calculate and show price of the repair work during the workdays
  //otherwise
  //Calculate and showprice of the repair work on Sundays
  const pricePerHour = isSunday(date) ? 72 : 48;
  const price = (pricePerHour * (minutes / 60)).toFixed(2);
  const typeOfDay = isSunday(date) ? 'Sundays' : 'workdays';
  document.getElementById('answer').innerHTML = `
    Length of the work is ${minutes} minutes.<br/>
    The hourly price during ${typeOfDay} is ${pricePerHour}.<br/>
    The price of this repair work is ${price}.
  `;

}

function modifyTitle() {
  const titleInput = document.getElementById('title').value;
  // Read value of title from the input field
  // Call allCapsTitleTrimmed() function from 07.10_functions.js file
  document.getElementById('title').value = allCapsTitleTrimmed(titleInput);
}

function allCapsTitleTrimmed(originalText) {
  return originalText.toUpperCase().trim();
}

function timeTextToMinutes(timeText) {
  if (typeof timeText !== 'string') {
    return undefined;
  }
  const parts = timeText.match(/^(\d\d):(\d\d)$/);
  if (!parts || parts.length !== 3) {
    return undefined;
  }
  console.log(parts);
  const hours = Number(parts[1]);
  const minutes = Number(parts[2]);
  return hours * 60 + minutes;
}

function isSunday(dateText) {
  console.log(dateText);
  if (typeof dateText !== 'string') {
    return undefined;
  }
  const parts = dateText.match(/^(\d\d).(\d\d).(\d{4})$/);
  console.log(parts);
  if (!parts || parts.length !== 4) {
    return undefined;
  }
  const date = new Date(
    Number(parts[3]),
    Number(parts[2]) - 1,
    Number(parts[1]),
  );
  console.log(date);
  return date.getDay() === 0;
}
