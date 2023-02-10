export default function checkArtInfoData (artInformation) {
  if (artInformation.title) {
    const verifyArtInformation = Object.values(artInformation)
    const isUndefined = verifyArtInformation.some(value => !value)
    return isUndefined
  }
}
