function getInput () {
    var input = document.querySelector("input").value;
    if (input == "") {
        document.getElementById("warning").style.display = "block";
    } else {
        document.getElementById("warning").style.display = "none";
    }
    document.getElementById("last-message").innerText = input;
}