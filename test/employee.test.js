const Employee = require('../lib/Employee')

describe('Employee class', () => {
    it('Takes parameters for name, id, and email and creates properties of the class with values passed in', () => {
        const employee1 = new Employee('Frank', '1', 'fr4nk@fakemail.com')

        // Name call
        expect(employee1.name).toBe('Frank')

        // id call
        expect(employee1.id).toBe('1')

        // email call
        expect(employee1.email).toBe('fr4nk@fakemail.com')
    })

    it('returns a name with a capitalized first letter', () => {
        const employee1 = new Employee('fraNk', '1', 'fr4nk@fakemail.com')

        expect(employee1.getName()).toBe('Frank')
    })

    it("returns the employee's id number", () => {
        const employee1 = new Employee('frank', '1', 'fr4nk@fakemail.com')

        expect(employee1.getId()).toBe('1')
    })

    it("returns the employee's email", () => {
        const employee1 = new Employee('frank', '1', 'fr4nk@fakemail.com')

        expect(employee1.getEmail()).toBe('fr4nk@fakemail.com')
    })

    it("returns 'Employee' as the role", () => {
        const employee1 = new Employee('frank', '1', 'fr4nk@fakemail.com')

        expect(employee1.getRole()).toBe('Employee')
    })
})