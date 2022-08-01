const APIController = (function(){
    const clientId = '';
    const clientSecret  = '';

    // I want a method to get album and get track and get top trakcs 
    const getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + bota(clientId + ':'+ clientSecret)
            },
            body : 'grant-type-client-credentials'
        });
        const data = await result.json();
        return data.access_token;
    }

    const getAlbum = async (token) => {
        const reuslt = await fetch ('https://api.spotify.com/v1/albums/{id}', {
        method : 'GET',
        headers : {
            'Authorization' : 'Bearer' + token
        },

         });
         const data = await result.json();
         return data.albums.items;
    }

    const getTrack = async (token) => {
        const result =  await fetch ('https://api.spotify.com/v1/tracks/{id}', {
            
        method : 'GET',
            headers :{'Authorization' : 'Bearer' + token}
            });

            const data = await result.json();
            return data;
        }
    
    const getTopTracks = async (token) => {
        const result = await fetch('https://api.spotify.com/v1/artists/{id}/top-tracks',{
            method : 'GET',
            headers : {'Authorization' : 'Bearer' + token }

        });
        const data = await result.json;
        return data.albums.items;
    }
    
})();