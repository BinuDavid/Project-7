// Traffic Chart
const ctx = $('#traffic');

const traffic = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            backgroundColor: "rgba(115,119,191,0.3)",
            pointBackgroundColor: "white",
            pointBorderColor: "rgb(115,119,191)",
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1000, 1750, 2250, 1750, 2250  ],
            borderWidth: 1,
            lineTension: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
            display: true,
            text: "TRAFFIC"
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 500,
                    stepSize: 500 
                }
            }]
        }
    } 
});


// Daily Traffic Chart
const daily_traffic = $("#daily_traffic");

const myBarChart = new Chart(daily_traffic, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: '#7377BF'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
            display: true,
            text: "DAILY TRAFFIC"
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 250,
                    min: 50,
                    stepSize: 50,
                    beginAtZero: false
                },
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});


// Mobile Users Chart

const mobile_users = $("#doughnut");

const doughnut = new Chart(mobile_users, {
    type: 'doughnut',
    data: {
        labels: ['Tablets', 'Phones', 'Desktop'],
        datasets: [{
            data: [20, 15, 75],
            backgroundColor: ['#81C98F','#74B1BF','#7377BF'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
            display: true,
            text: "MOBILE USERS"
        },
        legend: {
            display: true,
            position: 'right'
        },
        rotation: -1.9,
        scales: {
            yAxes: [{
                display: false
            }]
        }
    }
});