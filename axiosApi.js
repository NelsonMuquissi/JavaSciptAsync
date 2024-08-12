const axios = require('axios')


axios.get('https://angolaapi.onrender.com/api/v1/geography/provinces').then((reponse) => {
    console.log({reponse})
}).catch((error) => {
    console.log(error)
})

const api = async () => {
    try{
        // const data = await axios.get('url')

        const {nome} = await axios.get('https://angolaapi.onrender.com/api/v1/geography/provinces')

        console.log({nome})
        
    }catch(error){
        console.log(error)
    }
}

api()