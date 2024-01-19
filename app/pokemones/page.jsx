'use client';
import { useState } from 'react';
import Imagentipo from '../Componentes/Imagentipo'
import './pokemones.css'


export default function Pokemones (){
    
    return(
        <div className='divpokemones'>
            <h1 className='tituloGrande'>Pokemons by type</h1>
            <div>
                <Imagentipo titulo="fire" imagen="/imagenes/Fuego.png" idd="fire" Poke2="braixen" Poke3="infernape" />
                <Imagentipo titulo="fighting" imagen="/imagenes/Lucha.png" idd="fighting" Poke2="machamp" Poke3="lucario"/>
                <Imagentipo titulo="ground" imagen="/imagenes/Tierra.png" idd="ground" Poke2="palossand" Poke3="onix" />
                <Imagentipo titulo="electric" imagen="/imagenes/Electrico.png" idd="electric" Poke2="raichu-alola" Poke3="luxray" />
                <Imagentipo titulo="rock" imagen="/imagenes/Roca.png" idd="rock" Poke2="bastiodon" Poke3="lairon" />
                <Imagentipo titulo="bug" imagen="/imagenes/Bicho.png" idd="bug" Poke2="beedrill" Poke3="beautifly" />
                <Imagentipo titulo="grass" imagen="/imagenes/Planta.png" idd="grass" Poke2="servine" Poke3="lurantis" />
                <Imagentipo titulo="ice" imagen="/imagenes/Hielo.png" idd="ice" Poke2="ninetales-alola" Poke3="vanilluxe" />
                <Imagentipo titulo="steel" imagen="/imagenes/Acero.png" idd="steel" Poke2="metagross" Poke3="dialga" />
                <Imagentipo titulo="water" imagen="/imagenes/Agua.png" idd="water" Poke2="greninja" Poke3="gyarados" />
                <Imagentipo titulo="flying" imagen="/imagenes/Vuelo.png" idd="flying" Poke2="golbat" Poke3="staraptor" />
                <Imagentipo titulo="dragon" imagen="/imagenes/Dragon.png" idd="dragon" Poke2="drakloak" Poke3="salamence-mega" />
                <Imagentipo titulo="poison" imagen="/imagenes/Veneno.png" idd="poison" Poke2="haunter" Poke3="arbok" />
                <Imagentipo titulo="fairy" imagen="/imagenes/Hada.png" idd="fairy" Poke2="magearna" Poke3="rapidash-galar" />
                <Imagentipo titulo="psychic" imagen="/imagenes/Psiquico.png" idd="psychic" Poke2="mewtwo" Poke3="tapu-lele" />
                <Imagentipo titulo="ghost" imagen="/imagenes/Fantasma.png" idd="ghost" Poke2="cursola" Poke3="banette-mega" />
                <Imagentipo titulo="dark" imagen="/imagenes/Siniestro.png" idd="dark" Poke2="mightyena" Poke3="zorua" />
                <Imagentipo titulo="normal" imagen="/imagenes/Normal.png" idd="normal" Poke2="ursaring" Poke3="arceus" />

            </div>
        </div>
    )
}