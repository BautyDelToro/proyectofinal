'use client';
import Imagentipo from '../Componentes/Imagentipo'
import './pokemones.css'


export default function Pokemones (){

    return(
        <div className='divpokemones'>
            <h1>Pokemons by type</h1>
            <div>
                <Imagentipo titulo="Fuego" imagen="/imagenes/Fuego.png" idd="fire" Poke2="flareon" Poke3="litten" />
                <Imagentipo titulo="Lucha" imagen="/imagenes/Lucha.png" idd="fighting" Poke2="machamp" Poke3="lucario"/>
                <Imagentipo titulo="Tierra" imagen="/imagenes/Tierra.png" idd="ground" Poke2="palossand" Poke3="onix" />
                <Imagentipo titulo="Psíquico" imagen="/imagenes/Psiquico.png" idd="psychic" Poke2="gardevoir" Poke3="hattrem" />
                <Imagentipo titulo="Eléctrico" imagen="/imagenes/Electrico.png" idd="electric" Poke2="raichu" Poke3="luxray" />
                <Imagentipo titulo="Roca" imagen="/imagenes/Roca.png" idd="rock" Poke2="bastiodon" Poke3="lairon" />
                <Imagentipo titulo="Bicho" imagen="/imagenes/Bicho.png" idd="bug" Poke2="beedrill" Poke3="beautifly" />
                <Imagentipo titulo="Planta" imagen="/imagenes/Planta.png" idd="grass" Poke2="servine" Poke3="roserade" />
                <Imagentipo titulo="Hielo" imagen="/imagenes/Hielo.png" idd="ice" Poke2="regice" Poke3="vanilluxe" />
                <Imagentipo titulo="Acero" imagen="/imagenes/Acero.png" idd="steel" Poke2="metagross" Poke3="dialga" />
                <Imagentipo titulo="Agua" imagen="/imagenes/Agua.png" idd="water" Poke2="froakie" Poke3="gyarados" />
                <Imagentipo titulo="Vuelo" imagen="/imagenes/Vuelo.png" idd="flying" Poke2="golbat" Poke3="staraptor" />
                <Imagentipo titulo="Dragón" imagen="/imagenes/Dragon.png" idd="dragon" Poke2="druddigon" Poke3="dreepy" />
                <Imagentipo titulo="Veneno" imagen="/imagenes/Veneno.png" idd="poison" Poke2="haunter" Poke3="arbok" />
                <Imagentipo titulo="Hada" imagen="/imagenes/Hada.png" idd="fairy" Poke2="aromatisse" Poke3="slurpuff" />
                <Imagentipo titulo="Fantasma" imagen="/imagenes/Fantasma.png" idd="ghost" Poke2="cursola" Poke3="gengar" />
                <Imagentipo titulo="Siniestro" imagen="/imagenes/Siniestro.png" idd="dark" Poke2="mightyena" Poke3="zorua" />
                <Imagentipo titulo="Normal" imagen="/imagenes/Normal.png" idd="normal" Poke2="eevee" Poke3="persian" />

            </div>
        </div>
    )
}