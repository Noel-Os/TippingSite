
function login() {
    let username = document.getElementById("typeUsernameX").value;
    let password = document.getElementById("typePasswordX").value;

    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/login?username=' + username + '&password=' + password;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        fetch(url)
        .then(response => response.json())
        .then((responseData) => {

            if (Http.responseText.length > 2){
               document.location.href = "../Views/overview.html?id=" + responseData[0]["user_id"];
            }
            else {
                document.getElementById("wrongCred").innerHTML = "Username und Passwort stimmen nicht überein";
            }

        });
    }
}
