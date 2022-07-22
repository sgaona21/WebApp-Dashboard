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

// PIE GRAPH



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
