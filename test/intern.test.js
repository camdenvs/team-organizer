const Intern = require('../lib/Intern')

describe('Intern subclass', () => {
    it('Takes an extra parameter for school', () => {
        const intern = new Intern('Stanley', '4', '5tan@fakemail.com', 'UofA')

        expect(intern.school).toBe('UofA')
    })

    it("returns the employee's school", () => {
        const intern = new Intern('Stanley', '4', '5tan@fakemail.com', 'UofA')

        expect(intern.getSchool()).toBe('UofA')
    })

    it('return "Engineer" as the role', () => {
        const intern = new Intern('Stanley', '4', '5tan@fakemail.com', 'UofA')
        
        expect(intern.getRole()).toBe('Intern')
    })
})