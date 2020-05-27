// window.onPageLoad(){
//
// }




var ctx = document.getElementById('TrafficChart');
var TrafficChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],
        datasets: [{
            label: 'Traffic',
            data: [150, 750, 900, 1780, 2000, 1740, 1900, 1200, 1800, 2350, 2000, 2350],
            backgroundColor: [
                'rgba(116, 119, 191, 0.2)'
            ],
            borderColor: [
                'rgba(116, 119, 191, 0.3)'
            ],
            lineTension: 0,
            pointBorderColor: 'rgba(116, 119, 191, .8)',
            pointBorderWidth:3,
            pointBackgroundColor: 'rgba(255,255,255, 1)',
            pointRadius: 6,
            borderWidth: 2
        }]
    },

    options: {
      pointStyle: 'circle',

        scales: {
          xAxes: [{
          gridLines: {
              offsetGridLines: true
          }
      }],
          yAxes: [{
            gridLines: {
                offsetGridLines: true
              },
                ticks: {
                  beginAtZero: false


                }
            }]
        }
    }
});
var ctx = document.getElementById('DailyChart');
var DailyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 125, 175, 150, 190, 220, 188],
            backgroundColor:'rgba(116, 119, 191, .8)'
            ,
            borderColor:'rgba(116, 119, 191, 1)',
            borderWidth: 2,
            barPercentage: .5


        }]
    },

    options: {
       layout: {
         padding: 100
       } ,
        scales: {
          xAxes: [{
          gridLines: {
              offsetGridLines: true
          }
      }],
            yAxes: [{
              gridLines: {
                  offsetGridLines: true
                },
                ticks: {
                    beginAtZero: true

                }
            }]
        }
    }
});

var ctx = document.getElementById('UsersChart');
var UsersChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktops'],
        datasets: [{
            data: [188,75, 275],
            backgroundColor:[
              'rgba(102, 153, 153, 1)',
              'rgba(0, 204, 102, .8)',
              'rgba(111, 119, 191, .8)'

            ],
            borderColor:'rgba(116, 119, 191, 1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(0, 85, 128, 1)'
        }]
    },

    options: {
      legend: {
          position:'right'
      },
      layout: {
        padding: 100
      } ,
      cutoutPercentage: 60

        }
});
