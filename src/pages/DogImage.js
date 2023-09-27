import {redirect, useLoaderData, useNavigate} from "react-router-dom";
import {getBreedImage, getRandomDog, saveDog} from "../dogAPI";
import {useContext} from "react";
import {AuthContext} from "../AuthContext";
import AuthService from "../AuthService";

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
    let {isAuth} = useContext(AuthContext)
    let navigate = useNavigate()

    function handleSavedDog(imageUrl) {
        if (!isAuth) {
            return navigate('/login')
        }
        AuthService.getUsersDogs().add(imageUrl)
    }



    return (
        <>
            <button onClick={() => handleSavedDog(imageUrl)}>Save</button>
            <img id='dog-image' src={imageUrl} alt='Dog'/>
        </>
    )
}