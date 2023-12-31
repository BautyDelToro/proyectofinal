'use client';
import { useState, useEffect } from "react" 
import './Tarjetapokemon.css'

export default function Tarjetapokemon (tipo){

    const [cargando1, setCargando1] = useState(true) 
    const [cargando2, setCargando2] = useState(true) 

    
    const [poke, setPoke] = useState()
    const [pokeTipo, setPokeTipo] = useState()


        if(cargando1===true && cargando2 === true){
            const fetchpokeTipo = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/type/"+tipo.tipo));
            if(res.ok===true){
                const data = await res.json()
                setPokeTipo(data) 
                setCargando1(false)
            }
            } 
            fetchpokeTipo();
        }
    

        if(cargando1===false && cargando2===true){
            const fetchpoke = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/pokemon/"+pokeTipo.pokemon[0].pokemon.name));
            if(res.ok===true){
                const data = await res.json()
                setPoke(data) 
                setCargando2(false)
                setCargando1(false)
            }
            } 
            fetchpoke();
        }

    if(cargando1===true&&cargando2===true){ 
        return(
            <h4>Cargando...</h4>
        )
    }
    if(cargando1===false && cargando2===false){
        return(
            
            
            <div className="tarjeta1">
                <h3>{pokeTipo.pokemon[0].pokemon.name}</h3>
                <h3>{tipo.tipo}</h3>
                <h3>{poke.name}</h3>
                <img src={poke.sprites.front_default} alt="" />
            </div>
        )
    }
}