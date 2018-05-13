var players1 = {
    name:'Женя',
    goals: 2,
    passes:1
}
var players2 = {
    name:'Игорь',
    goals: 3,
    passes:0
}
players = [players1,players2];

// players.push("three", "four")

var getStatistics = function (players) {
    var coefficient;
    var percent;
    var allGoals = 0;
    for (var i=0;i < players.length;i++){
        allGoals += players[i].goals;
    }
    for (var i=0;i < players.length;i++){
        players[i].coefficient = players[i].goals*2 + players[i].passes;
        players[i].percent = Math.round(players[i].goals*100/allGoals);

    }
    return players;
};
getStatistics(players);

