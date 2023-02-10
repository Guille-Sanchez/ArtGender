import './App.css'
import ArtistInformation from './components/ArtistInformation.jsx'
import ProbableCountry from './components/ProbableCountry.jsx'

function App () {
  return (
    <div className='container'>
      <header><h1>Get a random piece of art from  Art Institute of Chicago</h1></header>
      <main className='main-container'>
        <div className='App'>
          <ArtistInformation />
          <ProbableCountry />
        </div>
      </main>
      <footer>Website made by Chicho</footer>
    </div>
  )
}

export default App
