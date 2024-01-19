'use client';
import '../pokemones/pokemones.css'
import Link from 'next/link'
import { useState } from 'react';


export default function Imagentipo ({titulo, imagen,idd,Poke2,Poke3}) {
        
    const [eleccionShiny1, setEleccionShiny1] = useState(0)
    const [eleccionShiny2, setEleccionShiny2] = useState(0)
    const [eleccionShiny3, setEleccionShiny3] = useState(0)
    
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
    
    var a

    function triggerShiny(){
        if(a===1){
            if(eleccionShiny1===1){
                setEleccionShiny1(0)
                document.getElementById("botonShiny"+poke.name+titulo).classList.remove('botonShiny1');
                document.getElementById("botonShiny"+poke.name+titulo).classList.add('botonShiny0'); 
            }
            else{
                setEleccionShiny1(1)
                document.getElementById("botonShiny"+poke.name+titulo).classList.add('botonShiny1');
            }
        }
        else if(a===2){
            if(eleccionShiny2===1){
                setEleccionShiny2(0)
                document.getElementById("botonShiny"+poke2.name).classList.remove('botonShiny1');
                document.getElementById("botonShiny"+poke2.name).classList.add('botonShiny0'); 
            }
            else{
                setEleccionShiny2(1)
                document.getElementById("botonShiny"+poke2.name).classList.add('botonShiny1');   
            }
        }
        else if(a===3){
            if(eleccionShiny3===1){
                setEleccionShiny3(0)
                document.getElementById("botonShiny"+poke3.name).classList.remove('botonShiny1');
                document.getElementById("botonShiny"+poke3.name).classList.add('botonShiny0'); 
            }
            else{
                setEleccionShiny3(1)
                document.getElementById("botonShiny"+poke3.name).classList.add('botonShiny1');   
            }
        }
        
    }
    
    function botonusado(){
        
        if(boton===0 && cargandotipo===false && cargando1===false && cargando2===false && cargando3===false){
            setBoton(1);
            setEleccionShiny1(0)
            setEleccionShiny2(0)
            setEleccionShiny3(0)
            document.getElementById("botonpoke"+titulo).classList.remove('botondespliegue')
            document.getElementById("botonpoke"+titulo).classList.add('botonEncendido');

            document.getElementById("flecha"+titulo).classList.add('flechaDerecha');

            document.getElementById("tarjeta1"+titulo).classList.remove('tarjeta0');
            document.getElementById("tarjeta1"+titulo).classList.add('tarjeta11');

            document.getElementById("tarjeta1"+titulo+"shiny").classList.remove('tarjeta0');
            document.getElementById("tarjeta1"+titulo+"shiny").classList.add('tarjeta21');

            document.getElementById("tarjeta2"+titulo).classList.remove('tarjeta0');
            document.getElementById("tarjeta2"+titulo).classList.add('tarjeta31');

            document.getElementById("tarjeta2"+titulo+"shiny").classList.remove('tarjeta0');
            document.getElementById("tarjeta2"+titulo+"shiny").classList.add('tarjeta41');

            document.getElementById("tarjeta3"+titulo).classList.remove('tarjeta0');
            document.getElementById("tarjeta3"+titulo).classList.add('tarjeta51');

            document.getElementById("tarjeta3"+titulo+"shiny").classList.remove('tarjeta0');
            document.getElementById("tarjeta3"+titulo+"shiny").classList.add('tarjeta61');

        }
        else if (boton===1 && cargandotipo===false && cargando1===false && cargando2===false && cargando3===false){
            setBoton(2);
            document.getElementById("botonpoke"+titulo).classList.remove('botonEncendido')
            document.getElementById("botonpoke"+titulo).classList.add('botonMovido')

            document.getElementById("flecha"+titulo).classList.remove('flechaDerecha')
            document.getElementById("flecha"+titulo).classList.add('flechaIzquierda');

            document.getElementById("tarjeta1"+titulo).classList.remove('tarjeta11');
            document.getElementById("tarjeta1"+titulo).classList.add('tarjeta10');

            document.getElementById("tarjeta1"+titulo+"shiny").classList.remove('tarjeta21');
            document.getElementById("tarjeta1"+titulo+"shiny").classList.add('tarjeta20');

            document.getElementById("tarjeta2"+titulo).classList.remove('tarjeta31');
            document.getElementById("tarjeta2"+titulo).classList.add('tarjeta30');

            document.getElementById("tarjeta2"+titulo+"shiny").classList.remove('tarjeta41');
            document.getElementById("tarjeta2"+titulo+"shiny").classList.add('tarjeta40');

            document.getElementById("tarjeta3"+titulo).classList.remove('tarjeta51');
            document.getElementById("tarjeta3"+titulo).classList.add('tarjeta50');

            document.getElementById("tarjeta3"+titulo+"shiny").classList.remove('tarjeta61');
            document.getElementById("tarjeta3"+titulo+"shiny").classList.add('tarjeta60');
        }
        else if(boton===2 && cargandotipo===false && cargando1===false && cargando2===false && cargando3===false){
            setBoton(1);
            setEleccionShiny1(0)
            setEleccionShiny2(0)
            setEleccionShiny3(0)
            document.getElementById("botonpoke"+titulo).classList.remove('botonMovido')
            document.getElementById("botonpoke"+titulo).classList.add('botonEncendido')

            document.getElementById("flecha"+titulo).classList.remove('flechaIzquierda')
            document.getElementById("flecha"+titulo).classList.add('flechaDerecha');

            document.getElementById("tarjeta1"+titulo).classList.remove('tarjeta10');
            document.getElementById("tarjeta1"+titulo).classList.add('tarjeta11');

            document.getElementById("tarjeta1"+titulo+"shiny").classList.remove('tarjeta20');
            document.getElementById("tarjeta1"+titulo+"shiny").classList.add('tarjeta21');

            document.getElementById("tarjeta2"+titulo).classList.remove('tarjeta30');
            document.getElementById("tarjeta2"+titulo).classList.add('tarjeta31');

            document.getElementById("tarjeta2"+titulo+"shiny").classList.remove('tarjeta40');
            document.getElementById("tarjeta2"+titulo+"shiny").classList.add('tarjeta41');

            document.getElementById("tarjeta3"+titulo).classList.remove('tarjeta50');
            document.getElementById("tarjeta3"+titulo).classList.add('tarjeta51');

            document.getElementById("tarjeta3"+titulo+"shiny").classList.remove('tarjeta60');
            document.getElementById("tarjeta3"+titulo+"shiny").classList.add('tarjeta61');
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
            <div className='Divtarjetas'>
                <div className='tarjeta0' id={'tarjeta1'+titulo}>
                    {(eleccionShiny1===0) &&
                    <>
                    <h3>{poke.name}</h3>        
                    <div className='divSprite'>
                    <img src={poke.sprites.front_default} alt={poke.name}/>
                    <img src={poke.sprites.back_default} alt={poke.name}/>
                    </div>
                    </>
                    } 
                    {(eleccionShiny1===1) &&
                    <>
                    <h3>{poke.name} shiny</h3>        
                    <div className='divSprite'>
                    <img src={poke.sprites.front_shiny} alt={poke.name+"shiny"}/>
                    <img src={poke.sprites.back_shiny} alt={poke.name+"shiny"}/>
                    </div>
                    </>
                    } 
                <h4 className='texto'>Height: {poke.height/10} m</h4>
                <h4 className='texto'>Weight: {poke.weight/10} kg</h4>
                <h4 className='texto'>Move:</h4>
                <Link className="link" href={"../habilidades#"+poke.moves[0].move.name}>
                <h4 className='texto'>{poke.moves[0].move.name}</h4>    
                </Link>

                <div className='divBotonshiny'>
                <button id={'botonShiny'+poke.name+titulo} className='botonShiny' onClick={()=>triggerShiny(a=1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="svgShiny" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                    </svg>
                </button>
                </div>

                </div>
                
                <div className='tarjeta0' id={'tarjeta1'+titulo+'shiny'}>
                <h3>{poke.name} shiny</h3>        
                <div className='divSprite'>
                    <img src={poke.sprites.front_shiny} alt={poke.name+" shiny"}/>
                    <img src={poke.sprites.back_shiny} alt={poke.name+" shiny"}/> 
                </div>
                <h4 className='texto'>Height: {poke.height/10} m</h4>
                <h4 className='texto'>Weight: {poke.weight/10} kg</h4>
                <h4 className='texto'>Move:</h4>
                <Link className="link" href={"../habilidades#"+poke.moves[0].move.name}>
                <h4 className='texto'>{poke.moves[0].move.name}</h4>    
                </Link>             
                </div>


                <div className='tarjeta0' id={'tarjeta2'+titulo}>
                    {(eleccionShiny2===0) &&
                    <>
                    <h3>{poke2.name}</h3>        
                    <div className='divSprite'>
                    <img src={poke2.sprites.front_default} alt={poke2.name}/>
                    <img src={poke2.sprites.back_default} alt={poke2.name}/>
                    </div>
                    </>
                    } 
                    {(eleccionShiny2===1) &&
                    <>
                    <h3>{poke2.name} shiny</h3>        
                    <div className='divSprite'>
                    <img src={poke2.sprites.front_shiny} alt={poke2.name+"shiny"}/>
                    <img src={poke2.sprites.back_shiny} alt={poke2.name+"shiny"}/>
                    </div>
                    </>
                    } 
                <h4 className='texto'>Height: {poke2.height/10} m</h4>
                <h4 className='texto'>Weight: {poke2.weight/10} kg</h4>
                <h4 className='texto'>Move:</h4>
                <Link className="link" href={"../habilidades#"+poke2.moves[0].move.name}>
                <h4 className='texto'>{poke2.moves[0].move.name}</h4>    
                </Link>

                    <div className='divBotonshiny'>
                        <button id={'botonShiny'+poke2.name} className='botonShiny' onClick={()=>triggerShiny(a=2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="svgShiny" viewBox="0 0 16 16">
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                        </svg>
                        </button>
                    </div>
                
                </div>
                
                <div className='tarjeta0' id={'tarjeta2'+titulo+'shiny'}>
                <h3>{poke2.name} shiny</h3>        
                <div className='divSprite'>
                    <img src={poke2.sprites.front_shiny} alt={poke2.name+" shiny"}/>
                    <img src={poke2.sprites.back_shiny} alt={poke2.name+" shiny"}/> 
                </div>
                <h4 className='texto'>Height: {poke2.height/10} m</h4>
                <h4 className='texto'>Weight: {poke2.weight/10} kg</h4>
                <h4 className='texto'>Move:</h4>
                <Link className="link" href={"../habilidades#"+poke2.moves[0].move.name}>
                <h4 className='texto'>{poke2.moves[0].move.name}</h4>    
                </Link>            
                </div>


                <div className='tarjeta0' id={'tarjeta3'+titulo}>
                    {(eleccionShiny3===0) &&
                    <>
                    <h3>{poke3.name}</h3>        
                    <div className='divSprite'>
                    <img src={poke3.sprites.front_default} alt={poke3.name}/>
                    <img src={poke3.sprites.back_default} alt={poke3.name}/>
                    </div>
                    </>
                    } 
                    {(eleccionShiny3===1) &&
                    <>
                    <h3>{poke3.name} shiny</h3>        
                    <div className='divSprite'>
                    <img src={poke3.sprites.front_shiny} alt={poke3.name+"shiny"}/>
                    <img src={poke3.sprites.back_shiny} alt={poke3.name+"shiny"}/>
                    </div>
                    </>
                    } 
                <h4 className='texto'>Height: {poke3.height/10} m</h4>
                <h4 className='texto'>Weight: {poke3.weight/10} kg</h4>
                <h4 className='texto'>Move:</h4>
                <Link className="link" href={"../habilidades#"+poke3.moves[0].move.name}>
                <h4 className='texto'>{poke3.moves[0].move.name}</h4>    
                </Link>            
                
                    <div className='divBotonshiny'>
                        <button id={'botonShiny'+poke3.name} className='botonShiny' onClick={()=>triggerShiny(a=3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="svgShiny" viewBox="0 0 16 16">
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                        </svg>
                        </button>
                    </div>
                
                </div>
                
                <div className='tarjeta0' id={'tarjeta3'+titulo+'shiny'}>
                <h3>{poke3.name} shiny</h3>        
                <div className='divSprite'>
                    <img src={poke3.sprites.front_shiny} alt={poke3.name+" shiny"} className='sprite1'/>
                    <img src={poke3.sprites.back_shiny} alt={poke3.name+" shiny"} className='sprite2'/> 
                </div>
                <h4 className='texto'>Height: {poke3.height/10} m</h4>
                <h4 className='texto'>Weight: {poke3.weight/10} kg</h4>
                <h4 className='texto'>Move:</h4>
                <Link className="link" href={"../habilidades#"+poke3.moves[0].move.name}>
                <h4 className='texto'>{poke3.moves[0].move.name}</h4>    
                </Link>            
                </div>
            </div>
            </>
            }
            
        </div>
    )
}