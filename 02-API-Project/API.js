const baseURL = 'https://ghibliapi.herokuapp.com/vehicles';

let ghibliVechicles = document.querySelector('ul')

function fetchVehicles(e) {
    e.preventDefault()
    fetch(baseUrl)
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(json => {
            displayRockets(json);
        })
}

function displayVehicles(data) {
    console.log('Inside displayVehicles:', data);

    data.forEach(vehicles => {
        console.log(vehicles.name);
        let listItem = document.createElement('li')
        listItem.innerText = vehicles.name;
        ghibliVechicles.appendChild(listItem);
    })
}