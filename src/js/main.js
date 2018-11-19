alert('funciona');

function soundcloud() {
    SC.initialize({
       client_id: 'unnFdubicpq7RVFFsQucZzduDPQTaCYy'
    });

    SC.get('/tracks', {
        q: 'u2'
    }).then(function (tracks){
        console.log(tracks)

        SC.stream('/tracks/'+tracks[0].id).then(function (player){
            player.play().then(function(){
                console.log('Playback started!');
            }).catch(function(e){
                console.error('Playback rejected. Try calling play() from a user interaction.', e);
            });
        })
    })
}