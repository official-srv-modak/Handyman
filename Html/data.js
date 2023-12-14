const initialUserData = {
};

function authenticateUser(username, password) {
    const userData = getUserData();

    // Check if the username exists and the password matches
    if (userData.hasOwnProperty(username) && userData[username] === password) {
        console.log('Authentication successful. Welcome, ' + username + '!');
        return true;
    } else {
        console.log('Authentication failed. Please check your username and password.');
        return false;
    }
}

function login() {
    document.addEventListener('DOMContentLoaded', function () {
        var loginForm = document.querySelector('form');

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var email = document.getElementById('email').value;
            var password = document.getElementById('pwd').value;

            if (authenticateUser(email, password)) {
                alert('Logged in successfully!');
                window.location.href = 'home.html'; // Change '/home' to your actual home page URL
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    });
}


// Save the initial user data to localStorage
function initialiseUserData()
{
    userData = localStorage.setItem('userData', JSON.stringify(initialUserData));

    if (userData !== null) {
        initialUserData = userData;
    }
    else{
        initialUserData = {
            'user1': 'password1',
            'user2': 'password2',
            'user3': 'password3'
        };
        localStorage.setItem('userData', JSON.stringify(initialUserData));
    }
    
}

// Check if localStorage is supported
if (typeof Storage !== 'undefined') {
    // Function to get user data from localStorage or initialize an empty object
    function getUserData() {
        return JSON.parse(localStorage.getItem('userData')) || {};
    }

    // Function to save user data to localStorage
    function saveUserData(userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    // Function to add or edit a user
    function addOrUpdateUser(username, password) {
        const userData = getUserData();

        // Add or update the user
        userData[username] = password;

        // Save the updated userData object to localStorage
        saveUserData(userData);

        console.log('User data updated successfully.');
    }

    // Function to get password for a specific username
    function getPassword(username) {
        const userData = getUserData();
        return userData[username];
    }

    // Function to remove a user
    function removeUser(username) {
        const userData = getUserData();

        // Check if the user exists before removing
        if (userData.hasOwnProperty(username)) {
            delete userData[username];

            // Save the updated userData object to localStorage
            saveUserData(userData);

            console.log('User removed successfully.');
        } else {
            console.log('User not found.');
        }
    }


    function signup()
    {
        document.addEventListener('DOMContentLoaded', function () {
            var signUpForm = document.querySelector('form');
    
            signUpForm.addEventListener('submit', function (event) {
                event.preventDefault();
    
                // Get the entered values
                var email = document.getElementById('email').value;
                var name = document.getElementById('name').value;
                var password = document.getElementById('pwd').value;
                var phoneNumber = document.getElementById('number').value;
    
                // Additional settings
                var receiveAnnouncement = document.getElementById('announcement').checked;
                var contactMethod = document.getElementById('contact').value;
    
                if (!email || !name || !password || !phoneNumber) {
                    alert('Please fill in all mandatory fields.');
                    return; // Stop further processing
                }
    
                // Display alert for successful signup
                alert('Signup successful!');
                addOrUpdateUser(email, password);
                window.location.href = 'home.html'; // Change '/home' to your actual home page URL
            });
        });
    }

}

initialUserData();
