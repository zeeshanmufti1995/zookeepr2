const express = require("express")
const PORT = process.env.PORT || 3001;
const app = express();
const {animals} = require('./data/animals.json');

function filterByQuery(query, animalsArray) {
  console.log(animalsArray)
  let filteredResults = animalsArray;
  if (query.diet) {
    filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
  }
  if (query.species) {
    filteredResults = filteredResults.filter(animal => animal.species === query.species);
  }
  if (query.name) {
    filteredResults = filteredResults.filter(animal => animal.name === query.name);
  }
  return filteredResults;
}



app.get('/api/animals',(req,res)=>{
  let results = animals;
  if(req.query){
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

