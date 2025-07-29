import React from 'react'

function GameList({ games }) {
  return (
    <section className="games">
      <h2>Recent Games</h2>
      <ul>
        {games.slice(0, 5).map((game) => (
          <li key={game.idEvent}>
            <strong>{game.strEvent}</strong> | {game.dateEvent} | {' '}
            {game.intHomeScore} : {game.intAwayScore}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GameList
