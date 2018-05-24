const clientId = '36a904242d2649709a1dbca5ad68a39d';
const redirectURI = "https://jamming.surge.sh";
let accessToken = '';

class Spotify{
  getaccessToken(){
    if(accessToken){
      return accessToken;
    }
    else if("access_token" in window.location){
       let accessToken = window.location.href.match(/access_token=([^&]*)/);
       let expirationTime = window.location.href.match(/expires_in=([^&]*)/);
       if(expirationTime === window.setTimeout){
        window.setTimeout(() => accessToken = '', expirationTime * 1000);
        window.history.pushState('Access Token', null, '/');
      }
    }
    else{
      window.location = "https://accounts.spotify.com/authorize?client_id=" + clientId + "&response_type=token&scope=playlist-modify-public&redirect_uri=" + redirectURI;
    }
  }
  search(term){
    fetch("https://api.spotify.com/v1/search?type=track&q=" + term, {
  headers: {Authorization: `Bearer ${accessToken}`}
}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message)).then(jsonResponse =>{
    let tracks = jsonResponse.map();
    if (tracks.size===0){
      return []
    }
    else{
      let trackArray = [];
      for(let i = 0;i<tracks.size;i++){
        trackArray.add(tracks[i].id, tracks[i].name, tracks[i].artist[0].name, tracks[i].album.name, tracks[i].uri)
      }
      return trackArray
    }
  });
}
  savePlaylist(name, uri){
    if(!(name && uri)){
      return;
    }
    else{
      const accessToken = accessToken;
      let header: {
       authorization: accessToken
       }
      let user_id = ''
      user_id = ("https://api.spotify.com/v1/me", {header: header})
      Spotify.POST("https://api.spotify.com/v1/users/{user_id}/playlists", {header: header, method: '', body: ''})
      let playlistID = Spotify.POST("https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks", {header: header, method: '', body: ''})
    }
  }
}
export default Spotify;
