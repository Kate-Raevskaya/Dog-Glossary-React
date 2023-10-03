import {getListOfBreeds} from "../dogAPI";
import {useLoaderData} from "react-router-dom";

export async function listOfSubBreedsLoader({params}) {
    let listAllBreeds;
    try {
        listAllBreeds = await getListOfBreeds()
    } catch (error) {
        console.log(error)
    }
    let listSubBreeds = listAllBreeds[params.breed]
    if (!listSubBreeds) {
        throw new Error('Breed not found!')
    }
    if (listSubBreeds.length === 0) {
        throw new Error('Sub breed not found!')
    }
    return listSubBreeds
}


export default function ListOfSubBreeds() {
    let listOfSubBreeds = useLoaderData()

    return (
        <ul>
            {listOfSubBreeds.map(subBreed => (<li key={subBreed}>{subBreed}</li>))}
        </ul>
    )
}