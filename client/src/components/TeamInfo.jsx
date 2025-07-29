import React, { useState } from 'react';

function TeamInfo({ team }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;

  if (!team) return null;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const description = team.strDescriptionEN || '';

  const shouldTruncate = description.length > limit;

  return (
    <section className="about">
      <h2>{team.strStadium}</h2>
      <p>
        {isExpanded || !shouldTruncate
          ? description
          : `${description.slice(0, limit)}...`}
        {shouldTruncate && (
          <button
            onClick={toggleExpand}
            style={{
              marginLeft: '8px',
              background: 'none',
              border: 'none',
              color: 'blue',
              cursor: 'pointer',
              padding: 0,
              fontSize: '1em',
            }}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Read less about the team' : 'Read more about the team'}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </p>
    </section>
  );
}

export default TeamInfo;
