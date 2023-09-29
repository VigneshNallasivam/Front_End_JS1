const dataArray = [{
    "id": 1,
    "name": "Vignesh",
    "place": "Erode"
},
{
    "id": 2,
    "name": "Raghav",
    "place": "Tirupur"
},
{
    "id": 3,
    "name": "Sathish",
    "place": "Salem"
},
{
    "id": 4,
    "name": "Vinith",
    "place": "Namakkal"
},
{
    "id": 5,
    "name": "Vijay",
    "place": "Coimbatore"
}]

function contentValue() {
    document.querySelector("thead").innerHTML = `<tr>
                                                   <th>Id</th>
                                                   <th>Name</th>
                                                   <th>Place</th>
                                                 </tr>`

    for (let i = 0; i < dataArray.length; i++) 
    {
        document.querySelector("tbody").innerHTML += `<tr>
                                                        <td>${dataArray[i].id}</td>
                                                        <td>${dataArray[i].name}</td>
                                                        <td>${dataArray[i].place}</td>
                                                      </tr>`
    }
}
contentValue();

function insertRows(){
let idValue = Number(document.getElementById("id_input").value);
let nameValue = document.getElementById("name_input").value;
let placeValue = document.getElementById("place_input").value;

let table = document.querySelector("table");
let tbody = table.querySelector("tbody");

let row = tbody.insertRow();

let cell1 = row.insertCell(0);
cell1.innerHTML = idValue;

let cell2 = row.insertCell(1);
cell2.innerHTML = nameValue;

let cell3 = row.insertCell(2);
cell3.innerHTML = placeValue;
}

function deleteRows(){
        let index = document.getElementById("delete_input").value;
        let table = document.querySelector("table");
        let tbody = table.querySelector("tbody");
        let rows = tbody.querySelectorAll("tr");
    
        for (let i = 0; i < rows.length; i++) {
            let rowData = rows[i].querySelectorAll("td");
            if (rowData.length > 0 && rowData[0].textContent === index) {
                tbody.deleteRow(i);
                break; 
            }
        }
    
}