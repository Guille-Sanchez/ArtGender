import { useEffect, useState } from 'react'
import { getArtInfo } from '../services/getArtInfo'

export function useGetArtInfo (requestNewArtInfo) {
  const [artInformation, setArtInformation] = useState({ title: '', artist: '', image_id: '', alt_text: '' })
  useEffect(() => {
    async function FetchData () {
      const ART_INFO = await getArtInfo({ API_MUSEUMS, signal, randomPieceOfArt })
      setArtInformation(() => ({ ...ART_INFO }))
    }
    const controller = new AbortController()
    const signal = controller.signal
    const randomPage = Math.floor(Math.random() * 9921 + 1)
    const randomPieceOfArt = Math.floor(Math.random() * 12 + 1)

    const API_MUSEUMS = `https://api.artic.edu/api/v1/artworks?page=${randomPage}`

    FetchData()

    return () => controller.abort()
  }, [requestNewArtInfo])
  console.log('art information que retorna del custom hook', artInformation)
  return artInformation
}

/*
  For using MOCKUP INFO
    import hasArtInfo from '../mookups/hasArtInfo.json'
    import noArtInfo from '../mookups/noArtInfo.json'
    import { checkExistenceArtInfo } from '../services/checkExistanceArtInfo'

  useEffect(() => {
    let newArtInfo = { title: noArtInfo[0].title, artist: noArtInfo[0].artist_title, image_id: noArtInfo[0].image_id, alt_text: noArtInfo[0].alt_text }
    // const NEW_ART_INFO = { title: hasArtInfo.title, artist: hasArtInfo.artist_title, image_id: hasArtInfo.image_id, alt_text: hasArtInfo.thumbnail.alt_text }
    setArtInformation((prev) => ({ ...prev, ...newArtInfo }))
    if (checkExistenceArtInfo(newArtInfo)) {
      newArtInfo = { title: noArtInfo[1].title, artist: noArtInfo[1].artist_title, image_id: noArtInfo[1].image_id, alt_text: noArtInfo[1].alt_text }
      return (setArtInformation((prev) => ({ ...prev, ...newArtInfo })))
    }
    setArtInformation((prev) => ({ ...prev, ...newArtInfo }))
  }, [requestNewArtInfo])
*/
