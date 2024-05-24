function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob) {
        const birthDate = new Date(dob.split('/').reverse().join('-'));
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        document.getElementById('result').textContent = `Your age is ${age}`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid date of birth';
    }
}
