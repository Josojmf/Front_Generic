import axios from "npm:axios";
import { FunctionComponent } from "preact";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Character from "../../components/Character.tsx";

type Character ={
    id: number;
    name: string;
    status: string;
    species: string;
    type: string
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
    
}

type CharacterResponse = {  
    results: Character;
  };

export const handler : Handlers = {
    GET: async function (req: Request, ctx: FreshContext <unknown,CharacterResponse>) {
        const id = ctx.params.id;
        const response = await axios.get<CharacterResponse>(
            `https://rickandmortyapi.com/api/character/${id}`
          );
          if (response.status !== 200) {
              return new Response('Error fetching character', { status: 500 });
          }
          const characters = response.data; 

            return ctx.render(characters);
    },
    }   
    const Page = (props: PageProps<Character>) => {
        const { data, error } = props;
        const character = data;
        console.log(character);
        if (error) {
            return <div>{error}</div>;
        }
        return (
            <div>
                <Character {...character} />
                </div>);
    }
export default Page;