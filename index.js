function promiseloger(email, password){
    const estado = true
    
    return new Promise((resolve, reject) => {
        if(estado){
            return reject(new Error("Erro no Login"));
        }

        console.log("usuário Logado com Sucesso...")

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

// promiseloger("NewPromise@gmail.com", "1234")
//     .then((user) => video(user.email))
//     .then((video) => Detailvideo(video[0]))
//     .then((VideosDetalhes) => console.log({VideosDetalhes}))
//     .catch((error) => console.log({error}))
    


const displayuser = async () => {
    try{
        const user = await promiseloger("emelsonmuquissi@gmail.com","1234")
        const videos = await video(user.email)
        const detalhe = await Detailvideo()
        console.log(user)
        console.log(videos)
        console.log(detalhe)
    }catch(error){
        console.log({error})
    }
}

displayuser()