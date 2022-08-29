const name = "Romeo";
const institution = "University of Cape Town";
const githubUserName = "RMngqibisa";
console.log("My name is", name + ", a student from the", institution, "and my Github username is", githubUserName + ".")


const mtnAppCategories = [
    "Best Consumer Solution",
    "Best Enterprise Solution",
    "Best African Solution",
    "Most Innovative Solution",
    "Best Gaming Solution",
    "Best Health Solution",
    "Best Agricultural Solution",
    "Best Educational Solution",
    "Best Financial Solution",
    "Best Hackathon Solution",
    "Best South African Solution",
    "Best Campus Cup Solution",
    "Huawei AppGallery"
  ];

function AppAwardsWinner(mtnAppCategories) {
      
      const random = Math.floor(Math.random()*mtnAppCategories.length-1);
      return mtnAppCategories[random];
}
console.log(AppAwardsWinner(mtnAppCategories));



const fs = require('fs');
  
let data = "Wa ba biza bonke uNoah, wabakhela inqananwe, wathi imvul'iyeza, oh ngena Noah...!";
  
fs.writeFile("NgenaNoah.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});


fs.readFile('NgenaNoah.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
  console.log(data.toString());
  }
});