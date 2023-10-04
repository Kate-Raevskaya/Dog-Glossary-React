import {useState} from "react";
import userService from "../userService";
import '../saved.scss';

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
                <div key={dogUrl} className='dog-card'>
                    <div className='dog-image'>
                        <img src={dogUrl} alt='Dog' />
                    </div>
                    <div
                        id='delete-button'
                        onClick={() => handleDeleteButton(dogUrl)}
                    >
                    </div>
                </div>
            ))}
        </div>
    )
}