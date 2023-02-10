import { useEffect, useState } from 'react'
import { getArtistNationality } from '../services/getArtistNationality'

function ProbableCountry ({ artistName }) {
  const [probableCountry, setProbableCountry] = useState({ country_id: '', probability: '' })

  useEffect(() => {
    async function getNationality () {
      const data = await getArtistNationality({ signal, artistName })
      if (data) {
        setProbableCountry((prev) => ({ ...prev, country_id: data.country_id, probability: data.probability }))
      }
    }

    const controller = new AbortController()
    const signal = controller.signal

    getNationality()
  }, [artistName])

  if (probableCountry.country_id.length > 0) {
    return (
      <div>{`${artistName} ${probableCountry.country_id} ${probableCountry.probability}`}</div>
    )
  } else {
    return (
      <div>Artist Information is loading</div>
    )
  }
}

export default ProbableCountry

/*
  For the mockup
import { useEffect, useState } from 'react'
import hasName from '../mookups/hasName.json'
function ProbableCountry () {
  const artistName = 'Paul Cezanne'.split(' ')[0]
  const [probableCountry, setProbableCountry] = useState({ country_id: '', probability: '' })

  useEffect(() => {
    setProbableCountry((prev) => ({ ...prev, country_id: hasName.country[0].country_id, probability: hasName.country[0].probability }))
  }, [artistName])
  return (
    <div>{`${artistName} ${probableCountry.country_id} ${probableCountry.probability}`}</div>
  )
}
*/
