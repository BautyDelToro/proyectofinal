'use client';
import Imagentipo from '../Componentes/Imagentipo'
import './pokemones.css'


export default function Pokemones (){

    return(
        <div className='divpokemones'>
            <h1>Pokemones según tipo</h1>
            <div>
                <Imagentipo titulo="Fuego" imagen="/imagenes/Fuego.png" accesibilidad="Logotipo Fuego" idd="fire"/>
                <Imagentipo titulo="Lucha" imagen="/imagenes/Lucha.png" accesibilidad="Logotipo Lucha" idd="fighting"/>
                <Imagentipo titulo="Tierra" imagen="/imagenes/Tierra.png" accesibilidad="Logotipo Tierra" idd="ground"/>
                <Imagentipo titulo="Psíquico" imagen="/imagenes/Psiquico.png" accesibilidad="Logotipo Psíquico" idd="psychic"/>
                <Imagentipo titulo="Eléctrico" imagen="/imagenes/Electrico.png" accesibilidad="Logotipo Eléctrico" idd="electric"/>
                <Imagentipo titulo="Roca" imagen="/imagenes/Roca.png" accesibilidad="Logotipo Roca" idd="rock"/>
                <Imagentipo titulo="Bicho" imagen="/imagenes/Bicho.png" accesibilidad="Logotipo Bicho" idd="bug"/>
                <Imagentipo titulo="Planta" imagen="/imagenes/Planta.png" accesibilidad="Logotipo Planta" idd="grass"/>
                <Imagentipo titulo="Hielo" imagen="/imagenes/Hielo.png" accesibilidad="Logotipo Hielo" idd="ice"/>
                <Imagentipo titulo="Acero" imagen="/imagenes/Acero.png" accesibilidad="Logotipo Acero" idd="steel"/>
                <Imagentipo titulo="Agua" imagen="/imagenes/Agua.png" accesibilidad="Logotipo Agua" idd="water"/>
                <Imagentipo titulo="Vuelo" imagen="/imagenes/Vuelo.png" accesibilidad="Logotipo Vuelo" idd="flying"/>
                <Imagentipo titulo="Dragón" imagen="/imagenes/Dragon.png" accesibilidad="Logotipo Dragón" idd="dragon"/>
                <Imagentipo titulo="Veneno" imagen="/imagenes/Veneno.png" accesibilidad="Logotipo Veneno" idd="poison"/>
                <Imagentipo titulo="Hada" imagen="/imagenes/Hada.png" accesibilidad="Logotipo Hada" idd="fairy"/>
                <Imagentipo titulo="Fantasma" imagen="/imagenes/Fantasma.png" accesibilidad="Logotipo Fantasma" idd="ghost"/>
                <Imagentipo titulo="Siniestro" imagen="/imagenes/Siniestro.png" accesibilidad="Logotipo Siniestro" idd="dark"/>
                <Imagentipo titulo="Normal" imagen="/imagenes/Normal.png" accesibilidad="Logotipo Normal" idd="normal"/>

            </div>
        </div>
    )
}