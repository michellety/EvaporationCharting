
let myChart = document.getElementById("myChart").getContext("2d");
let massPopChart = new Chart(myChart, {
    type: "bar",
    data: {
        labels: ["9/3", "9/4", "9/5", "9/6", "9/7", "9/8", "9/9", "9/10", "9/11", "9/12", "9/14", "9/15", "9/20", "9/21", "9/23", "9/24", "9/25", "10/3", "10/6", "10/15", "10/24", "11/28", "2/29"],

        datasets: [{
            label: "Weight (grams)",
            data: [
                2518, 2392, 2278, 2231, 2213, 2188, 2165, 2147, 2125, 2106, 2065, 2059, 2016, 2003, 1983, 1963, 1960, 1929, 1910, 1880, 1842, 1806, 1786
            ],
            backgroundColor: "rgb(70, 139, 228)",
            hoverBackgroundColor: "navy"
        }]
    },
    options: {
        title: {
            display: true,
            text: "Green to kindling: Weight Loss Over Time Due to Water Depreciation",
            fontSize: 25,
            fontColor: "#FFFFFF"
        },
        legend: {
            labels: {
                fontColor: "white"
            },
            display: true,
            position: "right",
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white"
                },
                gridLines: {
                    color: "white"
                },
                scaleLabel: {
                    display: true,
                    labelString: "Weight (g)",
                    fontColor: "white"
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white"
                },
                gridLines: {
                    display: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: "Date",
                    fontColor: "white"
                }
            }]
        }
    }
})
