import {useState} from "react";
import userService from "../userService";

export default function Saved() {
    let dogsUrls=[];
    userService.getUsersDogs().forEach((dog) => dogsUrls.push(dog))

    const [dogs, setDogs] = useState(dogsUrls)

    function handleDeleteButton(dogUrl) {
        userService.getUsersDogs().delete(dogUrl)
        setDogs(dogsUrls.filter(dog => dog !== dogUrl))
    }


    return (
        <div className='dogs-container'>
            {dogs.length === 0 && <p id='empty'>There will be your added dogs &#128021;</p>}
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
        </div>
    )
}