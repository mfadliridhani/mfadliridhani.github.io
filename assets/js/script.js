function showMessage() {
  const name = document.getElementById("name").value;
  document.getElementById("output").innerText =
    "Terima kasih, " + name + ", telah mendaftar!";
  return false;
}
