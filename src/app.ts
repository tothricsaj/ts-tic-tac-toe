import {toggleDisable} from './common/common'

const welcomeScreen = document.querySelector('.welcome-screen')
const firstPlayerNameInput = <HTMLInputElement>welcomeScreen?.querySelector('#first-player')
const secondPlayerNameInput = <HTMLInputElement>welcomeScreen?.querySelector('#second-player')

const playerSelectorWrapper = <HTMLDivElement>document.querySelector('.player')!


interface valueDictionary <TValue>{
    [id: string]: TValue
}

class Welcome {
    inputValues() {
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

    valueHolder = this.inputValues()

    checkInputs = (obj: valueDictionary<any>) => {
        if(!!obj.val1 && !!obj.val2) {
            toggleDisable(playerSelectorWrapper, false)
        } else {
            toggleDisable(playerSelectorWrapper, true)
        }
    }

    nameSettingHandler = (objectIndex: string, inputElemnt: any) => {
        const castedElement = <HTMLInputElement>inputElemnt
        const valueObject = this.valueHolder(objectIndex, castedElement.value)
        this.checkInputs(valueObject)
    }

    runHandling() {
        firstPlayerNameInput.addEventListener('keyup', (e) => {
            this.nameSettingHandler('val1', e.currentTarget)
        })

        secondPlayerNameInput.addEventListener('keyup', (e) => {
            this.nameSettingHandler('val2', e.currentTarget)
        })
    }
}

const welcome = new Welcome
welcome.runHandling()