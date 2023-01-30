function registerUser(){
    var myHeaders = new Headers();
    myHeaders.append("key", "3c394215-9ff6-11ed-9e4a-02420ace91ac");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": document.getElementById("typeUsername").value,
        "password": document.getElementById("typePassword").value,
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("localhost:8081/user/register", requestOptions)
        .then(response => response.text())
        .then(result => {
            if (result.error) {
                alert("Error Password or Username"); /*displays error message*/
            } else {
                window.location.href = "../Views/index.html";
            }
        })
        .catch(error => console.log('error', error));
}