const chalk = require('chalk');


let adjectives = [
  'super',
  'shameful',
  'airborne',
]

let verbs = [
  'bleeding',
  'unique',
  'aggressive',
  'self-inflicted',
  'infected',
]

let specific = [
  'brain-',
  'rectal-',
  'facial-',
  'full-body-',
  'stomach-',
  'throat-and-mouth-',
]

let nouns = [
  'cramps',
  'aids',
  'polio',
  'cancer',
  'hepatitis-X',
  'infection',
  'wounds',
  'battle-scars',
]

function getRandom (list, chanceOfEmpty = 1,) {
  return (chanceOfEmpty === 1 || Math.random() <= chanceOfEmpty) ? list[Math.floor(Math.random() * list.length)] : ""
}

function generateRouteName () {
  const name = [
    getRandom(adjectives, 0.75),
    ' ',
    getRandom(verbs),
    ' ',
    getRandom(specific, 0.33),
    getRandom(nouns),
  ].filter(v => !!v)
    .filter((v, idx, arr) => arr[idx-1] !== v)
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join('')
    .trim()

  return name
}


if (!module.parent) {
  const name = generateRouteName()
  console.log(chalk.red(`  ${name}`))
}

module.exports = {
  generateRouteName
}