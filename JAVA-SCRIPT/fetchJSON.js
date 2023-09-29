var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open('GET',"./data.json", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status == "200") {
    var data = JSON.parse(xhr.responseText);
    console.log(data); // Use your JSON data here
  }
};
xhr.send(null);