import axios from "axios";


const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default api;

export const getCharacters = async ()=> {
  const res = await api.get("/character") 
  const modeledList = res.data.results.map(i=>toModelCharacter(i) )
  const result = {
    info: {
      next: res.data.info.next,
      prev: res.data.info.prev
    },
    list: modeledList
  }
  return result
};

export const getCharacterDetail = async (id)=> {
  const res = await api.get(`/character/${id}`)
  return toModelCharacter(res.data)
}

export const toModelCharacter = (char) => {
  return {
    id: char.id,
    name: char.name,
    gender:  char.gender ,
    species:  char.species ,
    status:  char.status ,
    image:  char.image ,
    type:  char.type ,
    location: char.location.name,
    origin: char.origin.name,
    favorite: false
  }
}

