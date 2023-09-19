import DogContent from "../DogContent";
import {useState} from "react";
import {getRandomDog, getListOfBreeds} from "../script";

export default function DogsSearching() {
    const [dogsData, setDogsData] = useState(null)

    async function handleGetRandomDog() {
        let url = await getRandomDog()
        setDogsData({
            url: url,
            dogContent: 'url'
        })
    }

    async function handleGetListOfBreeds() {
        let breedsList = await getListOfBreeds()
        setDogsData({
            breedsList: breedsList,
            dogContent: 'fullBreedsList'
        })
        console.log(breedsList)
    }

    return (
        <>
            <div id='menu'>
                <button onClick={handleGetRandomDog}>Show random dog</button>

                <form method='post'>
                    <label>
                        <input
                            type='text'
                            placeholder='Enter a breed'
                            name='breed'
                        />
                    </label>
                    <button>Show breed</button>
                    <button>Show sub-breed</button>
                </form>

                <button onClick={handleGetListOfBreeds}>Show all breeds</button>
            </div>

            <div id='container'>
                <DogContent dogsData={dogsData}/>
            </div>
        </>
    )
}