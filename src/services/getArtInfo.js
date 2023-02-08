
export function getArtInfo ({ API_MUSEUMS, signal, setArtInformation, randomPieceOfArt }) {
  fetch(API_MUSEUMS, { signal })
    .then(response => response.json())
    .then(data => {
      setArtInformation((prev) => ({ ...prev, title: data.data[randomPieceOfArt].title, artist: data.data[randomPieceOfArt].artist, image_id: data.data[randomPieceOfArt].image_id }))
    })
    .catch((err) => {
      if (err.name === 'AbortError') { console.log('Abort Error') } else {
        console.log('Error con client side')
      }
    })
}
