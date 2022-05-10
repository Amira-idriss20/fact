var selectedRow = null;

function onFormSubmit(){
    console.log(formData);
    if(validate()){
        var formData = readFormData();
        console.log(formData);
        if(selectedRow == null){
            insertNewRecord(formData);
        }else{
            updateRecord(formData);
        }
        
        resetForm();
    }
}

function readFormData(){

    var formData = {};
    formData["num"] = document.getElementById("num").value;
    formData["descrip"] = document.getElementById("descrip").value;
    formData["prix"] = document.getElementById("prix").value;
    formData["quantité"] = document.getElementById("quantité").value;
    formData["montants"] = document.getElementById("montants").value;
    

    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell2 = newRow.insertCell(0);
    cell2.innerHTML = data.num;

    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.descrip;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prix;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.quantité;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.montants;

    cell4 = newRow.insertCell(6);
    cell4.innerHTML = `<a onClick="onEdit(this)">modifier</a>
                        <a  onClick="onDelete(this)">supprimer</a>`;
}

function resetForm(){
    document.getElementById('num').value = '';
    document.getElementById('descrip').value = '';
    document.getElementById('prix').value = '';
    document.getElementById('quantité').value = '';
    document.getElementById('montants').value = '';
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('num').value = selectedRow.cells[0].innerHTML;
    document.getElementById('descrip').value = selectedRow.cells[1].innerHTML;
    document.getElementById('prix').value = selectedRow.cells[2].innerHTML;
    document.getElementById('quantité').value = selectedRow.cells[3].innerHTML;
    document.getElementById('montants').value = selectedRow.cells[4].innerHTML;
    
}

function updateRecord(formData){

    selectedRow.cells[0].innerHTML = formData.num;
    selectedRow.cells[1].innerHTML = formData.descrip;
    selectedRow.cells[2].innerHTML = formData.prix;
    selectedRow.cells[3].innerHTML = formData.quantité;
    selectedRow.cells[4].innerHTML = formData.montants;
    

function onDelete(td){
    if(confirm('vous etes sur de vouloir suprimer?')){
        row = td.parentElement.parentElement;
        document.getElementById("emplist").deleteRow(row.rowIndex);
        resetForm();
    }
    
}

function validate(){
    isValid = true;
    if(document.getElementById('descrip').value == ""){
        isValid = false;
        document.getElementById('descripValidationError').classList.remove("hide");
    }else{
        isValid = true;
        if(!document.getElementById('descripValidationError').classList.remove("hide")){
            document.getElementById('descripValidationError').classList.add("hide");
        }
    }

    return isValid;
}