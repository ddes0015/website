function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function submitQuery() {
  closeForm();
  alert("Email sent! Please expect 2-3 business days for a response.");
}
