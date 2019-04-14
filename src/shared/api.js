
import fetch from 'isomorphic-fetch'

export function cities() {

    // const url = 'https://uatapi.justride.in/city'
  const url =   'https://restcountries.eu/rest/v2/all'

    return fetch(url)
        .then((data) => data.json())
        .then((cities) => cities)
        .catch((error) => {
            console.warn(error)
            return null
        });
}