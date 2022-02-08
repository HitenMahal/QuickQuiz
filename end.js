const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = `${mostRecentScore}/5`;

let messages = [
    "Please tell me you answered all wrong on purpose🤦‍♂️",
    "I'm going to have to confiscate your friendship privilages✋",
    "...😬",
    "Didn't pass the vibe check😬",
    "I mean you tried😬",
    "Idk bro, not very perfect of you🤨",
    "Congrats, you're a perfect human being. Hi Emily💜"
]
const finalMessage = document.getElementById('finalMessage');
finalMessage.innerText = messages[mostRecentScore]