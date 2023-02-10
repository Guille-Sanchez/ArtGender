import { useEffect, useState } from 'react'
import checkArtInfoData from '../services/checkArtInfoData'
import { getArtInfo } from '../services/getArtInfo'

/*
  Requests Information to API. Once it recieves the information, it checks it for null and undefined.
  If all items are present, the state is set. Otherwise, it request another set of information to API.
*/
async function FetchData (setArtInformation, setRequestNewArtInfo, signal) {
  const ART_INFO = await getArtInfo({ signal })

  if (ART_INFO) {
    if (checkArtInfoData(ART_INFO)) {
      setRequestNewArtInfo((prev) => !prev)
    } else {
      setArtInformation(() => ({ ...ART_INFO }))
    }
  }
}

export function useGetArtInfo (requestNewArtInfo, setRequestNewArtInfo) {
  const [artInformation, setArtInformation] = useState({ title: '', artist: '', image_id: '' })
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    FetchData(setArtInformation, setRequestNewArtInfo, signal)

    return () => controller.abort()
  }, [requestNewArtInfo])
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
