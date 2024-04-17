function initializeProfile() {
    var username = document.getElementById('welcomeUsernameInput').value.trim();
    if (username) {
        document.getElementById('usernameInput').value = username;  // Pre-fill the username in the next screen
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('startupScreen').style.display = 'block';
    } else {
        alert("Please enter a username to continue.");
    }
}

function setupProfile() {
    var username = document.getElementById('usernameInput').value.trim();
    if (username) {
        document.getElementById('usernameDisplay').textContent = username;
        document.getElementById('startupScreen').style.display = 'none';
        document.getElementById('profileSection').style.display = 'block';
    } else {
        alert("Please enter a username to continue.");
    }
}

function addCustomPronouns() {
    var pronouns = document.getElementById('pronounSelector').value;
    var points = 0;
    switch(pronouns) {
        case "he/him":
            points = 10;
            break;
        case "she/her":
            points = 20;
            break;
        case "they/them":
            points = 30;
            break;
    }
    if (pronouns) {
        document.getElementById('bio').textContent = `Hi! I am a ${pronouns}.`;
        increaseScore(points);
    }
}

function increaseScore(amount) {
    var currentScore = parseInt(document.getElementById('score').textContent);
    currentScore += amount;
    document.getElementById('score').textContent = currentScore;
}
