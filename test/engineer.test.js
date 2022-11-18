describe('Engineer subclass', () => {
    it('Takes an extra parameter for github username', () => {
        const engineer = new Engineer('Miles', '3', 'm1les@fakemail.com', 'imperialmiles')

        expect(engineer.github).toEqual('imperialmiles')
    })

    it("returns the employee's github username", () => {
        const engineer = new Engineer('Miles', '3', 'm1les@fakemail.com', 'imperialmiles')

        expect(engineer.getGithub().toEqual('imperialmiles'))
    })

    it('return "Engineer" as the role', () => {
        const engineer = new Engineer('Miles', '3', 'm1les@fakemail.com', 'imperialmiles')

        expect(engineer.getRole().toEqual('Engineer'))
    })
})