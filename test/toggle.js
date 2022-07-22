console.log("linked")

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
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
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