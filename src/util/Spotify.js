const clientId = '36a904242d2649709a1dbca5ad68a39d';
const redirectURI = "http://localhost:3000/";
let accessToken = '';

class Spotify{
  getaccessToken(){
    if(accessToken){
      return accessToken;
    }
    else if("access_token" in window.location.href){
       let accessTokenArray = window.location.href.match(/access_token=([^&]*)/);
       for(let i=0;i<accessTokenArray.length;i++){
         accessToken+=accessTokenArray[i];
       }
       let expirationTimeArray = window.location.href.match(/expires_in=([^&]*)/);
       for(let i=0;i<expirationTimeArray.length;i++){
         expirationTime+=expirationTimeArray[i];
       }
       if(expirationTime === Integer.toString(window.setTimeout)){
        window.setTimeout(() => accessToken = '', expirationTime * 1000);
        window.history.pushState('Access Token', null, '/');
      }
    }
    else{
      window.location = "https://accounts.spotify.com/authorize?client_id=" + clientId + "&response_type=token&scope=playlist-modify-public&redirect_uri=" + redirectURI;
    }
  }
  search(term){
    return fetch("https://api.spotify.com/v1/search?type=track&q=" + term, {
  headers: {Authorization: `Bearer ${accessToken}`
  }
}).then(response => {
  return response.json();
}).then(jsonResponse => {
  if (jsonResponse.tracks) {
    return jsonResponse.tracks.map(tracks => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  }
  else{
    return [];
  }
});
};


  savePlaylist(name, uri){
    if((tracks.name && tracks.uri)){
      return;
    }
    else{
      const accessToken = accessToken;
      let header: {
       authorization: accessToken
       }
       let body: {
         grant_type: refresh_token,
         refresh_token: "https://accounts.spotify.com/api/token"
       }
      let user_id = ''
      user_id = return fetch ("https://api.spotify.com/v1/me", {
    headers: {Authorization: `Bearer ${accessToken}`
    })
      let playlistID = return fetch ("https://api.spotify.com/v1/users/{user_id}/playlists", {
    headers: {Authorization: `Bearer ${accessToken}`
    },
    method: 'POST',
    body: {
    grant_type: refresh_token,
    refresh_token: "https://accounts.spotify.com/api/token"
    })
      let playlist = return fetch ("https://api.spotify.com/v1/users/v1/users/{user_id}/playlists/{playlist_id}/tracks", {
    headers: {Authorization: `Bearer ${accessToken}`
    },
    method: 'POST',
    body: {
    grant_type: refresh_token,
    refresh_token: "https://accounts.spotify.com/api/token"
    }))
    }
  }
}
export default Spotify;
