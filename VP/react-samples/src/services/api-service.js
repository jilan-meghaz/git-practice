export default async function getInfo(url) {
    const response = await fetch(`${url}`, {method: 'GET'})
    return await response.json();
}
