'use client';
import { useState } from "react";
import "./habilidades.css"
import HabilidadesComp from "../Componentes/HabilidadesComp";


export default function Habilidades(){
    return(
        <div className="divHabilidades">
        <h1 className="TituloHabilidades">Moves list</h1>
        <HabilidadesComp Habilidad1="mega-punch" Habilidad2="fire-punch" Habilidad3="pay-day" />
        <HabilidadesComp Habilidad1="karate-chop" Habilidad2="scratch" Habilidad3="sand-attack"/>
        <HabilidadesComp Habilidad1="bind" Habilidad2="psybeam" Habilidad3="headbutt"/>
        <HabilidadesComp Habilidad1="cut" Habilidad2="tackle" Habilidad3="gust"/>
        <HabilidadesComp Habilidad1="swords-dance" Habilidad2="razor-wind" Habilidad3="mist"/>
        <HabilidadesComp Habilidad1="ice-punch" Habilidad2="pound" Habilidad3="wing-attack"/>
        <HabilidadesComp Habilidad1="take-down" Habilidad2="fly" Habilidad3="body-slam"/>
        <HabilidadesComp Habilidad1="hyper-beam" Habilidad2="crafty-shield" Habilidad3="dark-void"/>
        </div>
    )
}