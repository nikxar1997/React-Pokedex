import axios from "axios";
const URL = "https://pokeapi.co/api/v2/pokemon/";
export function requestName(endpoint, setData, setLoading) {
  return axios({
    method: "GET",
    url: URL + endpoint,
  })
    .then((res) => {
      //console.log(res.data,1)
      return res.data;
    })
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}
