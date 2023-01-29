
function loadBet(){

    if (getCookie("session") === "0"){
        window.location.href = "../Views/index.html";
    }

    const url='http://localhost:8080/bet?id=' + window.location.search.substring(1).split("=")[1];
    let str = '';

    fetch(url)
    .then(response => response.json())
    .then((responseData) =>
    {
        document.getElementById('teamAName').innerHTML = responseData[0]["team1"];
        document.getElementById('teamBName').innerHTML = responseData[0]["team2"];
    });
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

    const url='http://localhost:8080/createBetting';

    let amount = document.getElementById("amount").value;
    let uid = getCookie("session");
    let bet_id = window.location.href.substring(window.location.href.lastIndexOf("=") + 1);
    let team = document.getElementById("teamSelection").value;;

    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            amount: amount,
            uid: uid,
            bet_id: bet_id,
            team: team
        }),
    })
    .then(response => response.json())
    .then((data) =>
    {
        console.log(data);
        if (data.error) {
            alert("Error setting up bet"); /*displays error message*/
        } else {
            alert("Bet set");
        }
    });

}

function logout(){
    document.cookie="session=0"
    document.location.href = "../Views/index.html";
}
