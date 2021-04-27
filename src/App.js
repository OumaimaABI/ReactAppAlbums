import AlbumList from './AlbumList'
import {useState, useEffect} from 'react'
import './App.css'
import Album from './Album'
import {getAlbums, getAlbumInfo} from './api'

function App() {

  const [albums, setAlbums] = useState([])
  const [currentAlbum, setCurrentAlbum] = useState(null)
  const [keyword, setKeyword] = useState('Justin beiber')
  useEffect(() => {
    if(keyword !== "")
    getAlbums(keyword).then((data) => setAlbums(data));
  }, [keyword])

  return (
    <div className="App">
      
      <div className="nav">
        <input value={keyword} onChange={e => setKeyword(e.target.value)} type='text'/>
        <AlbumList current={currentAlbum} albums={albums} onAlbumClicked={(album) => {setCurrentAlbum(album)}}/>
      </div>
      <div className="content">
        {currentAlbum ? <Album data={currentAlbum} onClose={() => setCurrentAlbum(null)} /> : "Please select an album on the left."}
      </div>
    </div>
  );
}

export default App;
