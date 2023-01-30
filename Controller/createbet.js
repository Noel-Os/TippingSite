function createBet(){

    let cat = document.getElementById("category").value;
    let t1 = document.getElementById("team1").value
    let t2 = document.getElementById("team2").value
    let start = document.getElementById("startTime").value;

    var myHeaders = new Headers();
    myHeaders.append("key", getCookie("camundaKey"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "teamA": t1,
        "teamB": t2,
        "date": start,
        "sport": cat
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8081/game", requestOptions)
        .then(response => response.text())
        .then(result => {
            document.location.href = "../Views/overview.html";
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
