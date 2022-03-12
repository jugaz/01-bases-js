/** ################################## FETCH ##################################
 * TODO: https://developers.giphy.com/dashboard/

*/


const apiKey = 'iGpoIEVcad8eiB59rjYHTMU8uk5Z5FWZ'
//https://api.giphy.com/v1/gifs/random?api_key=iGpoIEVcad8eiB59rjYHTMU8uk5Z5FWZ


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src= url
        document.body.append(img) 

    })

      