fetch('http://localhost:4200/albums')
    .then(response => response.json())
    .then(albums => {
        console.log(albums);
    })

fetch('http://localhost:4200/members')
    .then(response => response.json())
    .then(members => {
        console.log(members);
    })

fetch('http://localhost:4200/concertTours')
    .then(response => response.json())
    .then(concertTours => {
        console.log(concertTours);
    })

fetch('http://localhost:4200/labels')
    .then(response => response.json())
    .then(labels => {
        console.log(labels);
    })