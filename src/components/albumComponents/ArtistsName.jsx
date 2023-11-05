export const ArtistsName = ({ artist }) => {
  function formatArtists(artists) {
    if (artists.length === 0) {
      return '';
    } else if (artists.length === 1) {
      return artists[0];
    } else if (artists.length === 2) {
      return `${artists[0]} & ${artists[1]}`;
    } else {
      const lastTwoArtists = artists.slice(-2).join(' & ');
      const otherArtists = artists.slice(0, -2).join(', ');
      return `${otherArtists}, ${lastTwoArtists}`;
    }
  }

  const formattedArtists = formatArtists(artist);

  return <p>{formattedArtists}</p>;
};

ArtistsName.defaultProps = {
  artist: [],
};