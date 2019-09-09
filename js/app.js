console.log("app.js");

// Get data from randomuser API
let data;

var fetchUserData = () => {
  console.log("fetching data");
  fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(json => {
      data = json;
    });
}

fetchUserData();




// Generate avatars from random user data
let avatar = [];

const generateAvatars = () => {
  data.results.forEach((e,i) => {
    avatar.push(e.picture.large);
  });
}

setTimeout(generateAvatars, 1000);




// Get scores data from file
var scores;
fetch("../scores.json")
  .then(response => response.json())
  .then(json => {
    scores = json;
});




// Add avatars to scores array

const addAvatarsToScores = () => {
  scores.forEach((e,i) => {
    e.avatar = avatar[i];
  });
};

setTimeout(addAvatarsToScores, 1100);




// Display scores to page
let displayScores = document.getElementById("displayScores");
let html = "";

const generateHTMLofScores = () => { 
  for (let i = 0; i < 10; i++) {
    html += `<div class='row'>`;
    html += `<div class='username'>${scores[i].name}</div>`;
    html += `<div class='score'>${scores[i].RSS}</div>`;
    html += `<div class='avatar'><img src='${scores[i].avatar}'></div>`;
    html += `</div>`;
    html += "</br>";
  }

  displayScores.innerHTML = html;
};

setTimeout(generateHTMLofScores, 1200);












displayScores.innerHTML = "hello";

