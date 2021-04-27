
import './Album.css'
import {useEffect, useState} from 'react'
import {getAlbumInfo} from './api'

function Album({data, onClose}) {
    const {artist, name, picture} = data
    const [album, setAlbum] = useState({tracks: []})

    const pad = (number) => {
        const s = "000000000" + number;
        return s.substr(s.length-2);
    }

    useEffect(() => {
        getAlbumInfo(artist, name).then((data) => {
            console.log(data)
            setAlbum(data)})
    }, [artist, name])

  return (
   <div className="album">
       <h3>{name}</h3>
       <div className="album-info">
           <div className="picture">
               <img src={picture} alt="Album" />
           </div>
           <div className="info">By {artist} - {album.year} - {album.tracks.length} songs</div>
           <button onClick={() => onClose()}> Close </button>
       </div>
       <div class="songs">
           <table>
               <tr>
                   <th>#</th>
                   <th>Song</th>
                   <th>Duration</th>
               </tr>
               {album.tracks.map((song, i) => {
                   return (<tr key={i}>
                       <td>{i + 1}</td>
                       <td>{song.name}</td>
                       <td>{pad(parseInt(song.duration/60))}:{pad(parseInt(song.duration%60))}</td>
                   </tr>)
               })}
               { album.tracks.length === 0 ? <tr><td colSpan="3" style={{textAlign: 'center'}}>
                   Unable to find tracks
                   </td></tr> : null}
           </table>
       </div>
   </div>
  );
}

export default Album;
