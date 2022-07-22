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
const trafficSelector = document.getElementById('hourly-breakdown');
trafficSelector.addEventListener('click', () => {
    trafficSelector.style.backgroundColor = "lightgreen";
    trafficSelector.style.borderRadius = "20px";
})