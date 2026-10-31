function redirectToHomePage() {
  var userType = document.getElementById("userType").value;
  
  if (userType === "student") {
      window.location.href = "student-home.html";
  } else if (userType === "faculty") {
      window.location.href = "faculty-home.html";
  }

  return false;
}