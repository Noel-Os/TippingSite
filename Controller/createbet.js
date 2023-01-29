
function onLoad(){
    if (getCookie("session") === "0"){
        window.location.href = "../Views/index.html";
    }
}-

function logout(){
    document.cookie="session=0"
    document.location.href = "../Views/index.html";
}

function createBet(){
    const url='http://localhost:8080/createBet';

    let cat = document.getElementById("category").value;
    let t1 = document.getElementById("team1").value
    let t2 = document.getElementById("team2").value
    let start = document.getElementById("startTime").value;;

    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            cat: cat,
            t1: t1,
            t2: t2,
            start: start
        }),
    })
        .then(response => response.json())
        .then((data) =>
        {
            console.log(data);
            if (data.error) {
                alert("Error creating bet"); /*displays error message*/
            } else {
                alert("Bet created");
            }
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
