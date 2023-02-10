export async function getArtistNationality ({ signal, artistName }) {
  const API_NATIONALITY = `https://api.nationalize.io/?name=${artistName}`

  try {
    const response = await fetch(API_NATIONALITY, { signal })
    const data = await response.json()

    console.log(data)
    if (data.country.length === 0) return ({ country_id: 'NA', probability: 'NA' }) // Here one can put a more meaningful message
    return ({ country_id: data.country[0].country_id, probability: data.country[0].probability })
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Abort Error')
    } else {
      console.log('Error con client side', err)
    }
  }
}
