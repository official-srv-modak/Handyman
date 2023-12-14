const initialUserData = {
    'user1': 'password1',
    'user2': 'password2',
    'user3': 'password3'
};

localStorage.setItem('userData', JSON.stringify(initialUserData));

function authenticateUser(username, password) {
    const userData = initialUserData;

    // Check if the username exists and the password matches
    if (userData.hasOwnProperty(username) && userData[username] === password) {
        console.log('Authentication successful. Welcome, ' + username + '!');
        return true;
    } else {
        console.log('Authentication failed. Please check your username and password.');
        return false;
    }
}