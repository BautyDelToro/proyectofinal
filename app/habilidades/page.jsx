'use client';
import { useState } from "react";
import Link from "next/link"
import "./habilidades.css"


export default function Habilidades(){
    
    const [habilidad1, setHabilidad1] = useState()
    const [habilidad2, setHabilidad2] = useState()
    const [habilidad3, setHabilidad3] = useState()
    
    const [cargando1, setCargando1] = useState(true) 
    const [cargando2, setCargando2] = useState(true) 
    const [cargando3, setCargando3] = useState(true) 

    if(cargando1===true ){
        const fetchpoke = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/ability/overgrow"));
            if(res.ok===true){
                const data = await res.json()
                setHabilidad1(data) 
                setCargando1(false)
            }
            } 
            fetchpoke(); 
    }

    if(cargando2===true ){
        const fetchpoke = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/ability/magnet-pull"));
            if(res.ok===true){
                const data = await res.json()
                setHabilidad2(data) 
                setCargando2(false)
            }
            } 
            fetchpoke(); 
    }

    if(cargando3===true ){
        const fetchpoke = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/ability/flash-fire"));
            if(res.ok===true){
                const data = await res.json()
                setHabilidad3(data) 
                setCargando3(false)
            }
            } 
            fetchpoke(); 
    }

    if(cargando1===false && cargando2===false && cargando3===false){
        return(
            <>
            <h2>Oli</h2>
            <a href="./pokemones#oliVeneno">oli</a>
            
            <h2 id="oli">aaa</h2>
            <h2>{habilidad1.name}</h2>
            <h2>{habilidad1.effect_entries[0].effect}</h2>
            <h2>{habilidad2.name}</h2>
            <h2>{habilidad2.effect_entries[0].effect}</h2>
            <h2>{habilidad3.name}</h2>
            <h2>{habilidad3.effect_entries[0].effect}</h2>
            <br/>
            <br/>  
            <div className="oli">
                <h2>oli</h2>
            </div>

            </>
        )
    }
}