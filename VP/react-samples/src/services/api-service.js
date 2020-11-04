export default async function getInfo(url) {
    const response = await fetch(`${url}`, {method: 'GET'})
    return await response.json();
}

export async function getInfoBloom(url) {

    const response = await fetch(`${url}`, {
        method: 'GET',
        headers: {
                    'Ocp-Apim-Subscription-Key': 'a07e3fa63cca49d1bb4a6a4eb29fc527'
                },
        //body: JSON.stringify({getInfo: data})
    })
    return await response.json();
}