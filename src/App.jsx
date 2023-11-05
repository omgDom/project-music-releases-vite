import React from "react";
import { Header } from "./components/Header";
import { Album } from "./components/Album";
import './App.css'
import data from "./data.json";

const App = () => {

  const albums = data.albums.items;
  
  const renderAlbums = () => {
    return albums.map((album) => (
    <Album
      key={album.id}
      images={album.images}
      name={
        <a className="albumInfo" href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {album.name}
          </a>}
      artist={
        <a className="artistInfo" href={album.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
          {album.artists[0].name}
        </a>}
      />
    ));
  };
  
  const renderContent = renderAlbums();

  return (
  <div>
    <Header />
    <section className="albumContainer">{renderContent}</section>
  </div>
  );
};

export default App;