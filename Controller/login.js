
function login() {
    let username = document.getElementById("typeUsernameX").value;
    let password = document.getElementById("typePasswordX").value;

    if (username === "test" && password === "test"){
        document.location.href = "../Views/overview.html";
    }
}
