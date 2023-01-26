
function loadMyBets(){

    const url='http://localhost:8080/bettings';
    var str = ''

    fetch(url)
    .then(response => response.json())
    .then((responseData) =>
    {
        str += `
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
        </tr>
        `
    });

}
