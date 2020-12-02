import {toggleDisable} from './common/common'

type playerPropertyType = 'name' | 'selector'

interface valueDictionary <TValue>{
    [id: string]: TValue
}

class Welcome {

    private welcomeScreen = document.querySelector('.welcome-screen')
    private firstPlayerNameInput = <HTMLInputElement>this.welcomeScreen?.querySelector('#first-player')
    private secondPlayerNameInput = <HTMLInputElement>this.welcomeScreen?.querySelector('#second-player')
    private playerSelectorWrapper = <HTMLDivElement>document.querySelector('.player')!
    private firstPlayerSelector = <HTMLSelectElement>document.querySelector('#fst-player-selector')!
    private secondPlayerSelector = <HTMLSelectElement>document.querySelector('#snd-player-selector')!


    private nameHolder = this.inputValues()
    private playerHolder = this.inputValues()

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

    private checkNameInputs(obj: valueDictionary<any>) {
        if(!!obj.val1 && !!obj.val2) {
            toggleDisable(this.playerSelectorWrapper, false)
        } else {
            toggleDisable(this.playerSelectorWrapper, true)
        }
    }

    private checkPlayerSelect(obj: valueDictionary<any>) {
        // TODO(tothricsaj): refact this!!!!!! Not too dry code
        if(obj.val1 === 'X') {
            this.secondPlayerSelector[1].disabled = true
            this.secondPlayerSelector[2].disabled = false
            this.firstPlayerSelector.disabled = true
        } else if(obj.val1 === 'O') {
            this.secondPlayerSelector[1].disabled = false
            this.secondPlayerSelector[2].disabled = true
            this.firstPlayerSelector.disabled = true
        }

        if(obj.val2 === 'X') {
            this.firstPlayerSelector[1].disabled = true
            this.firstPlayerSelector[2].disabled = false
            this.secondPlayerSelector.disabled = true
        } else if(obj.val2 === 'O') {
            this.firstPlayerSelector[1].disabled = false
            this.firstPlayerSelector[2].disabled = true
            this.secondPlayerSelector.disabled = true
        }
    }

    private playerPropertySettingHandler(objectIndex: string, inputElemnt: any, playerProperty: playerPropertyType) {
        const castedElement = <HTMLInputElement>inputElemnt
        let valueObject

        if(playerProperty === 'name') {
            valueObject = this.nameHolder(objectIndex, castedElement.value)
            this.checkNameInputs(valueObject)
        }
        else if(playerProperty === 'selector') {
            valueObject = this.playerHolder(objectIndex, castedElement.value)
            this.checkPlayerSelect(valueObject)
        }
    }

    runHandling() {
        this.firstPlayerNameInput.addEventListener('keyup', (e) => {
            this.playerPropertySettingHandler('val1', e.currentTarget, 'name')
        })

        this.secondPlayerNameInput.addEventListener('keyup', (e) => {
            this.playerPropertySettingHandler('val2', e.currentTarget, 'name')
        })

        this.firstPlayerSelector.addEventListener('change', (e) => {
            this.playerPropertySettingHandler('val1', e.currentTarget, 'selector')
        })

        this.secondPlayerSelector.addEventListener('change', (e) => {
            this.playerPropertySettingHandler('val2', e.currentTarget, 'selector')
        })
    }
}

const welcome = new Welcome
welcome.runHandling()