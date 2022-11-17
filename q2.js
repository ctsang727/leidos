
// Define an abstract model for the front-end of a simple spreadsheet application. 
// Use pseudocode or the language of your choice to define the most important functionality with interfaces,
// abstract classes, method signatures, etc., but without any implementation.


// table w rows/cols
// given values of table and displaying the values only


// updating the value of a cell 

/*
def updateCell(){

}



*/



// table container refers to a div html element
// data is array of objects with properties { row, col, value }
// row is a number, col is a number, value is a string
// output in form
//    <table>
//        <tr>
//            <td>{value}</td>
//        </tr>
//    </table>
               
   /* [ 
    {0, 0, 'A1'},
    {0, 1, 'B1'},
    {0, 2, 'C1'},
    {1, 0, 'A2'},
    {1, 1, 'B2'},
    {1, 1, 'C3'},
]
*/
function renderCells(tableContainer, data) {
    let maxRowIndex = -1;
    for (let i = 0; i < data.length; i++) {
        if (data.row > maxRowIndex) {
            maxRowIndex = data.row;
        }
    }
 
    for (let i = 0; i <= maxRowIndex; i++) {
        let y = ''
        for (let i = 0; i < data.length; i++) {
            // do something
            // <tr>
            //      renderCell('A1')
            // </tr>
            //
            if (data.row === i){
                x = renderCell(data.value) 

            }
            y += x 
        }
        tableContents += '<tr>' + y + '</tr>'
    }

    let tableContents = '';
    
    const tableAsString = '<table>' + tableContents + '</table';
    tableContainer.innerHtml = tableAsString;
}
function renderCell(value) {
    return '<td>' + value + '</td>';
}


/*
data = lines 34-40
renderCells(tableContainer, data){
    for ...
        
}


*/