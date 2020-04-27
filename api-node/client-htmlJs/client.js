fetch('http://localhost:4200/albums')
    .then(response => response.json())
    .then(albums => {
        console.log(albums);
    });