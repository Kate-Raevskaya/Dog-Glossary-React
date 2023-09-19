export async function getRandomDog() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (response.status >= 200 && response.status < 300) {
        let data = await response.json();
        return data.message;
    } else {
        throw new Error(`incorrect service response: ${response.status}`);
    }
}

export async function getListOfBreeds() {
    let response = await fetch('https://dog.ceo/api/breeds/list/all');
    if (response.status >= 200 && response.status < 300) {
        let data = await response.json();
        return data.message;
    } else {
        throw new Error(`incorrect service response: ${response.status}`);
    }
}