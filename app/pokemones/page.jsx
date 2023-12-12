import './pokemones.css'

export default function Pokemones (){
    
    return(
        <div className='pokemonestipo'>
            <h1>Pokemones Segun su tipo</h1>
            <div>
                <div className='divPokemon'>
                    <h3 className='titulotipo'>Acero</h3>
                    <img src="/imagenes/Acero.png" alt="Tipo:Acero" className="imagenlogotipo"/>
                </div>
                <div>
                    <h3 className='titulotipo'>Planta</h3>
                    <img src="/imagenes/Planta.png" alt="Tipo:Planta" className='imagenlogotipo' />
                </div>
                <div>
                    <h3 className='titulotipo'>Dragon</h3>
                    <img src="/imagenes/Dragon.png" alt="Tipo:Dragon" className='imagenlogotipo' />
                </div>
                <div>
                    <h3 className='titulotipo'>Electrico</h3>
                    <img src="/imagenes/Electrico.png" alt="Tipo:Electrico" className='imagenlogotipo' />
                </div>
                <div>
                    <h3 className='titulotipo'>Hada</h3>
                    <img src="/imagenes/Hada.png" alt="Tipo:Hada" className='imagenlogotipo' />
                </div>
                <div>
                    <h3 className='titulotipo'>Psiquico</h3>
                    <img src="/imagenes/Psiquico.png" alt="Tipo:Psiquico" className='imagenlogotipo' />
                </div>
                <div>
                    <h3 className='titulotipo'>Siniestro</h3>
                    <img src="/imagenes/Siniestro.png" alt="Tipo:Siniestro" className='imagenlogotipo' />
                </div>
                <div>
                    <h3 className='titulotipo'>Fantasma</h3>
                    <img src="/imagenes/Fantasma.png" alt="Tipo:Fantasma" className='imagenlogotipo' />
                </div>
                <div>
                    <h3 className='titulotipo'>Agua</h3>
                    <img src="/imagenes/Agua.png" alt="Tipo:Agua" className='imagenlogotipo' />
                </div>
            </div>
        </div>
    )
}