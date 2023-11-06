import { AlbumImage } from "./albumComponents/AlbumImage";
import { AlbumName } from './albumComponents/AlbumName';
import { ArtistsName } from './albumComponents/ArtistsName';
import dotsIcon from "../assets/icons/dots.svg";
import heartIcon from "../assets/icons/heart.svg";
import playIcon from "../assets/icons/play.svg";

export const Album = ({ name, artist, images }) => {
  const screenWidth = window.innerWidth;

  const chooseImageSize = (images, screenWidth) => {
    if (screenWidth >= 1024) {
      return images[0].url;
    } else if (screenWidth >= 768) {
      return images[1].url;
    }
  };
  const imageUrl = chooseImageSize(images, screenWidth);
  const artistsArray = Array.isArray(artist) ? artist : [artist];

  return (
    <div className="albumCard">
      <AlbumImage imageUrl={imageUrl} altText={name} />
      <div className="icons">
        <span className="icon">
          <img src={heartIcon} alt="heart icon" />
        </span>
        <span className="icon">
          <img src={playIcon} alt="play icon" />
        </span>
        <span className="icon">
          <img src={dotsIcon} alt="ellipsis icon" />
        </span>
      </div>
      <AlbumName name={name} />
      <ArtistsName artist={artistsArray} />
    </div>
  );
};

Album.defaultProps = {
  name: 'Album name is missing.',
  artist: 'Artist name is missing.',
};