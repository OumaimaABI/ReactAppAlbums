import './AlbumList.css'

function AlbumList({albums, current, onAlbumClicked}) {
  const isCurrent = (album) => {
    if(!current || !album) return false;
    return current.name === album.name && current.artist === album.artist
  }
  const content = albums.map((album) =>  <li className={ isCurrent(album) ? 'active' : ''} onClick={() => onAlbumClicked(album)} key={album.name}>{album.name}</li>)

  return (
    <>
    <h3>Albums</h3>
   <ul className="albums">
       {content}
       
    </ul>
    </>
  );
}

export default AlbumList;
