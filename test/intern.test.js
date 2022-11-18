describe('Intern subclass', () => {
    it('Takes an extra parameter for school', () => {
        const intern = new Intern('Stanley', '4', '5tan@fakemail.com', 'UofA')

        expect(intern.school).toEqual('UofA')
    })

    it("returns the employee's school", () => {
        const intern = new Intern('Stanley', '4', '5tan@fakemail.com', 'UofA')

        expect(intern.getSchool().toEqual('UofA'))
    })

    it('return "Engineer" as the role', () => {
        const intern = new Intern('Stanley', '4', '5tan@fakemail.com', 'UofA')
        
        expect(intern.getRole().toEqual('Intern'))
    })
})