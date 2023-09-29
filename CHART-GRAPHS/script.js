const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "World Wine Production 2018"
        }
    }
});

function called() { 
    var userAgent = navigator.userAgent;
    var browserName = "Unknown";

    if (userAgent.indexOf("Firefox") !== -1) {
        browserName = "Mozilla Firefox";
    } else if (userAgent.indexOf("Chrome") !== -1) {
        browserName = "Google Chrome";
    } else if (userAgent.indexOf("Safari") !== -1) {
        browserName = "Apple Safari";
    } else if (userAgent.indexOf("Edge") !== -1) {
        browserName = "Microsoft Edge";
    } else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
        browserName = "Opera";
    } else if (userAgent.indexOf("Trident") !== -1) {
        browserName = "Microsoft Internet Explorer";
    }

    console.log("Browser Name:", browserName);
}