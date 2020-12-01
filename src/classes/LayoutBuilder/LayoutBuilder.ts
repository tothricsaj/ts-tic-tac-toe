class LayoutBuilder {
    render(template: string, mountPoint: HTMLDivElement): void {
        mountPoint.insertAdjacentHTML('afterbegin', template)
    }
}

export default LayoutBuilder