const dataArray = [
    { "id": 1, "name": 'Vignesh', "email": 'Vignesh@example.com' },
    { "id": 2, "name": 'Raghav', "email": 'Raghav@example.com' },
    { "id": 3, "name": 'Sathish', "email": 'Sathish@example.com' },
    { "id": 4, "name": 'Vinith', "email": 'Vinith@example.com' },
    { "id": 5, "name": 'Kumar', "email": 'Kumar@example.com' },
];
const itemsPerPage = 2;
const table = document.getElementById('data-table');
const pagination = document.getElementById('pagination');

function displayData(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = dataArray.slice(startIndex, endIndex);

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = '';

    pageData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
      `;
        tableBody.appendChild(row);
    });
}

function updatePaginationButtons(currentPage) {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(dataArray.length / itemsPerPage);

    for (let page = 1; page <= totalPages; page++) {
        const button = document.createElement('button');
        button.textContent = page;
        button.addEventListener('click', () => {
            displayData(page);
            updatePaginationButtons(page);
        });

        if (page !== currentPage) {
            button.classList.add('active');
            // $(document).ready(function () {
            //     $("button").click(function () {
            //         $(this).css("background-color","green");
            //     });
            // });
        }
       pagination.appendChild(button);
    }
}

displayData(1);
updatePaginationButtons(1);
