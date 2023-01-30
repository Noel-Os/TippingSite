function logout() {
    document.cookie = "session=0"
    document.location.href = "../Views/index.html";
}

function loadBets() {
    var str = ''

    var myHeaders = new Headers();
    myHeaders.append("key", getCookie("camundaKey"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8081/game", requestOptions)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData)
            for (let i = 0; i < responseData.length; i++) {
                str += `
            <div class="col">
                <div class="card">
                    <div class="card-body p-5 text-center bg-light text-dark">
                        <h5 class="card-title">` + responseData[i]["sport"] + `</h5>
                        <p class="card-text">Team 1: ` + responseData[i]["teamA"] + `</p>
                        <p class="card-text">VS.</p>
                        <p class="card-text">Team 2: ` + responseData[i]["teamB"] + `</p>
                        <a href="bet.html?id=` + responseData[i]["id"] + `" class="btn btn-primary">Bet</a>
                    </div>
                </div>
            </div>`;
            }
            document.getElementById('footballBets').innerHTML = str;
        })
        .catch(error => console.log('error', error));
    loadUser();
}

function loadUser() {
    let str = '';

    var myHeaders = new Headers();
    myHeaders.append("key", getCookie("camundaKey"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:8081/user", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result["admin"] === true) {
                str +=
                    `
                <li class="nav-item">
                    <a class="nav-link" href="CreateBet.html">Create Bet</a>
                </li>
            `
                document.getElementById('navbar').innerHTML += str;
            }
        })
        .catch(error => console.log('error', error));
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
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

