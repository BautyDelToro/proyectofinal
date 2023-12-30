'use client';
import { useState, useEffect } from "react" 


export default function Tarjetapokemon (tipo){
        
    const [cargando1, setCargando1] = useState(true) //cargando empieza en true
    const [cargando2, setCargando2] = useState(true) //cargando empieza en true

    
    // guardamos al pokemon
    const [poke, setPoke] = useState()
    const [pokeTipo, setPokeTipo] = useState()
    console.log({tipo})

    // el [] signica que queremos que llame a la api una sola vz
    useEffect(()=> {

        const fetchpokeTipo = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/type/"+tipo.tipo));
            if(res.ok===true){
                const data = await res.json()
                setPokeTipo(data) //le pongo toda esta data al pokemon
                setCargando1(false)
            }
        } 
        fetchpokeTipo();
    },[]);
    
    useEffect(()=> {
        console.log("oluuaa")
        if(pokeTipo){
            console.log("oluuaaaaaaaaa")
            const fetchpoke = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/pokemon/"+pokeTipo.pokemon[0].pokemon.name));
            if(res.ok===true){
                const data = await res.json()
                setPoke(data) //le pongo toda esta data al pokemon
                setCargando2(false)
                console.log({olaa})
            }
        } 
        fetchpoke();}
    },[]);

    if(cargando1===true&&cargando2===true){ //poniendo esto, me ahorro todo lo que comenté abajo
        return
    }
    return(
        
        
        <div>
            <h3>{pokeTipo.pokemon[0].pokemon.name}</h3>
            <h3>{tipo.tipo}</h3>
        </div>
    )
}