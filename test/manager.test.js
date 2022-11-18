describe('Manager subclass', () => {
    it('Takes an extra parameter for officeNumber', () => {
        const manager = new Manager('Terry', '2', 't3rry@fakemail.com', '1')

        expect(manager.officeNumber).toEqual('1')
    })
    
    it('return "Manager" as the role', () => {
        const manager = new Manager('Terry', '2', 't3rry@fakemail.com', '1')

        expect(manager.getRole().toEqual('Manager'))
    })
})