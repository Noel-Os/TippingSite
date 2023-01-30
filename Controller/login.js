var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("http://localhost:8081/id", requestOptions)
    .then(response => response.text())
    .then(result => {
        document.cookie = "camundaKey=" + result
    })
    .catch(error => console.log('error', error));

function login() {
    let username = document.getElementById("typeUsernameX").value;
    let password = document.getElementById("typePasswordX").value;

    var myHeaders = new Headers();
    myHeaders.append("key", getCookie("camundaKey"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": username,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8081/user", requestOptions)
        .then(response => response.text())
        .then(result => {
            if (result === "Success"){
                document.location.href = "../Views/overview.html";
            } else {
                document.getElementById("wrongCred").innerHTML = "Username und Passwort stimmen nicht überein";
            }
        })
        .catch(error => console.log('error', error));
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
