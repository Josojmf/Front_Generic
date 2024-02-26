import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

import { FunctionComponent } from "preact";
import axios from "npm:axios";
type CharacterProps ={
    id: number;
    name: string;
    status: string;
    species: string;
    type: string
    gender: string;
    image: string;
    episode: string[];
    url: string;
    created: string;
    
}


//const CharacterComponent: FunctionComponent<{ character: Character }> = ({ character }) => {
const CharacterComponent : FunctionComponent<CharacterProps> = (props)=>{
    return(
        <div class="Character">
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name} class="ImageCharacter"/>
            <p>{props.status}</p>
            <p>{props.species}</p>
            <p>{props.type}</p>
            <p>{props.gender}</p>
            <a href={props.url}>Link</a>
            <div class="NavBar">
            <div class="Prev">
            <a href={`/character/${props.id-1}`}>Previous </a>
            </div>
            <div class="Next">
            <a href={`/character/${props.id+1}`}> Next</a>
            </div>  
            </div>
        </div>       


    );
}

export default CharacterComponent;