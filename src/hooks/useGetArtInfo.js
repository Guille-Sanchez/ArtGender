import { useEffect, useState } from 'react'
import { getArtInfo } from '../services/getArtInfo'

export function useGetArtInfo (requestNewArtInfo) {
  const [artInformation, setArtInformation] = useState({ title: '', artist: '', image_id: '' })

  useEffect(() => {
    // console.log('inside')
    const controller = new AbortController()
    const signal = controller.signal

    const randomPage = Math.floor(Math.random() * 9921 + 1)
    const randomPieceOfArt = Math.floor(Math.random() * 12 + 1)

    const API_MUSEUMS = `https://api.artic.edu/api/v1/artworks?page=${randomPage}`
    getArtInfo({ API_MUSEUMS, signal, setArtInformation, randomPieceOfArt })
    // console.log('outside')
    return () => controller.abort()
  }, [requestNewArtInfo])

  return (artInformation)
}
