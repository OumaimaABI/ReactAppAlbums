const get = (params) => {
    // API key 	484f91751d38baf968dc0aefbff5acd4
    const format= 'json'
    const api_key= '484f91751d38baf968dc0aefbff5acd4'
    var url = new URL('http://ws.audioscrobbler.com/2.0')
    url.search = new URLSearchParams({api_key, limit: 10, format, ...params}).toString();
    return fetch(url).then(res => res.json());
}

export const getAlbums = (keyword) => {
    const havingImage = (element) => {
        return element.image[3]['#text'] !== ""
    };

    const transform = (element) => {
      return { artist: element.artist, name: element.name, picture: element.image[3]['#text']};
    };

    return get({method: 'album.search', album: keyword})
            .then(result => result.results.albummatches.album.filter(havingImage).map(transform))
}


export const getAlbumInfo = (artist, album) => {
    return get({method: 'album.getInfo', artist, album}).then(({album}) => {return {...album, tracks: album.tracks.track}})
}

const Api = {
    getAlbums,
    getAlbumInfo
};

export default Api;