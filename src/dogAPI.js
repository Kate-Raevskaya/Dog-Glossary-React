export async function getRandomDog() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (response.ok) {
        let data = await response.json();
        return data.message;
    } else {
        throw new Error(`incorrect service response: ${response.status}`);
    }
}

export async function getListOfBreeds() {
    let response = await fetch('https://dog.ceo/api/breeds/list/all');
    if (response.ok) {
        let data = await response.json();
        return data.message;
    } else {
        throw new Error(`incorrect service response: ${response.status}`);
    }
}

export async function getBreedImage(breed) {
    breed.toLowerCase()
    let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    if (response.ok) {
        let data = await response.json();
        return data.message;
    } else {
        throw new Error(`incorrect service response: ${response.status}`);
    }
}