(async function () {
    const data = await fetch('./src/data.json')
    const result = await data.json()
    let employees = result
    let selectedEmployeeId = employees[0].id
    let selectedEmployee = employees[0]
    const employeeList = document.querySelector(".employees__names--list")
    const employeeInfo = document.querySelector(".employees__names--info")

    // Select Employee
    employeeList.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN' && selectedEmployeeId !== e.target.id) {
            selectedEmployeeId = e.target.id
            renderEmployyes()
            renderSingleEmployee()
        }
    })

    const renderEmployyes = () => {
        employeeList.innerHTML = ''
        employees.forEach(emp => {
            const employee = document.createElement('span')
            employee.classList.add('employees__names--item')

            if (parseInt(selectedEmployeeId) === parseInt(emp.id)) {
                employee.classList.add('selected')
                selectedEmployee = emp
                renderSingleEmployee()
            }

            employee.setAttribute('id', emp.id)
            employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">x</i>`

            employeeList.append(employee)
        })
    }

    const renderSingleEmployee = () => {
        employeeInfo.innerHTML = `
            <img src="${selectedEmployee.imageUrl}"/>
            <span class="employees__single--heading">
            ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
            </span>
            <span>${selectedEmployee.address}</span>
            <span>${selectedEmployee.email}</span>
            <span>Mobile - ${selectedEmployee.contactNumber}</span>
            <span>DOB - ${selectedEmployee.dob}</span>
        `
    }
    renderEmployyes()
})()