const welcomeScreen = document.querySelector('.welcome-screen')
const firstPlayer = <HTMLInputElement>welcomeScreen?.querySelector('#first-player')
const secondPlayer = <HTMLInputElement>welcomeScreen?.querySelector('#second-player')

type htmlElementTypes = HTMLElement | HTMLDivElement

interface valueDictionary <TValue>{
    [id: string]: TValue
}

function inputValues() {
    let values: valueDictionary<any>

    values = {
        val1: '',
        val2: ''
    }

    return function(index: string, val: any) {
        values = {
            ...values,
            [index]: val
        }

        return values
    }
}

const valueHolder = inputValues()

const dissolveDisable = (parentElem: htmlElementTypes) => (
    parentElem.querySelector('.disable-cover')?.setAttribute('style', 'display: none')
)

const checkInputs = (obj: valueDictionary<any>) => {
    if(!!obj.val1 && !!obj.val2) {
        console.log('%cIt is OK!!!', 'color: green')
        const player = <HTMLDivElement>document.querySelector('.player')!
        dissolveDisable(player)
    } else {
        console.log('%cNames are required!!!', 'color: red')
    }
}

firstPlayer.addEventListener('keyup', function() {
    const valueObject = valueHolder('val1', this.value)
    checkInputs(valueObject)
})

secondPlayer.addEventListener('keyup', function() {
    const valueObject = valueHolder('val2', this.value)
    checkInputs(valueObject)
})