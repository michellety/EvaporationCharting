
let myChart = document.getElementById("myChart").getContext("2d");
let massPopChart = new Chart(myChart, {
    type: "line",
    data: {
        labels: ["September 3", "September 4", "September 5", "September 6", "September 7", "September 8", "September 9", "September 10", "September 11", "September 12", "September 14", "September 15", "September 20", "September 21", "September 23", "September 24", "September 25", "October 3", "October 6", "October 15", "October 24", "November 28", "February 29"],
        datasets: [{
            label: "Weight",
            data: [
                2518, 2392, 2278, 2231, 2213, 2188, 2165, 2147, 2125, 2106, 2065, 2059, 2016, 2003, 1983, 1963, 1960, 1929, 1910, 1880, 1842, 1806, 1786

            ],
            backgroundColor: "lightblue",
            borderColor: "white"
        }]
    },
    options: {
        title: {
            display: true,
            text: "Green to kindling: Water Depreciation Over Time",
            fontSize: 25,
            fontColor: "#FFFFFF"
        },
        legend: {
            display: true,
            position: "right"
        },
    }
})
