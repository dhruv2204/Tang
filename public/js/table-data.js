var columnDefs = [
    {headerName: "Pickup Date", field: "make"},
    {headerName: "Office", field: "model"},
    {headerName: "Source City", field: "price"},
    {headerName: "Destination City", field: "make"},
    {headerName: "Client Company", field: "model"},
    {headerName: "Supplier Company", field: "price"},
    {headerName: "Cost", field: "model"},
    {headerName: "Truck No", field: "price"}
];

var rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
];

var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    onGridReady: function () {
        gridOptions.api.sizeColumnsToFit();
    }
};

function selectAllRows() {
    gridOptions.api.selectAll();
}

document.addEventListener("DOMContentLoaded", function () {

    var eGridDiv = document.querySelector('#myTable');


    new agGrid.Grid(eGridDiv, gridOptions);
});