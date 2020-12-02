import {toggleDisable} from './common/common'

interface valueDictionary <TValue>{
    [id: string]: TValue
}

class Welcome {

    private welcomeScreen = document.querySelector('.welcome-screen')
    private firstPlayerNameInput = <HTMLInputElement>this.welcomeScreen?.querySelector('#first-player')
    private secondPlayerNameInput = <HTMLInputElement>this.welcomeScreen?.querySelector('#second-player')
    private playerSelectorWrapper = <HTMLDivElement>document.querySelector('.player')!

    private valueHolder = this.inputValues()

    private inputValues() {
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

    private checkInputs(obj: valueDictionary<any>) {
        if(!!obj.val1 && !!obj.val2) {
            toggleDisable(this.playerSelectorWrapper, false)
        } else {
            toggleDisable(this.playerSelectorWrapper, true)
        }
    }

    private nameSettingHandler(objectIndex: string, inputElemnt: any) {
        const castedElement = <HTMLInputElement>inputElemnt
        const valueObject = this.valueHolder(objectIndex, castedElement.value)
        this.checkInputs(valueObject)
    }

    runHandling() {
        this.firstPlayerNameInput.addEventListener('keyup', (e) => {
            this.nameSettingHandler('val1', e.currentTarget)
        })

        this.secondPlayerNameInput.addEventListener('keyup', (e) => {
            this.nameSettingHandler('val2', e.currentTarget)
        })
    }
}

const welcome = new Welcome
welcome.runHandling()