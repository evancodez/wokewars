document.getElementById('profileSection').style.display = 'block';

function updateUsername() {
    var username = document.getElementById('usernameInput').value;
    document.getElementById('usernameDisplay').textContent = username;
}

function addCustomPronouns() {
    var pronouns = document.getElementById('customPronouns').value;
    if (pronouns) {
        document.getElementById('bio').textContent = `Hi! I am a ${pronouns} straight white male.`;
        increaseScore(10); // Increase score by 10 for adding pronouns
    }
}

function increaseScore(amount) {
    var currentScore = parseInt(document.getElementById('score').textContent);
    currentScore += amount;
    document.getElementById('score').textContent = currentScore;
}

setTimeout(function() {
    let tweetDiv = document.getElementById('tweetContainer');
    tweetDiv.innerHTML = `<p>Your profile lacks inclusive pronouns!</p>`;
    tweetDiv.style.display = 'block';
    increaseScore(-5); // Reduce score by 5 for criticism
}, 5000); // Trigger the first tweet after 5 seconds
