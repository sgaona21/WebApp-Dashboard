console.log("linked")

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