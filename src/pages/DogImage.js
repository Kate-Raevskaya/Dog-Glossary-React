import {redirect, useLoaderData} from "react-router-dom";
import {getBreedImage, getRandomDog} from "../dogAPI";

export async function randomDogLoader() {
    try {
        return await getRandomDog()
    } catch (error) {
        console.log(error)
    }
}

export async function dogsBreedLoader({params}) {
    try {
        params.breed.toLowerCase()
        return await getBreedImage(params.breed)
    } catch (error) {
        throw new Error('Breed not found!')
    }
}


export default function DogImage() {
    let imageUrl = useLoaderData()

    return <img id='dog-image' src={imageUrl} alt='Dog'/>
}