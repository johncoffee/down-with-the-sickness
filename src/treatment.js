const chalk = require('chalk');

let prefix = [
  'painful',
  '12 hour',
  'acute',
]

let adjectives = [
  'targeted',
  'precision',
  'risky',
  'experimental',
]

let specific = [
  'radiation',
  'laser',
  'herbal',
  'facial',
]

let nouns = [
  'chemo',
  'stem-cell',
  'expansion',
  'anxiety',
  'yoga',
  'brain',
  'eye',
]
let suffix = [
  'surgery',
  'Acupuncture',
  'treatment',
  'therapy',
  'transplants',
  'exercises',
]

function getRandom (list, chanceOfEmpty = 1,) {
  return (chanceOfEmpty === 1 || Math.random() <= chanceOfEmpty) ? list[Math.floor(Math.random() * list.length)] : ""
}

function generateRouteName () {
  const names = [
    getRandom(prefix, 0.44),
    ' ',
    getRandom(adjectives, 0.44),
    ' ',
    getRandom(specific, 0.44),
    getRandom(' '),
    getRandom(nouns),
    getRandom('-'),
    getRandom(suffix),
  ]

  const name = names
    .filter(v => !!v)
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join('')
    .replace(/-\s/g, '-')
    .replace(/\s+/g, ' ')
    .trim()

  return name
}


if (!module.parent) {
  const disease = require('./disease.js')

  const d = disease.generateRouteName()
  const n = generateRouteName()

  console.log('  Mr. Joe,')
  console.log(`  You've been diagnosed with ${chalk.greenBright(d)}`)
  console.log('  The doctor is preparing your ' + chalk.red(`${n}`))
}

module.exports = generateRouteName