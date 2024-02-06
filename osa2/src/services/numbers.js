import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
   console.log("numbers.js: getAll",request)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

/*
export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}*/ 
export default { getAll, create, update }


//Moduuli palauttaa nyt olion, jonka kenttinä (getAll, create ja update) 
//on kolme muistiinpanojen käsittelyä hoitavaa funktiota. 
//Funktiot palauttavat suoraan Axiosin metodien palauttaman promisen.