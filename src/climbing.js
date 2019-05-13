const chalk = require('chalk');


let verbs = [
  'flying',
  'skin-tearing',
  'pumping',
  'fucking',
  'gravity-defying',
  'screeming',
  'Ondre\'s',
  'Honnold\'s',
]

let adjectives = [
  'crimpy',
  'stupid',
  'delightful',
  'low-life',
  'sky-high',
  'pumped',
  'heavenly',
  // 'dyno',
  'dynamic',
  'one-handed',
]

let nouns = [
  'Boulder',
  'crimp-hell',
  'problem',
  'project',
  'beast',
  'challenge',
  'off-width',
  'flight-of-your-life',
  'way-to-go',
  'heaven',
  'granite',
  'hell',
  'Rock',
]

function getRandom (list, chanceOfEmpty = 1) {
  return (chanceOfEmpty === 1 || Math.random() <= chanceOfEmpty) ? list[Math.floor(Math.random() * list.length)] : ""
}

function generateRouteName () {
  let names = [
    getRandom(verbs,.44),
    getRandom(verbs,.55),
    getRandom(adjectives, .66),
    getRandom(adjectives, .55),
    getRandom(nouns),
    // ...'fucking delightful delightful flight-of-your-life'.split(' ')
  ]
  let name = names
    .filter(v => !!v)
    .filter((v, idx, arr) => arr[idx-1] !== v)
    .join(' ')


  name = name.replace(/\s+/g, ' ')
  name = name.trim()
  console.log(
    `  Get ready for: ${chalk.red(name)}`
  )
}


if (!module.parent) {
  const n = generateRouteName()
  console.log(n)
}

module.exports = generateRouteName