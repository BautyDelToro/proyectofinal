'use client';
import { useState } from 'react';
import './TablaRelaciones.css'

export default function TablaRelaciones(titulo, imagen, tipo){
    
    const [cargandotipo, setCargandotipo] = useState(true) 
    const [pokeTipo, setPokeTipo] = useState()
    const [eleccion,setEleccion] = useState(false)

    if(cargandotipo===true){
        const fetchpoke = async()=>{
        const res= await fetch(("https://pokeapi.co/api/v2/type/"+titulo.tipo));
        if(res.ok===true){
            const data = await res.json()
            setPokeTipo(data) 
            setCargandotipo(false)
        }
        } 
        fetchpoke();
    }    
    
    const tipos=["fire","fighting","ground", "psychic","electric","rock","bug", "grass", "ice", "steel", "water", "flying", "dragon", "poison", "fairy", "ghost", "dark","normal"]
    var a
    function triggerboton(a){
        if(eleccion===false){
           setEleccion(true)
        
            document.getElementById("divGrid").classList.remove('divGrid');
            document.getElementById("divGrid").classList.add('divLightbox');

            tipos.map((tipo)=>{
                document.getElementById("TarjetaRelaciones"+tipo).classList.remove('TarjetaRelaciones1')
                document.getElementById("TarjetaRelaciones"+tipo).classList.add('TarjetaRelaciones0')
            }) 
        }
        else{
            setEleccion(false)
            document.getElementById("divGrid").classList.remove('divLightbox');
            document.getElementById("divGrid").classList.add('divGrid');

            tipos.map((tipo2)=>{
                if(a===tipo2){
                }
                else{document.getElementById("TarjetaRelaciones"+tipo2).classList.remove('TarjetaRelaciones0')
                document.getElementById("TarjetaRelaciones"+tipo2).classList.add('TarjetaRelaciones1')
                }   
            }) 
        } 
    }

    if(eleccion===false){
        return(
            <div className='TarjetaRelaciones1' id={'TarjetaRelaciones'+titulo.tipo} key={Math.random()}>
                <img src={titulo.imagen} alt={titulo.tipo+" icon"} className='imagenTarjeta'/>
                <button className='botonRelaciones' onClick={triggerboton}>
                    SHOW DAMAGE RELATIONS
                </button>
            </div> 
        )

    }
    else if(eleccion===true){
        return(
            <div className='lightbox_Eleccion1' id={'lightbox_Eleccion'+titulo.idd}>
            <h2>{pokeTipo.name} damage relations:</h2>
                <div className='divDaños'>
                    {(cargandotipo===false && pokeTipo.damage_relations.no_damage_from.length>0) &&
                    <h3 className='tituloRelaciones'>No damage from:</h3> 
                    }
                    {pokeTipo.damage_relations.no_damage_from.map((relacion)=> {
                        return(
                            <p key={Math.random()}>{relacion.name}</p>
                        )
                        }
                        )
                    }
                </div>
                        
                <div className='divDaños'>
                    {(cargandotipo===false && pokeTipo.damage_relations.half_damage_from.length>0) &&
                    <h3 className='tituloRelaciones'>Half damage from:</h3> 
                    }
                    {pokeTipo.damage_relations.half_damage_from.map((relacion)=> {
                        return(
                            <p key={Math.random()}>{relacion.name}</p>
                        )
                        }
                        )
                    }
                </div>
                    
                <div className='divDaños'>
                    {(cargandotipo===false && pokeTipo.damage_relations.double_damage_from.length>0) &&
                    <h3 className='tituloRelaciones'>Double damage from:</h3> 
                    }
                    {pokeTipo.damage_relations.double_damage_from.map((relacion)=> {
                        return(
                            <p key={Math.random()}>{relacion.name}</p>
                        )
                        }
                        )
                    }
                </div>

                <div className='divDaños'>
                    {(cargandotipo===false && pokeTipo.damage_relations.no_damage_to.length>0) &&
                    <h3 className='tituloRelaciones'>No damage to:</h3> 
                    }
                    {pokeTipo.damage_relations.no_damage_to.map((relacion)=> {
                        return(
                            <p key={Math.random()}>{relacion.name}</p>
                        )
                        }
                        )
                    }
                </div>
                    
                <div className='divDaños'>
                    {(cargandotipo===false && pokeTipo.damage_relations.half_damage_to.length>0) &&
                    <h3 className='tituloRelaciones'>Half damage to:</h3> 
                    }
                    {pokeTipo.damage_relations.half_damage_to.map((relacion)=> {
                        return(
                            <p key={Math.random()}>{relacion.name}</p>
                        )
                        }
                        )
                    }
                </div>
                        
                <div className='divDaños'>
                    {(cargandotipo===false && pokeTipo.damage_relations.double_damage_to.length>0) &&
                    <h3 className='tituloRelaciones'>Double damage to:</h3> 
                    }
                    {pokeTipo.damage_relations.double_damage_to.map((relacion)=> {
                        return(
                            <>
                            <p key={Math.random()}>{relacion.name}</p>
                            </>
                        )
                        }
                        )
                    }
                </div>

                <button className='botonCerrar' onClick={()=>triggerboton(a=titulo.tipo)}>
                Close
                </button>
            </div>
        )
    }
}