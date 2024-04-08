import axios from 'axios'
const baseUrl = 'api/persons'
//toiminallisuus, joka vastaa palvelimen kanssa kommunikoinnista
const getAll = () => {
  const request = axios.get(baseUrl)
   console.log("numbers.js: getAll",request)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const remove = (id)=>{
   const request = axios.delete(`${baseUrl}/${id}`)
   return request.then(response => response.data)
} 

const update = (id, updatedPerson) => {
  
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
  return request.then((response) => response.data);
};

export default { getAll, create, remove, update}
//Moduuli palauttaa nyt olion, jonka kenttinä (getAll, create) 
//Funktiot palauttavat suoraan Axiosin metodien palauttaman promisen.