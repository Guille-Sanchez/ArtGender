export default function checkExistenceArtInfo (artInformation) {
  if (artInformation.title) {
    const verifyArtInformation = Object.values(artInformation)
    const isUndefined = verifyArtInformation.some(value => !value)
    console.log(`Is undefined for: ${isUndefined} \nartInformation.title: ${artInformation.title} \nartInformation.artist: ${artInformation.artist} \nartInformation.image_id: ${artInformation.image_id} \nartInformation.artist: ${artInformation.artist} \nartInformation.alt_text: ${artInformation.alt_text}`)
    return isUndefined
  }
}
