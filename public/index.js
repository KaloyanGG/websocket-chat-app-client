function saveUsername() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
}