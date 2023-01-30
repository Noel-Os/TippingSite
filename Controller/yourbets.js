
function logout(){
    document.cookie="session=0"
    document.location.href = "../Views/index.html";
}

function loadMyBets(){

    /*if (getCookie("session") === "0"){
        window.location.href = "../Views/index.html";
    }*/

    var str = ''

    var myHeaders = new Headers();
    myHeaders.append("key", getCookie("camundaKey"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    fetch("http://localhost:8081/bet", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach(response =>{
                var done = response["game"]["done"] ? "Done":"Due"
                str += `
                <tr>
                    <td>` + response["game"]["teamA"] + ` :  ` + response["teamA"] + `</td>
                    <td>` + response["game"]["teamB"] + ` :  ` + response["teamB"] + `</td>
                    <td>` + response["game"]["teamA"] + ` :  ` + response["game"]["scoreTeamA"] + `</td>
                    <td>` + response["game"]["teamB"] + ` :  ` + response["game"]["scoreTeamB"] + `</td>
                    <td>` + done + `</td>
                </tr>        `
            });
            document.getElementById('bets').innerHTML = str;
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
