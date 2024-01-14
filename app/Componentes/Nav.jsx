import Link from "next/link"
import './Nav.css'

export default function Nav(){
    return(
        <div className="navegacion">
        <a href="./"><img src="/imagenes/Poké_Ball_icon.svg.png" alt="Inicio" className="imagenlogo"/></a>
        <ul className="lista">
            <li>
                <Link href="./pokemones">Pokemons</Link>
            </li>
           
            <li>
                <Link href="./habilidades">Abilities</Link>
            </li>

            <li>
                <Link href="./contacto">Contact us</Link>
            </li>

        </ul>
        </div>
    )
}