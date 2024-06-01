document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const shuffleButton = document.getElementById('shuffleButton');
    const employeeList = document.getElementById('employeeList');
    const resultList = document.getElementById('resultList');

    let employees = [];

    fetchButton.addEventListener('click', fetchEmployees);
    shuffleButton.addEventListener('click', shuffleSecretAdmirers);

    async function fetchEmployees() {
        // Simulating a fetch request
        employees = ['Prajakta', 'Divya', 'Abhinav', 'Rishibh', 'Ravi'];
        displayEmployees();
        shuffleButton.disabled = false;
    }

    function displayEmployees() {
        employeeList.innerHTML = '';
        employees.forEach(employee => {
            const li = document.createElement('li');
            li.textContent = employee;
            employeeList.appendChild(li);
        });
    }

    function shuffleSecretAdmirers() {
        const admirers = [...employees];
        let shuffledAdmirers = [];

        while (admirers.length) {
            const randomIndex = Math.floor(Math.random() * admirers.length);
            shuffledAdmirers.push(admirers.splice(randomIndex, 1)[0]);
        }

        // Ensure no one admires themselves
        for (let i = 0; i < employees.length; i++) {
            if (employees[i] === shuffledAdmirers[i]) {
                return shuffleSecretAdmirers();
            }
        }

        displayResults(shuffledAdmirers);
    }

    function displayResults(shuffledAdmirers) {
        resultList.innerHTML = '';
        for (let i = 0; i < employees.length; i++) {
            const li = document.createElement('li');
            li.textContent = `${employees[i]} admires ${shuffledAdmirers[i]}`;
            resultList.appendChild(li);
        }
    }
});
