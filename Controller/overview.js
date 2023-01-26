
function loadBets(){
    const bets = [];

    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/allBets';

    var str = ''

    Http.open("GET", url);
    Http.send();

    fetch(url)
    .then(response => response.json())
    .then((responseData) =>
    {
        for (let i = 0; i < responseData.length; i++) {
            console.log(i);
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

}

