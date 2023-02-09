import { useEffect, useState } from 'react'
import checkExistenceArtInfo from '../services/checkExistanceArtInfo'
import { getArtInfo } from '../services/getArtInfo'

/*
  Requests Information to API. Once it recieves the information, it checks it for null and undefined.
  If all items are present. The state is set.
*/

export function useGetArtInfo (requestNewArtInfo, setRequestNewArtInfo) {
  const [artInformation, setArtInformation] = useState({ title: '', artist: '', image_id: '' })
  useEffect(() => {
    async function FetchData () {
      const randomPage = Math.floor(Math.random() * 9921 + 1)
      const randomPieceOfArt = Math.floor(Math.random() * 11 + 1)

      const API_MUSEUMS = `https://api.artic.edu/api/v1/artworks?page=${randomPage}`
      const ART_INFO = await getArtInfo({ API_MUSEUMS, signal, randomPieceOfArt })

      if (ART_INFO) {
        if (checkExistenceArtInfo(ART_INFO)) {
          setRequestNewArtInfo((prev) => !prev)
        } else {
          // console.log('LLego a set', ART_INFO)
          setArtInformation(() => ({ ...ART_INFO }))
        }
      }
    }

    const controller = new AbortController()
    const signal = controller.signal

    FetchData()

    return () => controller.abort()
  }, [requestNewArtInfo])
  // console.log('art information que retorna del custom hook', artInformation)
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
