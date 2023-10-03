import {useLoaderData, useNavigate} from "react-router-dom";
import {getBreedImage, getRandomDog} from "../dogAPI";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../AuthContext";
import userService from "../userService";

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

    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        if (isAuth) {
            setIsLiked(userService.getUsersDogs().has(imageUrl))
        } else {
            setIsLiked(false)
        }
    }, [imageUrl, isAuth])

    function handleSavedDog(imageUrl) {
        if (!isAuth) {
            return navigate('/login')
        }
        if (isLiked) {
            userService.getUsersDogs().delete(imageUrl)
        } else {
            userService.getUsersDogs().add(imageUrl)
        }
        setIsLiked(!isLiked)
    }


    return (
        <>
            <div id='dog-card'>
                <div id='dog-image'>
                    <img src={imageUrl} alt='Dog'/>
                </div>
                <div id='save-button' onClick={() => handleSavedDog(imageUrl)}
                     className={isLiked ? 'liked' : undefined}></div>
            </div>
        </>
    )
}