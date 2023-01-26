
function loadBet(){
    const url='http://localhost:8080/bet?id=' + window.location.search.substring(1).split("=")[1];

    fetch(url)
        .then(response => response.json())
        .then((responseData) =>
        {
            document.getElementById('team1').innerHTML = responseData[0]["team1"];
            document.getElementById('team2').innerHTML = responseData[0]["team2"];
        });
}

function betTeam1(){

}

function betTeam2(){

}