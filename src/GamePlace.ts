enum PLAYERS {
    X = 'X',
    O = 'O'
}

class GamePlace {
    private gamePlace = <HTMLDivElement>document.querySelector('#game-place')
    private fields = this.gamePlace.querySelectorAll('.game-place__field')
    private firstLine = this.gamePlace.querySelectorAll('.game-place__field--first-line')
    private secondLine = this.gamePlace.querySelectorAll('.game-place__field--second-line')
    private thirdLine = this.gamePlace.querySelectorAll('.game-place__field--third-line')

    private isXplayer = true

    private currentPlayer() {
        const cp = this.isXplayer ? 'X' : 'O'
        this.isXplayer = !this.isXplayer
        return cp
    }

    private checkTheLine(line: NodeList): string {
        const [lineField1, lineField2, lineField3] = line

        const fstLineContents = [
            lineField1.textContent,
            lineField2.textContent,
            lineField3.textContent
        ]

        if(fstLineContents.every(curr => !!curr)) {
            if(fstLineContents.every(curr => curr === PLAYERS.X)) return PLAYERS.X
            else if(fstLineContents.every(curr => curr === PLAYERS.O)) return PLAYERS.O
        }

        return ''
    }

    private checkTheWinner() {

        console.log('The winner is ' + this.checkTheLine(this.firstLine))
        console.log('The winner is ' + this.checkTheLine(this.secondLine))
        console.log('The winner is ' + this.checkTheLine(this.thirdLine))

    }

    init() {
        this.fields.forEach(element => {
            const self = this
            element.addEventListener('click', function(_) {
                if(!element.textContent) {
                    element.innerHTML = self.currentPlayer()
                }

                self.checkTheWinner()
            })
        })
    }

}

export default GamePlace