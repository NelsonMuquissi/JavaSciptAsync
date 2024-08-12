const axios = require('axios')

function promiseloger(email, password){
    const estado = false
    
    return new Promise((resolve, reject) => {
        if(estado){
            reject(new Error("Erro no Login"));
        }

        console.log("usuario Logado")

        setTimeout(() => {
            resolve({email,password})
        },500)
    })
}

function video(email){
    return new Promise((resolve,reject) => {

        setTimeout(() =>{
            console.log("Videos recebidos")
            resolve(
                {videos: ['video1','video2','video3','video4'], email:email}
            )
        },1000)
    })
}

function Detailvideo(){
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            console.log("Recebendo o detalhe dos videos")
            resolve(
                {titulo: "Titulo do video"}
            )
        },1500)
        
    })
}

promiseloger("NewPromise@gmail.com", "1234")
    .then((user) => video(user.email))
    .then((video) => Detailvideo(video[0]))
    .then((VideosDetalhes) => console.log({VideosDetalhes}))
    .catch((error) => console.log({error}))
    

const fb = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Pegando dados do Facebook")
    }, 1000)
})

const yut = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Pegando dados do youTube")
    },3000)
})

Promise.all([fb,yut]).then((result) => {
    console.log({result})
})

axios.get('url').then((reponse) => {
    console.log({data: reponse.data})
}).catch((error) => {
    console.log(error)
})