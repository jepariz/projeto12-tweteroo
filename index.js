import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const activeUser = []

const tweets =[]


app.post("/sign-up", (req, res) =>{

const {username, avatar} = req.body

const user = {
    username: username,
    avatar: avatar,
}

activeUser.push(user)

res.send("OK")

console.log(activeUser)

})

app.post("/tweets", (req, res) =>{


    const {username, tweet} = req.body
    const avatar = activeUser.find(user => user.username === username).avatar
  
    
    tweets.unshift({username, tweet, avatar})
    
    res.send("OK")
    
    console.log(tweets)
    
    })

app.get("/tweets", (req, res) => {

    const lastTenTweets = tweets.slice(0,9)

    res.send(lastTenTweets)
})




app.listen(5000)
