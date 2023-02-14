import {Game} from '@/classes/Game'

const game = new Game(document.getElementById('canvas') as HTMLCanvasElement),
    status = document.getElementById('status')

game.on('win', () => {
    if(status) {
        status.innerText = 'You win!'
    }
})

game.on('lose', () => {
    if(status) {
        status.innerText = 'You lose!'
    }
})

document.getElementById('startButton')?.addEventListener('click', () => {
    game.start()
})
