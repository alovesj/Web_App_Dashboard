// window.onPageLoad(){
//
// }

//------------------------------------------------------------
//ChartJS
//------------------------------------------------------------


var trafficCanvas = document.getElementById('TrafficChart');


    let trafficData = {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],
        datasets: [{
            label: '',
            data: [ 750, 900, 1780, 2000, 1740, 1900, 1200, 1800, 2350, 2000, 2350],
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
    };

    let trafficOptions = {
      layout: {
        padding: 30
      },
      pointStyle: 'circle',

        scales: {
          xAxes: [{
          gridLines: {
              offsetGridLines: true
          },
      }],
          yAxes: [{
            gridLines: {
                offsetGridLines: true
              },
                ticks: {
                  beginAtZero: false
                }
            }]
        },
        legend : {
          display: false
        }

};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });



const dailyCanvas = document.getElementById('DailyChart');


const dailyData = {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 125, 175, 150, 190, 220, 188],
            backgroundColor:'rgba(116, 119, 191, .8)'
            ,
            borderColor:'rgba(116, 119, 191, 1)',
            borderWidth: 2,
            barPercentage: .5
        }]
    };

  const dailyOptions = {
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
        },
        legend : {
          display: false
        }
};

var dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
  });


var mobileCanvas = document.getElementById('MobileChart');



    const mobileData = {
        labels: ['Phones', 'Tablets', 'Desktops'],
        datasets: [{
            data: [188,75, 275],
            backgroundColor:[
              'rgba(102, 153, 153, 1)',
              'rgba(0, 204, 102, .8)',
              'rgba(111, 119, 191, .8)'

            ],
            borderColor:'rgba(116, 119, 191, 1)',
            borderWidth: 0,
            hoverBackgroundColor: 'rgba(0, 85, 128, 1)'
        }]
    };

    const mobileOptions = {
      legend: {
          position:'right',
          labels: {
            boxWidth: 20,
            fontStyle: 'bold'
          }
      },
      layout: {
        padding: 100
      } ,
      cutoutPercentage: 60

    };
    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
      });
//------------------------------------------------------------
// Interactive Line Chart
//------------------------------------------------------------

const hourly = document.getElementById('hour');
  hourly.addEventListener("click", () => {
     let trafficData = {
        labels: ['10am', '11am', '12pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
        datasets: [{
            label: '',
            data: [ 10, 20, 5, 42, 30, 7, 40, 50,25, 60,],
                backgroundColor: [
                    'rgba(116, 119, 191, 0.2)'
                ],
                borderColor: [
                    'rgba(116, 119, 191, 0.3)'
                ],
                lineTension: 0,
                pointBorderColor: 'rgba(116, 119, 191, 0.8)',
                pointBorderWidth:3,
                pointBackgroundColor: 'rgba(255,255,255, 1)',
                pointRadius: 6,
                borderWidth: 2
            }]
        };

        let trafficOptions = {
          layout: {
            padding: 30
          },
          pointStyle: 'circle',

            scales: {
              xAxes: [{
              gridLines: {
                  offsetGridLines: true
              },
          }],
              yAxes: [{
                gridLines: {
                    offsetGridLines: true
                  },
                    ticks: {
                      beginAtZero: false
                    }
                }]
            },
            legend : {
              display: false
            }

    };
      let trafficChart = new Chart(trafficCanvas, {
          type: 'line',
          data: trafficData,
          options: trafficOptions
        });
});

const daily = document.getElementById('day');
  daily.addEventListener("click", () => {
     let trafficData = {
        labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
        datasets: [{
            label: '',
            data: [ 40, 10, 67, 89, 130, 33, 99, 72, 25, 60,],
                backgroundColor: [
                    'rgba(116, 119, 191, 0.2)'
                ],
                borderColor: [
                    'rgba(116, 119, 191, 0.3)'
                ],
                lineTension: 0,
                pointBorderColor: 'rgba(116, 119, 191, 0.8)',
                pointBorderWidth:3,
                pointBackgroundColor: 'rgba(255,255,255, 1)',
                pointRadius: 6,
                borderWidth: 2
            }]
        };

        let trafficOptions = {
          layout: {
            padding: 30
          },
          pointStyle: 'circle',

            scales: {
              xAxes: [{
              gridLines: {
                  offsetGridLines: true
              },
          }],
              yAxes: [{
                gridLines: {
                    offsetGridLines: true
                  },
                    ticks: {
                      beginAtZero: false
                    }
                }]
            },
            legend : {
              display: false
            }

    };
      let trafficChart = new Chart(trafficCanvas, {
          type: 'line',
          data: trafficData,
          options: trafficOptions
        });
});

const weekly = document.getElementById('week');
  weekly.addEventListener("click", () => {
    let trafficData = {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],
        datasets: [{
            label: '',
            data: [ 750, 900, 1780, 2000, 1740, 1900, 1200, 1800, 2350, 2000, 2350],
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
    };

    let trafficOptions = {
      layout: {
        padding: 30
      },
      pointStyle: 'circle',

        scales: {
          xAxes: [{
          gridLines: {
              offsetGridLines: true
          },
      }],
          yAxes: [{
            gridLines: {
                offsetGridLines: true
              },
                ticks: {
                  beginAtZero: false
                }
            }]
        },
        legend : {
          display: false
        }

};
      let trafficChart = new Chart(trafficCanvas, {
          type: 'line',
          data: trafficData,
          options: trafficOptions
        });
});

const monthly = document.getElementById('month');
  monthly.addEventListener("click", () => {
    let trafficData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '',
            data: [ 1750, 1900, 2780, 4000, 5740, 8000, 9200, 7800, 4550, 8050, 7700, 10350],
            backgroundColor: [
                'rgba(116, 119, 191, 0.2)'
            ],
            borderColor: [
                'rgba(116, 119, 191, 0.3)'
            ],
            lineTension: 0,
            pointBorderColor: 'rgba(116, 119, 191, 0.8)',
            pointBorderWidth:3,
            pointBackgroundColor: 'rgba(255,255,255, 1)',
            pointRadius: 6,
            borderWidth: 2
        }]
    };

    let trafficOptions = {
      layout: {
        padding: 30
      },
      pointStyle: 'circle',

        scales: {
          xAxes: [{
          gridLines: {
              offsetGridLines: true
          },
      }],
          yAxes: [{
            gridLines: {
                offsetGridLines: true
              },
                ticks: {
                  beginAtZero: false
                }
            }]
        },
        legend : {
          display: false
        }

};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });
});

//------------------------------------------------------------
//Bell Message section
//------------------------------------------------------------


      const bell = document.querySelector(".bell");
      const dot = document.querySelector(".dot");
      const dropDiv = document.createElement('div');
      const dropClose = document.createElement('a');
      const li  = document.createElement('li');


        bell.addEventListener("click", () => {

              dropDiv.classList.add('dropDiv');
              dropDiv.innerHTML= "<ul><li>your Message here<li></ul>"
              dropClose.innerHTML = "<a href='#''>X</a>"
              dropClose.classList.add('x-closure');
              li.innerHTML='Someone Messaged You';


              bell.appendChild(dropDiv).appendChild(dropClose);
              dropDiv.appendChild(li).appenChild(dropClose);

          });

        dropClose.addEventListener("click", () => {
              dropDiv.style.display= "none";


        });




//------------------------------------------------------------
//Alert section
//------------------------------------------------------------



      const alert = document.getElementById("alert");
      const closeAlert = document.querySelector(".x-closure");


      closeAlert.addEventListener("click", () => {
        alert.style.display= "none";
      });

//------------------------------------------------------------
//Message and Search User Section
//------------------------------------------------------------

      const user = document.getElementById("searchUser");
      const message = document.getElementById("messageUser");
      const send = document.getElementById("send");

      send.addEventListener("click", () => {
        if (message.value== "") {
          alert("No message was written");

        } else if (user.value==""){
          alert("Choose a user to receive your message.");
        }else {
          alert("Your message was sent!");
          message.value="";
        }
      });
