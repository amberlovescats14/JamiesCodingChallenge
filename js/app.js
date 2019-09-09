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