//GETTING TEXT VALUE USING AJAX
function valueText() {
    let xhf = new XMLHttpRequest();
    xhf.open("GET", "info.txt", true);
    xhf.onreadystatechange = function () {
        if (xhf.readyState === 4 && xhf.status === 200) {
            document.getElementById("data").innerHTML = xhf.responseText;
        }
    };
    xhf.send();
}


//GETTING JSON VALUE USING AJAX
function valueJSON() {
    let xhf = new XMLHttpRequest();
    xhf.open("GET", "user.json", true);
    xhf.onreadystatechange = function () {
        if (xhf.readyState === 4 && xhf.status === 200) {
            document.getElementById("json_data").innerHTML = JSON.parse(xhf.responseText);
            document.getElementById("json_data").innerHTML = xhf.responseText;
            document.getElementById("data").innerHTML = JSON.parse(xhf.responseText).name;
        }
    };
    xhf.send();
}