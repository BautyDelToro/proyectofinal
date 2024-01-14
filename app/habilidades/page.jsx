'use client';
import { useState } from "react";
import "./habilidades.css"
import HabilidadesComp from "../Componentes/HabilidadesComp";


export default function Habilidades(){
    return(
        <div className="divHabilidades">
        <h1 className="TituloHabilidades">Abilities list</h1>
        <HabilidadesComp Habilidad1="blaze" Habilidad2="flash-fire" Habilidad3="steadfast" />
        <HabilidadesComp Habilidad1="shield-dust" Habilidad2="guts" Habilidad3="rock-head"/>
        <HabilidadesComp Habilidad1="chlorophyll" Habilidad2="run-away" Habilidad3="static"/>
        <HabilidadesComp Habilidad1="healer" Habilidad2="synchronize" Habilidad3="cursed-body"/>
        <HabilidadesComp Habilidad1="sturdy" Habilidad2="water-compaction" Habilidad3="cute-charm"/>
        <HabilidadesComp Habilidad1="overgrow" Habilidad2="natural-cure" Habilidad3="swarm"/>
        <HabilidadesComp Habilidad1="rain-dish	" Habilidad2="stench" Habilidad3="ice-body"/>
        <HabilidadesComp Habilidad1="clear-body" Habilidad2="thick-fat" Habilidad3="shed-skin"/>
        <HabilidadesComp Habilidad1="rivalry" Habilidad2="inner-focus" Habilidad3="intimidate"/>
        <HabilidadesComp Habilidad1="levitate" Habilidad2="keen-eye" Habilidad3="sweet-veil"/>
        <HabilidadesComp Habilidad1="sand-veil" Habilidad2="weak-armor" Habilidad3="vital-spirit"/>
        <HabilidadesComp Habilidad1="illusion" Habilidad2="rough-skin" Habilidad3="flame-body	"/>
        <HabilidadesComp Habilidad1="limber" Habilidad2="pressure" Habilidad3="torrent"/>
        </div>
    )
}