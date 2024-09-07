//Movie party


var peer = new Peer("test-RTS");
var url = window.location.href;
var ID = "";

peer.on('open', function(id) {
	ID = id;
    updateQueryParam('room', id);
    console.log("Connected suscessfully with Room: " + id);
  });

function updateQueryParam(param, newValue)
{
    const url = new URL(window.location);
    url.searchParams.set(param, newValue);
    window.history.replaceState(null, null, url);
}

