import React from 'react';

function Navbar() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={styles.nav}>
      <a href="#team-info" onClick={(e) => handleScroll(e, 'team-info')} style={styles.link}>Team Info</a>
      <a href="#players" onClick={(e) => handleScroll(e, 'players')} style={styles.link}>Players</a>
      <a href="#games" onClick={(e) => handleScroll(e, 'games')} style={styles.link}>Recent Games</a>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#1d428a',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    zIndex: 1000,
  },
  link: {
    color: '#ffc72c',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Navbar;
