const dataArray = [
    { name: "Vignesh", register: "732915106104", english: 40, tamil: 55, maths: 59, science: 85, social: 69, total: "579", average: "72.375", grade: "B", result: "PASS" },
    { name: "Raghav", register: "732915106071", english: 94, tamil: 56, maths: 60, science: 86, social: 70, total: "588", average: "73.5", grade: "B", result: "PASS" },
    { name: "Sathish", register: "732915106106", english: 93, tamil: 57, maths: 70, science: 37, social: 31, total: "510", average: "63.749", grade: "F", result: "FAIL" },
    { name: "Vinith", register: "732915106107", english: 100, tamil: 100, maths: 100, science: 88, social: 72, total: "750", average: "93.75", grade: "E", result: "PASS" },
];


function myCalculation(english, tamil, maths, science, social) {
    const name = document.getElementById("name").value;
    const register = document.getElementById("register").value;

    let total = english + tamil + maths + science + social;
    console.log("Total Mark Is : " + total);

    let average = (total / 800) * 100;
    console.log("Average Mark Is : " + average);

    document.getElementById("total_mark").value = total;
    document.getElementById("avg_mark").value = average;


    if (name === "" && register === "") {
        document.getElementById("grade").value = "ABSENT";
        document.getElementById("grade").style.color = "orange";
        document.getElementById("result").style.color = "orange";
        document.getElementById("total_mark").value = "0000";
        document.getElementById("total_mark").style.color = "orange";
        document.getElementById("avg_mark").value = "NIL";
        document.getElementById("avg_mark").style.color = "orange";
        alert("Please Enter Your Name & Register Number...!!")
        return document.getElementById("result").value = "----";
    }
    else if (english < 35 || tamil < 35 || science < 35 || maths < 35 || social < 35) {
        document.getElementById("grade").value = "F";
        document.getElementById("grade").style.color = "red";
        document.getElementById("result").style.color = "red";
        return document.getElementById("result").value = "FAIL";
    }
    else if (total >= 450) {
        document.getElementById("grade").value = "E";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
        return document.getElementById("result").value = "PASS";
    }
    else if (total >= 400) {
        document.getElementById("grade").value = "A+";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
        return document.getElementById("result").value = "PASS";
    }
    else if (total >= 300) {
        document.getElementById("grade").value = "A";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
        return document.getElementById("result").value = "PASS";
    }
    else if (total >= 200) {
        document.getElementById("grade").value = "B";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
        return document.getElementById("result").value = "PASS";
    }
    else if (total >= 175) {
        document.getElementById("grade").value = "O";
        document.getElementById("grade").style.color = "green";
        document.getElementById("result").style.color = "green";
        document.getElementById("total_mark").style.color = "green";
        document.getElementById("avg_mark").style.color = "green";
        return document.getElementById("result").value = "PASS";
    }
    else if (total < 175) {
        document.getElementById("grade").value = "F";
        document.getElementById("grade").style.color = "red";
        document.getElementById("result").style.color = "red";
        document.getElementById("total_mark").style.color = "red";
        document.getElementById("avg_mark").style.color = "red";
        return document.getElementById("result").value = "FAIL";
    }

    else {
        document.getElementById("grade").value = "F";
        document.getElementById("grade").style.color = "red";
        document.getElementById("result").style.color = "red";
        document.getElementById("total_mark").value = 0;
        document.getElementById("total_mark").style.color = "red";
        document.getElementById("avg_mark").value = 0.00;
        document.getElementById("avg_mark").style.color = "red";
        return document.getElementById("result").value = "FAIL";
    }
}

function selected_standard() {
    let standardValue = document.getElementById('standard');
    let values = standardValue.options[standardValue.selectedIndex].text;
}

function selected_section() {
    let sectionValue = document.getElementById('section');
    let values = sectionValue.options[sectionValue.selectedIndex].text;
}

let rowPosition = -1;

document.querySelector("thead").innerHTML = `<tr>
                                               <th>NAME</th>
                                               <th>REGISTER NUMBER</th>
                                               <th>ENGLISH</th>
                                               <th>TAMIL</th>
                                               <th>MATHS</th>
                                               <th>SCIENCE</th>
                                               <th>SOCIAL</th>
                                               <th>RESULT</th>
                                               <th>ACTIONS</th>
                                            </tr>`;

function generateTable(num) {
    document.querySelector("tbody").innerHTML += ` <tr>
                                                     <td>${dataArray[num].name}</td>
                                                     <td>${dataArray[num].register}</td>
                                                     <td>${dataArray[num].english} </td>
                                                     <td>${dataArray[num].tamil}</td>
                                                     <td>${dataArray[num].maths}</td>
                                                     <td>${dataArray[num].science}</td>
                                                     <td>${dataArray[num].social}</td>
                                                     <td>${dataArray[num].result}</td>
                                                     <td class="flex">
                                                          <button id="actionButton" type="button" onclick="viewTable(this)"><i class="fa-solid fa-user-pen" style="color: #1348a4;"></i></button>
                                                          <button id="actionButton" type="button" onclick="disableAfterViewClick(this)"><i class="fa-regular fa-eye" style="color: #006134;"></i></i></button>
                                                          <button id="actionButton" type="button" onclick="deleteTable(this)"><i class="fa-solid fa-user-xmark" style="color: #ea3434;"></i></button>
                                                    </td>
                                                   </tr>`;
    if (dataArray[num].result == "PASS") {
        document.getElementById("result").style.color = "green";
    }
}

for (let i = 0; i < dataArray.length; i++) {
    generateTable(i);
}

function addData() {
    const name = document.getElementById("name").value;
    const register = document.getElementById("register").value;
    const english = document.getElementById("english").value;
    const tamil = document.getElementById("tamil").value;
    const maths = document.getElementById("maths").value;
    const science = document.getElementById("science").value;
    const social = document.getElementById("social").value;
    const total = document.getElementById("total_mark").value;
    const average = document.getElementById("avg_mark").value;
    const grade = document.getElementById("grade").value;
    const result = document.getElementById("result").value;


    const newData = {
        "name": name,
        "register": register,
        "english": english,
        "tamil": tamil,
        "maths": maths,
        "science": science,
        "social": social,
        "total": total,
        "average": average,
        "grade": grade,
        "result": result
    };
    dataArray.push(newData);
    const arrayLength = dataArray.length - 1;
    generateTable(arrayLength);
    clearFormAfterSubmitOrUpdate();
}

function clearFormAfterSubmitOrUpdate() {
    const form = document.querySelector("form");
    form.reset();
}

let book = "";
let tdOrigin = -1;
function fn1(td) {
    book = td;
    console.log("Book" + book.parentElement.parentElement.rowIndex);
    tdOrigin = book.parentElement.parentElement.rowIndex;
}

function enableDisableView(viewDisabled) {
    document.getElementById("name").disabled = viewDisabled;
    document.getElementById("register").disabled = viewDisabled;
    document.getElementById("english").disabled = viewDisabled;
    document.getElementById("tamil").disabled = viewDisabled;
    document.getElementById("maths").disabled = viewDisabled;
    document.getElementById("science").disabled = viewDisabled;
    document.getElementById("social").disabled = viewDisabled;
    document.getElementById("calculate").disabled = viewDisabled;
}

function enableDisableCalculation(viewDisabled) {
    document.getElementById("total_mark").disabled = viewDisabled;
    document.getElementById("grade").disabled = viewDisabled;
    document.getElementById("avg_mark").disabled = viewDisabled;
    document.getElementById("result").disabled = viewDisabled;
}

function updateTable() {
    rowPosition = tdOrigin;
    const table = document.querySelector("table");
    const rows = table.rows;

    const Name = document.getElementById("name").value;
    const English = document.getElementById("english").value;
    const Tamil = document.getElementById("tamil").value;
    const Maths = document.getElementById("maths").value;
    const Science = document.getElementById("science").value;
    const Social = document.getElementById("social").value;

    const registerNo = document.getElementById("register").value;
    const findRegisterNO = (registerNo) => dataArray.find(item => item.register == registerNo);
    const foundObject = findRegisterNO(registerNo);

    const name = foundObject.name = Name;
    const english = foundObject.english = English;
    const tamil = foundObject.tamil = Tamil;
    const maths = foundObject.maths = Maths;
    const science = foundObject.science = Science;
    const social = foundObject.social = Social;

    rows[rowPosition].cells[0].innerHTML = name;
    rows[rowPosition].cells[2].innerHTML = english;
    rows[rowPosition].cells[3].innerHTML = tamil;
    rows[rowPosition].cells[4].innerHTML = maths;
    rows[rowPosition].cells[5].innerHTML = science;
    rows[rowPosition].cells[6].innerHTML = social;
    myCalculation(english, tamil, maths, science, social);
    const result = myCalculation(english, tamil, maths, science, social);
    rows[rowPosition].cells[7].innerHTML = result;
    enableDisableCalculation(true);
}

function viewTable(td) {
    const row = td.parentElement.parentElement;
    const name = row.cells[0].innerHTML;
    const register = row.cells[1].innerHTML;
    const english = row.cells[2].innerHTML;
    const tamil = row.cells[3].innerHTML;
    const maths = row.cells[4].innerHTML;
    const science = row.cells[5].innerHTML;
    const social = row.cells[6].innerHTML;

    document.getElementById("name").value = name;
    document.getElementById("register").value = register;
    document.getElementById("english").value = parseInt(english);
    document.getElementById("tamil").value = tamil;
    document.getElementById("maths").value = maths;
    document.getElementById("science").value = science;
    document.getElementById("social").value = social; 

    fn1(td);
    
    document.getElementById("calculate").style.pointerEvents = "none";
    document.getElementById("calculate").style.opacity = 0.5;
}

function disableAfterViewClick(td) {
    viewTable(td);
    enableDisableView(true);
    document.getElementById("calculate").style.pointerEvents = "none";
    setTimeout(clearFormAfterSubmitOrUpdate, 5000);
}

function deleteTable(td) {
    const tbody = document.querySelector("tbody");
    const row = td.parentElement.parentElement;
    tbody.deleteRow(row.rowSectionIndex);
    const markObj = dataArray.find(item => item.register == row.cells[1].innerHTML);
    const index = dataArray.indexOf(markObj);
    dataArray.splice(index, 1);
}




