import {useLoaderData} from "react-router-dom";
import {getListOfBreeds} from "../dogAPI";


export async function listOfAllBreedsLoader(){
    try {
        return await getListOfBreeds()
    } catch (error) {
        console.log(error)
    }
}

export default function ListOfAllBreeds() {
    let breedsList = useLoaderData()

    return (
        <ul>
            {Object.keys(breedsList).map(breed => (
                <li key={breed}>
                    {breed}
                    <ul>
                        {breedsList[breed].map(subBreed => <li key={subBreed}>{subBreed}</li>)}
                    </ul>
                </li>
            ))}
        </ul>
    )
}