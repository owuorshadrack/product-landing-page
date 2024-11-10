function signUp() {
    let name = document.getElementById('signUpName').value;
    let email = document.getElementById('signUpEmail').value;
    let password = document.getElementById('signUpPassword').value;

    if (name && email && password) {
        alert('Sign Up Successful!');
        // Here, you would typically send this data to a server
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert('Login Successful!');
        // Here, you would typically validate this data with a server
    } else {
        alert('Please fill in all fields.');
    }
}