
function logout(){
    document.cookie="session=0"
    document.location.href = "../Views/index.html";
}

function loadBets(){

    if (getCookie("session") === "0"){
        window.location.href = "../Views/index.html";
    }

    const url='http://localhost:8080/allBets';

    var str = ''

    fetch(url)
    .then(response => response.json())
    .then((responseData) =>
    {
        for (let i = 0; i < responseData.length; i++) {

            str += `
            <div class="col">
                <div class="card">
                    <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" class="card-img-top" alt="...">
                    <div class="card-body p-5 text-center bg-light text-dark">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="bet.html?id=` + responseData[i]["bet_id"] + `" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`;
        };
        document.getElementById('footballBets').innerHTML = str;
    });

    loadUser();
}

function loadUser(){
    const url='http://localhost:8080/user?id=' + getCookie("session");
    let str = '';

    fetch(url)
    .then(response => response.json())
    .then((responseData) =>
    {
        if(responseData[0]["isAdmin"] === 1){
            str+=
            `
                <li class="nav-item">
                    <a class="nav-link" href="CreateBet.html">Create Bet</a>
                </li>
            `
            document.getElementById('navbar').innerHTML += str;
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

