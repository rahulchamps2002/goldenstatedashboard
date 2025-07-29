import React, { useState } from 'react'

function PlayerRoster({ players, searchTerm, setSearchTerm }) {
  const [flippedCards, setFlippedCards] = useState({})

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const filteredPlayers = players.filter((player) =>
    player.strPlayer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="players">
      <h2>Player Roster</h2>
      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="player-list">
        {filteredPlayers.map((player) => (
          <div
            key={player.idPlayer}
            className={`player-card ${flippedCards[player.idPlayer] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(player.idPlayer)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') toggleFlip(player.idPlayer)
            }}
          >
            <div className="player-inner">
              <div className="player-front">
                <img
                  src={player.strCutout || player.strThumb || 'https://via.placeholder.com/150'}
                  alt={player.strPlayer}
                />
                <h3>{player.strPlayer}</h3>
                <p>{player.strPosition}</p>
              </div>
              <div className="player-back">
                <h3>{player.strPlayer} Stats</h3>
                <p><strong>Position:</strong> {player.strPosition || 'N/A'}</p>
                <p><strong>Height:</strong> {player.strHeight || 'N/A'}</p>
                <p><strong>Weight:</strong> {player.strWeight || 'N/A'}</p>
                <p><strong>Date of Birth:</strong> {player.dateBorn || 'N/A'}</p>
                <p><strong>Nationality:</strong> {player.strNationality || 'N/A'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlayerRoster
