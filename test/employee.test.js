// class Employee {
//     constructor(name, id, email) {
//         this.name = name
//         this.id = id
//         this.email = email
//     }

//     getName() {
//         return this.name.split('')[0].toUpperCase().join('')
//     }

//     getId() {
//         return this.name
//     }
// }

describe('Employee class', () => {
    it('Takes parameters for name, id, and email and creates properties of the class with values passed in', () => {
        const employee1 = new Employee('Frank', '1', 'fr4nk@fakemail.com')

        // Name call
        expect(employee1.name).toBe('Frank')

        // id call
        expect(employee1.id).toBe('1')

        // email call
        expect(employee1.email).toEqual('fr4nk@fakemail.com')
    })

    it('returns a name with a capitalized first letter', () => {
        const employee1 = new Employee('frank', '1', 'fr4nk@fakemail.com')

        expect(employee1.getName().toEqual('Frank'))
    })

    it("returns the employee's id number", () => {
        const employee1 = new Employee('frank', '1', 'fr4nk@fakemail.com')

        expect(employee.getId().toEqual('1'))
    })

    it("returns the employee's email", () => {
        const employee1 = new Employee('frank', '1', 'fr4nk@fakemail.com')

        expect(employee1.getEmail().toEqual('fr4nk@fakemail.com'))
    })

    it("returns 'Employee' as the role", () => {
        const employee1 = new Employee('frank', '1', 'fr4nk@fakemail.com')

        expect(employee1.getRole().toEqual('Employee'))
    })
})