function setupProfile() {
    var username = document.getElementById('usernameInput').value.trim();
    if(username) {
        document.getElementById('usernameDisplay').textContent = username;
        document.getElementById('startupScreen').style.display = 'none';
        document.getElementById('profileSection').style.display = 'block';
    } else {
        alert("Please enter a username to continue.");
    }
}

function enableSaveButton() {
    document.getElementById('savePronouns').disabled = false;
}

function addCustomPronouns() {
    var pronouns = document.getElementById('customPronouns').value.trim();
    if(pronouns) {
        document.getElementById('bio').textContent = `Hi! I am a ${pronouns}.`;
        increaseScore(10); // Increase score by 10 for adding pronouns
    }
}

function increaseScore(amount) {
    var currentScore = parseInt(document.getElementById('score').textContent);
    currentScore += amount;
    document.getElementById('score').textContent = currentScore;
}
