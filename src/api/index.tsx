import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default api;

export const getCharacters = async ():Promise<any> => {
  const res = await api.get("/character") 
  
  return res.data
};

export const getCharacterDetail = async (name:string):Promise<any> => {
  const res = await api.get(`/${name}`)
  return res.data
}

// export const toModelCharacter = (character: any) => {
//   return {
  
//   }
// }

// export const toModelCharacterDetails = (character: any) => {
//   return {
    
//   }
// }