
function loadBets(){
    const currencies = [{
        id: 'USD',
        name: 'US Dollars'
    }, {
        id: 'UGX',
        name: 'Ugandan Shillings'
    }, {
        id: 'KES',
        name: 'Kenyan Shillings'
    }, {
        id: 'GHS',
        name: 'Ghanian Cedi'
    }, {
        id: 'GHS',
        name: 'Ghanian Cedi'
    }, {
        id: 'GHS',
        name: 'Ghanian Cedi'
    }, {
        id: 'ZAR',
        name: 'South African Rand'
    }];
    var str = '';
    currencies.forEach(function(currency){
        str += `
        <div class="col">
            <div class="card">
                <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" class="card-img-top" alt="...">
                <div class="card-body p-5 text-center bg-light text-dark">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>`;
    });

    console.log(str);

    document.getElementById('footballBets').innerHTML = str;
}

