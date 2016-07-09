const socket = io()
socket.on("room", (data) => {
    console.log(data)
    document.getElementById("info").innerHTML = "New Game!!!" + "<br><br>" + data.players[0].name + " vs " + data.players[1].name
})
