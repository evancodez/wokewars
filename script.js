document.getElementById('loginSection').style.display = 'block';
document.getElementById('profileSection').style.display = 'none';

function startGame() {
    var username = document.getElementById('usernameInput').value;
    document.getElementById('usernameDisplay').textContent = username;
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('profileSection').style.display = 'block';
    setTimeout(function() {
        document.getElementById('notifications').innerHTML = `<p>@${username} is not an ally to the trans community. No pronouns in bio.</p>`;
    }, 2000);
}

function addPronouns() {
    let pronouns = prompt("Enter your pronouns:");
    let currentBio = document.getElementById('bio').textContent;
    document.getElementById('bio').textContent = `Pronouns: ${pronouns} | ${currentBio}`;
    document.getElementById('notifications').innerHTML += `<p>Pronouns added!</p>`;
}
