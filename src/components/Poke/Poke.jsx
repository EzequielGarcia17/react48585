import React, { useEffect, useState } from 'react'
import "./Poke.css"

export const Poke = () => {
    const [pokemon, setPokemon] = useState ("");
    const [id, setId] = useState (1);
    const [busqueda,setBusqueda] = useState ("");
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) =>{
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    imagen: data.sprites.front_default,
                })
            })
    }, [])
    return (
        <>
            <h4 className="poke">{pokemon.numero}</h4>
            <h5 className="poke">{pokemon.nombre}</h5>
            <img src={pokemon.imagen}/>
        </>
    )
}