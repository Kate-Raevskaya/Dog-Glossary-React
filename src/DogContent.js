export default function DogContent({dogsData}) {
    if(dogsData.dogContent === 'url') {
        return (
                <img id='dog-image' src={dogsData.url} alt='Dog'/>
        )
    }

    if (dogsData.dogContent === 'fullBreedsList') {
        return (
            <BreedsList breedsList={dogsData.breedsList} />
        )
    }
}

function BreedsList({breedsList}) {

    return (
        <p>Here should be a dog list</p>
    )
}