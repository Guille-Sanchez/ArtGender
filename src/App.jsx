
import { useState, useEffect } from 'react'
import './App.css'

function App () {
  /*
    To retrieve the information and image from https://api.artic.edu/api/v1/artworks, firstly you must select a piece of art.
    As the API does not provide an ENDPOINT for displaying an aleatory art, one must make the logic behind it.
    This API does not provide a range of exiting ids, so if you request a random number it may not exist.
    However, if you request this API as presented, it will display the following format:
      "pagination": {
      "total": 119050,
      "limit": 12,
      "offset": 0,
      "total_pages": 9921,
      "current_page": 1,
      "next_url": "https://api.artic.edu/api/v1/artworks?page=2"
    }
    From it you, can iterate to select up to 12 pieces of art from each page. In this case, there are 9921 pages available **API UPDATES DAILY**

    After retrieving the information of a piece of art. In order to display a picture of it, you must pass the image_id of that piece of art to another API.
    For example: https://api.artic.edu/api/v1/artworks/16564 (https://api.artic.edu/api/v1/artworks/{id})
      https://www.artic.edu/iiif/2/838d8c33-a3b4-68ea-587b-87ceec2011af/full/843,/0/default.jpg (https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg)
  */

  const [artInformation, setArtInformation] = useState({ title: '', artist: '', style_title: '', image_id: '' })
  // const [loading, setLoading] = useState(true)
  // const [imageArt, setImageArt] = useState('')

  useEffect(() => {
    console.log('inside')
    const controller = new AbortController()
    const signal = controller.signal

    const randomPage = Math.floor(Math.random() * 9921 + 1)
    const randomPieceOfArt = Math.floor(Math.random() * 12 + 1)

    const API_MUSEUMS = `https://api.artic.edu/api/v1/artworks?page=${randomPage}`

    fetch(API_MUSEUMS, { signal })
      .then(response => response.json())
      .then(data => {
        // setLoading(() => false)
        setArtInformation((prev) => ({ ...prev, title: data.data[randomPieceOfArt].title, artist: data.data[randomPieceOfArt].artist, style_title: data.data[randomPieceOfArt].style_title, image_id: data.data[randomPieceOfArt].image_id }))
      })
      .catch((err) => {
        if (err.name === 'AbortError') { console.log('Abort Error') }
        console.log('Error con client side')
      })
    console.log('out')
    return () => controller.abort
  }, [])

  console.log(artInformation)

  if (!artInformation.title) {
    return (
      <div className='App'>
        <p>Loading</p>
      </div>
    )
  } else {
    console.log()
    return (
      <div className='App'>
        <ul>
          {artInformation.title && <li key={artInformation.title}>{artInformation.title}</li>}
          {artInformation.artist && <li key={artInformation.artist}>{artInformation.artist}</li>}
          {artInformation.style_title && <li key={artInformation.style_title}>{artInformation.style_title}</li>}
        </ul>
        {artInformation.image_id && <img src={`https://www.artic.edu/iiif/2/${artInformation.image_id}/full/843,/0/default.jpg`} alt={artInformation.title} />}
      </div>
    )
  }
}

export default App
/*
        <ul>
          {artInformation.map((item, index) => {
            <li key={`${item.title}-${index}`}>{item}</li>
          })}
        </ul>
*/

/*
  useEffect(() => {
    console.log(artInformation.image_id.length)
    if (artInformation.image_id.length === 0) return
    console.log('Inside 2nd useEffect')
    const controller = new AbortController()
    const signal = controller.signal
    const API_IMAGES = `https://www.artic.edu/iiif/2/${artInformation.image_id}/full/843,/0/default.jpg`
    console.log(API_IMAGES)

    fetch(API_IMAGES, { signal })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImageArt(() => data)
        setLoading(() => false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') { console.log('Abort Error') }
      })

    return () => controller.abort
  }, [artInformation.image_id]) */
