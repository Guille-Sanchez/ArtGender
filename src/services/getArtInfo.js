export async function getArtInfo ({ signal }) {
  const randomPage = Math.floor(Math.random() * 9921 + 1)
  const randomPieceOfArt = Math.floor(Math.random() * 11 + 1)
  const API_MUSEUMS = `https://api.artic.edu/api/v1/artworks?page=${randomPage}`

  try {
    const response = await fetch(API_MUSEUMS, { signal })
    const data = await response.json()

    return (
      {
        title: data.data[randomPieceOfArt].title,
        artist: data.data[randomPieceOfArt].artist_title,
        image_id: data.data[randomPieceOfArt].image_id
      }
    )
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Abort Error')
    } else {
      console.log('Error con client side', err)
    }
  }
}

/*
For using the mockup
  import { useGetArtInfo } from '../hooks/useGetArtInfo'
  import { checkExistenceArtInfo } from './checkExistanceArtInfo'

  .then(response => response.json())
  .then(data => {
  newArtInfo = { title: data.data[randomPieceOfArt].title, artist: data.data[randomPieceOfArt].artist, image_id: data.data[randomPieceOfArt].image_id }
  console.log(newArtInfo)
  if (checkExistenceArtInfo(newArtInfo)) {
      useGetArtInfo()
    }
 return newArtInfo
 })
 .catch((err) => {
 if (err.name === 'AbortError') { console.log('Abort Error') } else {
 console.log('Error con client side')
 }
 })
 const response = await fetch(API_MUSEUMS, { signal })
 const data = await response.json()
 newArtInfo = { title: data.data[randomPieceOfArt].title, artist: data.data[randomPieceOfArt].artist, image_id: data.data[randomPieceOfArt].image_id }
 console.log(newArtInfo)
*/
