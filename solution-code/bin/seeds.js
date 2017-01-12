const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies-development');

const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: "Tom Cruise",
    gender: "Little Man",
    occupation: "Scientology Ambassador",
    catchPhrase: "Show me the money!",
    netWorth: 350000000,
    isDeceased: false
  },
  {
    name: "Samuel L. Jackson",
    gender: "Man",
    occupation: "Hitman",
    catchPhrase: "English! Do you speak it?",
    netWorth: 150000000,
    isDeceased: false
  },
  {
    name: "Kim Kardashian",
    gender: "Glamour Girl",
    occupation: "Unknown",
    catchPhrase: "...",
    netWorth: 51000000,
    isDeceased: false
  },
  {
    name: "Beyonce",
    gender: "Hard Working Woman",
    occupation: "Musical Scientist",
    catchPhrase: "If you liked then you should've put a ring on it.",
    netWorth: 450000000,
    isDeceased: false
  }
];

Celebrity.create(celebrities, (err, savedCelebrities) => {
  if (err) { throw err; }

  savedCelebrities.forEach(theCelebrity => {
    console.log(`${theCelebrity.name} - ${theCelebrity._id}`);
  });
  mongoose.disconnect();
});
