function registerUser(){

    const url='http://localhost:8080/register';

    fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: document.getElementById("typeUsername").value,
            password: document.getElementById("typePassword").value,
        }),
    })
    .then(response => response.json())
    .then((data) =>
    {
        console.log(data);
        if (data.error) {
            alert("Error Password or Username"); /*displays error message*/
        } else {
            window.location.href = "../Views/index.html";
        }
    });
}