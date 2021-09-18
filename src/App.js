import { useEffect, useState } from "react";
import "./App.css";
import PageTitle from "./components/PageTitle";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function requestName() {
    for (let i = 0; i < 5; i++) {
      await getPokemon(i);
    }
  }

  function getPokemon(id) {
    const link = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return axios({
      method: "GET",
      url: link,
    })
      .then((res) => {
        console.log(res.data.name);
        return res.data;
      })
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    requestName();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="mainScreen">
        <PageTitle />
      </div>
    );
  }
}

export default App;
