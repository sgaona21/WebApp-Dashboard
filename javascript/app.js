console.log("app.js linked");

// ALERT BANNER 
const closeButton = document.getElementById('x-button');
const alertBanner = document.getElementById('alert')
const greenNotification = document.getElementById("notification");

closeButton.addEventListener('click', () => {
    alertBanner.style.display = "none";
    greenNotification.style.display = "none";
})






// GRAPHS

const hourlyChart = document.getElementById("myChart");
const dailyChart = document.getElementById("myChartDaily");
const weeklyChart = document.getElementById("myChartWeekly");
const monthlyChart = document.getElementById("myChartMonthly");

// LINE GRAPH HOURLY
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

  //LINE GRAPH DAILY
  const labelsDaily = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const dataDaily = {
    labels: labelsDaily,
    datasets: [{
      label: 'Daily Traffic',
      backgroundColor: 'rgb(39, 23, 177, 0.486)',
      borderColor: 'rgb(39, 23, 177, 0.486)',
      data: [10000, 10500, 11200, 12654, 9545, 1200, 900],
    }]
  };

  const configDaily = {
    type: 'line',
    data: dataDaily,
    options: {}
  };

  const myChartDaily = new Chart(
    document.getElementById('myChartDaily'),
    configDaily
  );

    //LINE GRAPH WEEKLY
    const labelsWeekly = [
      '10/3/2022',
      '10/10/2022',
      '10/17/2022',
      '10/24/2022',
      '10/31/2022',
    ];
  
    const dataWeekly = {
      labels: labelsWeekly,
      datasets: [{
        label: 'Weekly Traffic',
        backgroundColor: 'rgb(39, 23, 177, 0.486)',
        borderColor: 'rgb(39, 23, 177, 0.486)',
        data: [45000, 43500, 50200, 55654, 59545],
      }]
    };
  
    const configWeekly = {
      type: 'line',
      data: dataWeekly,
      options: {}
    };
  
    const myChartWeekly = new Chart(
      document.getElementById('myChartWeekly'),
      configWeekly
    );

    //LINE GRAPH MONTHLY
  const labelsMonthly = [
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dataMonthly = {
    labels: labelsMonthly,
    datasets: [{
      label: 'Monthly Traffic',
      backgroundColor: 'rgb(39, 23, 177, 0.486)',
      borderColor: 'rgb(39, 23, 177, 0.486)',
      data: [125000, 225000, 175000, 325000, 144000, 275000],
    }]
  };

  const configMonthly = {
    type: 'line',
    data: dataMonthly,
    options: {}
  };

  const myChartMonthly = new Chart(
    document.getElementById('myChartMonthly'),
    configMonthly
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
    dailyChart.style.display = "none";
    hourlyChart.style.display = "block";
    weeklyChart.style.display = "none";
    monthlyChart.style.display = "none";
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
    hourlyChart.style.display = "none";
    dailyChart.style.display = "block";
    weeklyChart.style.display = "none";
    monthlyChart.style.display = "none";
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
    dailyChart.style.display = "none";
    hourlyChart.style.display = "none";
    weeklyChart.style.display = "block";
    monthlyChart.style.display = "none";
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
    monthlyChart.style.display = "block";
    hourlyChart.style.display = "none";
    dailyChart.style.display = "none";
    weeklyChart.style.display = "none";
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


  if (hourlyBreakdown.style.backgroundColor = "lightgreen") {
    dailyChart.style.display = "none";
    weeklyChart.style.display = "none";
    monthlyChart.style.display = "none";
  }

