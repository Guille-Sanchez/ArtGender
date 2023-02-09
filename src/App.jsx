import { useState } from 'react'
import './App.css'
import { useGetArtInfo } from './hooks/useGetArtInfo'

function App () {
  const [requestNewArtInfo, setRequestNewArtInfo] = useState(true)
  const artInformation = useGetArtInfo(requestNewArtInfo, setRequestNewArtInfo)

  if (!artInformation.title) {
    return (
      <div className='App'>
        <p>Loading</p>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <header><h1>Get a random piece of art from  Art Institute of Chicago</h1></header>
        <main className='main-container'>
          <div className='App'>
            <ul className='art-piece'>
              <li key={artInformation.title}><h2>{artInformation.title}</h2></li>
              <li key={artInformation.image_id}>
                <img
                  src={`https://www.artic.edu/iiif/2/${artInformation.image_id}/full/843,/0/default.jpg`}
                  alt={artInformation.title}
                />
              </li>
              <li key={artInformation.artist}>
                <div>{artInformation.artist}</div>
              </li>
            </ul>
            <button onClick={() => { setRequestNewArtInfo((prev) => !prev) }}>Get new image</button>
          </div>
        </main>
        <footer>Website made by Chicho</footer>
      </div>
    )
  }
}

export default App
