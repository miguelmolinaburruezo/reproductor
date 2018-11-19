alert('buscar');

function buscar() {
    SC.initialize({
        client_id: 'unnFdubicpq7RVFFsQucZzduDPQTaCYy'
    });

    SC.get('/tracks', {
        q: $('#cancion')[0].value
    }).then(function (tracks) {
        console.log(tracks);
        for (var i = 0; i < 10; i++) {
            $('#lista').append('<div id="car' + i + '" class="contenedor" draggable="true" ondragstart="miOnDragStart(event)"><img class="caratula" src="' + tracks[i].artwork_url + '" draggable="false"/><h3 class="titulos">' + tracks[i].title + '</h3> </div>');
        }
    })
}