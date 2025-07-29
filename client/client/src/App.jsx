import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import TeamInfo from './components/TeamInfo'
import PlayerRoster from './components/PlayerRoster'
import GameList from './components/GameList'
import GameChart from './components/GameChart'
import Footer from './components/Footer'

function App() {
  const [team, setTeam] = useState(null)
  const [players, setPlayers] = useState([])
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [chartType, setChartType] = useState('line')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamRes = await fetch('/api/team')
        if (!teamRes.ok) throw new Error('Failed to load team data')
        const teamData = await teamRes.json()
        setTeam(teamData.teams[0])

        const playersRes = await fetch('/api/players')
        if (!playersRes.ok) throw new Error('Failed to load player data')
        const playersData = await playersRes.json()
        setPlayers(playersData.player || [])

        const gamesRes = await fetch('/api/games')
        if (!gamesRes.ok) throw new Error('Failed to load games data')
        const gamesData = await gamesRes.json()
        setGames(gamesData.results || [])

        setError(null)
      } catch (err) {
        console.error('Error loading dashboard:', err)
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleScroll = (e, id) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (loading) {
    return <div className="loading">Loading dashboard...</div>
  }

  if (error) {
    return (
      <div className="error">
        <h2>Oops! Something went wrong 😢</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="app">
      <Header team={team} />

      {/* Sticky Navbar */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#1d428a',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          zIndex: 1000,
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          style={{ color: '#ffc72c', fontWeight: 'bold', textDecoration: 'none' }}
        >
          Golden State Warriors:
        </a>
        <a href="#team-info" onClick={(e) => handleScroll(e, 'team-info')} style={navLinkStyle}>Team Info</a>
        <a href="#player-roster" onClick={(e) => handleScroll(e, 'player-roster')} style={navLinkStyle}>Players</a>
        <a href="#game-list" onClick={(e) => handleScroll(e, 'game-list')} style={navLinkStyle}>Games</a>
        <a href="#game-chart" onClick={(e) => handleScroll(e, 'game-chart')} style={navLinkStyle}>Chart</a>
      </nav>

      <main className="main">
        <section id="team-info">
          <TeamInfo team={team} />
        </section>
        <section id="player-roster">
          <PlayerRoster players={players} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>
        <section id="game-list">
          <GameList games={games} />
        </section>
        <section id="game-chart">
          <GameChart games={games} chartType={chartType} setChartType={setChartType} />
        </section>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            margin: '2rem auto',
            display: 'block',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#1d428a',
            color: '#ffc72c',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          ↑ Back to Top
        </button>
      </main>

      <Footer />
    </div>
  )
}

const navLinkStyle = {
  color: '#ffc72c',
  fontWeight: 'bold',
  textDecoration: 'none',
  cursor: 'pointer',
}

export default App
