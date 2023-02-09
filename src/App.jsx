import { useState, useEffect } from 'react'
import './App.css'
import { useGetArtInfo } from './hooks/useGetArtInfo'

function App () {
  const [requestNewArtInfo, setRequestNewArtInfo] = useState(true)
  const artInformation = useGetArtInfo(requestNewArtInfo)

  useEffect(() => {
    // checkExistanceArtInfo()
    console.log('ArtInformation APP:', artInformation)
    if (!artInformation) {
      console.log('hola')
      setRequestNewArtInfo((prev) => !prev)
    }
  }, [artInformation])

  if (!artInformation.title) {
    return (
      <div className='App'>
        <p>Loading</p>
      </div>
    )
  } else {
    return (
      <div className='App'>
        <ul>
          <li key={artInformation.title}>{artInformation.title}</li>
          <li key={artInformation.artist}>{artInformation.artist}</li>
        </ul>
        <img key={artInformation.image_id} src={`https://www.artic.edu/iiif/2/${artInformation.image_id}/full/843,/0/default.jpg`} alt={artInformation.title} />
        <button onClick={() => { setRequestNewArtInfo((prev) => !prev) }}>Get new image</button>
      </div>
    )
  }
}

export default App
