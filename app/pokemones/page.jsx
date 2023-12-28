'use client';
import Imagentipo from '../Componentes/Imagentipo'
import './pokemones.css'


export default function Pokemones (){

    return(
        <div className='divpokemones'>
            <h1>Pokemones Segun su tipo</h1>
            <div>
                <Imagentipo titulo="Acero" imagen="/imagenes/Acero.png" accesibilidad="Logotipo Acero" id="steel"/>
                <Imagentipo titulo="Dragón" imagen="/imagenes/Dragon.png" accesibilidad="Logotipo Dragón" id="dragon"/>
                <Imagentipo titulo="Agua" imagen="/imagenes/Agua.png" accesibilidad="Logotipo Agua" id="water"/>
                <Imagentipo titulo="Eléctrico" imagen="/imagenes/Electrico.png" accesibilidad="Logotipo Eléctrico" id="electric"/>
                <Imagentipo titulo="Fantasma" imagen="/imagenes/Fantasma.png" accesibilidad="Logotipo Fantasma" id="ghost"/>
                <Imagentipo titulo="Hada" imagen="/imagenes/Hada.png" accesibilidad="Logotipo Hada" id="fairy"/>
                <Imagentipo titulo="Planta" imagen="/imagenes/Planta.png" accesibilidad="Logotipo Planta" id="grass"/>
                <Imagentipo titulo="Psíquico" imagen="/imagenes/Psiquico.png" accesibilidad="Logotipo Psíquico" id="psychic"/>
                <Imagentipo titulo="Siniestro" imagen="/imagenes/Siniestro.png" accesibilidad="Logotipo Siniestro" id="dark"/>

            </div>
        </div>
    )
}