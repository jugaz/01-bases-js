/** ################################## Axios ##################################
 * TODO: https://www.npmjs.com/package/axios

*/

import axios from 'axios'


const apiKey = 'iGpoIEVcad8eiB59rjYHTMU8uk5Z5FWZ'
//https://api.giphy.com/v1/gifs/random?api_key=${apiKey}

const gitphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

// gitphyApi.get('/random')
//     .then( resp => {
//         const { data }  = resp.data
//         const  { url } = data.images.original
        
//         console.log( url )

//         const img = document.createElement('img')
//         img.src= url
//         document.body.append(img)   


//     } )
//     .catch()

export default gitphyApi