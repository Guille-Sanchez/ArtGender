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

export default ProbableCountry
