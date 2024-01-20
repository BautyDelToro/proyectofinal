import Link from "next/link"
import './Nav.css'

export default function Nav(){
    return(
        <div className="navegacion">
            <div className="navegacion2">
                <a href="./"><img src="/imagenes/Poké_Ball_icon.svg.png" alt="Inicio" className="imagenlogo"/></a>
                <a href="./"> <img src="/imagenes/Pokemon_logo.svg.png" alt="Inicio" className="imagenpokemon" /></a>
                <ul className="lista">
                    <li>
                        <Link href="./pokemones" className="Link">Pokemon</Link>
                    </li>
                
                    <li>
                        <Link href="./habilidades" className="Link">Moves</Link>
                    </li>

                    <li>
                        <Link href="./contacto" className="Link">Contact</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}