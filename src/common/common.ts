import {htmlElementTypes} from '../types'

export const toggleDisable = (parentElem: htmlElementTypes, enable: boolean) => {
    const displayProperty = enable ? 'block' : 'none'
    parentElem.querySelector('.disable-cover')?.setAttribute('style', `display: ${displayProperty}`)
}