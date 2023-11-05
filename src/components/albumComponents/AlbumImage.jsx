export const AlbumImage = ({ imageUrl, altText }) => (
  <div className="albumImage">
    <img src={imageUrl} alt={altText} />
  </div>
);