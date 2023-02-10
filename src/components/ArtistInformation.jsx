import { useState } from 'react'
import { useGetArtInfo } from '../hooks/useGetArtInfo'
import ProbableCountry from './ProbableCountry.jsx'

function ArtistInformation () {
  const [requestNewArtInfo, setRequestNewArtInfo] = useState(true)
  const artInformation = useGetArtInfo(requestNewArtInfo, setRequestNewArtInfo)

  if (!artInformation.title) {
    return (
      <p>Loading</p>
    )
  } else {
    return (
      <>
        <ul className='art-piece'>
          <li key={artInformation.title}><h2>{artInformation.title}</h2></li>
          <li key={artInformation.image_id}>
            <img
              src={`https://www.artic.edu/iiif/2/${artInformation.image_id}/full/843,/0/default.jpg`}
              alt={artInformation.title}
            />
          </li>
          <li key={artInformation.artist}>
            <ProbableCountry artistName={artInformation.artist.split(' ')[0]} />
          </li>
        </ul>
        <button onClick={() => { setRequestNewArtInfo((prev) => !prev) }}>Get new image</button>
      </>
    )
  }
}

export default ArtistInformation
