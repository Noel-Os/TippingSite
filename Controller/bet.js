
function loadBet(){
    if (getCookie("session") === "0"){
        window.location.href = "../Views/index.html";
    }
    CheckAlreadyBet()

    var myHeaders = new Headers();
    myHeaders.append("key", getCookie("camundaKey"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8081/game/" + window.location.search.substring(1).split("=")[1], requestOptions)
        .then(response => response.json())
        .then(result => {
            document.getElementById('teamAName').innerHTML = result["teamA"];
            document.getElementById('teamBName').innerHTML = result["teamB"];
        })
        .catch(error => console.log('error', error));
}

function CheckAlreadyBet(){
    var myHeaders = new Headers();
    myHeaders.append("key", getCookie("camundaKey"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8081/bet/" + window.location.search.substring(1).split("=")[1], requestOptions)
        .then(response => response.json())
        .then(responseData => {
            if (responseData["id"] !== null) {
                console.log(responseData)
                document.getElementById('pointsA').setAttribute("placeholder", responseData["teamA"]);
                document.getElementById('pointsB').setAttribute("placeholder", responseData["teamB"]);
                document.getElementById("pointsA").setAttribute("disabled", "");
                document.getElementById("pointsB").setAttribute("disabled", "");
                document.getElementById("submitBet").setAttribute("disabled", "");
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

function bet(){

    let pointsA = document.getElementById("pointsA").value
    let pointsB = document.getElementById("pointsB").value

    var myHeaders = new Headers();
    myHeaders.append("key", getCookie("camundaKey"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "teamA": pointsA,
        "teamB": pointsB,
        "gameId": window.location.search.substring(1).split("=")[1]
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8081/bet", requestOptions)
        .then(response => response.text())
        .then(result => {
            document.location.href = "../Views/overview.html";
        })
        .catch(error => console.log('error', error));
}

function logout(){
    document.cookie="session=0"
    document.location.href = "../Views/index.html";
}
