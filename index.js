function createPDF(){

  if(document.getElementById("name").value == ""){
    alert("please enter into field to get the pdf file");
  }

  else {
    var doc = new jsPDF();

    doc.text("My Name is :   "  + document.getElementById('name').value,10,10);

    doc.save("name.pdf");
  }

}
