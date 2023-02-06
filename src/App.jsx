
import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [imageId, setImageId] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const randomNumber = Math.floor(Math.random() * 100000 + 35000)
    const API_MUSEUMS = `https://api.artic.edu/api/v1/artworks/${randomNumber}`

    const API_IMAGES = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    fetch(API_MUSEUMS, { signal })
      .then(response => response.json())
      .then(data => {
        console.log(data.data.image_id)
        setImageId(data)
      })
      .catch((err) => {
        if (err.name === 'AbortError') { console.log('Abort Error') }
      })
  }, [])

  return (
    <div className='App'>
      hi
    </div>
  )
}

export default App
