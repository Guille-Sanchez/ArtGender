export async function getArtInfo ({ API_MUSEUMS, signal, randomPieceOfArt }) {
  let newArtInfo = {}
  try {
    const response = await fetch(API_MUSEUMS, { signal })
    const data = await response.json()
    newArtInfo = { title: data.data[randomPieceOfArt].title, artist: data.data[randomPieceOfArt].artist_title, image_id: data.data[randomPieceOfArt].image_id }
    return newArtInfo
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
