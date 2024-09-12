$(document).ready(function() {
    var table1 = $('#example1').DataTable({
        "ajax": {
            "url": "arrays.json",
            "dataSrc": "data"
        },
        "columns": [
            { "data": null, "defaultContent": '<input type="checkbox">' }, // Checkbox for selection
            { "data": 0 }, // Name
            { "data": 1 }, // Position
            { "data": 2 }, // Office
            { "data": 3 }, // Extn.
            { "data": 4 }, // Start date
            { "data": 5 }, // Salary
            { "data": 6 }  // Nationality
        ],
        "dom": '<"top"p>t<"clear">rt<"bottom"li><"clear">'
    });

    var table2 = $('#example2').DataTable({
        "ajax": {
            "url": "arrays.json",
            "dataSrc": "data"
        },
        "columns": [
            { "data": null, "defaultContent": '<input type="checkbox">' }, // Checkbox for selection
            { "data": 0 }, // Name
            { "data": 1 }, // Position
            { "data": 2 }, // Office
            { "data": 3 }, // Extn.
            { "data": 4 }, // Start date
            { "data": 5 }, // Salary
            { "data": 6 }  // Nationality
        ],
        "dom": '<"top"p>t<"clear">rt<"bottom"li><"clear">'
    });

    // Column search
    $('#searchName').on('keyup change', function() {
        table1.column(1).search(this.value).draw();
    });
    $('#searchPosition').on('keyup change', function() {
        table1.column(2).search(this.value).draw();
    });
    $('#searchOffice').on('keyup change', function() {
        table1.column(3).search(this.value).draw();
    });
    $('#searchExtn').on('keyup change', function() {
        table1.column(4).search(this.value).draw();
    });
    $('#searchStartDate').on('keyup change', function() {
        table1.column(5).search(this.value).draw();
    });
    $('#searchSalary').on('keyup change', function() {
        table1.column(6).search(this.value).draw();
    });
    $('#searchNationality').on('keyup change', function() {
        table1.column(7).search(this.value).draw();
    });

    // Column search for second table
    $('#searchName2').on('keyup change', function() {
        table2.column(1).search(this.value).draw();
    });
    $('#searchPosition2').on('keyup change', function() {
        table2.column(2).search(this.value).draw();
    });
    $('#searchOffice2').on('keyup change', function() {
        table2.column(3).search(this.value).draw();
    });
    $('#searchExtn2').on('keyup change', function() {
        table2.column(4).search(this.value).draw();
    });
    $('#searchStartDate2').on('keyup change', function() {
        table2.column(5).search(this.value).draw();
    });
    $('#searchSalary2').on('keyup change', function() {
        table2.column(6).search(this.value).draw();
    });
    $('#searchNationality2').on('keyup change', function() {
        table2.column(7).search(this.value).draw();
    });

    // Row deletion with confirmation
    $('#deleteSelected').on('click', function() {
        var selectedRows1 = table1.rows().nodes().to$().find('input[type="checkbox"]:checked');
        var selectedRows2 = table2.rows().nodes().to$().find('input[type="checkbox"]:checked');
        
        if (selectedRows1.length === 0 && selectedRows2.length === 0) {
            alert('No rows selected for deletion.');
            return;
        }

        if (confirm('Are you sure you want to delete the selected rows?')) {
            selectedRows1.each(function() {
                table1.row($(this).closest('tr')).remove().draw();
            });
            selectedRows2.each(function() {
                table2.row($(this).closest('tr')).remove().draw();
            });
        }
    });

    // Show/Hide columns using dropdown
    $('#columnSelect').on('change', function() {
        var column = parseInt($(this).val());
        if (column === 0) return; // Do nothing if "Show/Hide Columns" is selected

        var visible = table1.column(column).visible();
        table1.column(column).visible(!visible);
        
        // Synchronize columns with table2
        table2.column(column).visible(!visible);
    });
});
