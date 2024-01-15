'use client';
import '../pokemones/pokemones.css'
import Link from 'next/link'
import { useState } from 'react';


export default function Imagentipo ({titulo, imagen,idd,Poke2,Poke3}) {
        
    const [cargandotipo, setCargandotipo] = useState(true) 
    const [cargando1, setCargando1] = useState(true) 
    const [cargando2, setCargando2] = useState(true) 
    const [cargando3, setCargando3] = useState(true) 
    
    const [poke, setPoke] = useState()
    const [poke2, setPoke2] = useState()
    const [poke3, setPoke3] = useState()
    const [pokeTipo, setPokeTipo] = useState()

    if(cargandotipo===true && cargando1 === true){
        const fetchpokeTipo = async()=>{
        const res= await fetch(("https://pokeapi.co/api/v2/type/"+idd));
        if(res.ok===true){
            const data = await res.json()
            setPokeTipo(data) 
            setCargandotipo(false)
        }
        } 
        fetchpokeTipo();
    }


    if(cargandotipo===false && cargando1===true){
        const fetchpoke = async()=>{
        const res= await fetch(("https://pokeapi.co/api/v2/pokemon/"+pokeTipo.pokemon[0].pokemon.name));
        if(res.ok===true){
            const data = await res.json()
            setPoke(data) 
            setCargando1(false)
            setCargandotipo(false)
        }
        } 
        fetchpoke();
    }

    if(cargando2===true ){
        const fetchpoke = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/pokemon/"+Poke2));
            if(res.ok===true){
                const data = await res.json()
                setPoke2(data) 
                setCargando2(false)
            }
            } 
            fetchpoke(); 
    }

    if(cargando3===true){
        const fetchpoke = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/pokemon/"+Poke3));
            if(res.ok===true){
                const data = await res.json()
                setPoke3(data) 
                setCargando3(false)
            }
            } 
            fetchpoke(); 
    }
    
    const [boton, setBoton] = useState(0);
    function botonusado(){
        
        if(boton===0 && cargandotipo===false && cargando1===false && cargando2===false && cargando3===false){
            setBoton(1);
            document.getElementById("botonpoke"+titulo).classList.remove('botondespliegue')
            document.getElementById("botonpoke"+titulo).classList.add('botonEncendido');

            document.getElementById("flecha"+titulo).classList.add('flechaDerecha');

            document.getElementById("tarjeta1"+poke.name+titulo).classList.remove('tarjeta0');
            document.getElementById("tarjeta1"+poke.name+titulo).classList.add('tarjeta11');

            document.getElementById("tarjeta1"+poke.name+"shiny"+titulo).classList.remove('tarjeta0');
            document.getElementById("tarjeta1"+poke.name+"shiny"+titulo).classList.add('tarjeta21');

            document.getElementById("tarjeta2"+poke2.name).classList.remove('tarjeta0');
            document.getElementById("tarjeta2"+poke2.name).classList.add('tarjeta31');

            document.getElementById("tarjeta2"+poke2.name+"shiny").classList.remove('tarjeta0');
            document.getElementById("tarjeta2"+poke2.name+"shiny").classList.add('tarjeta41');

            document.getElementById("tarjeta3"+poke3.name).classList.remove('tarjeta0');
            document.getElementById("tarjeta3"+poke3.name).classList.add('tarjeta51');

            document.getElementById("tarjeta3"+poke3.name+"shiny").classList.remove('tarjeta0');
            document.getElementById("tarjeta3"+poke3.name+"shiny").classList.add('tarjeta61');

        }
        else if (boton===1 && cargandotipo===false && cargando1===false && cargando2===false && cargando3===false){
            setBoton(2);
            document.getElementById("botonpoke"+titulo).classList.remove('botonEncendido')
            document.getElementById("botonpoke"+titulo).classList.add('botonMovido')

            document.getElementById("flecha"+titulo).classList.remove('flechaDerecha')
            document.getElementById("flecha"+titulo).classList.add('flechaIzquierda');

            document.getElementById("tarjeta1"+poke.name+titulo).classList.remove('tarjeta11');
            document.getElementById("tarjeta1"+poke.name+titulo).classList.add('tarjeta10');

            document.getElementById("tarjeta1"+poke.name+"shiny"+titulo).classList.remove('tarjeta21');
            document.getElementById("tarjeta1"+poke.name+"shiny"+titulo).classList.add('tarjeta20');

            document.getElementById("tarjeta2"+poke2.name).classList.remove('tarjeta31');
            document.getElementById("tarjeta2"+poke2.name).classList.add('tarjeta30');

            document.getElementById("tarjeta2"+poke2.name+"shiny").classList.remove('tarjeta41');
            document.getElementById("tarjeta2"+poke2.name+"shiny").classList.add('tarjeta40');

            document.getElementById("tarjeta3"+poke3.name).classList.remove('tarjeta51');
            document.getElementById("tarjeta3"+poke3.name).classList.add('tarjeta50');

            document.getElementById("tarjeta3"+poke3.name+"shiny").classList.remove('tarjeta61');
            document.getElementById("tarjeta3"+poke3.name+"shiny").classList.add('tarjeta60');
        }
        else if(boton===2 && cargandotipo===false && cargando1===false && cargando2===false && cargando3===false){
            setBoton(1);
            document.getElementById("botonpoke"+titulo).classList.remove('botonMovido')
            document.getElementById("botonpoke"+titulo).classList.add('botonEncendido')

            document.getElementById("flecha"+titulo).classList.remove('flechaIzquierda')
            document.getElementById("flecha"+titulo).classList.add('flechaDerecha');

            document.getElementById("tarjeta1"+poke.name+titulo).classList.remove('tarjeta10');
            document.getElementById("tarjeta1"+poke.name+titulo).classList.add('tarjeta11');

            document.getElementById("tarjeta1"+poke.name+"shiny"+titulo).classList.remove('tarjeta20');
            document.getElementById("tarjeta1"+poke.name+"shiny"+titulo).classList.add('tarjeta21');

            document.getElementById("tarjeta2"+poke2.name).classList.remove('tarjeta30');
            document.getElementById("tarjeta2"+poke2.name).classList.add('tarjeta31');

            document.getElementById("tarjeta2"+poke2.name+"shiny").classList.remove('tarjeta40');
            document.getElementById("tarjeta2"+poke2.name+"shiny").classList.add('tarjeta41');

            document.getElementById("tarjeta3"+poke3.name).classList.remove('tarjeta50');
            document.getElementById("tarjeta3"+poke3.name).classList.add('tarjeta51');

            document.getElementById("tarjeta3"+poke3.name+"shiny").classList.remove('tarjeta60');
            document.getElementById("tarjeta3"+poke3.name+"shiny").classList.add('tarjeta61');
        }
    }

    return(
        <div className='divPokemon'>
            <div className='divimagen'>
                <h3 className='titulopoke'>{idd}</h3>
                <img src={imagen} alt={idd+" icon"} className="imagenlogotipo"/>
            </div>
    
            <button id={'botonpoke'+titulo} onClick={botonusado} className='botonDespliegue'> 
                <svg id={"flecha"+titulo} className="flecha" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='currentcolor' viewBox="0 0 16 16">
                 <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
                </svg> 
            </button>

           {(cargandotipo===false && cargando1===false && cargando2===false && cargando3===false) &&
            
            <>
            {/* <div className='tarjeta0' id={'tarjetaRelaciones'+titulo}>
            <h3>Damage relations</h3>
            {(pokeTipo.damage_relations.no_damage_from[0]) &&
            <h4>No damage from {pokeTipo.damage_relations.no_damage_from[0].name}</h4>
            }
            {(pokeTipo.damage_relations.half_damage_from[0]) &&
            <h4>Half damage from {pokeTipo.damage_relations.half_damage_from[0].name}</h4>
            }
            {(pokeTipo.damage_relations.double_damage_from[0]) &&
            <h4>Double damage from {pokeTipo.damage_relations.double_damage_from[0].name}</h4>
            } 
            {(pokeTipo.damage_relations.no_damage_to[0]) &&
            <h4>No damage to {pokeTipo.damage_relations.no_damage_to[0].name}</h4>
            }
            {(pokeTipo.damage_relations.half_damage_to[0]) &&
            <h4>Half damage to {pokeTipo.damage_relations.half_damage_to[0].name}</h4>
            }
            {(pokeTipo.damage_relations.double_damage_to[0]) &&
            <h4>Double damage to {pokeTipo.damage_relations.double_damage_to[0].name}</h4>
            }
            

            {(pokeTipo.damage_relations.no_damage_from[1]) &&
            <h4>No damage from {pokeTipo.damage_relations.no_damage_from[1].name}</h4>
            }
            {(pokeTipo.damage_relations.half_damage_from[1]) &&
            <h4>Half damage from {pokeTipo.damage_relations.half_damage_from[1].name}</h4>
            }
            {(pokeTipo.damage_relations.double_damage_from[1]) &&
            <h4>Double damage from {pokeTipo.damage_relations.double_damage_from[1].name}</h4>
            } 
            {(pokeTipo.damage_relations.no_damage_to[1]) &&
            <h4>No damage to {pokeTipo.damage_relations.no_damage_to[1].name}</h4>
            }
            {(pokeTipo.damage_relations.half_damage_to[1]) &&
            <h4>Half damage to {pokeTipo.damage_relations.half_damage_to[1].name}</h4>
            }
            {(pokeTipo.damage_relations.double_damage_to[1]) &&
            <h4>Double damage to {pokeTipo.damage_relations.double_damage_to[1].name}</h4>
            }
            </div> */}
            
            <div className='Divtarjetas'>
                <div className='tarjeta0' id={'tarjeta1'+poke.name+titulo}>
                <h3>{poke.name}</h3>        
                    <div className='divSprite'>
                       <img src={poke.sprites.front_default} alt={poke.name}/>
                        <img src={poke.sprites.back_default} alt={poke.name}/> 
                    </div>
                <h4 className='texto'>Heigh: {poke.height/10} m</h4>
                <h4 className='texto'>Weight: {poke.weight/10} kg</h4>
                <h4 className='texto'>Abilitie:</h4>
                <Link className="link" href={"../habilidades#"+poke.abilities[0].ability.name}>
                <h4 className='texto'>{poke.abilities[0].ability.name}</h4>    
                </Link>   
                </div>
                
                <div className='tarjeta0' id={'tarjeta1'+poke.name+'shiny'+titulo}>
                <h3>{poke.name} shiny</h3>        
                <div className='divSprite'>
                    <img src={poke.sprites.front_shiny} alt={poke.name+" shiny"}/>
                    <img src={poke.sprites.back_shiny} alt={poke.name+" shiny"}/> 
                </div>
                <h4 className='texto'>Heigh: {poke.height/10} m</h4>
                <h4 className='texto'>Weight: {poke.weight/10} kg</h4>
                <h4 className='texto'>Abilitie:</h4>
                <Link className="link" href={"../habilidades#"+poke.abilities[0].ability.name}>
                <h4 className='texto'>{poke.abilities[0].ability.name}</h4>    
                </Link>             
                </div>


                <div className='tarjeta0' id={'tarjeta2'+poke2.name}>
                <h3>{poke2.name}</h3>        
                <div className='divSprite'>
                    <img src={poke2.sprites.front_default} alt={poke2.name}/>
                    <img src={poke2.sprites.back_default} alt={poke2.name}/> 
                </div>
                <h4 className='texto'>Heigh: {poke2.height/10} m</h4>
                <h4 className='texto'>Weight: {poke2.weight/10} kg</h4>
                <h4 className='texto'>Abilitie:</h4>
                <Link className="link" href={"../habilidades#"+poke2.abilities[0].ability.name}>
                <h4 className='texto'>{poke2.abilities[0].ability.name}</h4>    
                </Link>            
                </div>
                
                <div className='tarjeta0' id={'tarjeta2'+poke2.name+'shiny'}>
                <h3>{poke2.name} shiny</h3>        
                <div className='divSprite'>
                    <img src={poke2.sprites.front_shiny} alt={poke2.name+" shiny"}/>
                    <img src={poke2.sprites.back_shiny} alt={poke2.name+" shiny"}/> 
                </div>
                <h4 className='texto'>Heigh: {poke2.height/10} m</h4>
                <h4 className='texto'>Weight: {poke2.weight/10} kg</h4>
                <h4 className='texto'>Abilitie:</h4>
                <Link className="link" href={"../habilidades#"+poke2.abilities[0].ability.name}>
                <h4 className='texto'>{poke2.abilities[0].ability.name}</h4>    
                </Link>            
                </div>


                <div className='tarjeta0' id={'tarjeta3'+poke3.name}>
                <h3>{poke3.name}</h3>        
                <div className='divSprite'>
                    <img src={poke3.sprites.front_default} alt={poke3.name}/>
                    <img src={poke3.sprites.back_default} alt={poke3.name}/> 
                </div>
                <h4 className='texto'>Heigh: {poke3.height/10} m</h4>
                <h4 className='texto'>Weight: {poke3.weight/10} kg</h4>
                <h4 className='texto'>Abilitie:</h4>
                <Link className="link" href={"../habilidades#"+poke3.abilities[0].ability.name}>
                <h4 className='texto'>{poke3.abilities[0].ability.name}</h4>    
                </Link>            
                </div>
                
                <div className='tarjeta0' id={'tarjeta3'+poke3.name+'shiny'}>
                <h3>{poke3.name} shiny</h3>        
                <div className='divSprite'>
                    <img src={poke3.sprites.front_shiny} alt={poke3.name+" shiny"} className='sprite1'/>
                    <img src={poke3.sprites.back_shiny} alt={poke3.name+" shiny"} className='sprite2'/> 
                </div>
                <h4 className='texto'>Heigh: {poke3.height/10} m</h4>
                <h4 className='texto'>Weight: {poke3.weight/10} kg</h4>
                <h4 className='texto'>Abilitie:</h4>
                <Link className="link" href={"../habilidades#"+poke3.abilities[0].ability.name}>
                <h4 className='texto'>{poke3.abilities[0].ability.name}</h4>    
                </Link>            
                </div>
            </div>
            </>
           }
        </div>
    )
}