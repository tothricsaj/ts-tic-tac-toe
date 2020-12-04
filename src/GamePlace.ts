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

        const lineContents = [
            lineField1.textContent,
            lineField2.textContent,
            lineField3.textContent
        ]

        if(!!this.checkTheWinner(lineContents as string[]))
            return this.checkTheWinner(lineContents as string[])

        return ''
    }

    private checkTheColumns(column: number): string {
        const lineContents = [
            this.firstLine[column].textContent,
            this.secondLine[column].textContent,
            this.thirdLine[column].textContent,
        ]

        if(!!this.checkTheWinner(lineContents as string[]))
            return this.checkTheWinner(lineContents as string[])

        return ''
    }

    private checkTheWinner(lineContents: string[]): string {
        if(lineContents.every(curr => !!curr)) {
            if(lineContents.every(curr => curr === PLAYERS.X)) return PLAYERS.X
            else if(lineContents.every(curr => curr === PLAYERS.O)) return PLAYERS.O
        }

        return ''
    }

    private checkTheDimensions(): void {
        let winner: string
        const winnerArr: string[] = [
            this.checkTheLine(this.firstLine),
            this.checkTheLine(this.secondLine),
            this.checkTheLine(this.thirdLine),

            this.checkTheColumns(0),
            this.checkTheColumns(1),
            this.checkTheColumns(2),
        ]

        // console.log(winnerArr)

        winnerArr.forEach(win => {
            if(win !== '') {
                winner = win
                console.log('The winner is ' + winner)
            }
        })

    }

    init() {
        this.fields.forEach(element => {
            const self = this
            element.addEventListener('click', function(_) {
                if(!element.textContent) {
                    element.innerHTML = self.currentPlayer()
                }

                self.checkTheDimensions()
            })
        })
    }

}

export default GamePlace