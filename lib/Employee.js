class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        const splitName = this.name.split('')
        for (var i = 0; i < splitName.length; i++) {
            if (i == 0) {
                splitName[i] = splitName[i].toUpperCase()
            } else {
                splitName[i] = splitName[i].toLowerCase()
            }
        }
        const formatName = splitName.join('')
        return formatName
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee