const loginuser = (email, senha, callback) => {
    setTimeout(() => {
        console.log("Usuario Logado")
        callback ({email})
    },1000)
}

// const user = loginuser("CursoNodeJS@gmail.com", "1234", (user) => {
//     console.log({user})
// })

// console.log({Usuario: user})

function otherteste(email,password, sucesso, emerro){
    const estado = false
    if(estado){
       return emerro (new Error("Erro ao logar"))
    }
    setTimeout(()=>{
        console.log("Usuario Logado")
        sucesso ({email})
    }, 1000)   
}

function videos(email, callback){
    setTimeout(() => {
        callback (['Video1','Video2','Video3','Video4'])
    },1000)
}

function getdetailvideo(video, callback){
    setTimeout(() => {
        callback (
            {title: 'Titulo do video',
             nome: 'Nome do Video'}
        )
    }, 1500)
}

const user2 = otherteste("Caderno@gmail.com", "1234", (user) => {
    videos(user.email, (videos) => {
        console.log({videos})
        getdetailvideo(videos[0], (VideosDetalhes) => {
            console.log({VideosDetalhes})
        })
    })
}, (error) => {
    console.log(error)
} )
