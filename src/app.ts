import LayoutBuilder from './classes/LayoutBuilder/LayoutBuilder'

const builder = new LayoutBuilder

builder.render('<h2>Working</h2>', <HTMLDivElement>document.getElementById('root'))