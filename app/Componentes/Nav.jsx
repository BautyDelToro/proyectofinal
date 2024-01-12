import Link from "next/link"
import './Nav.css'

export default function Nav(){
    return(
        <div className="navegacion">
        <a href="./"><img src="/imagenes/Poké_Ball_icon.svg.png" alt="Inicio" className="imagenlogo"/></a>
        <ul className="lista">
            <li>
                <Link href="./pokemones">Pokemones</Link>
            </li>
           
            <li>
                <Link href="./habilidades">Habilidades</Link>
            </li>

            <li>
                <Link href="./contacto">Contacto</Link>
            </li>

        </ul>
        </div>
    )
}