console.log("app.js linked");

// ALERT BANNER 
const closeButton = document.getElementById('x-button');
const alertBanner = document.getElementById('alert')

closeButton.addEventListener('click', () => {
    alertBanner.style.display = "none";
})






// GRAPHS
// LINE GRAPH
const labels = [
    '5:00am',
    '9:00am',
    '1:00pm',
    '5:00pm',
    '9:00pm',
    '1:00am',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Hourly Traffic',
      backgroundColor: 'rgb(39, 23, 177, 0.486)',
      borderColor: 'rgb(39, 23, 177, 0.486)',
      data: [445, 854, 4522, 12654, 9545, 1200, 665],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

// BAR GRAPH
const labelsBar = [
    'Mon',
    'Tues',
    'Wed',
    'Thur',
    'Fri',
    'Sat',
  ];

  const dataBar = {
    labels: labelsBar,
    datasets: [{
      label: 'Daily Traffic',
      backgroundColor: 'rgb(39, 23, 177, 0.486)',
      borderColor: 'rgb(39, 23, 177, 0.486)',
      data: [5400, 6500, 3500, 8500, 4500, 3600,],
    }]
  };

  const configBar = {
    type: 'bar',
    data: dataBar,
    options: {}
  };

  const myBarChart = new Chart(
    document.getElementById('myBarChart'),
    configBar
  );

// DONUT GRAPH
const labelsDonut = [
    'Desktop',
    'Tablet',
    'Phones',
  ];

  const dataDonut = {
    labels: labelsDonut,
    datasets: [{
      label: 'Mobile Users',
      backgroundColor: [
        'rgb(39, 23, 177, 0.486)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      borderColor: 'rgb(39, 23, 177, 0.486)',
      data: [60, 30, 10],
    }]
  };

  const configDonut = {
    type: 'doughnut',
    data: dataDonut,
    options: {}
  };

  const myDonutChart = new Chart(
    document.getElementById('myDonutChart'),
    configDonut
  );


// Traffic hourly daily weekly monhtly breakdowns
const hourlyBreakdown = document.getElementById('hourly-breakdown');
hourlyBreakdown.addEventListener('click', () => {
    hourlyBreakdown.style.backgroundColor = "lightgreen";
    hourlyBreakdown.style.borderRadius = "20px";
    hourlyBreakdown.style.color = "white";
    dailyBreakdown.style.backgroundColor = 'white';
    dailyBreakdown.style.color = "black";
    weeklyBreakdown.style.backgroundColor = 'white';
    weeklyBreakdown.style.color = "black";
    monthlyBreakdown.style.backgroundColor = "white";
    monthlyBreakdown.style.color = "black";
})

const dailyBreakdown = document.getElementById("daily-breakdown"); 
dailyBreakdown.addEventListener('click', () => {
    dailyBreakdown.style.backgroundColor = "lightgreen";
    dailyBreakdown.style.borderRadius = "20px";
    dailyBreakdown.style.color = "white";
    hourlyBreakdown.style.backgroundColor = "white";
    hourlyBreakdown.style.color = "black";
    weeklyBreakdown.style.backgroundColor = 'white';
    weeklyBreakdown.style.color = "black";
    monthlyBreakdown.style.backgroundColor = "white";
    monthlyBreakdown.style.color = "black";
})

const weeklyBreakdown = document.getElementById("weekly-breakdown"); 
weeklyBreakdown.addEventListener('click', () => {
    weeklyBreakdown.style.backgroundColor = "lightgreen";
    weeklyBreakdown.style.borderRadius = "20px";
    weeklyBreakdown.style.color = "white";
    hourlyBreakdown.style.backgroundColor = "white";
    hourlyBreakdown.style.color = "black";
    dailyBreakdown.style.backgroundColor = 'white';
    dailyBreakdown.style.color = "black";
    monthlyBreakdown.style.backgroundColor = "white";
    monthlyBreakdown.style.color = "black";
})

const monthlyBreakdown = document.getElementById("monthly-breakdown");
monthlyBreakdown.addEventListener('click', () => {
    monthlyBreakdown.style.backgroundColor = "lightgreen";
    monthlyBreakdown.style.borderRadius = "20px";
    monthlyBreakdown.style.color = "white";
    hourlyBreakdown.style.backgroundColor = "white";
    hourlyBreakdown.style.color = "black";
    dailyBreakdown.style.backgroundColor = 'white';
    dailyBreakdown.style.color = "black";
    weeklyBreakdown.style.backgroundColor = 'white';
    weeklyBreakdown.style.color = "black";
    hourlyBreakdown.style.backgroundColor = "white";
    hourlyBreakdown.style.color = "black";
})


// Send Button
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
  alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
  alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
  alert("Please fill out message field before sending");
  } else {
  alert(`Message successfully sent to: ${user.value}`);
  }
  });