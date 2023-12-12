import Link from "next/link"
import './Nav.css'

export default function Nav(){
    return(
        <div className="navegacion">
        <a href="./"><img src="/imagenes/Poké_Ball_icon.svg.png" alt="Inicio" className="imagenlogo"/></a>
        <ul className="lista">
            <li>
                <Link href="./pokemones" className="ola">Pokemones</Link>
            </li>
           
            <li>
                <Link href="./Contacto">Contacto</Link>
            </li>

        </ul>
        </div>
    )
}