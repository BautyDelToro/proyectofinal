'use client';
import Imagentipo from '../Componentes/Imagentipo'
import './pokemones.css'


export default function Pokemones (){

    return(
        <div className='divpokemones'>
            <h1>Pokemones Segun su tipo</h1>
            <div>
                <Imagentipo titulo="Acero" imagen="/imagenes/Acero.png" accesibilidad="Logotipo Acero" idd="steel"/>
                <Imagentipo titulo="Dragón" imagen="/imagenes/Dragon.png" accesibilidad="Logotipo Dragón" idd="dragon"/>
                <Imagentipo titulo="Agua" imagen="/imagenes/Agua.png" accesibilidad="Logotipo Agua" idd="water"/>
                <Imagentipo titulo="Eléctrico" imagen="/imagenes/Electrico.png" accesibilidad="Logotipo Eléctrico" idd="electric"/>
                <Imagentipo titulo="Fantasma" imagen="/imagenes/Fantasma.png" accesibilidad="Logotipo Fantasma" idd="ghost"/>
                <Imagentipo titulo="Hada" imagen="/imagenes/Hada.png" accesibilidad="Logotipo Hada" idd="fairy"/>
                <Imagentipo titulo="Planta" imagen="/imagenes/Planta.png" accesibilidad="Logotipo Planta" idd="grass"/>
                <Imagentipo titulo="Psíquico" imagen="/imagenes/Psiquico.png" accesibilidad="Logotipo Psíquico" idd="psychic"/>
                <Imagentipo titulo="Siniestro" imagen="/imagenes/Siniestro.png" accesibilidad="Logotipo Siniestro" idd="dark"/>

            </div>
        </div>
    )
}