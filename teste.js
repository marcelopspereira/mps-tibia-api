const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

const url = `https://secure.tibia.com/community/?subtopic=characters&name=hue+proliferator`;

JSDOM.fromURL(url)
    .then(dom => {
        //criar varialvel  com nosso seletor
        const playerNameSelector = `.BoxContent > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)`
        // variavel com nosso elemento
        const $playerName = dom.window.document.querySelector(playerNameSelector)

        console.log('Elemento:', $playerName)
        console.log('TextContent:', $playerName.textContent)
    });