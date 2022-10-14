var btn = document.getElementById("entry");
btn.addEventListener("click" , displayDetails);
var selectedRow=null;

function displayDetails(){
    var name = document.getElementById("name").value;
    var Class = document.getElementById("Class").value;
    var rollnum = document.getElementById("rollnum").value;
   

    if(!name || !Class || !rollnum)
    {
        alert("enter the student details")
        return;
    }

    var row =1;
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
   
    
    cell1.innerHTML = name;
    cell2.innerHTML = Class;
    cell3.innerHTML = rollnum;
    cell4.innerHTML = `<button onClick="onEdit(this)">EDIT</button>
     <button onClick="delete1(this)">DEL</button>`
   
    row++;

}
    function onFormSubmit() {
        if (validate()) {
            var formData = readFormData();
            if (selectedRow == null)
                insertNewRecord(formData);
            else
                updateRecord(formData);
            resetForm();
        }
    }
//function to reset form
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("Class").value = "";
    document.getElementById("rollnum").value = "";
    selectedRow = null;
}

//function to delete record
function delete1(td){
    row = td.parentElement.parentElement;
    document.getElementById("display").deleteRow(row.rowIndex);
    resetForm();
}

//funtion to edit
function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById('name').value = selectedRow.cells[0].innerHTML;
        document.getElementById('Class').value = selectedRow.cells[1].innerHTML;
        document.getElementById('rollnum').value = selectedRow.cells[2].innerHTML;
        
    }
        
function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.name;
        selectedRow.cells[1].innerHTML = formData.Class;
        selectedRow.cells[2].innerHTML = formData.rollnum;
        
    }

    function validate() {
        isValid = true;
        if (document.getElementById("name").value == "") {
            isValid = false;
            document.getElementById("fullNameValidationError").classList.remove("hide");
        } else {
            isValid = true;
            if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
                document.getElementById("fullNameValidationError").classList.add("hide");
        }
        return isValid;
    }
 

//funtion for form validation
function formValidate(){
    //name validation
    let x =document.getElementById("name").value;
    if( isNaN(x) )
     {
        
     }
     else{
        alert("INPUT NAME IN CHARACTER");
        resetForm();
     }

    //class validation
    let y = document.getElementById("Class").value;
    if ( isNaN(y)||y<1)
    {   
        alert("INPUT CLASS AS POSITIVE NUMBER");
        resetForm(); 
    }else{

    }

    //rpllnum validation
    let z= document.getElementById("rollnum").value;
    if ( isNaN(z)||z<1)
    {
        alert("INPUT ROLLNUM AS POSITIVE NUMBER");
        resetForm(); 
    }else{

    }
}