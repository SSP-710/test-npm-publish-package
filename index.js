const _ = require("lodash");

function gachaPull() {
  const characters = ["SSR 🐉 Dragon Coder", "SR 🦊 Fox Hacker", "R 🐧 Linux Penguin", "N 🐛 Bug"];
  const result = _.sample(characters);
  console.log(`You pulled: ${result}!`);
}

gachaPull()

exports.modules = {
    gachaPull
}