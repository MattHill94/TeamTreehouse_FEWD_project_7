//traffic data:
let hourlyLabels =['0:00','1:00','2:00','3:00','4:00','5:00','6:00',
'7:00','8:00','9:00','10:00'];
let hourlyData = [20, 500, 2000, 1740, 1500, 600, 700, 400, 100, 2000, 100];

let dailyLabels =['16','17','18`','19','20','21','22',
'23','24','25','26'];
let dailyData = [2025, 570, 1800, 1900, 1650, 800, 1000, 1250, 1000, 1500, 999];

let weeklyLabels =['16-22','23-29','30-5','6-12','13-19','20-26','27-3',
'4-10','11-17','18-24','25-31'];
let weeklyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];

let monthlyLabels =['Feb','Mar','Apr','May','Jun','Jul','Aug',
'Sep','Oct','Nov','Dec'];
let monthlyData = [1000, 1550, 1200, 2100, 1560, 1850, 950, 1950, 1600, 1500, 2500];


//traffic chart
let trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: weeklyLabels,
    datasets: [{
      data: weeklyData,
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
      borderColor: 'rgba(112, 127, 194, .3)',
      pointStyle: 'circle',
      tension: .5,
      fill: {
          target: 'origin',
          below: 'rgba(112, 127, 194, .3)'
      },
      clip: 0
    }]
  };

 let trafficOptions ={
     aspectRatio: 1.9,
     scales: {
         y: {beginAtZero: true
     }
    },
    plugins:
    {
        legend:{
            display: false
        }
    }
}
   //make first chart
    let trafficChart = new Chart(trafficCanvas,{
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });

  function updateTrafficData(datatype){
      if(datatype === "Hourly"){
         trafficData.datasets[0].data = hourlyData;
         trafficData.labels = hourlyLabels;
      }else if(datatype === "Daily"){
        trafficData.datasets[0].data = dailyData;
        trafficData.labels = dailyLabels;
      }else if(datatype ==="Weekly"){
        trafficData.datasets[0].data = weeklyData;
        trafficData.labels = weeklyLabels;
      }else if(datatype === "Monthly"){
        trafficData.datasets[0].data = monthlyData;
        trafficData.labels = monthlyLabels;
      }
      updateChart(trafficChart, trafficData)
 }


  function updateChart(chart, data){
    chart.data.datasets[0].data = data.datasets[0].data;
    chart.data.labels = data.labels;
    chart.update({
        duration: 1000,
        easing: 'linear',
    });
  }

 //daily chart
  const dailyCanvas = document.getElementById('daily-chart');
  const dailyTrafficData= {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          label: '# of Hits',
          data: [75, 115, 175, 125, 225, 200, 100],
          backgroundColor: '#7477BF',
          borderWidth: 1
      }]
  };

  const dailyOptions = {

      scales:{
          y:{
              beginAtZero: true
          }
      },
      plugins:{
          legend:{
              display: false
          }
      }
  };

  let dailyChart = new Chart(dailyCanvas, {
      type: 'bar',
      data: dailyTrafficData,
      options: dailyOptions
  });

  //mobile chart
  const mobileCanvas = document.getElementById('mobile-chart');
  const mobileData ={
      labels: ["Desktop", "Tablet", "Phones"],
      datasets: [{
          label: '# of Users',
          data: [2000, 550, 500],
          borderWidth: 0,
          backgroundColor:['#7477BF', '#78CF82', '#51b6c8']
      }]
  };
  const mobileOptions = {
      aspectRatio: 1.9,
      plugins:{
          legend: {
              position: 'right',
              labels:{
                  boxWidth: 20,
                  fontStyle: 'bold'
              }
          }
      }
  };

  let mobileChart = new Chart(mobileCanvas, {
      type: 'doughnut',
      data: mobileData,
      options: mobileOptions
  });
