
function login() {
    let username = document.getElementById("typeUsernameX").value;
    let password = document.getElementById("typePasswordX").value;

    const url='http://localhost:8080/login?username=' + username + '&password=' + password;

    fetch(url)
    .then(response => response.json())
    .then((responseData) => {

        if (responseData.length > 0){
            const d = new Date();
            d.setTime(d.getTime() + (20*60*1000));
            document.cookie="session=" + responseData[0]["user_id"];
            document.cookie="expires=" + d;
            document.cookie="path=/";
            document.location.href = "../Views/overview.html";
        }
        else {
            document.getElementById("wrongCred").innerHTML = "Username und Passwort stimmen nicht überein";
        }
    });
}
