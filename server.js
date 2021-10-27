const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {

    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);

    console.log(page);

    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }else if (page == '/api') {
        if ('player' in params) {
            let opponent = Math.ceil(Math.random()*5) // so we get 1(rock), 2(paper), 3(scissors), 4(lizard), or 5 (spock)
            opponent === 1 ? opponent = 'rock' : opponent === 2 ? opponent = 'paper' : opponent === 3 ? opponent = 'scissors' : opponent === 4 ? opponent = 'lizard' : opponent === 5 ? opponent = 'spock' : null
            console.log(opponent) 

            if (params['player'] == 'rock') { //paper and spock wins
                if (params['player'] == opponent) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "Tie",
                    }
                    res.end(JSON.stringify(objToJson));
                }else if(opponent == 'paper' || opponent == 'spock') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You lose",
                    }
                    res.end(JSON.stringify(objToJson));
                }else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You won",
                    }
                    res.end(JSON.stringify(objToJson));
                }
            }else if (params['player'] == 'paper') { //scissors and lizard wins
                if (params['player'] == opponent) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "Tie",
                    }
                    res.end(JSON.stringify(objToJson));
                }else if(opponent == 'scissors' || opponent == 'lizard') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You lose",
                    }
                    res.end(JSON.stringify(objToJson));
                }else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You won",
                    }
                    res.end(JSON.stringify(objToJson));
                }
            }else if (params['player'] == 'scissors') { //spock and rock wins
                if (params['player'] == opponent) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "Tie",
                    }
                    res.end(JSON.stringify(objToJson));
                }else if(opponent == 'spock' || opponent == 'rock') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You lost",
                    }
                    res.end(JSON.stringify(objToJson));
                }else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You won",
                    }
                    res.end(JSON.stringify(objToJson));
                }
            }else if (params['player'] == 'lizard') { //rock and scissors wins
                if (params['player'] == opponent) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "Tie",
                    }
                    res.end(JSON.stringify(objToJson));
                }else if (opponent == 'rock' || opponent == 'scissors') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You lost",
                    }
                    res.end(JSON.stringify(objToJson));
                }else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You won",
                    }
                    res.end(JSON.stringify(objToJson));
                }
            }else if (params['player'] == 'spock') { //lizard and paper wins
                if (params['player'] == opponent) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "Tie",
                    }
                    res.end(JSON.stringify(objToJson));
                }else if(opponent == 'lizard' || opponent == 'paper') {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You lost",
                    }
                    res.end(JSON.stringify(objToJson));
                }else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    const objToJson = {
                        player: params['player'],
                        opponent: opponent,
                        result: "You won",
                    }
                    res.end(JSON.stringify(objToJson));
                }
            }
        }
    }else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    }else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000);
