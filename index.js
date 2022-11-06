import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const activeUser = []

const tweets =[]


app.post("/sign-up", (req, res) =>{

const {username, avatar} = req.body

if(!username || !avatar){
    return res.sendStatus(400).send("Todos os campos são obrigatórios!")
}

const user = {
    username: username,
    avatar: avatar,
}

activeUser.push(user)

return res.sendStatus(201).send("OK")
})

app.post("/tweets", (req, res) =>{

    const {username, tweet} = req.body
    const avatar = activeUser.find(user => user.username === username).avatar

    if(!username || !tweet){
        return res.sendStatus(400).send("Todos os campos são obrigatórios!")
    }
    
    tweets.unshift({username, tweet, avatar})
    
    return res.sendStatus(201).send("OK")
    
    })

app.get("/tweets", (req, res) => {

    const lastTenTweets = tweets.slice(0,10)

    res.send(lastTenTweets)
})




app.listen(5000)
