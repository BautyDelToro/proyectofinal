'use client';
import '../pokemones/pokemones.css'
import { useState } from 'react';

export default function Imagentipo ({titulo, imagen, accesibilidad,idd}) {
    
    const [boton, setBoton] = useState(0);
    function botonusado(){
        if(boton===0){
            console.log("ola");
            setBoton(1);
            document.getElementById("botonpoke"+idd).classList.remove('botondespliegue')
            document.getElementById("botonpoke"+idd).classList.add('botonEncendido');

            document.getElementById("flecha"+idd).classList.add('flechaDerecha');
        }
        else if (boton===1){
            console.log("olu")
            setBoton(2);
            document.getElementById("botonpoke"+idd).classList.remove('botonEncendido')
            document.getElementById("botonpoke"+idd).classList.add('botonMovido')

            document.getElementById("flecha"+idd).classList.remove('flechaDerecha')
            document.getElementById("flecha"+idd).classList.add('flechaIzquierda');
        }
        else if(boton===2){
            console.log("popo")
            setBoton(1);
            document.getElementById("botonpoke"+idd).classList.remove('botonMovido')
            document.getElementById("botonpoke"+idd).classList.add('botonEncendido')

            document.getElementById("flecha"+idd).classList.remove('flechaIzquierda')
            document.getElementById("flecha"+idd).classList.add('flechaDerecha');
        }
    }

    return(
        <div className='divPokemon'>
            <div className='divimagen'>
                <h3 className='titulopoke'>{titulo}</h3>
                <img src={imagen} alt={accesibilidad} className="imagenlogotipo"/>
            </div>
    
            <button id={'botonpoke'+idd} onClick={botonusado} className='botonDespliegue'> 
                <svg id={"flecha"+idd} className="flecha" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='currentcolor' viewBox="0 0 16 16">
                 <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
                </svg> 
            </button>
        </div>
    )
}