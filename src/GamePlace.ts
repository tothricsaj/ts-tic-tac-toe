class GamePlace {
    private gamePlace = <HTMLDivElement>document.querySelector('#game-place')
    private fields = this.gamePlace.querySelectorAll('.game-place__field')
    // private firstLine = this.gamePlace.querySelectorAll('.game-place__field--first-line')
    // private secondLine = this.gamePlace.querySelectorAll('.game-place__field--second-line')
    // private thirdLine = this.gamePlace.querySelectorAll('.game-place__field--third-line')

    private isXplayer = true

    private currentPlayer() {
        const cp = this.isXplayer ? 'X' : 'O'
        this.isXplayer = !this.isXplayer
        return cp
    }

    init() {
        this.fields.forEach(element => {
            const self = this
            element.addEventListener('click', function(_) {
                element.innerHTML = self.currentPlayer()
            })
        })
    }

}

export default GamePlace