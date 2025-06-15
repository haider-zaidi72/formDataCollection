// first of all get data through ID
let FirstName = document.getElementById("fname");
let LastName = document.getElementById("lname");
let FatherName = document.getElementById("fathername");
let Age = document.getElementById("age");
let Email = document.getElementById("eml");
let Contact = document.getElementById("cnt");

// let data = [];

let btn = document.getElementById("btn");


//store data 

// ye code evenListner ke zarye object function ko call kare ga au data ki value ko access kare ga
btn.addEventListener('click', function(){
   let student = {
    userName : FirstName.value,
    lastname: LastName.value,
    fathername : FatherName.value,
    age: Age.value,
    email: Email.value,
    contact: Contact.value
};

// ye code data ko push kare ga aur JASON function ke zarye array main store karde ga.
data.push(student)
localStorage.setItem('students', JSON.stringify(data));

FirstName.value = "",
LastName.value = "",
FatherName.value = "",
Age.value = "",
Email.value = "",
Contact.value = "",

console.log(data)

// ye code data ko store rakhe ga chahey browser ko refresh bhi kardo
});
let data = JSON.parse(localStorage.getItem('students')) || [];

// ye code data ko excel file ma download karne ke liye ha
let downloadBtn = document.getElementById("download");

downloadBtn.addEventListener("click", function () {
    // Convert data array to worksheet
    let worksheet = XLSX.utils.json_to_sheet(data);
    
    // Create a new workbook and append worksheet
    let workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    // Trigger file download
    XLSX.writeFile(workbook, "students.xlsx");
});

