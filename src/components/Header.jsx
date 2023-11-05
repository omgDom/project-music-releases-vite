import './Header.css'

export const Header = () => {
    let headerBackground = {
        imgUrl: "./abstract-visual.jpg",
        imgAlt: "An abstract image"
    }
  const header = "Music Library";

  return (
    <header>
        <div className='headerContainer'>
            <h1>{header}</h1>
            <img src={headerBackground.imgUrl} alt={headerBackground.imgAlt}/>
        </div>
    </header>
  );
};
