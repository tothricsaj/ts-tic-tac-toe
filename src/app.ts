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

const toggleDisable = (parentElem: htmlElementTypes, enable: boolean) => {
    const displayProperty = enable ? 'block' : 'none'
    parentElem.querySelector('.disable-cover')?.setAttribute('style', `display: ${displayProperty}`)
}

const player = <HTMLDivElement>document.querySelector('.player')!

const checkInputs = (obj: valueDictionary<any>) => {
    if(!!obj.val1 && !!obj.val2) {
        console.log('%cIt is OK!!!', 'color: green')
        toggleDisable(player, false)
    } else {
        console.log('%cNames are required!!!', 'color: red')
        toggleDisable(player, true)
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