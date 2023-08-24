import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import NavBar from "./NavBar";
import { Box } from "@mui/material";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    // console.log(res.data.result);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    // console.log(pokeData);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      // console.log(result.data);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <NavBar />
      <Box className="container" sx={{ display: "flex" }}>
        <Box sx={{ width: "65%", display: "flex", flexWrap: "wrap", gap: 3 }}>
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  // prevUrlに値が入っていれば&&以降を見せる、なければ&&以降見えなくする
                  setPokeData([]); // 「次へ」を押す度にまず空のarrを渡す ▶︎ それまでの20itemはリセットされる ▶︎ 次の20itemだけ入る
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}
            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </Box>
        <Box
          className="right-content"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              border: "solid 1px #cac6ba",
              maxWidth: "80%",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Pokeinfo data={pokeDex} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Main;
