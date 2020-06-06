let playerAction = process.argv[process.argv.length - 1]

let computerAction
let random = Math.random() * 3

if (random < 1) {
  computerAction = 'rock'
} else if (random > 2) {
  computerAction = 'scissors'
} else {
  computerAction = 'paper'
}

console.log(computerAction)


if (playerAction === computerAction ) {
  console.log('Try again')
} else if (
  (playerAction === 'rock' && computerAction === 'scissors') ||
  (playerAction === 'paper' && computerAction === 'rock') ||
  (playerAction === 'scissors' && computerAction === 'paper')
) {
  console.log('You win')
} else {
  console.log('You lose')
}