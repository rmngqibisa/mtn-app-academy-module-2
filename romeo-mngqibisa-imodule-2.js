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

function AppAwardsWinner() {
      
      const random = Math.floor(Math.random()*mtnAppCategories.length-1);
      return mtnAppCategories[random];
}
console.log(AppAwardsWinner(mtnAppCategories));


const fs = require('fs');
  
let data = 
  "App Name: UniWise,\nCategory: Education, \nDeveloper: Themba Ngoma";
  
fs.writeFile("CampusCup2021.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});


fs.readFile('CampusCup2021.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
  console.log(data.toString());
  }
});

/*

//I wrote this code homeage on the Xhosa/Zulu version of the famous song based on Noah and his ark.   

const peopleListenedToNoahsWarning = true;

function shouldNoahNgenaKwiNqanawe () {
  if (peopleListenedToNoahsWarning === true) {
    return 'Ohhh, ngena Noah! \n[Nesizukulwana sakho!]';
  } else {
    return 'Ba bize bonke, Noah!';
  } 
}
console.log(shouldNoahNgenaKwiNqanawe()); 

*/