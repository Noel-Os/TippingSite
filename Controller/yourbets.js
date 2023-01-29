
function logout(){
    document.cookie="session=0"
    document.location.href = "../Views/index.html";
}

function loadMyBets(){

    if (getCookie("session") === "0"){
        window.location.href = "../Views/index.html";
    }

    const url='http://localhost:8080/bettings?uid=' + getCookie("session");

    var str = ''

    fetch(url)
    .then(response => response.json())
    .then((responseData) =>
    {
        responseData.forEach(response =>{
            str += `
            <tr>
                <th scope="row">` + response["betting_id"] + `</th>
                <td>` + response["bet"]["teamA"] + ` :  ` + response["bet"]["teamB"]["points"] + `</td>
                <td>` + response["bet"]["teamB"] + ` :  ` + response["bet"]["teamB"]["points"] + `</td>
                <td>` + response["game"]["teamA"] + ` :  ` + response["game"]["teamB"]["points"] + `</td>
                <td>` + response["game"]["teamB"] + ` :  ` + response["game"]["teamB"]["points"] + `</td>
                <td>` + response["amount"] + `</td>
                <td>` + response["status"] + `</td>
            </tr>        `
        });
        document.getElementById('bets').innerHTML = str;
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
