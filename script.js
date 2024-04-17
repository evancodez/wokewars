document.addEventListener('DOMContentLoaded', function () {
    var username = prompt("Enter your username:");
    document.getElementById('usernameDisplay').textContent = username;
    document.getElementById('bio').textContent += ` straight white male.`;

    setTimeout(function() {
        let tweetDiv = document.getElementById('tweetContainer');
        tweetDiv.innerHTML = `<p>@${username} is not an ally to the trans community. No pronouns in bio.</p>`;
        tweetDiv.style.display = 'block';
    }, 5000); // Change this to a longer delay if needed
});

function addPronouns() {
    var pronouns = document.getElementById('pronounSelector').value;
    if (pronouns === "custom") {
        pronouns = prompt("Enter your custom pronouns:");
    }
    if (pronouns) {
        document.getElementById('bio').textContent = `Hi! I am a ${pronouns} straight white male.`;
        alert("Pronouns added!");
    }
}
