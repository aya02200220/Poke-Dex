import React, { useEffect, useState } from 'react';
import Card from './Card';
import Pokeinfo from './Pokeinfo';
import axios from 'axios';

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async()=>{
        setLoading(true);
        const res = await axios.get(url);
        // console.log(res.data.result);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        // console.log(pokeData);
    } 

    const getPokemon = async(res) => {
        res.map(async(item) =>{
            const result = await axios.get(item.url);
            // console.log(result.data);
            setPokeData(state => {
                state = [...state, result.data];    // ...は「まず全てstoreしてarr作って」って意味
                state.sort((a, b)=> a.id > b.id ? 1 : -1);
                return state;
            })
        })
    }

    useEffect(()=>{
        pokeFun();
    },[url])
    
    return (
    <>
        <div className="container">
            <div className="left-content">
                <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
                
                <div className="btn-group">
                    {   prevUrl && <button onClick={()=>{   // prevUrlに値が入っていれば&&以降を見せる、なければ&&以降見えなくする
                        setPokeData([]) // 「次へ」を押す度にまず空のarrを渡す ▶︎ それまでの20itemはリセットされる ▶︎ 次の20itemだけ入る
                        setUrl(prevUrl)
                    }}>Previous</button>}
                    {   nextUrl && <button onClick={()=>{
                        setPokeData([])
                        setUrl(nextUrl)
                    }}>Next</button>}
                </div>
            </div>
            <div className="right-content">
                <Pokeinfo data={pokeDex} />
            </div>
        </div>
    </>
  )
}

export default Main;