import {useLoaderData, useNavigate, useNavigation} from "react-router-dom";
import {getBreedImage, getRandomDog} from "../dogAPI";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../AuthContext";
import userService from "../userService";

export async function randomDogLoader() {
    try {
        let url = await getRandomDog()
        return await getImage(url);
    } catch (error) {
        console.log(error)
    }
}

export async function dogsBreedLoader({params}) {
    try {
        params.breed.toLowerCase()
        let url = await getBreedImage(params.breed)
        return await getImage(url);
    } catch (error) {
        throw new Error('Breed not found!')
    }
}

function loadBlob(blob) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            resolve(reader.result)
        });
        reader.addEventListener("error", () => {
            reject("error");
        })
        reader.readAsDataURL(blob);
    });
}

async function getImage(url) {
    let response = await fetch(url)
    if (response.ok) {
        let blob = await response.blob()
        return await loadBlob(blob)
    }
    throw new Error('Breed not found!')
}


export default function DogImage() {
    let imageUrl = useLoaderData()
    let {isAuth} = useContext(AuthContext)
    let navigate = useNavigate()
    let navigation = useNavigation()

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
            <div className={navigation.state === 'loading' ? 'dog-card loading' : 'dog-card'} >
                <div className='dog-image'>
                    <img src={imageUrl} alt='Dog'/>
                    {/*{navigation.state === 'loading' ?*/}
                    {/*    <>*/}
                    {/*        <img src='../images/loading.png' alt='loading'/>*/}
                    {/*        <p>{navigation.state}</p>*/}
                    {/*    </>*/}
                    {/*     :*/}
                    {/*    <img src={imageUrl} alt='Dog'/>*/}
                    {/*}*/}
                </div>
                <div id='save-button' onClick={() => handleSavedDog(imageUrl)}
                     className={isLiked ? 'liked' : undefined}></div>
            </div>
        </>
    )
}