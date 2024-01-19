'use client';
import { useState } from "react";
import "../habilidades/habilidades.css"
import "../habilidades/habilidades2.css"

export default function HabilidadesComp(Habilidad1, Habilidad2, Habilidad3){
    const [habilidad1, setHabilidad1] = useState()
    const [habilidad2, setHabilidad2] = useState()
    const [habilidad3, setHabilidad3] = useState()

    
    const [cargando1, setCargando1] = useState(true) 
    const [cargando2, setCargando2] = useState(true) 
    const [cargando3, setCargando3] = useState(true) 

    const [boton1, setBoton1] = useState(0);
    const [boton2, setBoton2] = useState(0);
    const [boton3, setBoton3] = useState(0);

    if(cargando1===true ){
        const fetchpoke = async()=>{
            const res= await fetch(("https://pokeapi.co/api/v2/move/"+Habilidad1.Habilidad1));
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
            const res= await fetch(("https://pokeapi.co/api/v2/move/"+Habilidad1.Habilidad2));
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
            const res= await fetch(("https://pokeapi.co/api/v2/move/"+Habilidad1.Habilidad3));
            if(res.ok===true){
                const data = await res.json()
                setHabilidad3(data) 
                setCargando3(false)
            }
            } 
            fetchpoke(); 
    }

    function triggerBoton1(){
        if(boton1===0){
            setBoton1(1)
            document.getElementById(habilidad1.name+"texto").classList.remove('texto0');
            document.getElementById(habilidad1.name+"texto").classList.add('texto1')
            document.getElementById(habilidad1.name+"svg").classList.remove('svgboton0');
            document.getElementById(habilidad1.name+"svg").classList.add('svgboton1');
            document.getElementById(habilidad1.name+"cruz").classList.remove('svgcruz0');
            document.getElementById(habilidad1.name+"cruz").classList.add('svgcruz1');
            document.getElementById(habilidad1.name+"divi").classList.remove('divi0');
            document.getElementById(habilidad1.name+"divi").classList.add('divi1izquierda');
        }
        else if(boton1===1){
            setBoton1(2)
            document.getElementById(habilidad1.name+"texto").classList.remove('texto1');
            document.getElementById(habilidad1.name+"texto").classList.add('texto2');
            document.getElementById(habilidad1.name+"svg").classList.remove('svgboton1');
            document.getElementById(habilidad1.name+"svg").classList.add('svgboton2');
            document.getElementById(habilidad1.name+"cruz").classList.remove('svgcruz1');
            document.getElementById(habilidad1.name+"cruz").classList.add('svgcruz2');
            document.getElementById(habilidad1.name+"divi").classList.remove('divi1izquierda');
            document.getElementById(habilidad1.name+"divi").classList.add('divi2izquierda');
        }
        else if(boton1===2){
            setBoton1(1)
            document.getElementById(habilidad1.name+"texto").classList.remove('texto2');
            document.getElementById(habilidad1.name+"texto").classList.add('texto1');
            document.getElementById(habilidad1.name+"svg").classList.remove('svgboton2');
            document.getElementById(habilidad1.name+"svg").classList.add('svgboton1');
            document.getElementById(habilidad1.name+"cruz").classList.remove('svgcruz2');
            document.getElementById(habilidad1.name+"cruz").classList.add('svgcruz1');
            document.getElementById(habilidad1.name+"divi").classList.remove('divi2izquierda');
            document.getElementById(habilidad1.name+"divi").classList.add('divi1izquierda');
        }
    }


    function triggerBoton2(){
        if(boton2===0){
            setBoton2(1)
            document.getElementById(habilidad2.name+"texto").classList.remove('texto0');
            document.getElementById(habilidad2.name+"texto").classList.add('texto1')
            document.getElementById(habilidad2.name+"svg").classList.remove('svgboton0');
            document.getElementById(habilidad2.name+"svg").classList.add('svgboton1');
            document.getElementById(habilidad2.name+"cruz").classList.remove('svgcruz0');
            document.getElementById(habilidad2.name+"cruz").classList.add('svgcruz1');
            document.getElementById(habilidad2.name+"divi").classList.remove('divi0');
            document.getElementById(habilidad2.name+"divi").classList.add('divi1medio');
        }
        else if(boton2===1){
            setBoton2(2)
            document.getElementById(habilidad2.name+"texto").classList.remove('texto1');
            document.getElementById(habilidad2.name+"texto").classList.add('texto2');
            document.getElementById(habilidad2.name+"svg").classList.remove('svgboton1');
            document.getElementById(habilidad2.name+"svg").classList.add('svgboton2');
            document.getElementById(habilidad2.name+"cruz").classList.remove('svgcruz1');
            document.getElementById(habilidad2.name+"cruz").classList.add('svgcruz2');
            document.getElementById(habilidad2.name+"divi").classList.remove('divi1medio');
            document.getElementById(habilidad2.name+"divi").classList.add('divi2medio');
        }
        else if(boton2===2){
            setBoton2(1)
            document.getElementById(habilidad2.name+"texto").classList.remove('texto2');
            document.getElementById(habilidad2.name+"texto").classList.add('texto1');
            document.getElementById(habilidad2.name+"svg").classList.remove('svgboton2');
            document.getElementById(habilidad2.name+"svg").classList.add('svgboton1');
            document.getElementById(habilidad2.name+"cruz").classList.remove('svgcruz2');
            document.getElementById(habilidad2.name+"cruz").classList.add('svgcruz1');
            document.getElementById(habilidad2.name+"divi").classList.remove('divi2medio');
            document.getElementById(habilidad2.name+"divi").classList.add('divi1medio');
        }
    }


    function triggerBoton3(){
        if(boton3===0){
            setBoton3(1)
            document.getElementById(habilidad3.name+"texto").classList.remove('texto0');
            document.getElementById(habilidad3.name+"texto").classList.add('texto1')
            document.getElementById(habilidad3.name+"svg").classList.remove('svgboton0');
            document.getElementById(habilidad3.name+"svg").classList.add('svgboton1');
            document.getElementById(habilidad3.name+"cruz").classList.remove('svgcruz0');
            document.getElementById(habilidad3.name+"cruz").classList.add('svgcruz1');
            document.getElementById(habilidad3.name+"divi").classList.remove('divi0');
            document.getElementById(habilidad3.name+"divi").classList.add('divi1derecha');
        }
        else if(boton3===1){
            setBoton3(2)
            document.getElementById(habilidad3.name+"texto").classList.remove('texto1');
            document.getElementById(habilidad3.name+"texto").classList.add('texto2');
            document.getElementById(habilidad3.name+"svg").classList.remove('svgboton1');
            document.getElementById(habilidad3.name+"svg").classList.add('svgboton2');
            document.getElementById(habilidad3.name+"cruz").classList.remove('svgcruz1');
            document.getElementById(habilidad3.name+"cruz").classList.add('svgcruz2');
            document.getElementById(habilidad3.name+"divi").classList.remove('divi1derecha');
            document.getElementById(habilidad3.name+"divi").classList.add('divi2derecha');
        }
        else if(boton3===2){
            setBoton3(1)
            document.getElementById(habilidad3.name+"texto").classList.remove('texto2');
            document.getElementById(habilidad3.name+"texto").classList.add('texto1');
            document.getElementById(habilidad3.name+"svg").classList.remove('svgboton2');
            document.getElementById(habilidad3.name+"svg").classList.add('svgboton1');
            document.getElementById(habilidad3.name+"cruz").classList.remove('svgcruz2');
            document.getElementById(habilidad3.name+"cruz").classList.add('svgcruz1');
            document.getElementById(habilidad3.name+"divi").classList.remove('divi2derecha');
            document.getElementById(habilidad3.name+"divi").classList.add('divi1derecha');
        }
    }

    return(
        <>
        {(cargando1===true || cargando2===true || cargando3===true) &&
        <>
        <div className="divhabilidades">
            <div id={Habilidad1.Habilidad1}>    <h2 className="cargando">Loading moves</h2> </div>
            <div id={Habilidad1.Habilidad2}>    <h2 className="cargando">Loading moves</h2> </div>
            <div id={Habilidad1.Habilidad3}>    <h2 className="cargando">Loading moves</h2> </div>
        </div>
        </>
        }
        {(cargando1===false && cargando2===false && cargando3===false) &&
        <div className="divhabilidades">
            {/* <a href="./pokemones#oliVeneno">oli</a> */}
            <div className="divgrandeizquierda">
                <div className="divizquierda">
                    <div className="divHabi0izquierda">
                        <h4 className="titulohabilidad" id="tituloizquierda" >{habilidad1.name}</h4>
                    </div>

                    <button className="boton" onClick={triggerBoton1} id="botonizquierda">
                            <svg id={habilidad1.name+"cruz"} className="svgcruz0" xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>

                            <svg id={habilidad1.name+"svg"} className="svgboton0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"/>
                            </svg>
                    </button>  
                </div>
                
                
                <div className="divi0" id={habilidad1.name+"divi"}>
                <p className="texto0" id={habilidad1.name+"texto"}>{habilidad1.effect_entries[0].effect}</p>
                </div>
            </div>
            <div className="divgrandemedio">
                <div className="divmedio">
                    <div className="divHabi0medio">
                        <h4 className="titulohabilidad" id="titulomedio">{habilidad2.name}</h4>
                    </div>

                    <button className="boton" onClick={triggerBoton2}>
                            <svg id={habilidad2.name+"cruz"} className="svgcruz0" xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>

                            <svg id={habilidad2.name+"svg"} className="svgboton0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"/>
                            </svg>
                    </button>
                </div>

            
                <div className="divi0" id={habilidad2.name+"divi"}>
                <p className="texto0" id={habilidad2.name+"texto"}>{habilidad2.effect_entries[0].effect}</p>
                </div>
            </div>

            <div className="divgrandederecha">
                <div  className="divderecha">
                    <div className="divHabi0derecha">
                        <h4 className="titulohabilidad" id="tituloderecha">{habilidad3.name}</h4>
                    </div>

                    <button className="boton" onClick={triggerBoton3}  id="botonderecha">
                            <svg id={habilidad3.name+"cruz"} className="svgcruz0" xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>

                            <svg id={habilidad3.name+"svg"} className="svgboton0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"/>
                            </svg>
                    </button>
                </div>
            
                <div className="divi0" id={habilidad3.name+"divi"}>
                <p className="texto0" id={habilidad3.name+"texto"}>{habilidad3.effect_entries[0].effect}</p>
                </div>
            </div>
        </div>
        }
        </>
    )
}