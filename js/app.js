var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],
        datasets: [{
            label: 'Traffic',
            data: [750, 1250, 900, 1780, 2500, 1740, 1900, 1200, 1800, 2350, 2000, 2350],
            backgroundColor: [
                'rgba(116, 119, 191, 0.2)'
            ],
            borderColor: [
                'rgba(116, 119, 191, 0.3)'
            ],
            borderWidth: 3
        }]
    },

    options: {
      pointStyle: 'circle',
      lineTension: 0,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false

                }
            }]
        }
    }
});
