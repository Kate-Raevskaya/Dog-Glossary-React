import AuthService from "../AuthService";
import {useState} from "react";

export default function Saved() {
    let dogsUrls=[];
    AuthService.getUsersDogs().forEach((dog) => dogsUrls.push(dog))

    const [dogs, setDogs] = useState(dogsUrls)

    function handleDeleteButton(dogUrl) {
        AuthService.getUsersDogs().delete(dogUrl)
        setDogs(dogsUrls.filter(dog => dog !== dogUrl))
    }


    return (
        <>
            {dogs.length === 0 && <p>There will be your added dogs</p>}
            {dogs.map(dogUrl => (
                <div key={dogUrl}>
                    <img src={dogUrl} alt='Dog' />
                    <button
                        onClick={() => handleDeleteButton(dogUrl)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </>
    )
}